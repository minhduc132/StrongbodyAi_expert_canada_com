import { fetchAllBlogPosts } from "@/app/api";

export async function GET(request: Request) {
  const host = request.headers.get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;
  const lastMod = new Date().toISOString();

  const posts = await fetchAllBlogPosts();
  const postsPerSitemap = 1000;
  const postSitemapCount = Math.max(1, Math.ceil((posts?.length || 0) / postsPerSitemap));

  const sitemaps = [
    { loc: `${baseUrl}/sitemap/page-sitemap.xml`, lastmod: lastMod },
    ...Array.from({ length: postSitemapCount }, (_, i) => ({
      loc: `${baseUrl}/sitemap/post-sitemap-${i + 1}.xml`,
      lastmod: lastMod
    })),
  ];




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
