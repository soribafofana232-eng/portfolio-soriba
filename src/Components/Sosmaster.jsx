import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function Sosmaster() {
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
          SOS MASTER – CONTRAT D’APPRENTISSAGE
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
            src="/sosmaster.jpg"
            alt="Logo SOS MASTER"
            className="w-52 h-52 object-contain mb-6"
          />
          <h1 className="text-4xl font-bold text-center">SOS MASTER</h1>
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
            <li><strong>Nom :</strong> SOS MASTER</li>
            <li><strong>Forme juridique :</strong> SASU, société par actions simplifiée unipersonnelle</li>
            <li><strong>Capital :</strong> 50 000,00 €</li>
            <li><strong>Chiffre d'affaire :</strong> Non communiqué</li>
            <li><strong>Siège social :</strong> 59 RUE DE TURBIGO, 75003 PARIS </li>
            <li><strong>Président :</strong> Monsieur Saada Rudy</li>
            <li><strong>Domaine d'activité :</strong> Réparation d'ordinateurs et de biens personnels et domestiques</li>
            <li>
              <strong>Site internet :</strong>{" "}
              <a
                href="https://sosmaster.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://sosmaster.com/
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
          SOSmaster est un centre de réparation informatique à Paris 16e spécialisé 
          dans le diagnostic et la réparation de MacBook, iMac, PC portables et fixes, 
          iPhone, iPad et PS5. Nos techniciens interviennent également pour la récupération 
          de vos données sur disques durs, SSD et appareils en panne.
        </p>

      </motion.div>

{/* --- BARRE DE NAVIGATION STYLE RÉGION --- */}
<div className="w-full bg-gradient-to-r from-gray-700 via-blue-800 to-blue-500 text-white py-4 px-6 flex flex-col items-center">
  {/* Conteneur intérieur arrondi */}
<div className="bg-white text-gray-800 rounded-full shadow-lg flex flex-col md:flex-row justify-between items-center w-full px-6 py-3 gap-4 md:gap-10">
    {/* Titre à gauche */}
    <h1 className="text-xl font-semibold text-gray-900">
      ALTERNANCE BTS SIO(OPTION SISR) – SOS MASTER
    </h1>

    {/* Onglets à droite */}
    <div className="flex items-center gap-10">
      {["Entreprise", "Missions", "Conclusion"].map((onglet) => (
        <button
          key={onglet}
          onClick={() => scrollToSection(onglet)}
          className={`relative font-medium text-lg transition ${
            ongletActif === onglet
              ? "text-orange-500"
              : "text-gray-500 hover:text-blue-700"
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
</div>

      {/* --- SECTIONS --- */}
      <div className="max-w-6xl mx-auto mt-6 space-y-4">
        {/* I Entreprise */}
        <section ref={entrepriseRef} className="flex items-start gap-4 mb-4">
          <div className="w-1 bg-blue-600 h-14 mt-1"></div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">I Entreprise</h2>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">1. Fonctionnement</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li><strong></strong> </li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">2. Organisation interne</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li></li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">3. Points forts</h3>
            <ul className="list-disc list-inside space-y-1 mb-2 text-gray-700">
              <li></li>
            </ul>
          </div>
        </section>

        {/* II Missions */}
        <section ref={missionsRef} className="flex items-start gap-4 mb-4">
          <div className="w-1 bg-blue-600 h-14 mt-1"></div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">II Missions</h2>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Détails des missions</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700 mb-2">
              <li></li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Activités principales</h3>
            <ul className="list-disc list-inside space-y-1 mb-2">
              <li><strong>Installation et configuration informatique :</strong> Installation et configuration de postes Windows et macOS, mise à jour des systèmes, installation de logiciels et préparation des équipements pour les clients.</li>
              <li><strong>Installation et maintenance réseau :</strong> Installation de solutions Wi-Fi professionnelles Ubiquiti UniFi, raccordement réseau, câblage, brassage et participation aux interventions sur des infrastructures fibre pour les entreprises.</li>
              <li><strong>Installation de solutions professionnelles :</strong> Installation et mise en service de caméras de surveillance, systèmes de contrôle d’accès et écrans LED professionnels.</li>
              <li><strong>Maintenance et assistance :</strong> "Diagnostic, maintenance et résolution de problèmes matériels ou logiciels, avec intervention et assistance auprès des clients professionnels.</li>
            </ul>

            <h3 className="text-3xl font-semibold text-blue-800 mb-2">Technologies utilisées</h3>
            <ul className="list-disc list-inside space-y-1">
              <li></li>
              <li></li>
            </ul>
          </div>
        </section>

        {/* III Conclusion */}
        <section ref={conclusionRef} className="flex items-start gap-4 mb-2">
          <div className="w-1 bg-blue-600 h-14 mt-1"></div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-2">III Conclusion</h2>
            <p className="text-gray-800">

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
