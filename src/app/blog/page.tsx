import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import { fetchAllBlogPosts, fetchBlogsByCategory } from "@/app/api";

import { generateUnifiedMetadata } from "@/utils/seo";

export async function generateMetadata(): Promise<Metadata> {
    return generateUnifiedMetadata(undefined, {
        title: "Health Insights & Updates",
    });
}


export default async function BlogPage() {
    // Initial data for "All" tab: Combined list of all blog posts
    // Initial data: Fetch according to the specific category requested
    const initialPosts = await fetchBlogsByCategory("blogs");

    return (
        <main className="min-h-screen">
            <PageHeader
                title="Health Insights & Updates"
                description="Stay informed with the latest healthcare innovations, platform updates, and expert insights from StrongBody AI."
                breadcrumb="Blog"
            />
            <BlogListClient initialPosts={initialPosts} />

        </main>
    );
}
