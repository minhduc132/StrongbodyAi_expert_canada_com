export const STRONGBODY_API_BASE_URL = process.env.STRONGBODY_API_BASE_URL;
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_CONFIG = {
    HEADERS: {
        "X-Site-Code": process.env.API_SITE_CODE,
        "X-Tenant-Code": process.env.API_TENANT_CODE,
        "language": process.env.API_LANGUAGE,
        "x-api-key": process.env.API_KEY
    }
};

export const MAIL_CONFIG = {
    SMTP_USER: process.env.SMTP_USER,
    SMTP_PASS: process.env.SMTP_PASS,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL
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

        return await response.json();
    } catch (error) {
        console.error(`Fetch Error for ${url}:`, error);
        return null;
    }
}
