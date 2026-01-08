"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Testimonials from "@/components/sections/Testimonials";
import { motion, AnimatePresence } from "framer-motion";
import {
    Database,
    TrendingUp,
    Globe,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Stethoscope,
    Heart,
    Activity,
    Award,
    ChevronDown,
    Play
} from "lucide-react";

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-200">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-blue-600 transition-colors"
            >
                <span className="text-lg font-bold text-slate-900">{question}</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-slate-600 leading-relaxed">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const PartnersPage = () => {
    const reasons = [
        {
            title: "Revenue Growth Opportunities",
            description: "Grow your core business through new revenue streams powered by StrongBody AI.",
            icon: TrendingUp,
        },
        {
            title: "You Own Your Data",
            description: "We help you leverage data – you retain full ownership and control.",
            icon: Database,
        },
        {
            title: "Global Ecosystem Access",
            description: "Expand your reach with global healthcare networks and partners.",
            icon: Globe,
        },
        {
            title: "Transparent Collaboration",
            description: "Clear partnership models, fair incentives, no hidden clauses.",
            icon: ShieldCheck,
        }
    ];

    const steps = [
        {
            title: "Khám và tư vấn ban đầu",
            desc: "Cả hai vợ chồng được bác sĩ khám, tư vấn và làm xét nghiệm để đánh giá sức khỏe sinh sản, chuẩn bị cho quá trình IVF."
        },
        {
            title: "Kích thích buồng trứng",
            desc: "Người vợ được tiêm thuốc trong khoảng 12 – 14 ngày để trứng phát triển, đồng thời siêu âm và xét nghiệm máu theo lịch hẹn của bác sĩ."
        },
        {
            title: "Chọc hút trứng",
            desc: "Khoảng 36 – 38 giờ sau mũi kích trứng, bác sĩ tiến hành chọc hút trứng, người vợ được gây mê nhẹ và nghỉ ngơi theo dõi sau thủ thuật."
        },
        {
            title: "Tạo phôi",
            desc: "Trứng và tinh trùng được đưa vào phòng Labo để thụ tinh và nuôi cấy phôi trong vài ngày, bác sĩ sẽ thông báo kết quả cho vợ chồng."
        },
        {
            title: "Chuyển phôi",
            desc: "Khi phôi đạt chất lượng, bác sĩ sẽ chuyển phôi tươi hoặc phôi trữ lạnh vào buồng tử cung. Quá trình này diễn ra nhanh và nhẹ nhàng."
        },
        {
            title: "Thử thai và theo dõi",
            desc: "Sau khoảng 2 tuần, người vợ làm xét nghiệm máu để kiểm tra kết quả; nếu thành công, bác sĩ sẽ tiếp tục theo dõi thai kỳ."
        }
    ];

    const faq = [
        {
            q: "Phương pháp thụ tinh trong ống nghiệm IVF là gì?",
            a: "IVF là kỹ thuật kết hợp trứng và tinh trùng trong phòng thí nghiệm để tạo thành phôi. Phôi sau đó được nuôi cấy và chuyển vào tử cung của mẹ."
        },
        {
            q: "Quy trình làm IVF như thế nào?",
            a: "Quy trình IVF gồm 7 bước chính: kích trứng, chọc hút trứng, lấy mẫu tinh trùng, thụ tinh trong ống nghiệm, nuôi cấy phôi, chuyển phôi vào tử cung và thụ thai."
        },
        {
            q: "Chi phí thực hiện IVF khoảng bao nhiêu tiền?",
            a: "Chi phí IVF dao động tùy tình trạng sức khỏe và phác đồ điều trị của từng cặp vợ chồng, trung bình sẽ dao động khoảng 70.000.000 – 130.000.000 đồng."
        },
        {
            q: "IVF có an toàn không?",
            a: "IVF hiện là phương pháp hỗ trợ sinh sản an toàn, được áp dụng rộng rãi trên thế giới. Ba mẹ sẽ được theo dõi sát sao, quy trình chuẩn y khoa và hệ thống máy móc hiện đại."
        }
    ];

    const experts = [
        {
            name: "Mr Armando Cavo",
            role: "Senior Consultant",
            image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            name: "Kathy Yu-Syken",
            role: "Pediatric Specialist",
            image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=200&h=200"
        },
        {
            name: "Dr. Chin",
            role: "Medical Director",
            image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200"
        }
    ];

    return (
        <main className="min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                < Award className="w-4 h-4" /> StrongBody AI Ecosystem
                            </div>
                            <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 leading-[1.1]">
                                Unlock <span className="text-blue-600">Sustainable Revenue</span> with StrongBody AI Partnerships
                            </h1>
                            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                                Join a global healthcare ecosystem that respects data ownership, drives measurable growth, and creates long-term value for partners.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-full text-lg font-bold transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2">
                                    Become a Partner
                                </button>
                                <button className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-900 px-10 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center gap-2 group">
                                    Talk to a Specialist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>

                        <div className="relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative z-10"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000"
                                    alt="Modern Hospital Partnership"
                                    className="rounded-[3.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-8 border-white"
                                />

                                {/* Overlay card */}
                                <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px] hidden md:block">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-3 bg-green-100 rounded-2xl text-green-600">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div className="font-bold text-slate-900">+45% Growth</div>
                                    </div>
                                    <p className="text-sm text-slate-500">Average revenue increase for medical partners in 2024.</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4">Why Partner With StrongBody AI</h2>
                        <p className="text-4xl font-black text-slate-900 max-w-2xl mx-auto">
                            Empowering partners to grow revenue responsibly while retaining full ownership.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 group hover:shadow-2xl transition-all hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-[1.25rem] flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <reason.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-4">{reason.title}</h4>
                                <p className="text-slate-600 leading-relaxed mb-6">{reason.description}</p>
                                <button className="text-blue-600 font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Xem thêm <ArrowRight size={16} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IVF Process Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="mb-12">
                                <h3 className="text-blue-600 font-bold mb-4">Bệnh viện phụ sản An Thịnh</h3>
                                <h2 className="text-4xl font-black text-slate-900 mb-6">Quy trình điều trị IVF</h2>
                                <p className="text-slate-600">Trải nghiệm quy trình y khoa chuẩn quốc tế với sự hỗ trợ từ công nghệ StrongBody AI.</p>
                            </div>

                            <div className="space-y-8">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex gap-6"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold relative z-10">
                                                {index + 1}
                                            </div>
                                            {index !== steps.length - 1 && <div className="w-0.5 h-full bg-slate-100 my-2"></div>}
                                        </div>
                                        <div className="pb-8">
                                            <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                                            <p className="text-slate-600 leading-relaxed text-sm">{step.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="bg-slate-900 p-12 rounded-[3.5rem] text-white relative">
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-40"></div>
                                <h3 className="text-3xl font-bold mb-8">Vì sao nên chọn An Thịnh?</h3>
                                <div className="grid gap-8">
                                    {[
                                        { t: "Chuyên nghiệp", d: "Kinh nghiệm vững vàng, tận tâm trong từng bước chăm sóc.", icon: Stethoscope },
                                        { t: "An toàn", d: "Quy trình chặt chẽ, mẹ và bé luôn được bảo vệ.", icon: ShieldCheck },
                                        { t: "Đồng hành", d: "Luôn bên cạnh các gia đình trên mỗi chặng đường.", icon: Heart },
                                        { t: "Hiện đại", d: "Trang thiết bị tiên tiến, dịch vụ y tế chất lượng cao.", icon: Activity }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-5">
                                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-blue-400 shrink-0">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mb-1">{item.t}</h4>
                                                <p className="text-slate-400 text-sm">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-12 w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold text-lg transition-all shadow-xl">
                                    Đặt lịch tư vấn ngay
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Video Gallery Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Gallery</h2>
                        <p className="text-4xl font-black text-slate-900 mb-4">Hành trình trọn vẹn nhờ thiết bị tiên tiến</p>
                        <p className="text-slate-600 max-w-2xl mx-auto">Công nghệ tiên tiến kết hợp sự tận tâm, mang đến cho ba mẹ một môi trường an toàn, tin cậy.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="relative group overflow-hidden rounded-[2.5rem] aspect-video">
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Medical Equipment"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                                    <Play size={32} fill="currentColor" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-xl">Quy trình thăm khám tại Bệnh Viện</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-[2.5rem] aspect-video">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Technology"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all">
                                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                                    <Play size={32} fill="currentColor" />
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-bold text-xl">Thiết bị hiện đại chuẩn quốc tế</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">FAQ</h2>
                        <p className="text-4xl font-black text-slate-900 mb-4">Ba mẹ đang băn khoăn điều gì?</p>
                        <p className="text-slate-600">Những câu hỏi ba mẹ quan tâm nhất đã có bác sĩ giải đáp.</p>
                    </div>

                    <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100">
                        {faq.map((item, idx) => (
                            <FAQItem key={idx} question={item.q} answer={item.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Medical Experts Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Experts</h2>
                        <p className="text-4xl font-black text-slate-900">Tin cậy từ đội ngũ y bác sĩ</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {experts.map((expert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-[2rem] text-center border border-slate-100 hover:shadow-2xl transition-all group"
                            >
                                <div className="relative mb-6 inline-block">
                                    <div className="absolute inset-0 bg-blue-600 rounded-full scale-110 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                                    <img
                                        src={expert.image}
                                        alt={expert.name}
                                        className="w-40 h-40 rounded-full object-cover mx-auto ring-4 ring-slate-50 group-hover:ring-blue-100 transition-all shadow-xl"
                                    />
                                </div>
                                <h4 className="text-2xl font-bold text-slate-900 mb-2">{expert.name}</h4>
                                <p className="text-blue-600 font-bold text-sm uppercase tracking-wide">{expert.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Testimonials />
            <Footer />
        </main>
    );
};

export default PartnersPage;
