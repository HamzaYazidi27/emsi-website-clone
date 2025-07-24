export default function Employability() {
  const services = [
    {
      icon: "fas fa-building",
      title: "Centres de carrières",
      description: "6 centres dédiés à l'accompagnement des élèves ingénieurs."
    },
    {
      icon: "fas fa-handshake",
      title: "Nos recruteurs",
      description: "240 entreprises partenaires offrant stages et emplois."
    },
    {
      icon: "fas fa-certificate",
      title: "21st century skills",
      description: "Certifications en soft skills et hard skills tout au long du parcours."
    },
    {
      icon: "fas fa-users",
      title: "Alumni",
      description: "Réseau actif de 20 000 diplômés pour mentorat et networking."
    }
  ];

  return (
    <section id="employabilite" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Employabilité</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Les alumni de l'EMSI sont très recherchés par les entreprises tant au niveau national qu'international.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-emsi-light-green rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <i className={`${service.icon} text-emsi-green text-2xl`}></i>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Cette reconnaissance est le fruit de plusieurs atouts distinctifs qui renforcent l'employabilité de nos diplômés dans un marché de travail en constante évolution.
          </p>
        </div>
      </div>
    </section>
  );
}
