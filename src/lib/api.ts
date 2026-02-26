const API_BASE_URL = "https://aemskbem9q.ap-southeast-1.awsapprunner.com/v1/public";

const defaultHeaders = {
    "X-Site-Code": "strongbodyus",
    "X-Tenant-Code": "strongbody",
    "language": "en",
    "x-api-key": "wk_live_ec40edad_1eae3370d55b5f9754d19965821d0ecf"
};

export async function fetchCategories(parentSlug?: string) {
    const url = parentSlug ? `${API_BASE_URL}/categories/${parentSlug}` : `${API_BASE_URL}/categories`;
    try {
        const response = await fetch(url, { headers: defaultHeaders, next: { revalidate: 3600 } });
        if (!response.ok) throw new Error(`Failed to fetch categories: ${response.statusText}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return null;
    }
}

export async function fetchWidgetItems(code: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/widgets/${code}`, { headers: defaultHeaders, next: { revalidate: 3600 } });
        if (!response.ok) throw new Error(`Failed to fetch widget items for ${code}: ${response.statusText}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(`Error fetching widget ${code}:`, error);
        return null; // Return null instead of crashing
    }
}

export async function fetchPostDetail(slug: string) {
    try {
        const response = await fetch(`${API_BASE_URL}/posts/${slug}?language=en`, { headers: defaultHeaders, next: { revalidate: 3600 } });
        if (!response.ok) throw new Error(`Failed to fetch post detail for ${slug}: ${response.statusText}`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
}

export async function fetchAllBlogs() {
    try {
        const categoriesData = await fetchCategories("blog");
        if (!categoriesData || !categoriesData.children) return [];

        const categories = categoriesData.children;
        const allPosts: any[] = [];

        for (const cat of categories) {
            const widgetData = await fetchWidgetItems(cat.slug);
            if (widgetData && widgetData.items) {
                const items = widgetData.items.map((item: any) => ({
                    id: item.id || Math.random().toString(),
                    title: item.title,
                    excerpt: item.excerpt || "No description provided",
                    author: "StrongBody AI",
                    date: item.published_at || new Date().toISOString(),
                    readTime: "5 min read",
                    category: cat.name,
                    image: item.featured_image_url || item.image || item.thumbnail || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
                    slug: item.slug
                }));
                allPosts.push(...items);
            }
        }

        // Return unique by slug
        return Array.from(new Map(allPosts.map(item => [item.slug, item])).values());
    } catch (error) {
        console.error("Error fetching all blogs:", error);
        return [];
    }
}

export async function fetchAllServices() {
    try {
        // Assume `services` might be a category or a widget root
        const categoriesData = await fetchCategories("services");
        if (!categoriesData || !categoriesData.children) return [];

        const categories = categoriesData.children;
        const allServices: any[] = [];

        for (const cat of categories) {
            const widgetData = await fetchWidgetItems(cat.slug);
            if (widgetData && widgetData.items) {
                const items = widgetData.items.map((item: any) => ({
                    id: item.id || Math.random().toString(),
                    title: item.title,
                    desc: item.excerpt || "No description provided",
                    image: item.featured_image_url || item.image || item.thumbnail || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
                    slug: item.slug,
                    tag: cat.name, // using category name as tag
                    icon: null // handled in UI
                }));
                allServices.push(...items);
            }
        }

        return Array.from(new Map(allServices.map(item => [item.slug, item])).values());
    } catch (error) {
        console.error("Error fetching all services:", error);
        return [];
    }
}
