import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, X } from "lucide-react";

export default function Realisations() {
  const [projetActif, setProjetActif] = useState(null);

  const projets = [
    {
      titre: "Projet: Lampe Solaire",
      description:
        "Projet humanitaire.",
      techno: ["Solidworks", "Arduino"],
      details: [
        "Conception mécanique de la lampe avec Solidworks.",
        "Câblage et intégration du panneau solaire.",
        "Programmation du microcontrôleur pour gérer la recharge automatique.",
      ],
    },
    {
      titre: "Projet: Robot Suiveur de ligne",
      description:
        "Compétition Gamel Trophy.",
      techno: ["Kicad", "MPLabX", "PicSimuGamel"],
      details: [
        "Création des cartes capteur et puissance sous Kicad.",
        "Programmation du microcontrôleur avec MPLabX.",
        "Simulation du robot suiveur avec PicSimuGamel.",
      ],
    },
    {
      titre: "Projet: Tracker solaire",
      description:
        "Maximisation de la production d’énergie",
      techno: ["Solidworks", "Kicad", "LogoSoft Comfort v8.3", "VS Code"],
      details: [
        "Modélisation 3D du tracker sous Solidworks.",
        "Création de la carte capteur sur Kicad.",
        "Programmation du logo SIEMENS, des capteurs et du moteur via LogoSoft Comfort v8.3.",
        "Programmation de l'esp32 sur VS Code.",
      ],
    },
    {
      titre: "Création d'un site internet",
      description:
        "Site professionel déployé sur domaine privé.",
      techno: ["base44"],
      details: [
        "Développement de A à Z sur https://kaizer-repair5993.base44.app/",
      ],
    },
    {
      titre: "Création d'un Portfolio",
      description:
        "Site personnel déployé sur domaine public avec React et Tailwind.",
      techno: ["React", "Vite", "Tailwind", "GitHub", "Netlify",],
      details: [
        "Développement de A à Z du portfolio sur https://portfollio-soriba.netlify.app/, hébergement, SEO de base, responsive design, organisation des fichiers en composants clairs.",
      ],
    },
  ];

  return (
    <section id="realisations" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-4 border-l-8 border-blue-600 pl-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mes Réalisations
        </motion.h2>

        <p className="text-gray-600 mb-12">
          Découvrez les projets réalisés en autonomie ou dans le cadre de la
          formation, liés à la conception électronique, à la programmation et à
          l’innovation technologique.
        </p>

        {/* --- Cartes des projets --- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projets.map((projet, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow cursor-pointer"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {projet.titre}
              </h3>
              <p className="text-gray-600 mb-4">{projet.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {projet.techno.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setProjetActif(projet)}
                className="inline-flex items-center text-blue-600 hover:underline font-medium"
              >
                En savoir plus
                <ExternalLink className="ml-1 w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- MODALE --- */}
      <AnimatePresence>
        {projetActif && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setProjetActif(null)}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            >
              <div className="bg-white max-w-2xl w-full mx-6 rounded-2xl shadow-2xl p-8 relative">
                <button
                  onClick={() => setProjetActif(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                  <X size={22} />
                </button>

                <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                  {projetActif.titre}
                </h3>
                <p className="text-gray-700 mb-6">{projetActif.description}</p>

                {projetActif.details && (
                  <>
                    <h4 className="text-lg font-semibold text-blue-700 mb-2">
                      Détails du projet :
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                      {projetActif.details.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="flex flex-wrap gap-2">
                  {projetActif.techno.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
