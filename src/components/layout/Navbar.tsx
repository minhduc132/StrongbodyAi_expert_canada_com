"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/layout/Container";
import { Menu, X, ChevronDown, ChevronRight, ArrowRight, Shield, Globe, HelpCircle, User, Users, BookOpen, LayoutGrid, Info } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const pathname = usePathname();
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const navGroups = [
        {
            name: "Platform",
            links: [
                { name: "How It Works", href: "/how-it-works", icon: Info, desc: "Process & Steps" },
                { name: "Services", href: "/services", icon: LayoutGrid, desc: "Browse Categories" },
                { name: "MultiMe AI App", href: "/multime", icon: Globe, desc: "Download the App" },
            ]
        },
        {
            name: "Community",
            links: [
                { name: "For Clients", href: "/for-clients", icon: User, desc: "Benefits for Users" },
                { name: "For Partners", href: "/for-partners", icon: Users, desc: "Grow your Practice" },
                { name: "Blog", href: "/blog", icon: BookOpen, desc: "Latest Updates" },
            ]
        },
        {
            name: "Resources",
            links: [
                { name: "FAQ", href: "/faq", icon: HelpCircle, desc: "Common Questions" },
                { name: "Legal", href: "/legal", icon: Shield, desc: "Trust & Compliance" },
            ]
        }
    ];

    const simpleLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled
                ? "bg-white/95 backdrop-blur-xl border-b border-slate-100 py-2 shadow-sm"
                : "bg-white/80 backdrop-blur-md py-3"
                }`}
        >
            <Container>
                <div className="flex justify-between items-center text-slate-800">
                    {/* Logo */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
                        <img
                            src="/images/logo.png"
                            alt="StrongBody AI Logo"
                            className="h-9 w-auto object-contain"
                        />
                        <img
                            src="https://flagcdn.com/w160/my.png"
                            alt="Malaysia Flag"
                            className="w-16 h-auto object-contain border border-slate-100 shadow-sm"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden xl:flex items-center space-x-1">
                        {/* Home & About */}
                        <Link href="/" className={`px-3 py-2 text-[14px] font-bold transition-all rounded-lg ${pathname === "/" ? "text-primary bg-primary/10" : "hover:text-primary hover:bg-slate-50"}`}>Home</Link>
                        <Link href="/about" className={`px-3 py-2 text-[14px] font-bold transition-all rounded-lg ${pathname === "/about" ? "text-primary bg-primary/10" : "hover:text-primary hover:bg-slate-50"}`}>About</Link>

                        {/* Dropdowns */}
                        <div className="flex items-center" ref={dropdownRef}>
                            {navGroups.map((group) => (
                                <div key={group.name} className="relative">
                                    <button
                                        onClick={() => toggleDropdown(group.name)}
                                        className={`flex items-center gap-1 px-3 py-2 text-[14px] font-bold transition-all rounded-lg ${activeDropdown === group.name || group.links.some(l => pathname === l.href)
                                            ? "text-primary bg-primary/10"
                                            : "hover:text-primary hover:bg-slate-50"
                                            }`}
                                    >
                                        {group.name} <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === group.name ? "rotate-180" : ""}`} />
                                    </button>

                                    {activeDropdown === group.name && (
                                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 animate-in fade-in zoom-in-95 duration-200">
                                            {group.links.map((link) => {
                                                const isActive = pathname === link.href;
                                                return (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        onClick={() => setActiveDropdown(null)}
                                                        className={`flex items-start gap-4 p-4 rounded-xl transition-all ${isActive ? "bg-primary/10 text-primary" : "text-slate-700 hover:bg-slate-50 hover:pl-5"
                                                            }`}
                                                    >
                                                        <div className={`mt-0.5 p-2 rounded-lg ${isActive ? "bg-primary text-white" : "bg-slate-100 text-slate-500"}`}>
                                                            <link.icon size={18} />
                                                        </div>
                                                        <div>
                                                            <div className="text-[14px] font-bold">{link.name}</div>
                                                            <div className="text-[12px] text-slate-400 font-medium leading-tight">{link.desc}</div>
                                                        </div>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className={`px-3 py-2 text-[14px] font-bold transition-all rounded-lg ${pathname === "/contact" ? "text-primary bg-primary/10" : "hover:text-primary hover:bg-slate-50"}`}>Contact</Link>
                    </div>

                    {/* Right Side: 2 CTAs */}
                    <div className="flex items-center gap-2">
                        <Link
                            href="/multime"
                            className="hidden lg:flex items-center gap-1.5 bg-primary text-white px-4 py-2.5 rounded-lg text-[13px] font-bold tracking-wide hover:bg-primary/90 transition-all active:scale-[0.98]"
                        >
                            App Free Download
                        </Link>
                        <Link
                            href="https://www.strongbody.ai/signup"
                            className="hidden lg:flex items-center gap-1.5 bg-slate-900 text-white px-4 py-2.5 rounded-lg text-[13px] font-bold tracking-wide hover:bg-slate-800 transition-all active:scale-[0.98]"
                        >
                            Strategic Partner
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
                    <div className="p-6 space-y-6 pb-24">
                        <div className="space-y-2">
                            {simpleLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`block px-5 py-4 text-base font-bold rounded-xl ${pathname === link.href ? "text-primary bg-primary/5 border border-primary/10" : "text-slate-800 bg-slate-50"}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {navGroups.map((group) => (
                            <div key={group.name} className="space-y-3">
                                <div className="text-[11px] font-black text-slate-400 uppercase tracking-widest px-4">{group.name}</div>
                                <div className="grid grid-cols-1 gap-2">
                                    {group.links.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={`flex items-center gap-4 px-4 py-3.5 text-[15px] font-bold rounded-xl border border-slate-100 ${pathname === link.href ? "text-primary bg-primary/5 border-primary/20" : "text-slate-700 bg-white shadow-sm"}`}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-primary">
                                                <link.icon size={20} />
                                            </div>
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="pt-4 space-y-3">
                            <Link
                                href="/multime"
                                className="block w-full text-center bg-primary text-white py-4 rounded-xl text-base font-bold shadow-lg shadow-primary/20"
                                onClick={() => setIsOpen(false)}
                            >
                                Download MultiMe AI App
                            </Link>
                            <Link
                                href="https://www.strongbody.ai/signup"
                                className="block w-full text-center bg-slate-900 text-white py-4 rounded-xl text-base font-bold shadow-lg shadow-slate-900/10"
                                onClick={() => setIsOpen(false)}
                            >
                                Become a Strategic Partner
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
