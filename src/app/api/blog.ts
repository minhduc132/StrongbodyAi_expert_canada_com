import { fetchWidgetItems } from "./widget";

const sanitizeSlug = (slug: string) => {
    if (!slug) return "";
    return slug.toLowerCase().trim().replace(/\s+/g, '');
};

export async function fetchBlogCategories() {
    try {
        const widgetData = await fetchWidgetItems("blogs");
        if (!widgetData || !widgetData.items) return [];

        return widgetData.items.map((item: any) => ({
            id: item.id || Math.random().toString(),
            name: (item.name || item.title || "Untitled").trim(),
            slug: sanitizeSlug(item.slug || item.name || "")
        }));
    } catch (error) {
        console.error("Error in fetchBlogCategories:", error);
        return [];
    }
}

export async function fetchBlogPostsByWidget(code: string) {
    try {
        const sanitizedCode = sanitizeSlug(code);
        const widgetData = await fetchWidgetItems(sanitizedCode);
        if (!widgetData || !widgetData.items) return [];

        return widgetData.items.map((item: any) => {
            const authorObj = item.author;
            const authorName = authorObj && typeof authorObj === 'object'
                ? [authorObj.first_name, authorObj.last_name].filter(Boolean).join(' ')
                : (typeof authorObj === 'string' ? authorObj : "");

            return {
                id: item.id || Math.random().toString(),
                title: item.title || "",
                excerpt: item.excerpt || item.description || "",
                author: authorName,
                date: item.published_at || item.created_at || "",
                readTime: "",
                category: item.category_name || "",
                image: item.featured_image_url || item.image || item.thumbnail || null,
                slug: item.slug
            };
        });
    } catch (error) {
        console.error(`Error in fetchBlogPostsByWidget for ${code}:`, error);
        return [];
    }
}

export async function fetchBlogsByCategory(category: string = "blogs") {
    try {
        const { fetchPostsByCategory } = await import("./widget");
        const posts = await fetchPostsByCategory(category);
        if (!posts || !Array.isArray(posts)) return [];

        return posts.map((item: any) => {
            const authorObj = item.author;
            const authorName = authorObj && typeof authorObj === 'object'
                ? [authorObj.first_name, authorObj.last_name].filter(Boolean).join(' ')
                : (typeof authorObj === 'string' ? authorObj : "");

            return {
                id: item.id || Math.random().toString(),
                title: item.title || "",
                excerpt: item.excerpt || item.description || "",
                author: authorName || "StrongBody AI",
                date: item.published_at || item.created_at || "",
                readTime: "",
                category: item.category_name || item.category?.name || "",
                image: item.featured_image_url || item.image || item.thumbnail || null,
                slug: item.slug
            };
        });
    } catch (error) {
        console.error(`Error in fetchBlogsByCategory for ${category}:`, error);
        return [];
    }
}

export async function fetchAllBlogPosts() {
    return fetchBlogsByCategory("blogs");
}
