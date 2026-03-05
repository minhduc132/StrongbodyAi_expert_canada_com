import { fetchCategories, fetchWidgetItems, fetchPostsByCategory } from "./widget";

export async function fetchServicesFromWidget(code: string = "services") {
    try {
        const widgetData = await fetchWidgetItems(code);
        if (!widgetData || !widgetData.items) return [];

        const allServices = widgetData.items.map((item: any) => ({
            id: item.id || Math.random().toString(),
            title: item.title,
            desc: item.excerpt || "No description provided",
            image: item.featured_image_url || item.image || item.thumbnail,
            slug: item.slug,
            tag: "Service",
            icon: null
        }));

        return allServices;
    } catch (error) {
        console.error(`Error in fetchServicesFromWidget for ${code}:`, error);
        return [];
    }
}

export async function fetchServicesByCategory(category: string = "services", page: number = 1, limit: number = 6) {
    try {
        const posts = await fetchPostsByCategory(category, page, limit);
        if (!posts || !Array.isArray(posts)) return [];

        return posts.map((item: any) => ({
            id: item.id || Math.random().toString(),
            title: item.title,
            desc: item.excerpt || "No description provided",
            image: item.featured_image_url || item.image || item.thumbnail,
            slug: item.slug,
            tag: item.category?.name || "Service",
            icon: null
        }));
    } catch (error) {
        console.error(`Error in fetchServicesByCategory for ${category}:`, error);
        return [];
    }
}

export async function fetchAllServices(page: number = 1, limit: number = 6) {
    return fetchServicesByCategory("services", page, limit);
}

export async function fetchSpecializedServices() {
    try {
        const widgetData = await fetchWidgetItems("list-service");
        if (!widgetData || !widgetData.items) return [];

        return widgetData.items.map((item: any) => ({
            id: item.id || Math.random().toString(),
            title: item.title,
            desc: item.excerpt || "No description provided",
            image: item.featured_image_url || item.image || item.thumbnail,
            slug: item.slug,
            tag: item.category?.name || "Specialized",
            icon: null
        }));
    } catch (error) {
        console.error("Error in fetchSpecializedServices:", error);
        return [];
    }
}
