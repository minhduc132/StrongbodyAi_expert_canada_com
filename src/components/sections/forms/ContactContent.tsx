import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";

const ContactContent = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <Reveal>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Get in Touch</span>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                                Contact StrongBody AI
                            </h1>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10">
                                Whether you're a client exploring services or a professional interested in partnership — we'd love to hear from you.
                            </p>

                            <div className="space-y-5">
                                <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="w-11 h-11 rounded-xl bg-blue-100 text-primary flex items-center justify-center">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Email</div>
                                        <a href="mailto:contact@strongbodyai.com" className="text-base font-bold text-slate-900 hover:text-primary transition-colors">contact@strongbodyai.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="w-11 h-11 rounded-xl bg-blue-100 text-primary flex items-center justify-center">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Phone</div>
                                        <a href="tel:+18001234567" className="text-base font-bold text-slate-900 hover:text-primary transition-colors">+1 (800) 123-4567</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-5 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="w-11 h-11 rounded-xl bg-blue-100 text-primary flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">Office</div>
                                        <span className="text-base font-bold text-slate-900">San Francisco, California, US</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Form */}
                    <div>
                        <Reveal delay={0.2}>
                            <form className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-100 space-y-5">
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Send Us a Message</h3>
                                <p className="text-sm text-slate-500 font-medium mb-4">We typically respond within 24 business hours.</p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">I am a</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium text-slate-700">
                                        <option>Client looking for services</option>
                                        <option>Professional interested in partnership</option>
                                        <option>Organization / Clinic</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium resize-none" placeholder="Tell us how we can help..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/15 flex items-center justify-center gap-2">
                                    Send Message <Send size={16} />
                                </button>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContent;
