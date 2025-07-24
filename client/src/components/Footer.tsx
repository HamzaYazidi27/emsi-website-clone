export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About EMSI */}
          <div>
            <img 
              src="https://emsi.ma/wp-content/uploads/2024/03/logo-vert.png" 
              alt="EMSI - École Marocaine des Sciences de l'Ingénieur" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              L'École Marocaine des Sciences de l'Ingénieur, créée il y a plus de 39 ans, est la plus grande école d'ingénieurs privée au Maroc.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/emsi.ma/" className="text-gray-400 hover:text-emsi-green transition-colors">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://www.instagram.com/emsigroupe.officiel/" className="text-gray-400 hover:text-emsi-green transition-colors">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://www.tiktok.com/@groupe.emsi" className="text-gray-400 hover:text-emsi-green transition-colors">
                <i className="fab fa-tiktok text-xl"></i>
              </a>
              <a href="https://www.linkedin.com/school/ecole-marocaine-des-sciences-de-l'ing%C3%A9nieur" className="text-gray-400 hover:text-emsi-green transition-colors">
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC5BiOBai2N48ytbCRQWWqJw" className="text-gray-400 hover:text-emsi-green transition-colors">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>

          {/* EMSI Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">EMSI</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Présentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Réseau Honoris</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Nos Actualités</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Campus</a></li>
            </ul>
          </div>

          {/* Employabilité */}
          <div>
            <h3 className="text-lg font-bold mb-4">Employabilité</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Recruteurs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Centre de carrière</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">21st century skills</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Alumni</a></li>
            </ul>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-lg font-bold mb-4">Formations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Ingénierie Informatique et Réseaux</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Génie Électrique et Systèmes Intelligents</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Ingénierie Automatisme</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Génie Civil, BTP</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Génie Industriel</a></li>
              <li><a href="#" className="text-gray-400 hover:text-emsi-green transition-colors">Génie Financier</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 EMSI - École Marocaine des Sciences de l'Ingénieur. Tous droits réservés.
          </p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-gray-400 hover:text-emsi-green transition-colors text-sm">
              Charte de protection des données à caractère personnel
            </a>
            <a href="#" className="text-gray-400 hover:text-emsi-green transition-colors text-sm">
              Plan de site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
