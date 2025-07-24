export default function Campus() {
  const campusLocations = [
    { city: "Casablanca", sites: "Campus principal" },
    { city: "Rabat", sites: "4 sites" },
    { city: "Marrakech", sites: "3 sites" },
    { city: "Tanger", sites: "2 sites" },
    { city: "Fès", sites: "2 sites" }
  ];

  return (
    <section id="campus" className="py-20 bg-emsi-green text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Nos 19 Campus</h2>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            L'EMSI compte au total 19 sites dans le Royaume du Maroc. Chacun équipé de matériels didactiques sophistiqués pour les travaux pratiques et la recherche.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 text-center mb-8">
          {campusLocations.map((location, index) => (
            <div key={index} className="bg-white bg-opacity-20 rounded-lg p-4">
              <h3 className="font-bold text-lg">{location.city}</h3>
              <p className="text-sm opacity-80">{location.sites}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="overflow-hidden rounded-xl shadow-2xl mb-8 max-w-4xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="Campus universitaire moderne avec bâtiments contemporains" 
              className="w-full h-auto"
            />
          </div>
          <a 
            href="#" 
            className="inline-flex items-center bg-white text-emsi-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            En savoir plus
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
