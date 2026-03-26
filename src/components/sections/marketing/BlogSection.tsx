import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, ScaleIn } from "@/components/animations/Reveal";

// Using the same sample data from the blog page for consistency
/*
const recentPosts = [
    {
        id: 1,
        title: "The Future of Telehealth: AI-Powered Healthcare Access",
        excerpt: "Exploring how artificial intelligence is revolutionizing remote healthcare delivery and making quality medical services accessible globally.",
        author: "Dr. Sarah Chen",
        date: "2024-01-15",
        readTime: "5 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
        slug: "future-of-telehealth-ai-powered-healthcare"
    },
    {
        id: 2,
        title: "Understanding HIPAA Compliance in Digital Health Platforms",
        excerpt: "A comprehensive guide to patient data protection and compliance standards in modern healthcare technology platforms.",
        author: "Legal Team",
        date: "2024-01-10",
        readTime: "7 min read",
        category: "Compliance",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
        slug: "understanding-hipaa-compliance-digital-health"
    },
    {
        id: 3,
        title: "Medical Tourism: Accessing World-Class Care Across Borders",
        excerpt: "How StrongBody AI connects patients with verified international medical professionals for specialized treatments.",
        author: "Healthcare Team",
        date: "2024-01-05",
        readTime: "6 min read",
        category: "Healthcare",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
        slug: "medical-tourism-world-class-care"
    }
];
*/

import { fetchBlogPostsByWidget, fetchBlogsByCategory } from "@/app/api";

interface BlogSectionProps {
    source?: 'widget' | 'category';
    category?: string;
    widgetCode?: string;
}

const BlogSection = async ({
    source = 'widget',
    category = 'blogs',
    widgetCode = 'list-blog'
}: BlogSectionProps) => {
    let posts = [];

    if (source === 'category') {
        posts = await fetchBlogsByCategory(category);
    } else {
        // First try the specific widget code
        posts = await fetchBlogPostsByWidget(widgetCode);

        // Fallback for safety if requested widget is empty
        if (!posts || posts.length === 0) {
            posts = await fetchBlogPostsByWidget("blogs");
        }
        if (!posts || posts.length === 0) {
            posts = await fetchBlogPostsByWidget("blog");
        }
    }

    if (posts && posts.length > 0) {
        posts = posts.slice(0, 3);
    }

    // No posts? Don't show anything to avoid confusion
    if (posts.length === 0) return null;

    return (
        <section className="py-32 bg-white relative overflow-hidden border-t-2" style={{ borderColor: '#CBD5E1' }}>
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-black tracking-[0.2em] text-[11px] uppercase mb-5 block">
                            Latest Insights
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-grey-900 mb-6 tracking-tight">
                            Health & Technology Blog
                        </h2>
                        <p className="text-lg text-grey-500 font-medium leading-relaxed">
                            Stay informed with the latest healthcare innovations, platform updates, and expert insights from StrongBody AI.
                        </p>
                    </div>
                    <Reveal delay={0.2}>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 bg-white text-grey-900 border-2 border-grey-200 px-6 py-3.5 rounded-2xl font-extrabold text-sm uppercase tracking-wider hover:border-primary hover:text-primary transition-all"
                        >
                            View All Articles <ArrowRight size={16} />
                        </Link>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post: any, idx: number) => {


                        return (
                            <ScaleIn key={post.id} delay={idx * 0.1}>
                                <Link
                                    href={`/${post.slug}`}
                                    className="group bg-white rounded-[24px] border border-grey-200 overflow-hidden hover:border-primary/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full"
                                >
                                    <div className="relative h-52 overflow-hidden bg-grey-100">
                                        {post.image ? (
                                            <img
                                                src={post.image}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center opacity-20">
                                                <Calendar className="text-grey-400" size={64} />
                                            </div>
                                        )}

                                    </div>
                                    <div className="p-7 flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                            <span className="text-[10px] font-black text-primary tracking-[0.2em] uppercase">{post.category}</span>
                                        </div>
                                        <h3 className="text-lg font-extrabold text-grey-900 mb-2.5 group-hover:text-primary transition-colors line-clamp-2 leading-tight tracking-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-grey-500 font-medium leading-relaxed mb-6 line-clamp-2 flex-1">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between mt-auto pt-5 border-t border-grey-100">
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-8 h-8 rounded-xl bg-grey-100 flex items-center justify-center border border-grey-200">
                                                    <span className="text-[10px] font-black text-primary">SB</span>
                                                </div>
                                                <span className="text-[11px] font-bold text-grey-400 uppercase tracking-wider">StrongBody AI</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-primary font-extrabold text-sm group-hover:gap-3 transition-all uppercase tracking-wider text-[11px]">
                                                Read <ArrowRight size={13} />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </ScaleIn>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};


export default BlogSection;
