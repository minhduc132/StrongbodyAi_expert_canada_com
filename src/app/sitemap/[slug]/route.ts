import { fetchAllBlogPosts, fetchAllServices, fetchSpecializedServices } from "@/app/api";

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
            "",
            "/about",
            "/services",
            "/contact",
            "/faq",
            "/legal",
            "/blog",
            "/why-us",
            "/how-it-works"
        ].map((route) => ({
            url: `${baseUrl}${route}`,
            lastModified: lastMod,
        }));
    } else if (slug.startsWith("post-sitemap")) {
        const match = slug.match(/post-sitemap-(\d+)\.xml/);
        const page = match ? parseInt(match[1]) : 1;
        const postsPerSitemap = 1000;

        const posts = await fetchAllBlogPosts();
        if (posts && Array.isArray(posts)) {
            const start = (page - 1) * postsPerSitemap;
            const end = start + postsPerSitemap;
            const paginatedPosts = posts.slice(start, end);

            routes = paginatedPosts.map((post: any) => ({
                url: `${baseUrl}/${post.slug}`, // Fixed: removed /blog/
                lastModified: post.date || lastMod,
                image: post.image,
            }));
        }
    } else if (slug === "service-sitemap.xml") {
        const services = await fetchAllServices();
        const specialized = await fetchSpecializedServices();

        const allServices = [...(services || []), ...(specialized || [])];
        const uniqueServices = new Map();

        allServices.forEach((s: any) => {
            const url = `${baseUrl}/${s.slug}`;
            if (!uniqueServices.has(url)) {
                uniqueServices.set(url, {
                    url,
                    lastModified: lastMod,
                    image: s.image,
                });
            }
        });
        routes = Array.from(uniqueServices.values());

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
