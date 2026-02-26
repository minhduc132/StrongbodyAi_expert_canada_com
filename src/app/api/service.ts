import { fetchCategories, fetchWidgetItems } from "./widget";

export async function fetchAllServices() {
    try {
        const widgetData = await fetchWidgetItems("services");
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
        console.error("Error in fetchAllServices:", error);
        return [];
    }
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
