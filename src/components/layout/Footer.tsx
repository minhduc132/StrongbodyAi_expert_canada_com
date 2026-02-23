import React from "react";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { Mail, Phone, MapPin } from "lucide-react";

const platformLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Services", href: "/services" },
];

const userLinks = [
    { name: "For Clients", href: "/for-clients" },
    { name: "For Partners", href: "/for-partners" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
];

const legalLinks = [
    { name: "Trust & Compliance", href: "/legal" },
    { name: "Privacy Policy", href: "/legal" },
    { name: "Terms of Service", href: "/legal" },
    { name: "Compliance Disclaimer", href: "/legal" },
];

const Footer = () => {
    return (
        <footer className="bg-[#FAFAFA] text-slate-900 pt-20 pb-10 border-t border-slate-200">
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-2 space-y-5">
                        <p className="text-slate-700 text-sm font-medium leading-relaxed max-w-sm">
                            AI-native health services marketplace connecting verified professionals and clients in the United States and beyond.
                        </p>
                        <div className="space-y-2.5 text-sm text-slate-600 font-medium">
                            <div className="flex items-center gap-2">
                                <Mail size={14} className="text-primary" />
                                <a href="mailto:support@strongbody.ai" className="hover:text-primary transition-colors">support@strongbody.ai</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={14} className="text-primary" />
                                <a href="tel:+18001234567" className="hover:text-primary transition-colors">+1 (800) 123-4567</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} className="text-primary" />
                                <span>San Francisco, CA</span>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 pt-2">
                            <a href="#" className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all" aria-label="LinkedIn">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all" aria-label="Twitter">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                            <a href="#" className="w-9 h-9 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-all" aria-label="Facebook">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-slate-700 mb-5">Platform</h4>
                        <ul className="space-y-3">
                            {platformLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-600 hover:text-primary font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For You */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-slate-700 mb-5">For You</h4>
                        <ul className="space-y-3">
                            {userLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-600 hover:text-primary font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-xs font-bold tracking-widest uppercase text-slate-700 mb-5">Legal</h4>
                        <ul className="space-y-3">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-sm text-slate-600 hover:text-primary font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-xs font-medium text-center md:text-left">
                        © 2026 StrongBody AI — Singapore-based Global Platform. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-[10px] font-medium max-w-md text-center md:text-right">
                        StrongBody AI is a technology marketplace platform. We do not directly provide medical services. All services are provided by independent verified partners.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
