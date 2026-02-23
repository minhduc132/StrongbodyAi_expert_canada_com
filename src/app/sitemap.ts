import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://strongbody.ai";

    const routes = [
        "",
        "/about",
        "/services",
        "/for-partners",
        "/contact",
        "/faq",
        "/legal",
        "/partnership-models",
        "/use-cases",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    return routes;
}
