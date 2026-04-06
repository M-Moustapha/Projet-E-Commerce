import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10 p-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        
        <div className="">
          <h2 className="text-xl font-bold">Yomble-Tech</h2>
          <p className="text-sm mt-2 ">
            Votre boutique en ligne avec ces matériels technologique de qualité.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Liens utiles</h3>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Accueil</Link></li>
            <li><Link to="/products" className="hover:underline">Produits</Link></li>
            <li><Link to="/cart" className="hover:underline">Panier</Link></li>
            <li><Link to="/about" className="hover:underline">À propos</Link></li>
          </ul>
        </div>

        <div>
            <h3 className="font-semibold mb-2">Suivez-nous</h3>
            <ul className="space-y-1">
              <li><a href="https://facebook.com/yombletech" target="_blank" className="hover:underline">Facebook</a></li>
              <li><a href="https://instagram.com/yombletech" target="_blank" className="hover:underline">Instagram</a></li>
              <li><a href="https://twitter.com/yombletech" target="_blank" className="hover:underline">Twitter</a></li>
              <li><a href="https://linkedin.com/company/yombletech" target="_blank" className="hover:underline">LinkedIn</a></li>
            </ul>
        </div>

      </div>

      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Yomble Tech - Tous droits réservés
      </div>
    </footer>
  );
}