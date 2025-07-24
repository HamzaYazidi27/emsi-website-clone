import { useState } from "react";
import { Button } from "@/components/ui/button";

import emsi from "@assets/emsi.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/emsi.ma/" className="hover:text-emsi-green transition-colors">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/emsigroupe.officiel/" className="hover:text-emsi-green transition-colors">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@groupe.emsi" className="hover:text-emsi-green transition-colors">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.linkedin.com/school/ecole-marocaine-des-sciences-de-l'ing%C3%A9nieur" className="hover:text-emsi-green transition-colors">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC5BiOBai2N48ytbCRQWWqJw" className="hover:text-emsi-green transition-colors">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
          <div className="hidden md:block">
            <span>La Grande École des Sciences de l'Ingénieur</span>
          </div>
          <div>
            <Button 
              onClick={() => scrollToSection('inscription')}
              className="bg-emsi-green hover:bg-emsi-dark-green px-4 py-2 rounded text-white font-medium transition-colors"
            >
              Je m'inscris
            </Button>
          </div>
        </div>
      </div>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img 
                src={emsi} 
                alt="EMSI - École Marocaine des Sciences de l'Ingénieur" 
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden lg:flex space-x-8">
              <button 
                onClick={() => scrollToSection('formations')}
                className="text-gray-700 hover:text-emsi-green font-medium transition-colors"
              >
                Nos formations
              </button>
              <button 
                onClick={() => scrollToSection('recherche')}
                className="text-gray-700 hover:text-emsi-green font-medium transition-colors"
              >
                Recherche & innovation
              </button>
              <button 
                onClick={() => scrollToSection('employabilite')}
                className="text-gray-700 hover:text-emsi-green font-medium transition-colors"
              >
                Centre de carrières
              </button>
              <button 
                onClick={() => scrollToSection('campus')}
                className="text-gray-700 hover:text-emsi-green font-medium transition-colors"
              >
                Campus
              </button>
            </div>
            <div className="lg:hidden">
              <Button
                variant="ghost"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-emsi-green"
              >
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('formations')}
                className="block text-gray-700 hover:text-emsi-green font-medium w-full text-left"
              >
                Nos formations
              </button>
              <button 
                onClick={() => scrollToSection('recherche')}
                className="block text-gray-700 hover:text-emsi-green font-medium w-full text-left"
              >
                Recherche & innovation
              </button>
              <button 
                onClick={() => scrollToSection('employabilite')}
                className="block text-gray-700 hover:text-emsi-green font-medium w-full text-left"
              >
                Centre de carrières
              </button>
              <button 
                onClick={() => scrollToSection('campus')}
                className="block text-gray-700 hover:text-emsi-green font-medium w-full text-left"
              >
                Campus
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
