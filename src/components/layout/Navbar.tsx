"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, Shield, Globe, HelpCircle } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowMore(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "How It Works", href: "/how-it-works" },
        { name: "Services", href: "/services" },
        { name: "For Clients", href: "/for-clients" },
    ];

    const moreLinks = [
        { name: "For Partners", href: "/for-partners", icon: Globe, desc: "Recruitment & Network" },
        { name: "FAQ", href: "/faq", icon: HelpCircle, desc: "Common Questions" },
        { name: "Legal", href: "/legal", icon: Shield, desc: "Trust & Compliance" },
    ];

    const contactLink = { name: "Contact", href: "/contact" };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-2 shadow-sm"
                : "bg-white/80 backdrop-blur-md py-3"
                }`}
        >
            <Container>
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
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`px-3 py-2 text-[14px] font-bold transition-all rounded-lg ${isActive
                                        ? "text-primary bg-blue-50/50"
                                        : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}

                        {/* Dropdown "More" */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className={`flex items-center gap-1 px-3 py-2 text-[14px] font-bold transition-all rounded-lg ${showMore || moreLinks.some(l => pathname === l.href)
                                    ? "text-primary bg-blue-50/50"
                                    : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                    }`}
                            >
                                More <ChevronDown size={14} className={`transition-transform duration-300 ${showMore ? "rotate-180" : ""}`} />
                            </button>

                            {showMore && (
                                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 animate-in fade-in zoom-in-95 duration-200">
                                    {moreLinks.map((link) => {
                                        const isActive = pathname === link.href;
                                        return (
                                            <Link
                                                key={link.name}
                                                href={link.href}
                                                onClick={() => setShowMore(false)}
                                                className={`flex items-start gap-3 p-3 rounded-xl transition-all ${isActive ? "bg-blue-50 text-primary" : "text-slate-700 hover:bg-slate-50"
                                                    }`}
                                            >
                                                <div className={`mt-0.5 p-1.5 rounded-lg ${isActive ? "bg-primary text-white" : "bg-slate-100 text-slate-500"}`}>
                                                    <link.icon size={16} />
                                                </div>
                                                <div>
                                                    <div className="text-[14px] font-bold">{link.name}</div>
                                                    <div className="text-[12px] text-slate-400 font-medium">{link.desc}</div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        <Link
                            href={contactLink.href}
                            className={`px-3 py-2 text-[14px] font-bold transition-all rounded-lg ${pathname === contactLink.href
                                ? "text-primary bg-blue-50/50"
                                : "text-slate-600 hover:text-primary hover:bg-slate-50"
                                }`}
                        >
                            {contactLink.name}
                        </Link>
                    </div>

                    {/* Right Side: 2 CTAs (Restored) */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/services"
                            className="hidden lg:flex items-center gap-1.5 bg-primary text-white px-5 py-2.5 rounded-lg text-[13px] font-bold tracking-wide hover:bg-blue-700 transition-all active:scale-[0.98]"
                        >
                            Explore Services
                        </Link>
                        <Link
                            href="/for-partners"
                            className="hidden lg:flex items-center gap-1.5 bg-violet-600 text-white px-5 py-2.5 rounded-lg text-[13px] font-bold tracking-wide hover:bg-violet-700 transition-all active:scale-[0.98]"
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
            </Container>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden absolute top-full left-0 w-full h-screen bg-white shadow-2xl z-[100] overflow-y-auto border-t border-slate-100">
                    <div className="p-6 space-y-4">
                        <div className="grid grid-cols-1 gap-2">
                            {navLinks.concat([contactLink]).map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex justify-between items-center px-5 py-4 text-base font-bold rounded-xl border transition-all ${isActive
                                            ? "text-primary bg-blue-50 border-blue-100"
                                            : "text-slate-800 bg-slate-50 border-slate-100"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {link.name}
                                        <ChevronRight size={16} className={isActive ? "text-primary" : "text-slate-400"} />
                                    </Link>
                                );
                            })}
                        </div>

                        <div>
                            <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-4 mb-3">Resources</div>
                            <div className="grid grid-cols-1 gap-2">
                                {moreLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center gap-3 px-4 py-3 text-[14px] font-bold rounded-xl bg-white border border-slate-100 ${pathname === link.href ? "text-primary border-primary/20" : "text-slate-600"
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <link.icon size={18} className="text-primary" />
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
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
