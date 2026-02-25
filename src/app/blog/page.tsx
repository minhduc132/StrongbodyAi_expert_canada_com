import PageHeader from "@/components/layout/PageHeader";
import { Metadata } from "next";
import BlogListClient from "./BlogListClient";

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


export default function BlogPage() {
    return (
        <main className="min-h-screen">
            <PageHeader
                title="Health Insights & Updates"
                description="Stay informed with the latest healthcare innovations, platform updates, and expert insights from StrongBody AI."
                breadcrumb="Blog"
            />
            <BlogListClient initialPosts={blogPosts} />
        </main>
    );
}

