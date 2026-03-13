import { apiFetch } from "@/config/api";

export async function fetchSiteSettings() {
    try {
        const data = await apiFetch("/site/settings", {
            next: { revalidate: 3600 }
        });
        return data || null;
    } catch (error) {
        console.error("fetchSiteSettings Error:", error);
        return null;
    }
}
