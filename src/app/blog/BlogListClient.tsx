"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
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
    currentPage: number;
    totalPages: number;
}

const decodeHtml = (html: string) => {
    if (!html) return "";
    const entities: { [key: string]: string } = {
        "&#8220;": "“",
        "&#8221;": "”",
        "&#8216;": "‘",
        "&#8217;": "’",
        "&quot;": '"',
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&#39;": "'",
        "&hellip;": "..."
    };
    return html.replace(/&#\d+;|&[a-z]+;/g, (match) => entities[match] || match);
};

export default function BlogListClient({ initialPosts, currentPage, totalPages }: BlogListClientProps) {
    // Generate page numbers for SEO-friendly links
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
        return Array.from(new Set(pages));
    };

    const renderBlogCard = (post: BlogPost) => (
        <Link
            key={post.id}
            href={`/${post.slug}`}
            className="group bg-white rounded-2xl border-2 border-grey-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
        >
            <div className="relative aspect-video w-full overflow-hidden">
                {post.image ? (
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                ) : (
                    <img
                        src="/blogDefault.png?v=2"
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                )}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    {post.category}
                </div>
                <div className="absolute inset-0 bg-grey-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs font-bold text-primary tracking-wider uppercase">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold text-grey-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {decodeHtml(post.title)}
                </h3>
                <p className="text-sm text-grey-500 font-medium leading-relaxed mb-4 line-clamp-2 flex-1">
                    {post.excerpt}
                </p>
                <div className="flex items-center justify-end mt-auto pt-6 border-t border-grey-100">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all">
                        Læs mere <ArrowRight size={14} />
                    </div>
                </div>
            </div>
        </Link>
    );

    return (
        <section className="py-24 bg-white min-h-[600px]">
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {initialPosts.length > 0 ? (
                        initialPosts.map((post: BlogPost) => renderBlogCard(post))
                    ) : (
                        <div className="col-span-full text-center py-12">
                            <h3 className="text-xl font-bold text-grey-900 mb-2">No articles found</h3>
                            <p className="text-grey-500 font-medium">There are currently no articles in this category.</p>
                        </div>
                    )}
                </div>

                {totalPages > 1 && (
                    <div className="flex justify-center items-center gap-2 mt-12">
                        <Link
                            href={`/blog?page=1`}
                            className={`p-2 rounded-lg border border-grey-200 text-grey-400 hover:bg-grey-50 transition-all ${currentPage === 1 ? 'pointer-events-none opacity-30' : ''}`}
                        >
                            <ChevronsLeft size={20} />
                        </Link>
                        <Link
                            href={`/blog?page=${Math.max(1, currentPage - 1)}`}
                            className={`p-2 rounded-lg border border-grey-200 text-grey-400 hover:bg-grey-50 transition-all ${currentPage === 1 ? 'pointer-events-none opacity-30' : ''}`}
                        >
                            <ChevronLeft size={20} />
                        </Link>

                        <div className="flex items-center gap-2 mx-2">
                            {getPageNumbers().map((page, index) => (
                                page === '...' ? (
                                    <span key={`dots-${index}`} className="text-grey-400 px-2">...</span>
                                ) : (
                                    <Link
                                        key={`page-${page}`}
                                        href={`/blog?page=${page}`}
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold transition-all ${currentPage === page
                                            ? 'bg-primary text-white shadow-lg'
                                            : 'text-grey-600 hover:bg-grey-50 border border-grey-200'
                                            }`}
                                    >
                                        {page}
                                    </Link>
                                )
                            ))}
                        </div>

                        <Link
                            href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
                            className={`p-2 rounded-lg border border-grey-200 text-grey-400 hover:bg-grey-50 transition-all ${currentPage === totalPages ? 'pointer-events-none opacity-30' : ''}`}
                        >
                            <ChevronRight size={20} />
                        </Link>
                        <Link
                            href={`/blog?page=${totalPages}`}
                            className={`p-2 rounded-lg border border-grey-200 text-grey-400 hover:bg-grey-50 transition-all ${currentPage === totalPages ? 'pointer-events-none opacity-30' : ''}`}
                        >
                            <ChevronsRight size={20} />
                        </Link>
                    </div>
                )}
            </Container>
        </section>
    );
}
