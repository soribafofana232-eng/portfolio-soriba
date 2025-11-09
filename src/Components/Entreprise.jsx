import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

export default function Entreprise() {
  const [entrepriseActive, setEntrepriseActive] = useState(null);

  const entreprises = [
    {
      nom: "BlediPhone",
      periode: "Juin 2019 – Juin 2019 | Stage d'observation",
      description:
        "Vendeur et technicien",
      image: "/blediphone.jpg",
      details: [
        "Réparation de smartphones, tablettes et ordinateurs.",
        "Accueil et conseil client pour le choix de produits et services.",
                ],
      activites: [
        {
          categorie: "Maintenance et assistance technique",
          contenu:
            "Diagnostic, démontage et réparation d’appareils électroniques.",
        },
      ],
    },
    {
      nom: "Save La Défense",
      periode: "Octobre 2024 – Août 2025 | Contrat d’apprentissage",
      description:
        "Vendeur et technicien spécialisé dans la réparation et le service client au sein d’un environnement technologique exigeant.",
      image: "/save.jpg",
      details: [
        "Réparation de smartphones, tablettes et ordinateurs.",
        "Accueil et conseil client pour le choix de produits et services.",
        "Utilisation de plateformes techniques internes pour la gestion des réparations.",
        "Gestion du matériel et suivi des interventions.",
      ],
      activites: [
        {
          categorie: "Maintenance et assistance technique",
          contenu:
            "Diagnostic, démontage et réparation d’appareils électroniques.",
        },
        {
          categorie: "Service et support informatique",
          contenu:
            "Installation, mise à jour et suivi des appareils clients.",
        },
      ],
      techno: ["Trepidai", "Picea Soft"],
    },
    {
      nom: "Save Wagram",
      periode: "Août 2025 – Octobre 2025 | Contrat d’apprentissage",
      description:
        "Vendeur et technicien spécialisé dans la réparation et le service client au sein d’un environnement technologique exigeant.",
      image: "/save.jpg",
      details: [
        "Réparation de smartphones, tablettes et ordinateurs.",
        "Accueil et conseil client pour le choix de produits et services.",
        "Utilisation des plateformes techniques Apple (GSX) et Samsung (GSPN).",
        "Gestion du matériel et suivi des interventions.",
      ],
      activites: [
        {
          categorie: "Maintenance et assistance technique",
          contenu:
            "Diagnostic, démontage et réparation d’appareils électroniques.",
        },
        {
          categorie: "Service et support informatique",
          contenu:
            "Installation, mise à jour et suivi des appareils clients.",
        },
      ],
      techno: ["GSX (Apple)", "GSPN (Samsung)", "Trepidai", "Picea Soft"],
    },
    {
      nom: "Dentegen",
      periode: "Novembre 2025 – Novembre 2026 | Contrat d’apprentissage",
      description:
        "Développeur d’applications et d’outils métiers, spécialisé dans la conception, la maintenance et l’optimisation de solutions logicielles adaptées aux besoins des utilisateurs.",
      image: "dentegen.jpg",
      details: [
        "Développer et maintenir des outils numériques internes.",
        "Assurer la gestion et la sécurité du système informatique.",
        "Automatiser et optimiser les processus informatiques.",
        "Assurer le support technique et l’assistance aux utilisateur.",
        "Concevoir et développer des applications métiers adaptées aux besoins de l’entreprise.",
      ],
      activites: [
        {
          categorie: "Développement et maintenance d’applications",
          contenu:
            "Conception, codage, tests et mise à jour de solutions logicielles internes.",
        },
        {
          categorie: "Assistance technique et support utilisateur",
          contenu:
            "Analyse des incidents, résolution de problèmes et accompagnement des utilisateurs.",
        },
      ],
      techno: ["Vite", "React", "GitHub", "Netlify"],
    },
  ];

  return (
    <section id="entreprise" className="py-20 px-10 bg-white text-gray-900 ml-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-4 border-l-8 border-blue-600 pl-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mes Entreprises
        </motion.h2>

        <p className="text-gray-600 mb-12">
          Voici les expériences professionnelles réalisées dans le cadre de mes formations, au sein de mes entreprises.
        </p>

        {/* --- Cartes --- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {entreprises.map((entreprise, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 border border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={entreprise.image}
                alt={entreprise.nom}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-1">
                  {entreprise.nom}
                </h3>
                <p className="text-gray-500 text-sm mb-2">{entreprise.periode}</p>
                <p className="text-gray-600 mb-4 text-sm">
                  {entreprise.description}
                </p>

                <button
                  onClick={() => setEntrepriseActive(entreprise)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm"
                >
                  En savoir plus
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Modale --- */}
      <AnimatePresence>
        {entrepriseActive && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setEntrepriseActive(null)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden relative flex flex-col max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={entrepriseActive.image}
                    alt={entrepriseActive.nom}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => setEntrepriseActive(null)}
                    className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-1 hover:bg-black/60"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="p-6 overflow-y-auto flex-1 space-y-6">
                  <h3 className="text-2xl font-bold text-blue-800">
                    {entrepriseActive.nom}
                  </h3>
                  <p className="text-gray-500">{entrepriseActive.periode}</p>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">
                      Détails
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {entrepriseActive.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">
                      Activités principales
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {entrepriseActive.activites.map((a, i) => (
                        <div
                          key={i}
                          className="p-4 bg-blue-50 rounded-lg border border-blue-200"
                        >
                          <h5 className="text-blue-700 font-medium">
                            {a.categorie}
                          </h5>
                          <p className="text-gray-600 text-sm">{a.contenu}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {entrepriseActive.techno.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full border border-blue-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <button
                      onClick={() => setEntrepriseActive(null)}
                      className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      Fermer
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
