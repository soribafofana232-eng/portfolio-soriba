import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Certifications() {
  // 🔹 Données fusionnées : 1ʳᵉ et 2ᵉ année
  const certifications = [
    // ---- MOOC RGPD CNIL ----
    { t: "Module 1", o: "MOOC RGPD CNIL", d: "LE RGPD ET SES NOTIONS CLÉS.", p: 96, img: "/module1-rgpd.jpg" },
    { t: "Module 2", o: "MOOC RGPD CNIL", d: "LES PRINCIPES DE LA PROTECTION DES DONNÉES.", p: 86, img: "/module2-rgpd.jpg" },
    { t: "Module 3", o: "MOOC RGPD CNIL", d: "LES RESPONSABILITÉS DES ACTEURS.", p: 93, img: "/module3-rgpd.jpg" },
    { t: "Module 4", o: "MOOC RGPD CNIL", d: "LE DPO ET LES OUTILS DE LA CONFORMITÉ.", p: 93, img: "/module4-rgpd.jpg" },
    { t: "Module 5", o: "MOOC RGPD CNIL", d: "LES COLLECTIVITÉS TERRITORIALES.", p: 88, img: "/module5-rgpd.jpg" },
    // ---- MOOC ANSSI ----
    { t: "SecNumAcademie (ANSSI)", o: "MOOC ANSSI", d: "MOOC cybersécurité de l'ANSSI.", p: 100, img: "/module-anssi.jpg" },
    // ---- OPENCLASSROOMS ----
    { t: "Créez votre site web avec HTML5 et CSS3", o: "OpenClassrooms", d: "Bases du développement web.", p: 100 },
    { t: "Concevez votre réseau TCP/IP", o: "OpenClassrooms", d: "Maîtrise des concepts réseaux.", p: 100 },
    { t: "Concevez votre site web avec PHP et MySQL", o: "OpenClassrooms", d: "Développement d’applications dynamiques.", p: 100 },
    { t: "Utilisez ChatGPT pour améliorer votre productivité", o: "OpenClassrooms", d: "Optimiser son temps avec l’IA.", p: 100 },
    { t: "Administrez un système Linux", o: "OpenClassrooms", d: "Administration Debian / Ubuntu.", p: 100 },
    { t: "Concevez l’architecture d’un système", o: "OpenClassrooms", d: "Modélisation d’infrastructure.", p: 100 },
    { t: "Sécuriser vos informations", o: "OpenClassrooms", d: "Sécurité réseau et durcissement.", p: 100 },
    // ---- CISCO ----
    { t: "Getting Started with Cisco Packet Tracer", o: "Cisco", d: "Réseau", p: 100, img: "/Certification Getting Started with Cisco Packet Tracer.jpg" },
    { t: "Introduction to Cybersecurity", o: "Cisco", d: "Cybersécurité", p: 100, img: "/Certification Introduction to Cybersecurity.jpg" },
    // ---- PIX ----
    { t: "Certification PIX", o: "PIX", d: "Compétences numériques certifiées.", p: 100, img: "/diplomes/pix.png" },
  ];

  const tabs = ["TOUS", "OPENCLASSROOMS", "CISCO", "MOOC RGPD CNIL", "MOOC ANSSI", "PIX"];
  const [activeTab, setActiveTab] = useState("TOUS");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = activeTab === "TOUS" ? certifications : certifications.filter((c) => c.o.toUpperCase() === activeTab);

  return (
    <section className="py-20 px-6 bg-white text-gray-900 max-w-6xl mx-auto">
      {/* TITRE */}
      <h2 className="text-4xl font-bold text-blue-900 mb-8 border-l-8 border-blue-600 pl-3 text-left">
        Mes Certifications
      </h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-10 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grille des cartes */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCerts.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="border rounded-2xl shadow-md p-6 bg-white hover:shadow-xl text-center cursor-pointer transition-all"
            onClick={() => setSelectedCert(c)}
          >
            <h4 className="text-lg font-semibold text-blue-800">{c.t}</h4>
            <p className="text-sm text-gray-500 mb-2">{c.o}</p>
            <p className="text-gray-600 text-sm mb-4">{c.d}</p>
            <div className="w-full bg-gray-200 h-3 rounded-full mb-2">
              <div className="bg-green-500 h-3 rounded-full" style={{ width: `${c.p}%` }} />
            </div>
            <p className="text-sm text-gray-600">{c.p}%</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              className="bg-white rounded-lg shadow-2xl p-4 max-w-3xl relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
              >
                <X />
              </button>
              <img
                src={selectedCert.img}
                alt={`Diplôme ${selectedCert.t}`}
                className="rounded-lg max-h-[80vh] object-contain mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
