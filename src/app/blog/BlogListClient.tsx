"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Loader2, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import Container from "@/components/layout/Container";

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
    const INITIAL_SHOW = 6;      // Phase 1: show 6 posts
    const ITEMS_PER_PAGE = 12;   // Phase 2: 12 posts per page

    const [expanded, setExpanded] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);

    const totalPages = Math.ceil(initialPosts.length / ITEMS_PER_PAGE);
    const hasMoreThanInitial = initialPosts.length > INITIAL_SHOW;

    // === CORE LOGIC: select displayed posts ===
    const displayedPosts = React.useMemo(() => {
        if (!expanded) {
            // Phase 1: only show first 6
            return initialPosts.slice(0, INITIAL_SHOW);
        }
        // Phase 2: paginated
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        return initialPosts.slice(start, start + ITEMS_PER_PAGE);
    }, [initialPosts, expanded, currentPage]);

    // "Load More" button → switch to Phase 2
    const handleLoadMore = () => {
        setLoading(true);
        setTimeout(() => {
            setExpanded(true);
            setCurrentPage(1);
            setLoading(false);
        }, 600);
    };

    // Page change
    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return;
        window.scrollTo({ top: 400, behavior: 'smooth' });
        setCurrentPage(page);
    };

    // Generate page numbers with "..." ellipsis
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];
        const delta = 1;
        for (let i = 1; i <= totalPages; i++) {
            if (
                i === 1 ||
                i === totalPages ||
                (i >= currentPage - delta && i <= currentPage + delta)
            ) {
                pages.push(i);
            } else if (
                i === currentPage - delta - 1 ||
                i === currentPage + delta + 1
            ) {
                pages.push('...');
            }
        }
        return pages;
    };

    // ---- Render a single blog card ----
    const renderBlogCard = (post: BlogPost) => (
        <Link
            key={post.id}
            href={`/${post.slug}`}
            className="group bg-white rounded-2xl border-2 border-grey-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
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
                        <Calendar size={12} className="text-primary" />
                        {(() => {
                            try {
                                if (!post.date) return "—";
                                const d = new Date(post.date);
                                if (isNaN(d.getTime())) return "—";
                                return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                            } catch (e) {
                                return "—";
                            }
                        })()}
                    </div>
                    <div className="flex items-center gap-1">
                        <Clock size={12} className="text-primary" />
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
    );

    return (
        <section className="py-24 bg-white min-h-[600px]">
            <Container>
                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {displayedPosts.length > 0 ? (
                        displayedPosts.map((post: BlogPost) => renderBlogCard(post))
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

                {/* Phase 1: "Load More" button */}
                {!expanded && hasMoreThanInitial && (
                    <div className="flex justify-center mt-12">
                        <button
                            onClick={handleLoadMore}
                            disabled={loading}
                            className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
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

                {/* Phase 2: Full Pagination */}
                {expanded && totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                        {/* First */}
                        <button
                            onClick={() => handlePageChange(1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-grey-200 text-grey-400 hover:bg-grey-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronsLeft size={20} />
                        </button>
                        {/* Previous */}
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-grey-200 text-grey-400 hover:bg-grey-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        {/* Page Numbers */}
                        <div className="flex items-center gap-2 mx-2">
                            {getPageNumbers().map((page, index) => (
                                page === '...' ? (
                                    <span key={`dots-${index}`} className="text-grey-400 px-2">...</span>
                                ) : (
                                    <button
                                        key={`page-${page}`}
                                        onClick={() => handlePageChange(Number(page))}
                                        className={`w-10 h-10 rounded-lg font-bold transition-all ${currentPage === page
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'text-grey-600 hover:bg-grey-50 border border-grey-200'
                                            }`}
                                    >
                                        {page}
                                    </button>
                                )
                            ))}
                        </div>

                        {/* Next */}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-grey-200 text-grey-400 hover:bg-grey-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronRight size={20} />
                        </button>
                        {/* Last */}
                        <button
                            onClick={() => handlePageChange(totalPages)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-grey-200 text-grey-400 hover:bg-grey-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        >
                            <ChevronsRight size={20} />
                        </button>
                    </div>
                )}
            </Container>
        </section>
    );
}
