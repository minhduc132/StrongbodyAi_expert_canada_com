import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import { fetchAllBlogPosts } from "@/app/api";

export const metadata: Metadata = {
    title: "Blog | StrongBody AI Health Insights",
    description: "Stay updated with the latest health insights, medical innovations, and platform updates from StrongBody AI.",
};

export default async function BlogPage() {
    // Initial data for "All" tab: Combined list of all blog posts
    const initialPosts = await fetchAllBlogPosts();

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
