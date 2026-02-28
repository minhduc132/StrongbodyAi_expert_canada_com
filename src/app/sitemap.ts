import { MetadataRoute } from "next";
import { fetchAllBlogPosts, fetchAllServices } from "@/app/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://strongbody.ai";

    // 1. Static Routes
    const staticRoutes = [
        "",
        "/about",
        "/services",
        "/for-partners",
        "/contact",
        "/faq",
        "/legal",
        "/partnership-models",
        "/use-cases",
        "/blog",
        "/how-it-works",
        "/multime",
        "/for-clients",
        "/why-us",
        "/ecosystem",
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // 2. Dynamic Blog Posts Routes (/blog/[slug])
    let blogPostsRoutes: MetadataRoute.Sitemap = [];
    try {
        const posts = await fetchAllBlogPosts();
        blogPostsRoutes = posts.map((post: any) => ({
            url: `${baseUrl}/blog/${post.slug}`,
            lastModified: post.date || new Date().toISOString(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        }));
    } catch (error) {
        console.error("Error fetching blog posts for sitemap:", error);
    }

    // 3. Dynamic Services Routes (/services/[slug])
    let servicesRoutes: MetadataRoute.Sitemap = [];
    try {
        const services = await fetchAllServices();
        servicesRoutes = services.map((service: any) => ({
            url: `${baseUrl}/services/${service.slug}`,
            lastModified: new Date().toISOString(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        }));
    } catch (error) {
        console.error("Error fetching services for sitemap:", error);
    }

    return [...staticRoutes, ...blogPostsRoutes, ...servicesRoutes];
}
