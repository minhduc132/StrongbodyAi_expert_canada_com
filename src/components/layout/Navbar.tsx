"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, ArrowRight } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Services", href: "/services" },
        { name: "For Clients", href: "/for-clients" },
        { name: "For Partners", href: "/for-partners" },
        { name: "FAQ", href: "/faq" },
        { name: "Legal", href: "/legal" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-2 shadow-sm"
                : "bg-white/80 backdrop-blur-md py-3"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <img
                            src="/images/logo.png"
                            alt="StrongBody AI Logo"
                            className="h-9 w-auto object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center space-x-0.5">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-2 text-[11px] tracking-wide font-semibold text-slate-600 hover:text-primary transition-all rounded-lg hover:bg-slate-50"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: 2 CTAs */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/services"
                            className="hidden lg:flex items-center gap-1.5 bg-primary text-white px-5 py-2.5 rounded-lg text-[11px] font-bold tracking-wide hover:bg-blue-700 transition-all active:scale-[0.98]"
                        >
                            Explore Services
                        </Link>
                        <Link
                            href="/for-partners"
                            className="hidden lg:flex items-center gap-1.5 bg-violet-600 text-white px-5 py-2.5 rounded-lg text-[11px] font-bold tracking-wide hover:bg-violet-700 transition-all active:scale-[0.98]"
                        >
                            Become a Partner <ArrowRight size={12} />
                        </Link>

                        {/* Mobile menu button */}
                        <div className="xl:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-700 p-2 bg-slate-50 rounded-xl border border-slate-100"
                            >
                                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden fixed inset-0 top-[60px] bg-white/98 backdrop-blur-2xl z-[100] overflow-y-auto">
                    <div className="p-6 space-y-4">
                        <div className="grid grid-cols-1 gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="flex justify-between items-center px-5 py-4 text-base font-semibold text-slate-800 bg-slate-50 rounded-xl border border-slate-100 active:scale-[0.98] transition-all"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                    <ChevronRight size={16} className="text-slate-400" />
                                </Link>
                            ))}
                        </div>
                        <div className="pt-2 space-y-3">
                            <Link
                                href="/services"
                                className="block w-full text-center bg-primary text-white py-4 rounded-xl text-base font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                Explore Services
                            </Link>
                            <Link
                                href="/for-partners"
                                className="block w-full text-center bg-violet-600 text-white py-4 rounded-xl text-base font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                Become a Partner
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
