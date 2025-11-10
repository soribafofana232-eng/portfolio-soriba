import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Dentegen() {
  const [ongletActif, setOngletActif] = useState("Entreprise");

  const entrepriseRef = useRef(null);
  const missionsRef = useRef(null);

    useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const scrollToSection = (section) => {
    setOngletActif(section);
    let ref = null;
    if (section === "Entreprise") ref = entrepriseRef;
    else if (section === "Missions") ref = missionsRef;

    if (ref && ref.current) {
      const offset = ref.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen bg-white text-gray-900 py-16 px-6 md:px-20 text-lg">
      {/* --- TITRE PRINCIPAL --- */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          DENTEGEN – CONTRAT D’APPRENTISSAGE
        </h2>
      </div>

      {/* --- Bloc principal avec logo et informations --- */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        <motion.div
          className="bg-blue-900 text-white p-10 rounded-2xl flex-1 flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src="/dentegen.jpg"
            alt="Logo Dentegen"
            className="w-52 h-52 object-contain mb-6"
          />
          <h1 className="text-4xl font-bold text-center">Dentegen</h1>
        </motion.div>

        <motion.div
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex-1 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Informations sur l'institution :
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Nom :</strong> Dentegen</li>
            <li><strong>Forme juridique :</strong> SAS, société par actions simplifiée</li>
            <li><strong>Capital :</strong> -1000,00 €</li>
            <li><strong>Chiffre d'affaire :</strong> Non communiqué</li>
            <li><strong>Siège social :</strong> 68 RUE JEAN JAURES, 77130 MONTEREAU-FAULT-YONNE</li>
            <li><strong>Président :</strong> Monsieur Sayada Alexandre</li>
            <li><strong>Domaine d'activité :</strong> Activités des sièges sociaux ; conseil de gestion</li>
            <li><strong>Site internet :</strong> Non communiqué</li>
          </ul>
        </motion.div>
      </div>

      {/* --- Domaine d'activité --- */}
      <motion.div
        className="max-w-6xl mx-auto mt-16 bg-white text-gray-800 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold mb-4 border-b-4 border-blue-600 inline-block pb-1">
          Domaine d'activités principales :
        </h2>

        <p className="mb-4">
         Dentegen accompagne la création et l’exploitation de centres de santé et dentaires en proposant un modèle clé‑en‑main. Fondée en 2023, l’entreprise met à disposition des ressources humaines, des solutions logicielles, des outils marketing et un accompagnement juridique pour ses implantations.
        </p>

        <p className="mb-4">
          Elle agit également comme structure de conseil pour les affaires et la gestion des sièges sociaux, offrant aux entrepreneurs et établissements de santé un support stratégique et opérationnel.
        </p>
      </motion.div>

      {/* --- BARRE D'ONGLETS STICKY --- */}
      <div className="max-w-6xl mx-auto mt-12 flex flex-col items-center">
        <div className="sticky top-6 z-50 bg-white rounded-full shadow-md flex justify-center gap-8 py-3 px-8 w-fit mx-auto">
          {["Entreprise", "Missions"].map((onglet) => (
            <button
              key={onglet}
              onClick={() => scrollToSection(onglet)}
              className={`relative font-semibold text-lg transition ${
                ongletActif === onglet
                  ? "text-orange-500"
                  : "text-gray-500 hover:text-blue-600"
              }`}
            >
              {onglet}
              {ongletActif === onglet && (
                <span className="absolute left-0 right-0 -bottom-1 mx-auto w-6 h-[2px] bg-orange-400 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* --- SECTIONS --- */}
      <div className="max-w-6xl mx-auto mt-6 space-y-4">
        {/* I Entreprise */}
        <section ref={entrepriseRef} className="flex items-start gap-4 mb-4">
          <div className="w-1 bg-blue-600 h-14 mt-1"></div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">I Entreprise</h2>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">1. Fonctionnement :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li><strong>Accueil client :</strong> Les clients sont reçus pour diagnostiquer leurs besoins et obtenir des conseils.</li>
              <li><strong>Service technique :</strong> L’entreprise propose un accompagnement et des solutions de gestion pour les activités internes.</li>
              <li><strong>Organisation :</strong> Chaque activité suit un protocole interne pour assurer efficacité et qualité.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">2. Organisation interne :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li><strong>Direction :</strong> Président Monsieur Sayada Alexandre avec une structure de gestion classique.</li>
              <li><strong>Équipe :</strong> Composée de collaborateurs spécialisés en gestion et organisation.</li>
              <li><strong>Support administratif :</strong> Gestion des opérations internes et suivi des projets.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">3. Points forts :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li>Expertise dans le conseil de gestion</li>
              <li>Structure interne organisée</li>
              <li>Suivi précis des activités</li>
              <li>Réactivité et accompagnement des clients internes</li>
            </ul>
          </div>
        </section>

        {/* II Missions */}
        <section ref={missionsRef} className="flex items-start gap-4 mb-2">
          <div className="w-1 bg-blue-600 h-14 mt-1"></div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">II Missions</h2>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Détails des missions :</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2">
              <li>Analyse et suivi des opérations internes</li>
              <li>Gestion administrative et organisation des projets</li>
              <li>Accompagnement des équipes dans la prise de décision</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Activités principales :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><strong>Gestion de projets :</strong> Suivi et coordination des tâches et équipes.</li>
              <li><strong>Support administratif :</strong> Gestion de documents et reporting.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Technologies utilisées :</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Outils bureautiques standards</li>
              <li>Logiciels de gestion internes</li>
              <li>VS Code</li>
              <li>Vite </li>
              <li>React</li>
              <li>Tailwindcss</li>
              <li>GitHub</li>
              <li>Netlify</li>
            </ul>
          </div>
        </section>
      </div>

      {/* --- BOUTON RETOUR --- */}
      <div className="mt-4 text-center">
        <button
          onClick={() => window.history.back()}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md text-xl"
        >
          ⬅ Retour
        </button>
      </div>
    </section>
  );
}
