import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("emsi-cookie-consent");
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("emsi-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const refuseCookies = () => {
    localStorage.setItem("emsi-cookie-consent", "refused");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 text-sm">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <p>En poursuivant votre navigation, vous acceptez l'utilisation des cookies destinés à des fins de mesures d'audience.</p>
        </div>
        <div className="flex space-x-2">
          <Button 
            onClick={acceptCookies} 
            className="bg-emsi-green hover:bg-emsi-dark-green px-4 py-2 rounded text-white font-medium transition-colors"
          >
            Accepter
          </Button>
          <Button 
            onClick={refuseCookies} 
            variant="secondary"
            className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded text-white font-medium transition-colors"
          >
            Refuser
          </Button>
        </div>
      </div>
    </div>
  );
}
