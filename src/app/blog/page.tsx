import PageHeader from "@/components/layout/PageHeader";
import Container from "@/components/layout/Container";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | StrongBody AI Health Insights",
    description: "Stay updated with the latest health insights, medical innovations, and platform updates from StrongBody AI.",
};

// Sample blog posts data
const blogPosts = [
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
    },
    {
        id: 4,
        title: "AI Translation in Healthcare: Breaking Language Barriers",
        excerpt: "Discover how MultiMe AI enables seamless communication between patients and doctors regardless of language differences.",
        author: "Tech Team",
        date: "2023-12-28",
        readTime: "4 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
        slug: "ai-translation-healthcare-language-barriers"
    },
    {
        id: 5,
        title: "Escrow Payments: Secure Transactions in Healthcare",
        excerpt: "Learn how our secure escrow system protects both patients and healthcare providers during service transactions.",
        author: "Finance Team",
        date: "2023-12-20",
        readTime: "5 min read",
        category: "Finance",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
        slug: "escrow-payments-secure-healthcare-transactions"
    },
    {
        id: 6,
        title: "Building Trust: Our Partner Verification Process",
        excerpt: "An inside look at how we verify and onboard healthcare professionals to ensure quality and compliance.",
        author: "Partnership Team",
        date: "2023-12-15",
        readTime: "6 min read",
        category: "Partnership",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
        slug: "building-trust-partner-verification-process"
    }
];

const categories = ["All", "Technology", "Healthcare", "Compliance", "Finance", "Partnership"];

export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Health Insights & Updates"
                description="Stay informed with the latest healthcare innovations, platform updates, and expert insights from StrongBody AI."
                breadcrumb="Blog"
            />

            <section className="py-24 bg-white">
                <Container>
                    {/* Categories Filter */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                                    category === "All"
                                        ? "bg-primary text-white"
                                        : "bg-slate-100 text-slate-700 hover:bg-primary hover:text-white"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock size={12} />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-primary-text transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate-600 font-medium leading-relaxed mb-4 line-clamp-3 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-500">{post.author}</span>
                                        <div className="flex items-center gap-2 text-primary-text font-bold text-sm group-hover:gap-3 transition-all">
                                            Read More <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all">
                            Load More Articles
                        </button>
                    </div>
                </Container>
            </section>
        </main>
    );
}

