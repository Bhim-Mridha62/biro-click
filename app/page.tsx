import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Tools from "@/components/Tools";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-right" dir="rtl">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
        <Tools />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
