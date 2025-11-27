import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

export default function Realisations() {
  const [projetActif, setProjetActif] = useState(null);

  const projets = [
    {
      titre: "Projet : Lampe Solaire",
      description: "Projet humanitaire.",
      techno: ["Solidworks", "Arduino"],
      image: "/Lampe solaire.jpg",
      details: [
        "Conception mécanique de la lampe avec Solidworks.",
        "Câblage et intégration du panneau solaire.",
        "Programmation du microcontrôleur pour gérer la recharge automatique.",
      ],
    },
    {
      titre: "Projet : Robot Suiveur de ligne",
      description: "Compétition Gamel Trophy.",
      techno: ["Kicad", "MPLabX", "PicSimuGamel"],
      image: "/Gamelle.jpg",
      details: [
        "Création des cartes capteur et puissance sous Kicad.",
        "Brasure à l'étain des composants sur les cartes.",
        "Programmation du microcontrôleur avec MPLabX.",
        "Simulation du robot suiveur avec PicSimuGamel.",
      ],
    },
    {
      titre: "Projet : Tracker solaire",
      description: "Maximisation de la production d’énergie.",
      techno: ["Solidworks", "Kicad", "LogoSoft Comfort v8.3", "VS Code"],
      image: "/Tracker solaire.jpg",
      details: [
        "Modélisation 3D du tracker sous Solidworks.",
        "Création de la carte capteur sur Kicad.",
        "Brasure à l'étain des composants sur les cartes.",
        "Programmation du logo SIEMENS via LogoSoft Comfort v8.3.",
        "Programmation de l'esp32 sur VS Code.",
      ],
    },
    {
      titre: "Création d'un site internet",
      description: "Site professionnel déployé sur domaine privé.",
      techno: ["base44"],
      image: "/Kaizer-repair.jpg",
      details: [
        "Développement de A à Z sur https://kaizer-repair5993.base44.app.",
      ],
    },
    {
      titre: "Création d'un Portfolio",
      description: "Site personnel déployé sur domaine public avec React et Tailwind.",
      techno: ["VSCode", "React", "Vite", "Tailwind", "Node.js.", "GitHub", "Netlify"],
      image: "/Portfolio.jpg",
      details: [
        "Développement complet du portfolio sur Netlify, avec SEO, responsive design et structure modulaire.",
      ],
    },
  ];

  return (
    <section id="realisations" className="py-20 px-8 md:px-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-4 border-l-8 border-blue-600 pl-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mes Réalisations
        </motion.h2>

        <p className="text-gray-600 mb-12">
          Découvrez les projets réalisés en autonomie ou dans le cadre de mon
          parcours scolaire, liés à la conception électronique, à la programmation
          et à l’innovation technologique.
        </p>

        {/* --- Cartes --- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projets.map((projet, i) => (
            <motion.div
              key={i}
              className="bg-gray-50 border border-gray-200 shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={projet.image}
                alt={projet.titre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {projet.titre}
                </h3>
                <p className="text-gray-600 mb-4">{projet.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projet.techno.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setProjetActif(projet)}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
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
        {projetActif && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setProjetActif(null)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden">
                <div className="relative">
                  <img
                    src={projetActif.image}
                    alt={projetActif.titre}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setProjetActif(null)}
                    className="absolute top-4 right-4 text-white bg-black/40 rounded-full p-1 hover:bg-black/60"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-800">
                      {projetActif.titre}
                    </h3>
                    <p className="text-gray-600">{projetActif.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">
                      Détails du projet :
                    </h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {projetActif.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">
                      Technologies utilisées :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {projetActif.techno.map((t, idx) => (
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
                      onClick={() => setProjetActif(null)}
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
