"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Loader2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { fetchAllBlogPosts } from "@/app/api/blog";

interface BlogPost {
    id: string | number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    image?: string;
    slug: string;
}

interface BlogListClientProps {
    initialPosts: BlogPost[];
}

export default function BlogListClient({ initialPosts }: BlogListClientProps) {
    const [posts, setPosts] = React.useState<BlogPost[]>(initialPosts);
    const [page, setPage] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const [hasMore, setHasMore] = React.useState(initialPosts.length === 6);

    const handleLoadMore = async () => {
        if (loading || !hasMore) return;

        setLoading(true);
        const nextPage = page + 1;

        try {
            const newPosts = await fetchAllBlogPosts(nextPage, 6);
            if (newPosts.length > 0) {
                setPosts(prev => [...prev, ...newPosts]);
                setPage(nextPage);
                if (newPosts.length < 6) {
                    setHasMore(false);
                }
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error("Error loading more posts:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="py-24 bg-white min-h-[600px]">
            <Container>
                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {posts.length > 0 ? (
                        posts.map((post: BlogPost) => (
                            <Link
                                key={post.id}
                                href={`/${post.slug}`}
                                className="group bg-white rounded-2xl border border-grey-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    {post.image ? (
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-grey-50 flex items-center justify-center opacity-20">
                                            <Calendar className="text-grey-400" size={64} />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                                        {post.category}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-grey-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-grey-500 font-medium mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={12} className="text-primary/70" />
                                            {(() => {
                                                try {
                                                    if (!post.date) return "Health Insight";
                                                    const d = new Date(post.date);
                                                    if (isNaN(d.getTime())) return "Health Insight";
                                                    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                                                } catch (e) {
                                                    return "Health Insight";
                                                }
                                            })()}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={12} className="text-primary/70" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-grey-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-grey-600 font-medium leading-relaxed mb-4 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-grey-500">{post.author}</span>
                                        <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                                            Read More <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <div className="inline-flex w-16 h-16 rounded-full bg-grey-100 items-center justify-center text-grey-400 mb-4">
                                <Calendar size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-grey-900 mb-2">No articles found</h3>
                            <p className="text-grey-500 font-medium">There are currently no articles in this category.</p>
                        </div>
                    )}
                </div>

                {/* Load More Button */}
                {hasMore && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            disabled={loading}
                            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {loading ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Loading...
                                </>
                            ) : (
                                <>
                                    Load More Articles
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </div>
                )}
            </Container>
        </section>
    );
}

