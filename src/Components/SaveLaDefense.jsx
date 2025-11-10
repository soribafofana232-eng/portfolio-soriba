import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function SaveLaDefense() {
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
    <section className=" bg-white text-gray-900 py-16 px-6 md:px-20 text-lg">
      {/* --- TITRE PRINCIPAL --- */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          SAVE LA DÉFENSE – CONTRAT D’APPRENTISSAGE
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
            src="/save.jpg"
            alt="Logo Save"
            className="w-52 h-52 object-contain mb-6"
          />
          <h1 className="text-4xl font-bold text-center">Save La Défense</h1>
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
            <li><strong>Nom :</strong> Save Store</li>
            <li><strong>Forme juridique :</strong> SAS, société par actions simplifiée</li>
            <li><strong>Capital :</strong> 2 592 000,00 €</li>
            <li><strong>Chiffre d'affaire :</strong> Non communiqué</li>
            <li><strong>Siège social :</strong> 8-14 IMM COLISEE GARDENS ZAC DANTON, 8 Avenue de l'Arche, 92400 Courbevoie</li>
            <li><strong>Président :</strong> Monsieur Guian Jean-Marie</li>
            <li><strong>Domaine d'activité :</strong> Commerce de détail, à l'exception des automobiles et des motocycles</li>
            <li>
              <strong>Site internet :</strong>{" "}
              <a
                href="https://save.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://save.co/
              </a>
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
          C’est le leader européen de la réparation qui compte plus de 150 points de vente en France.
          Créée en 2006, Point Service Mobiles a racheté la société Save en 2019 et choisit en 2020
          d’utiliser le nom de ce dernier, plus évocateur de sa mission profonde et de son engagement.
        </p>

        <p className="mb-4">
          Save possède des agréments constructeurs tels que SAMSUNG, APPLE, etc. Ils garantissent leurs
          smartphones reconditionnés et revérifiés sur 33 points de contrôle pendant 2 ans.
        </p>

        <p>
          Ils possèdent également leurs propres systèmes de recyclage de pièces ou de produits électroniques.
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
              <li><strong>Accueil client :</strong> Les clients sont reçus pour diagnostiquer leurs appareils, obtenir des conseils ou faire réparer leurs appareils électroniques.</li>
              <li><strong>Service technique :</strong> Les techniciens de Save La Défense utilisent des plateformes techniques internes pour gérer les réparations et suivre chaque intervention.</li>
              <li><strong>Réparation et maintenance :</strong> Chaque appareil est vérifié et réparé selon des protocoles stricts, garantissant la qualité et la fiabilité. Les appareils reconditionnés sont testés sur 33 points de contrôle et bénéficient d’une garantie.</li>
              <li><strong>Recyclage et gestion des pièces :</strong> Save possède ses propres systèmes pour recycler les pièces et gérer les déchets électroniques, contribuant à un fonctionnement plus durable.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">2. Organisation interne :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li><strong>Direction :</strong> L’entreprise est dirigée par un président (Monsieur Guian Jean-Marie) et dispose d’une structure classique d’entreprise, avec des responsables pour la gestion commerciale, technique et administrative.</li>
              <li><strong>Équipe technique :</strong> Composée de techniciens spécialisés, formés aux interventions sur différentes marques (Apple, Samsung, etc.) et aux plateformes logicielles spécifiques (Trepidai, Picea Soft).</li>
              <li><strong>Support administratif et logistique :</strong> Gestion des stocks, suivi des interventions et relations clients.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">3. Points forts :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li>Réputation solide dans la réparation électronique</li>
              <li>Certifications et agréments constructeurs (Apple, Samsung…)</li>
              <li>Qualité de service client et suivi précis des interventions</li>
              <li>Engagement pour le recyclage et la durabilité</li>
              <li>Garantie des réparations</li>
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
              <li>Réparation de smartphones, tablettes et ordinateurs.</li>
              <li>Accueil et conseil client pour le choix de produits et services.</li>
              <li>Utilisation de plateformes techniques internes pour la gestion des réparations.</li>
              <li>Gestion du matériel et suivi des interventions.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Activités principales :</h3>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><strong>Maintenance et assistance technique :</strong> Diagnostic, démontage et réparation d’appareils électroniques.</li>
              <li><strong>Service et support informatique :</strong> Installation, mise à jour et suivi des appareils clients.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Technologies utilisées :</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Trepidai</li>
              <li>Picea Soft</li>
            </ul>
          </div>
        </section>

        {/* III Conclusion */}
        <section ref={conclusionRef} className="flex items-start gap-4 mb-2">
          <div className="w-1 bg-blue-600 h-14 mt-1"></div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">III Conclusion</h2>
            <p className="text-gray-800">
              Cette alternance que j'ai effectuée au sein de l'entreprise SAVE LA DÉFENSE a été très enrichissante pour mon développement professionnel. 
              J'ai eu l'opportunité d'acquérir de nombreuses compétences pratiques en mettant en application les connaissances pratiques lors de mes cours. 
              Mais par-dessus tout, cette alternance m'a permis d'avoir une méthodologie professionnelle et de m'adapter à un environnement d'entreprise.
            </p>
          </div>
        </section>
      </div>

      {/* --- BOUTON RETOUR --- */}
      <div className="mt-0 text-center">
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
