import { fetchAllBlogPosts } from "@/app/api";


export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;
    const host = request.headers.get("host");
    const protocol = host?.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    let routes: any[] = [];
    const lastMod = new Date().toISOString();

    if (slug === "page-sitemap.xml") {
        routes = [
            "//",
            "/about/",
            "/how-it-works/",
            "/for-clients/",
            "/for-partners/",
            "/faq/",
            "/contact/",
            "/blog/",
            "/legal/",
            "/multime/"
        ].map((route) => ({
            url: route === "/" ? `${baseUrl}/` : `${baseUrl}${route}`,
            lastModified: lastMod,
        }));
    } else if (slug.startsWith("post-sitemap")) {
        const match = slug.match(/post-sitemap-(\d+)\.xml/);
        const index = match ? parseInt(match[1]) : 1;
        
        // Use resilient batched fetching
        const postsPerSitemapFile = 10000;
        const postsPerBatch = 100;

        try {
            // First, get the actual total for this site to avoid redundant calls
            const { meta } = await fetchAllBlogPosts(1, 1);
            const totalPosts = meta?.total || 0;
            
            // Calculate how many API pages we actually need to fetch for this sitemap file
            const startPost = (index - 1) * postsPerSitemapFile;
            const endPost = Math.min(startPost + postsPerSitemapFile, totalPosts);
            
            if (endPost > startPost) {
                const totalToFetch = endPost - startPost;
                const batchesNeeded = Math.ceil(totalToFetch / postsPerBatch);
                const startPage = Math.floor(startPost / postsPerBatch) + 1;

                const batchPromises = Array.from({ length: batchesNeeded }, (_, i) => 
                    fetchAllBlogPosts(startPage + i, postsPerBatch)
                );
                
                const results = await Promise.allSettled(batchPromises);
                
                const allPosts: any[] = [];
                results.forEach(result => {
                    if (result.status === 'fulfilled' && result.value?.posts) {
                        allPosts.push(...result.value.posts);
                    }
                });

                if (allPosts.length > 0) {
                    routes = allPosts.map((post: any) => ({
                        url: `${baseUrl}/${post.slug}/`,
                        lastModified: post.date || lastMod,
                        image: post.image,
                    }));
                }
            }
        } catch (e) {
            console.error("Error fetching batched posts for canada sitemap chunk:", e);
        }
    } else {
        // Default empty for other placeholders (author, tag, portfolio, news, manual, usecase)
        routes = [];
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${routes
            .map(
                (route) => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${route.lastModified}</lastmod>${route.image ? `
    <image:image>
      <image:loc>${route.image}</image:loc>
    </image:image>` : ""}
  </url>`
            )
            .join("")}
</urlset>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
        },
    });
}
