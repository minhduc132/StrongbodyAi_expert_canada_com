import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import Container from "@/components/layout/Container";
import { Metadata } from "next";

import { fetchPostDetail, fetchAllBlogPosts } from "@/app/api";

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await fetchPostDetail(resolvedParams.slug);

    if (!post) {
        return {
            title: "Post Not Found",
            description: "The article you're looking for could not be found.",
        };
    }

    const description = post.excerpt || (post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 160) : "");
    const image = post.featured_image_url || post.image || "/images/og-image.png";
    const category = post.categories?.[0]?.name || post.category?.name || "Health Insights";

    return {
        title: post.title,
        description: description,
        keywords: [post.title, category, "StrongBody AI", "health blog", "telehealth"],
        alternates: {
            canonical: `https://strongbody.ai/blog/${resolvedParams.slug}`,
        },
        openGraph: {
            title: post.title,
            description: description,
            url: `https://strongbody.ai/blog/${resolvedParams.slug}`,
            siteName: "StrongBody AI",
            images: [{ url: image, width: 1200, height: 630, alt: post.title }],
            locale: "en_US",
            type: "article",
            publishedTime: post.published_at || post.created_at,
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: description,
            images: [image],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const resolvedParams = await params;

    // Fetch detailed post
    const post = await fetchPostDetail(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    // Mapping API response to our UI variables
    const title = post.title;
    const content = post.content || post.details?.content || "<p>No content available.</p>";
    const image = post.featured_image_url || post.image || null;
    const category = post.categories?.[0]?.name || post.category?.name || "Uncategorized";
    const date = post.published_at || post.date || new Date().toISOString();
    const authorObj = post.author;
    const author = (authorObj && typeof authorObj === 'object')
        ? [authorObj.first_name, authorObj.last_name].filter(Boolean).join(' ') || "StrongBody AI"
        : (typeof authorObj === 'string' ? authorObj : "StrongBody AI");
    const authorRole = "Content Team";
    const authorImage = (authorObj && typeof authorObj === 'object' && authorObj.avatar_url)
        ? authorObj.avatar_url
        : "/images/avatar.jpg";

    // Fetch related posts
    const relatedPosts = await fetchAllBlogPosts();

    // JSON-LD Article Schema
    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description: post.excerpt || "",
        image: image || "/images/og-image.png",
        datePublished: date,
        dateModified: post.updated_at || date,
        author: {
            "@type": "Person",
            name: author,
        },
        publisher: {
            "@type": "Organization",
            name: "StrongBody AI",
            logo: {
                "@type": "ImageObject",
                url: "https://strongbody.ai/images/og-image.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://strongbody.ai/blog/${resolvedParams.slug}`,
        },
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            {/* Hero Image */}
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full h-full bg-grey-100 flex items-center justify-center">
                        <Calendar className="text-grey-400" size={80} />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 to-grey-900/40"></div>
                <Container className="relative h-full flex items-end pb-12">
                    <div className="text-white">
                        <div className="inline-block bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold mb-4">
                            {category}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                            {title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                {new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} />
                                {author}
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
                        className="inline-flex items-center gap-2 text-primary font-bold hover:underline transition-all mb-8"
                    >
                        <ArrowLeft size={18} />
                        Back to Blog
                    </Link>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <article className="lg:col-span-2">
                            <div
                                className="prose prose-lg prose-grey max-w-none
                                    prose-headings:text-grey-900 prose-headings:font-bold prose-headings:leading-tight
                                    prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-h4:text-lg
                                    prose-p:text-grey-600 prose-p:leading-relaxed prose-p:text-base
                                    prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline
                                    prose-strong:text-grey-900
                                    prose-img:rounded-xl prose-img:shadow-md
                                    prose-blockquote:border-l-primary prose-blockquote:text-grey-600
                                    prose-ul:text-grey-600 prose-ol:text-grey-600
                                    prose-li:marker:text-primary
                                    prose-table:text-sm
                                    prose-th:text-grey-900 prose-th:font-bold
                                    prose-td:text-grey-600"
                                dangerouslySetInnerHTML={{ __html: content }}
                            />

                            {/* Author Section */}
                            <div className="mt-12 p-8 bg-grey-50 rounded-2xl border border-grey-100">
                                <div className="flex items-start gap-4">
                                    <img
                                        src={authorImage}
                                        alt={author}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h4 className="text-lg font-bold text-grey-900 mb-1">{author}</h4>
                                        <p className="text-sm text-grey-500 font-medium mb-3">{authorRole}</p>
                                        <p className="text-sm text-grey-600 font-medium">
                                            {author} is a key contributor to StrongBody AI&apos;s mission of making quality healthcare accessible globally.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Share Section */}
                            <div className="mt-8 pt-8 border-t border-grey-200">
                                <h3 className="text-lg font-bold text-grey-900 mb-4">Share this article</h3>
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
                                    <button className="w-10 h-10 rounded-lg bg-grey-100 text-grey-700 flex items-center justify-center hover:bg-grey-200 transition-all">
                                        <Share2 size={18} />
                                    </button>
                                </div>
                            </div>
                        </article>

                        {/* Sidebar */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-24 space-y-8">
                                {/* Related Posts */}
                                {relatedPosts.filter((p: any) => p.slug !== resolvedParams.slug).length > 0 && (
                                    <div>
                                        <h3 className="text-xl font-bold text-grey-900 mb-6">Related Articles</h3>
                                        <div className="space-y-4">
                                            {relatedPosts
                                                .filter((p: any) => p.slug !== resolvedParams.slug)
                                                .slice(0, 3)
                                                .map((relatedPost: any) => (
                                                    <Link
                                                        key={relatedPost.id}
                                                        href={`/blog/${relatedPost.slug}`}
                                                        className="block group"
                                                    >
                                                        <div className="flex gap-4">
                                                            {relatedPost.image && (
                                                                <img
                                                                    src={relatedPost.image}
                                                                    alt={relatedPost.title}
                                                                    className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
                                                                />
                                                            )}
                                                            <div>
                                                                <h4 className="text-sm font-bold text-grey-900 group-hover:text-primary transition-colors line-clamp-2 mb-1">
                                                                    {relatedPost.title}
                                                                </h4>
                                                                {relatedPost.date && (
                                                                    <p className="text-xs text-grey-500 font-medium">
                                                                        {new Date(relatedPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </Link>
                                                ))}
                                        </div>
                                    </div>
                                )}

                                {/* Newsletter */}
                                <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10">
                                    <h3 className="text-lg font-bold text-grey-900 mb-2">Stay Updated</h3>
                                    <p className="text-sm text-grey-600 font-medium mb-4">
                                        Subscribe to our newsletter for the latest health insights and platform updates.
                                    </p>
                                    <form className="space-y-3">
                                        <input
                                            type="email"
                                            placeholder="Your email"
                                            className="w-full px-4 py-2.5 rounded-lg border border-grey-200 bg-white text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
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
