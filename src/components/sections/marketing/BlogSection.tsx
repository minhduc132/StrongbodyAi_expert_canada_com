import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal, ScaleIn } from "@/components/animations/Reveal";

// Using the same sample data from the blog page for consistency
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

import { fetchAllBlogs } from "@/lib/api";

const BlogSection = async () => {
    let posts = await fetchAllBlogs();
    if (!posts || posts.length === 0) {
        posts = recentPosts;
    } else {
        posts = posts.slice(0, 3);
    }

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <Reveal>
                            <span className="text-[#1c906c] font-bold tracking-widest text-xs uppercase mb-4 block">
                                Latest Insights
                            </span>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                                Health & Technology Blog
                            </h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Stay updated with the latest healthcare innovations, platform updates, and expert insights from StrongBody AI.
                            </p>
                        </Reveal>
                    </div>
                    <Reveal delay={0.2}>
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 bg-white text-slate-900 border border-slate-200 px-6 py-3 rounded-xl font-bold hover:border-primary hover:text-primary transition-all shadow-sm"
                        >
                            View All Articles <ArrowRight size={18} />
                        </Link>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post: any, idx: number) => (
                        <ScaleIn key={post.id} delay={idx * 0.1}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full"
                            >
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-primary px-3 py-1 rounded-full text-xs font-black shadow-lg">
                                        {post.category}
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} className="text-[#1c906c]" />
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <Clock size={14} className="text-[#1c906c]" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-6 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#1c906c] font-black text-xs">
                                                {post.author.charAt(0)}
                                            </div>
                                            <span className="text-xs font-bold text-slate-700">{post.author}</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-slate-400">
                                            <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScaleIn>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default BlogSection;
