import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import { fetchAllBlogPosts, fetchBlogsByCategory } from "@/app/api";

export const metadata: Metadata = {
    title: "Health Insights & Updates",
};


export default async function BlogPage() {
    // Fetch up to 1000 posts initially to enable fast client-side 2-phase pagination
    const initialPosts = await fetchBlogsByCategory("blogs", 1, 1000);

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
