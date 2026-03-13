import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Mail, Phone, MapPin } from "lucide-react";

const allLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "For Clients", href: "/for-clients" },
    { name: "For Partners", href: "/for-partners" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
];

const legalLinks = [
    { name: "Trust & Compliance", href: "/legal" },
    { name: "Privacy Policy", href: "/legal" },
    { name: "Terms of Service", href: "/legal" },
    { name: "Compliance Disclaimer", href: "/legal" },
];

const Footer = () => {
    return (
        <footer className="bg-grey-50 text-grey-900 pt-20 pb-10 border-t border-grey-200">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16 mb-16">
                    {/* Brand Section */}
                    <div className="lg:w-1/2 space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <img
                                src="/images/logo.png"
                                alt="StrongBody AI Logo"
                                className="h-10 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-grey-600 text-sm font-medium leading-relaxed max-w-md">
                            AI-native health services marketplace connecting verified professionals and clients in the United States and beyond.
                        </p>
                        <div className="space-y-3 text-sm text-grey-600 font-medium">
                            <div className="flex items-center gap-2">
                                <Mail size={14} className="text-primary" />
                                <a href="mailto:customercare@strongbody.ai" className="hover:text-primary transition-colors">customercare@strongbody.ai</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-primary" />
                                <span>StrongBody SG PTE. LTD., Singapore</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 pt-4">
                            <a href="https://apps.apple.com/us/app/multime-ai/id6748796219" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-10 w-auto" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.multime.app.prod" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-10 w-auto" />
                            </a>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="lg:w-1/2 grid grid-cols-2 gap-10">
                        <div>
                            <h4 className="text-xs font-bold tracking-widest uppercase text-grey-700 mb-6">Navigation</h4>
                            <ul className="space-y-3">
                                {allLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-grey-600 hover:text-primary font-medium transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-bold tracking-widest uppercase text-grey-700 mb-6">Legal</h4>
                            <ul className="space-y-3">
                                {legalLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.href} className="text-sm text-grey-600 hover:text-primary font-medium transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-grey-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-grey-500 text-xs font-medium text-center md:text-left">
                        © 2022 StrongBody AI – Powered by MultiMe AI – Global platform from Singapore. All rights reserved.
                    </p>
                    <p className="text-grey-400 text-[10px] font-medium max-w-md text-center md:text-right">
                        StrongBody AI is a technology marketplace platform. We do not directly provide medical services. All services are provided by independent verified partners.
                    </p>
                </div>

            </Container>
        </footer>
    );
};

export default Footer;
