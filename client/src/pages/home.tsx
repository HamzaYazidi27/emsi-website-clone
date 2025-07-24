import { useEffect } from "react";
import CookieBanner from "@/components/CookieBanner";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyFigures from "@/components/KeyFigures";
import Formations from "@/components/Formations";
import Employability from "@/components/Employability";
import Research from "@/components/Research";
import Campus from "@/components/Campus";
import News from "@/components/News";
import Inscription from "@/components/Inscription";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Set document title
    document.title = "EMSI - La Grande École des Sciences de l'Ingénieur";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <CookieBanner />
      <Header />
      <main>
        <Hero />
        <KeyFigures />
        <Formations />
        <Employability />
        <Research />
        <Campus />
        <News />
        <Inscription />
      </main>
      <Footer />
    </div>
  );
}
