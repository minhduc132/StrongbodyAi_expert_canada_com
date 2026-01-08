import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ServiceCards from "@/components/sections/ServiceCards";
import WhyUs from "@/components/sections/WhyUs";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import Ecosystem from "@/components/sections/Ecosystem";
import AboutUs from "@/components/sections/AboutUs";
import MedicalExperts from "@/components/sections/MedicalExperts";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServiceCards />
      <WhyUs />
      <HowItWorks />
      <UseCases />
      <Ecosystem />
      <AboutUs />
      <MedicalExperts />
      <Testimonials />

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center p-12 rounded-[3rem] bg-gradient-to-br from-blue-600 to-teal-500 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Ready to transform healthcare?</h2>
            <p className="text-xl mb-10 text-blue-50 max-w-2xl mx-auto">
              Join our global ecosystem and start creating measurable value for your organization and patients today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full text-lg font-bold transition-all shadow-lg">
                Become a Partner
              </button>
              <button className="bg-blue-700/30 text-white border border-blue-400/30 hover:bg-blue-700/50 px-10 py-4 rounded-full text-lg font-bold transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
