import { API_BASE_URL } from "@/config/api";

const ADMIN_API = "https://aemskbem9q.ap-southeast-1.awsapprunner.com/v1/admin";
const SITE_ID = "f94d15c6-6815-49a5-812c-c27652b0b95f";
const GLOBAL_AUTH = { email: "info@strongbody.ai", password: "Strongbody@123" };

let globalToken = "";
let tokenExpiration = 0;

export async function getAdminToken() {
    if (globalToken && Date.now() < tokenExpiration) {
        return globalToken;
    }

    try {
        const res = await fetch(`${ADMIN_API}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(GLOBAL_AUTH),
            next: { revalidate: 3600 }
        });

        const data = await res.json();
        if (data?.data?.access_token) {
            globalToken = data.data.access_token;
            tokenExpiration = Date.now() + 3600 * 1000; // 1 hour
            return globalToken;
        }
    } catch (e) {
        console.error("Admin Login Error:", e);
    }
    return null;
}

export async function fetchSiteSettings() {
    try {
        const token = await getAdminToken();
        if (!token) return null;

        const res = await fetch(`${ADMIN_API}/sites/${SITE_ID}/settings/all`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'X-Site-Id': SITE_ID
            },
            next: { revalidate: 3600 } // Cache for 1 hour
        });

        const data = await res.json();
        return data?.data || null;
    } catch (error) {
        console.error("fetchSiteSettings Error:", error);
        return null;
    }
}
