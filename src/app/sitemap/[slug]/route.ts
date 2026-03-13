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
            "/",
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
        const page = match ? parseInt(match[1]) : 1;
        const postsPerSitemap = 100; // API max safe limit per chunk

        // Fetch exactly up to 100 posts specifically for this XML file's index
        const posts = await fetchAllBlogPosts(page, postsPerSitemap);
        
        if (posts && Array.isArray(posts)) {
            // No need to slice locally, the API already paginated it
            routes = posts.map((post: any) => ({
                url: `${baseUrl}/${post.slug}/`,
                lastModified: post.date || lastMod,
                image: post.image,
            }));
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
