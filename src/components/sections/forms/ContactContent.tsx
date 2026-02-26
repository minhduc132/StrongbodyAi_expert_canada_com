import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Container from "@/components/layout/Container";
import { Reveal } from "@/components/animations/Reveal";

const ContactContent = () => {
    return (
        <section className="py-24 bg-white">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <Reveal>
                            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Get in Touch</span>
                            <h1 className="text-4xl md:text-5xl font-bold text-text-p mb-6 leading-tight">
                                Contact <span className="text-primary">StrongBody AI</span>
                            </h1>
                            <p className="text-lg text-text-m font-medium leading-relaxed mb-10">
                                Whether you're a client exploring services or a professional interested in partnership — we'd love to hear from you.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-5 p-6 rounded-2xl bg-grey-50 border border-grey-200 group hover:border-primary/20 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                        <Mail size={22} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-text-s uppercase tracking-[0.2em] mb-1">Send us an Email</div>
                                        <a href="mailto:contact@strongbodyai.com" className="text-lg font-bold text-text-p hover:text-primary transition-colors">contact@strongbodyai.com</a>
                                    </div>
                                </div>

                                <div className="p-6 rounded-2xl bg-secondary-light/50 border border-secondary/5">
                                    <h4 className="text-sm font-bold text-secondary mb-2">Platform Support</h4>
                                    <p className="text-xs text-text-m font-medium leading-relaxed">
                                        For technical assistance with the MultiMe AI App or your Professional Profile, please include your User ID in the email.
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Form */}
                    <div>
                        <Reveal delay={0.2}>
                            <form className="bg-grey-50 p-8 md:p-10 rounded-[2rem] border border-grey-200 space-y-6 shadow-sm">
                                <h3 className="text-2xl font-bold text-text-p mb-2">Send Us a Message</h3>
                                <p className="text-sm text-text-m font-medium mb-4">We typically respond within 24 business hours.</p>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-text-p uppercase tracking-wider mb-2">First Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-grey-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium text-text-p" placeholder="John" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-text-p uppercase tracking-wider mb-2">Last Name</label>
                                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-grey-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium text-text-p" placeholder="Doe" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-text-p uppercase tracking-wider mb-2">Email Address</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-grey-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium text-text-p" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-text-p uppercase tracking-wider mb-2">I am a</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-grey-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-bold text-text-p appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207L10%2012L15%207%22%20stroke%3D%22%23687588%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px_20px] bg-[right_1rem_center] bg-no-repeat">
                                        <option>Client looking for services</option>
                                        <option>Professional interested in partnership</option>
                                        <option>Organization / Clinic</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-text-p uppercase tracking-wider mb-2">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-grey-300 bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm font-medium text-text-p resize-none" placeholder="Tell us how we can help..."></textarea>
                                </div>

                                <button type="submit" className="w-full bg-primary text-white py-4 rounded-xl font-bold text-base hover:bg-primary/90 transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2">
                                    Send Message <Send size={16} />
                                </button>
                            </form>
                        </Reveal>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ContactContent;
