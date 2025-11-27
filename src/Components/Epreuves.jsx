import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileSpreadsheet, BookOpen } from "lucide-react";

export default function Epreuves() {
  const [activeTab, setActiveTab] = useState("E5");

  return (
    <section className="bg-gray-50 min-h-screen py-16">
      {/* Conteneur centré global */}
      <div className="max-w-6xl mx-auto px-6">
        {/* --- Titre principal avec barre à gauche --- */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-800 border-l-8 border-blue-600 pl-3">
            Mes Épreuves
          </h1>
          <p className="text-gray-600 mt-4">
            Découvrez les épreuves professionnelles réalisées durant ma formation.
          </p>
        </div>

        {/* --- Onglets de navigation --- */}
        <div className="flex gap-10 border-b border-gray-200 mb-10">
          <button
            onClick={() => setActiveTab("E5")}
            className={`pb-3 text-lg font-semibold transition-all duration-300 ${
              activeTab === "E5"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Épreuve E5
          </button>
          <button
            onClick={() => setActiveTab("E6")}
            className={`pb-3 text-lg font-semibold transition-all duration-300 ${
              activeTab === "E6"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Épreuve E6
          </button>
        </div>

        {/* --- Contenu centré --- */}
        <div>
          <AnimatePresence mode="wait">
            {activeTab === "E5" && (
              <motion.div
                key="E5"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.35 }}
                className="bg-white p-10 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-blue-600 w-7 h-7" />
                  <h2 className="text-2xl font-semibold text-blue-800">
                    Présentation de l’épreuve E5
                  </h2>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  L’épreuve E5 « Production et fourniture de services informatiques »
                  évalue la capacité du candidat à produire et fournir des services
                  en répondant aux besoins d’une organisation. Elle vérifie les
                  compétences liées à la gestion du patrimoine informatique, la
                  réponse aux incidents et le développement de la présence en ligne.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-md mb-6">
                  <h3 className="text-blue-700 font-semibold mb-2">
                    Compétences évaluées :
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Gérer le patrimoine informatique</li>
                    <li>Répondre aux incidents et aux demandes d’assistance</li>
                    <li>Développer la présence en ligne de l’organisation</li>
                    <li>Travailler en mode projet</li>
                    <li>Mettre à disposition des utilisateurs un service informatique</li>
                    <li>Organiser son développement professionnel</li>
                  </ul>
                </div>

                <motion.a
                  href="https://docs.google.com/spreadsheets/d/1X8f-1L77_UClMm5N4bjIA5j-StiiDQK-DkYLDnhQw2Q/edit?gid=546293098#gid=546293098"
                  rel="noopener noreferrer"
                  target="_blank"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
                >
                  <FileSpreadsheet className="w-5 h-5" />
                  Ouvrir le tableau de synthèse E5
                </motion.a>
              </motion.div>
            )}

            {activeTab === "E6" && (
              <motion.div
                key="E6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="bg-white p-10 rounded-2xl shadow-md border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-4">
                  <BookOpen className="text-blue-600 w-7 h-7" />
                  <h2 className="text-2xl font-semibold text-blue-800">
                    Présentation de l’épreuve E6
                  </h2>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  L’épreuve E6 « Parcours de professionnalisation » évalue la capacité
                  du candidat à valoriser les compétences acquises durant la formation
                  et les périodes de stage. Elle repose sur un dossier professionnel
                  et un entretien portant sur les expériences vécues en entreprise.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-md mb-6">
                  <h3 className="text-blue-700 font-semibold mb-2">
                    Compétences évaluées :
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Analyser et formaliser des expériences professionnelles</li>
                    <li>Présenter un dossier professionnel structuré</li>
                    <li>Exprimer et argumenter ses choix de parcours</li>
                  </ul>
                </div>

                      <motion.a
                        href="/Fiche 1.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
                      >
                        <FileSpreadsheet className="w-5 h-5" />
                        Ouvrir la fiche de réalisation professionnel 1
                      </motion.a> <br /><br />

                      <motion.a
                        href="/Fiche 2.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
                      >
                        <FileSpreadsheet className="w-5 h-5" />
                        Ouvrir la fiche de réalisation professionnel 2
                      </motion.a>

              </motion.div>
              
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
