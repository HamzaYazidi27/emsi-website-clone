export default function Research() {
  const researchAreas = [
    {
      title: "Stratégie de recherche",
      description: "Développement de la recherche scientifique académique et appliquée.",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Équipement de laboratoire avancé"
    },
    {
      title: "Partenaires de recherche",
      description: "Collaborations stratégiques avec universités et entreprises internationales.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Collaboration universitaire et partenariats"
    },
    {
      title: "Prix & classements",
      description: "Reconnaissance nationale et internationale de nos travaux de recherche.",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
      alt: "Cérémonie de remise de prix et distinctions"
    }
  ];

  return (
    <section id="recherche" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre stratégie de recherche</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            À travers ses laboratoires de recherche, l'EMSI déploie un environnement propice au développement de la recherche scientifique académique et appliquée.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="text-center group">
              <div className="overflow-hidden rounded-xl mb-6">
                <img 
                  src={area.image} 
                  alt={area.alt} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <a 
                href="#" 
                className="inline-flex items-center text-emsi-green font-semibold hover:text-green-800 transition-colors"
              >
                En savoir plus
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
