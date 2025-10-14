import { useState } from "react";
import { motion } from "framer-motion";

export default function Entreprise() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="p-10 min-h-screen bg-white text-gray-800">
      <h1 className="text-4xl font-bold text-blue-800 mb-2">Mon Entreprise</h1>
      <div className="w-16 h-1 bg-blue-600 mb-10"></div>

      <p className="text-gray-600 mb-8">
        Voici les expériences professionnelles réalisées dans le cadre de ma formation.
      </p>

      {/* --- Carte Entreprise --- */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-blue-700">Save La Défense</h2>
          <p className="text-gray-500">2024 – 2025 | Contrat d’apprentissage</p>
          <p className="mt-2 text-gray-600">
            Vendeur et technicien spécialisé dans la réparation et le service client
            au sein d’un environnement technologique exigeant.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            En savoir plus
          </button>
        </div>

        {/* 🔹 Ta photo locale */}
        <img
          src="/save.jpg"
          alt="Save La Défense"
          className="w-40 h-40 object-cover rounded-xl mt-6 md:mt-0 shadow-md border border-gray-200"
        />
      </div>

      {/* --- Fenêtre modale --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 overflow-hidden"
          >
            <div className="relative">
              {/* 🔹 Même photo dans la modale */}
              <img
                src="/save.jpg"
                alt="Save La Défense"
                className="w-full h-64 object-cover bg-gray-100"
              />
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-blue-700">Save La Défense</h3>
                <p className="text-gray-500">2024 – 2025 | Contrat d’apprentissage</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Description</h4>
                <p className="text-gray-600 leading-relaxed">
                  En tant que vendeur et technicien, j’assurais la réparation de
                  smartphones, tablettes ainsi que d’ordinateurs, tout en accompagnant les clients
                  dans leurs choix de produits et services. Cette expérience m’a
                  permis de développer des compétences en gestion du matériel,
                  relation client et rigueur technique.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Activités par Catégorie</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h5 className="text-blue-700 font-medium">
                      Maintenance et assistance technique
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Diagnostic, démontage et réparation de smartphones, tablettes et ordinateurs.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h5 className="text-blue-700 font-medium">
                      Service et support informatique
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Réparation, installation et suivi technique des appareils pour les clients.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["GSX (Apple)", "GSPN (Samsung)", "Trepidai", "Picea Soft"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="text-right">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Fermer
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
