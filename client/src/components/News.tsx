import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsArticles = [
  {
    title: "Le groupe Honoris partenaire stratégique avec Jobliment Recruiting",
    description: "Nouveau partenariat pour renforcer l'employabilité de nos diplômés...",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Étudiants ingénieurs collaborant sur des projets"
  },
  {
    title: "L'EMSI en direct avec l'astronaute américaine de la NASA",
    description: "Événement exceptionnel de connexion spatiale avec nos étudiants...",
    image: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Technologie spatiale et communications satellite"
  },
  {
    title: "EMSI: Première institution au Maroc à rejoindre le réseau CDIO",
    description: "Intégration dans le prestigieux réseau international d'éducation en ingénierie...",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Conférence internationale d'ingénierie et networking"
  },
  {
    title: "Grâce à l'EMSI, le Maroc en verve avec trois médailles",
    description: "Nos étudiants brillent dans les compétitions internationales d'ingénierie...",
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "Cérémonie de remise de diplômes avec étudiants ingénieurs"
  }
];

export default function News() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Notre Actualité</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos dernières nouvelles et événements. Restez informé des nouveautés et des moments forts de notre communauté.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article, index) => (
            <Card key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.alt} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{article.description}</p>
                <a 
                  href="#" 
                  className="text-emsi-green font-semibold hover:text-green-800 transition-colors"
                >
                  Lire la suite
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-emsi-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emsi-dark-green transition-colors">
            Toutes les actualités
          </Button>
        </div>
      </div>
    </section>
  );
}
