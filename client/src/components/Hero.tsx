import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-green-800 to-green-600 text-white">
      {/* Hero background image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080" 
          alt="Campus universitaire moderne" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative container mx-auto px-4 py-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Première école d'ingénieurs privée au Maroc
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Une formation d'excellence qui prépare les ingénieurs de demain aux défis technologiques et industriels.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              onClick={() => scrollToSection('formations')}
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Nos formations
            </Button>
            <Button
              onClick={() => scrollToSection('recherche')}
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors bg-transparent"
            >
              Recherche & innovation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
