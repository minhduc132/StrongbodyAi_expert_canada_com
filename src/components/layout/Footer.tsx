"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
                            StrongBody AI
                        </Link>
                        <p className="text-slate-400 leading-relaxed">
                            Global healthcare platform enabling hospitals and medical organizations to operate as verified Organization Accounts within a compliant health ecosystem.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-blue-400 transition-colors"><Facebook size={20} /></Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></Link>
                            <Link href="#" className="hover:text-blue-400 transition-colors"><Youtube size={20} /></Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Why StrongBody AI</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Partnership Models</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">How It Works</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Use Cases</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Resources</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li><Link href="#" className="hover:text-white transition-colors">News & Events</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">FAQs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Recruitment</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex gap-3 items-start">
                                <MapPin className="text-blue-400 shrink-0" size={20} />
                                <span>Global HQ, Tech District</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="text-blue-400 shrink-0" size={20} />
                                <span>+1 (234) 567-890</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="text-blue-400 shrink-0" size={20} />
                                <span>contact@strongbodyai.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-sm">
                    <p>© {new Date().getFullYear()} StrongBody AI Ecosystem. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white">Privacy</Link>
                        <Link href="#" className="hover:text-white">Cookies</Link>
                        <Link href="#" className="hover:text-white">Security</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
