import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      <Hero />
      <div className="relative z-5 shadow-sm">
        <Features />
      </div>
      <Footer />
    </main>
  );
}
