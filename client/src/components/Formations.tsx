import { Card, CardContent } from "@/components/ui/card";

const formations = [
  {
    title: "Ingénierie Informatique & Réseaux",
    description: "Devenez un ingénieur spécialisé en technologies de l'information, en cybersécurité ou en intelligence artificielle.",
    competences: "Développement digital, cybersécurité, intelligence artificielle.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Étudiants en ingénierie informatique"
  },
  {
    title: "Génie Électrique et Systèmes Intelligents",
    description: "Une formation solide en Génie Électrique et technologies modernes, incluant les réseaux intelligents.",
    competences: "Électrotechnique, systèmes automatisés, smart grids, énergies renouvelables.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Équipement d'ingénierie électrique"
  },
  {
    title: "Ingénierie Automatisme et Informatique Industrielle",
    description: "Maîtrisez les technologies de contrôle, de pilotage et de supervision pour façonner l'usine du futur.",
    competences: "Contrôle-commande, réseaux industriels, systèmes automatisés.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Automatisation industrielle et robotique"
  },
  {
    title: "Génie Civil, Bâtiments et Travaux Publics",
    description: "Construisez des infrastructures durables en tant qu'Ingénieur en Génie Civil spécialisé BTP.",
    competences: "Conception structures, gestion chantiers, infrastructures, construction durable.",
    image: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Chantier de génie civil"
  },
  {
    title: "Génie Industriel",
    description: "Une expertise technique et managériale pour piloter la performance industrielle et l'optimisation des processus.",
    competences: "Gestion production, logistique, maintenance systèmes, management qualité.",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Production industrielle et logistique"
  },
  {
    title: "Génie Financier",
    description: "Bâtissez votre carrière dans la finance avec une formation d'ingénieur spécialisée et innovante.",
    competences: "Gestion risques, finance marchés, stratégie investissements, actuariat.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    alt: "Analyse financière et trading"
  }
];

export default function Formations() {
  return (
    <section id="formations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Nos formations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous offrons à nos élèves ingénieurs une formation d'excellence, enrichie d'expériences concrètes qui les préparent à une carrière réussie.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formations.map((formation, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="overflow-hidden">
                <img 
                  src={formation.image} 
                  alt={formation.alt} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{formation.title}</h3>
                <p className="text-gray-600 mb-4">{formation.description}</p>
                <div className="mb-4">
                  <p className="text-sm text-gray-500 font-medium">Compétences clés :</p>
                  <p className="text-sm text-gray-600">{formation.competences}</p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center text-emsi-green font-semibold hover:text-green-800 transition-colors"
                >
                  En savoir plus
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
