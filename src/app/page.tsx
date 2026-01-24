import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] text-slate-800">
      <Header />
      <Hero />
      <div className="relative z-5 shadow-sm">
        <Features />
      </div>
      <Footer />
    </main>
  );
}
