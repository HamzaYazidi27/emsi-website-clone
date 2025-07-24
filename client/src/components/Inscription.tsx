import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Inscription() {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    filiere: ""
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.prenom || !formData.nom || !formData.email || !formData.telephone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Candidature envoyée !",
      description: "Votre candidature a été envoyée avec succès. Nous vous contactrons bientôt."
    });

    // Reset form
    setFormData({
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
      filiere: ""
    });
  };

  return (
    <section id="inscription" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Rejoignez l'EMSI</h2>
          <p className="text-xl mb-8 opacity-90">
            Commencez votre parcours vers l'excellence en ingénierie. Inscrivez-vous dès maintenant pour la prochaine rentrée.
          </p>
          
          <div className="bg-white bg-opacity-10 rounded-xl p-8 max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Prénom *</label>
                  <Input
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => handleInputChange('prenom', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Nom *</label>
                  <Input
                    type="text"
                    value={formData.nom}
                    onChange={(e) => handleInputChange('nom', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone *</label>
                <Input
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => handleInputChange('telephone', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="+212 6 00 00 00 00"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Filière d'intérêt</label>
                <Select value={formData.filiere} onValueChange={(value) => handleInputChange('filiere', value)}>
                  <SelectTrigger className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-green-500">
                    <SelectValue placeholder="Choisissez une filière" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="informatique">Ingénierie Informatique & Réseaux</SelectItem>
                    <SelectItem value="electrique">Génie Électrique et Systèmes Intelligents</SelectItem>
                    <SelectItem value="automatisme">Ingénierie Automatisme et Informatique Industrielle</SelectItem>
                    <SelectItem value="civil">Génie Civil, Bâtiments et Travaux Publics</SelectItem>
                    <SelectItem value="industriel">Génie Industriel</SelectItem>
                    <SelectItem value="financier">Génie Financier</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-emsi-green hover:bg-emsi-dark-green text-white font-bold py-4 px-8 rounded-lg transition-colors"
              >
                Envoyer ma candidature
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
