import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";
import BlogListClient from "./BlogListClient";
import { fetchBlogsByCategory } from "@/app/api";

export const metadata: Metadata = {
    title: "Health Insights & Updates",
};

export default async function BlogPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedParams = await searchParams;
    const page = typeof resolvedParams.page === 'string' ? parseInt(resolvedParams.page) : 1;
    const limit = 20;

    // Fetch the specific page from the API for better performance and SEO
    const { posts, meta } = await fetchBlogsByCategory("blogs", page, limit);

    return (
        <main className="min-h-screen">
            <PageHeader
                title="Health Insights & Updates"
                description="Stay informed with the latest healthcare innovations, platform updates, and expert insights from StrongBody AI."
                breadcrumb="Blog"
            />
            <BlogListClient 
                initialPosts={posts} 
                currentPage={page}
                totalPages={meta?.total_pages || 1}
            />
        </main>
    );
}
