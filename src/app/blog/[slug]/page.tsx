import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Container from "@/components/layout/Container";
import { Metadata } from "next";

// Sample blog posts data (in real app, this would come from a CMS or database)
const blogPosts = [
    {
        id: 1,
        title: "The Future of Telehealth: AI-Powered Healthcare Access",
        content: `
            <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                The healthcare industry is experiencing a transformative shift, with artificial intelligence playing a pivotal role in making quality medical services accessible to people worldwide. At StrongBody AI, we're at the forefront of this revolution, leveraging cutting-edge AI technology to break down barriers in healthcare delivery.
            </p>
            
            <h2 class="text-2xl font-black text-slate-900 mb-4 mt-8">The Evolution of Telehealth</h2>
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-4">
                Telehealth has come a long way from simple video consultations. Today, AI-powered platforms can provide real-time translation, diagnostic support, and personalized care recommendations. This evolution is making healthcare more accessible, especially for those in remote areas or with limited access to specialized medical professionals.
            </p>
            
            <h2 class="text-2xl font-black text-slate-900 mb-4 mt-8">AI-Powered Features</h2>
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-4">
                Our platform integrates several AI technologies to enhance the healthcare experience:
            </p>
            <ul class="list-disc list-inside space-y-2 text-base text-slate-600 font-medium mb-6 ml-4">
                <li>Real-time multilingual translation through MultiMe AI</li>
                <li>Intelligent matching between patients and healthcare providers</li>
                <li>Automated appointment scheduling and reminders</li>
                <li>AI-assisted diagnostic support for healthcare professionals</li>
            </ul>
            
            <h2 class="text-2xl font-black text-slate-900 mb-4 mt-8">Global Accessibility</h2>
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-4">
                One of the most significant advantages of AI-powered telehealth is its ability to connect patients with specialists from around the world. A patient in rural America can now consult with a leading cardiologist in Europe, with AI ensuring seamless communication despite language differences.
            </p>
            
            <h2 class="text-2xl font-black text-slate-900 mb-4 mt-8">The Future is Here</h2>
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-4">
                As AI technology continues to advance, we can expect even more sophisticated healthcare solutions. From predictive analytics that identify health risks before they become critical, to personalized treatment plans based on genetic data, the future of telehealth is bright and full of possibilities.
            </p>
            
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-6">
                At StrongBody AI, we're committed to making these advanced healthcare technologies accessible to everyone, regardless of location or language. Join us as we shape the future of global healthcare.
            </p>
        `,
        author: "Dr. Sarah Chen",
        authorRole: "Chief Medical Officer",
        authorImage: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400&h=400",
        date: "2024-01-15",
        readTime: "5 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        slug: "future-of-telehealth-ai-powered-healthcare"
    },
    {
        id: 2,
        title: "Understanding HIPAA Compliance in Digital Health Platforms",
        content: `
            <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                Patient data protection is paramount in digital healthcare. Understanding HIPAA compliance is crucial for both healthcare providers and patients using online platforms.
            </p>
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-4">
                This comprehensive guide covers everything you need to know about HIPAA compliance in modern healthcare technology platforms.
            </p>
        `,
        author: "Legal Team",
        authorRole: "Compliance Department",
        authorImage: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400",
        date: "2024-01-10",
        readTime: "7 min read",
        category: "Compliance",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200",
        slug: "understanding-hipaa-compliance-digital-health"
    },
    {
        id: 3,
        title: "Medical Tourism: Accessing World-Class Care Across Borders",
        content: `
            <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                Medical tourism has become increasingly popular as patients seek high-quality, cost-effective healthcare solutions beyond their home countries.
            </p>
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-4">
                StrongBody AI facilitates these connections, ensuring patients can access verified medical professionals worldwide with confidence and security.
            </p>
        `,
        author: "Healthcare Team",
        authorRole: "Medical Services",
        authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
        date: "2024-01-05",
        readTime: "6 min read",
        category: "Healthcare",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
        slug: "medical-tourism-world-class-care"
    },
    {
        id: 4,
        title: "AI Translation in Healthcare: Breaking Language Barriers",
        content: `
            <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                Language should never be a barrier to quality healthcare. Our MultiMe AI technology enables seamless communication between patients and doctors.
            </p>
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-4">
                Discover how AI-powered translation is revolutionizing global healthcare accessibility.
            </p>
        `,
        author: "Tech Team",
        authorRole: "Technology Innovation",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400",
        date: "2023-12-28",
        readTime: "4 min read",
        category: "Technology",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        slug: "ai-translation-healthcare-language-barriers"
    },
    {
        id: 5,
        title: "Escrow Payments: Secure Transactions in Healthcare",
        content: `
            <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                Financial security is essential in healthcare transactions. Our escrow system protects both patients and providers throughout the service delivery process.
            </p>
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-4">
                Learn how escrow payments create trust and security in digital healthcare marketplaces.
            </p>
        `,
        author: "Finance Team",
        authorRole: "Payment Systems",
        authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400",
        date: "2023-12-20",
        readTime: "5 min read",
        category: "Finance",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
        slug: "escrow-payments-secure-healthcare-transactions"
    },
    {
        id: 6,
        title: "Building Trust: Our Partner Verification Process",
        content: `
            <p class="text-lg text-slate-700 font-medium leading-relaxed mb-6">
                Quality assurance begins with rigorous verification. We ensure every healthcare professional on our platform meets the highest standards of expertise and compliance.
            </p>
            <p class="text-base text-slate-600 font-medium leading-relaxed mb-4">
                An inside look at our comprehensive partner verification and onboarding process.
            </p>
        `,
        author: "Partnership Team",
        authorRole: "Partner Relations",
        authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400",
        date: "2023-12-15",
        readTime: "6 min read",
        category: "Partnership",
        image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200",
        slug: "building-trust-partner-verification-process"
    }
];

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);
    
    if (!post) {
        return {
            title: "Post Not Found | StrongBody AI Blog",
        };
    }

    return {
        title: `${post.title} | StrongBody AI Blog`,
        description: post.content.replace(/<[^>]*>/g, '').substring(0, 160),
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/40"></div>
                <Container className="relative h-full flex items-end pb-12">
                    <div className="text-white">
                        <div className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                            {post.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                {post.readTime}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="py-12">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-primary-text font-bold hover:text-primary transition-colors mb-8"
                    >
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <article className="lg:col-span-2">
                            <div
                                className="prose prose-lg max-w-none"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Author Section */}
                            <div className="mt-12 p-8 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="flex items-start gap-4">
                                    <img
                                        src={post.authorImage}
                                        alt={post.author}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-lg font-black text-slate-900 mb-1">{post.author}</h4>
                                        <p className="text-sm text-slate-500 font-medium mb-3">{post.authorRole}</p>
                                        <p className="text-sm text-slate-600 font-medium">
                                            {post.author} is a key contributor to StrongBody AI's mission of making quality healthcare accessible globally.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Share Section */}
                            <div className="mt-8 pt-8 border-t border-slate-200">
                                <h3 className="text-lg font-black text-slate-900 mb-4">Share this article</h3>
                                <div className="flex items-center gap-3">
                                    <button className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all">
                                        <Facebook size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-lg bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-all">
                                        <Twitter size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-lg bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-all">
                                        <Linkedin size={18} />
                                    </button>
                                    <button className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-200 transition-all">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                {/* Related Posts */}
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 mb-6">Related Articles</h3>
                                    <div className="space-y-4">
                                        {blogPosts
                                            .filter((p) => p.id !== post.id && p.category === post.category)
                                            .slice(0, 3)
                                            .map((relatedPost) => (
                                                <Link
                                                    key={relatedPost.id}
                                                    href={`/blog/${relatedPost.slug}`}
                                                    className="block group"
                                                >
                                                    <div className="flex gap-4">
                                                        <img
                                                            src={relatedPost.image}
                                                            alt={relatedPost.title}
                                                            className="w-20 h-20 rounded-xl object-cover"
                                                        />
                                                        <div>
                                                            <h4 className="text-sm font-bold text-slate-900 group-hover:text-primary-text transition-colors line-clamp-2 mb-1">
                                                                {relatedPost.title}
                                                            </h4>
                                                            <p className="text-xs text-slate-500 font-medium">
                                                                {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                    </div>
                                </div>

                                {/* Newsletter */}
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <h3 className="text-lg font-black text-slate-900 mb-2">Stay Updated</h3>
                                    <p className="text-sm text-slate-600 font-medium mb-4">
                                        Subscribe to our newsletter for the latest health insights and platform updates.
                                    </p>
                                    <form className="space-y-3">
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white py-2.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all"
                                        >
                                            Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </Container>
        </main>
    );
}

