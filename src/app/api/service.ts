import { fetchCategories, fetchWidgetItems } from "./widget";

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

export async function fetchServicesByCategory(category: string = "services") {
    try {
        const { fetchPostsByCategory } = await import("./widget");
        const posts = await fetchPostsByCategory(category);
        if (!posts || !Array.isArray(posts)) return [];

        return posts.map((item: any) => ({
            id: item.id || Math.random().toString(),
            title: item.title,
            desc: item.excerpt || "No description provided",
            image: item.featured_image_url || item.image || item.thumbnail,
            slug: item.slug,
            tag: "Service",
            icon: null
        }));
    } catch (error) {
        console.error(`Error in fetchServicesByCategory for ${category}:`, error);
        return [];
    }
}

export async function fetchAllServices() {
    return fetchServicesFromWidget("services");
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
