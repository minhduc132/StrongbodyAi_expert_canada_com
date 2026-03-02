export const API_BASE_URL = "https://aemskbem9q.ap-southeast-1.awsapprunner.com/v1/public";

export const API_CONFIG = {
    HEADERS: {
        "X-Site-Code": "strongbodyus",
        "X-Tenant-Code": "strongbody",
        "language": "en",
        "x-api-key": "wk_live_ec40edad_1eae3370d55b5f9754d19965821d0ecf"
    }
};

export const MAIL_CONFIG = {
    SMTP_USER: "no-reply@strongbody.ai",
    SMTP_PASS: "vuiw noyt csvo dnjb",
    ADMIN_EMAIL: "customercare@strongbody.ai"
};

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
    const url = endpoint.startsWith("http") ? endpoint : `${API_BASE_URL}${endpoint}`;

    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                ...API_CONFIG.HEADERS,
                ...options.headers,
            },
            next: { revalidate: 60, ...options?.next }
        } as any);

        if (!response.ok) {
            console.error(`API Error: ${response.status} ${response.statusText} for ${url}`);
            return null;
        }

        const data = await response.json();
        return data.data || data;
    } catch (error) {
        console.error(`Fetch Error for ${url}:`, error);
        return null;
    }
}
