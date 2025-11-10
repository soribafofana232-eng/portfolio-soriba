import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function BlediPhone() {
  const [ongletActif, setOngletActif] = useState("Entreprise");

  const entrepriseRef = useRef(null);
  const missionsRef = useRef(null);
  const conclusionRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const scrollToSection = (section) => {
    setOngletActif(section);
    let ref = null;
    if (section === "Entreprise") ref = entrepriseRef;
    else if (section === "Missions") ref = missionsRef;
    else if (section === "Conclusion") ref = conclusionRef;

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-20 text-lg">
      {/* --- TITRE PRINCIPAL --- */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          BLEDIPHONE – STAGE D'OBSERVATION
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
            src="/blediphone.jpg"
            alt="Logo BlediPhone"
            className="w-48 h-48 object-contain mb-6"
          />
          <h1 className="text-4xl font-bold text-center">BlediPhone</h1>
        </motion.div>

        <motion.div
          className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex-1 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-blue-900">
            Informations sur l'entreprise :
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Nom :</strong> BlediPhone</li>
            <li><strong>Forme juridique :</strong> SAS, société par actions simplifiée</li>
            <li><strong>Capital :</strong> Non communiqué</li>
            <li><strong>Chiffre d'affaire :</strong> Non communiqué</li>
            <li><strong>Siège social :</strong> Non communiqué</li>
            <li><strong>Président :</strong> Non communiqué</li>
            <li><strong>Domaine d'activité :</strong> Vente et réparation de smartphones</li>
            <li>
              <strong>Site internet :</strong>{" "}
              <span className="text-gray-500">Non communiqué</span>
            </li>
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
          BlediPhone est spécialisé dans la vente et la réparation de smartphones et tablettes.
          Le stage d'observation m'a permis de découvrir le fonctionnement interne et les techniques
          de maintenance sur différents appareils.
        </p>
      </motion.div>

      {/* --- BARRE D'ONGLETS --- */}
      <div className="max-w-6xl mx-auto mt-8 flex flex-col items-center">
        <div className="bg-white rounded-full shadow-md flex justify-center gap-8 py-3 px-8 w-fit mx-auto">
          {["Entreprise", "Missions", "Conclusion"].map((onglet) => (
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
              <li><strong>Accueil client :</strong> Découverte des produits et conseils personnalisés.</li>
              <li><strong>Service technique :</strong> Apprentissage des techniques de maintenance et réparation de smartphones.</li>
              <li><strong>Organisation :</strong> Diagnostic des problèmes matériels et logiciels.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">2. Organisation interne :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li><strong>Direction :</strong> Supervision par le responsable du magasin et du service technique.</li>
              <li><strong>Équipe technique :</strong> Techniciens spécialisés pour le démontage et la réparation des appareils électroniques.</li>
              <li><strong>Support administratif :</strong> Gestion des interventions et suivi du matériel.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">3. Points forts :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li>Expérience pratique dans la réparation de smartphones.</li>
              <li>Accueil et conseil client.</li>
              <li>Connaissance des outils techniques et logiciels internes.</li>
            </ul>
          </div>
        </section>

        {/* II Missions */}
        <section ref={missionsRef} className="flex items-start gap-4 mb-4">
          <div className="w-1 bg-blue-600 h-14 mt-1"></div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">II Missions</h2>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Détails des missions :</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2">
              <li>Apprentissage des techniques de maintenance et réparation de smartphones.</li>
              <li>Accueil et conseil client pour le choix de produits et services.</li>
              <li>Diagnostic des problèmes matériels et logiciels.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Activités principales :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><strong>Maintenance et assistance technique :</strong> Vente, diagnostic, démontage et réparation d’appareils électroniques.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Technologies utilisées :</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Apple Configurator</li>
            </ul>
          </div>
        </section>

        {/* III Conclusion */}
        <section ref={conclusionRef} className="flex items-start gap-4 mb-2">
          <div className="w-1 bg-blue-600 h-14 mt-1"></div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">III Conclusion</h2>
            <p className="text-gray-800">
              Ce stage que j'ai effectué au sein de l'entreprise BlediPhone a été très instructif pour mon développement professionnel. 
              J'ai pu acquérir de nombreuses compétences pratiques et comprendre l'organisation d'une entreprise technologique.
            </p>
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
