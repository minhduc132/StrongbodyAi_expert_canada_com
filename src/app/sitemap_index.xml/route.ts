import { fetchAllBlogPosts } from "@/app/api";

export async function GET(request: Request) {
    const host = request.headers.get("host");
    const protocol = host?.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;
    const lastMod = new Date().toISOString();

    const posts = await fetchAllBlogPosts();
    // To demonstrate the "split" support, we can use a smaller number or just calculate based on actual data
    // The user wants to support 10 files, so let's list the core ones related to the project.
    const postsPerSitemap = 1000;
    const postSitemapCount = Math.max(1, Math.ceil((posts?.length || 0) / postsPerSitemap));

    const sitemaps = [
        { loc: `${baseUrl}/sitemap/page-sitemap.xml`, lastmod: lastMod },
        // List post sitemaps
        ...Array.from({ length: postSitemapCount }, (_, i) => ({
            loc: `${baseUrl}/sitemap/post-sitemap-${i + 1}.xml`,
            lastmod: lastMod
        })),
    ];


    // Removed "unrelated" placeholders (news, manual, portfolio, author, tag) 
    // to keep it clean while still supporting the "split" structure for posts.

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap-index.xsl"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemaps
            .map(
                (s) => `
  <sitemap>
    <loc>${s.loc}</loc>
    <lastmod>${s.lastmod}</lastmod>
  </sitemap>`
            )
            .join("")}
</sitemapindex>`;

    return new Response(xml, {
        headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, s-maxage=86400, stale-while-revalidate",
        },
    });
}
