import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Veille() {
  const articles = [
    {
      titre: "Les différents types de virtualisation",
      image: "Virtualisations.png",
      description: `
Virtualisation de serveurs : la plus courante, utilisée pour exécuter plusieurs systèmes sur un même hôte.
Virtualisation du stockage : mutualisation et abstraction des ressources de stockage (SAN, NAS).
Virtualisation du réseau : segmentation logique via VLAN, SDN.
Virtualisation du poste de travail : postes virtuels (VDI) accessibles à distance.`,
    },
    {
      titre: "Principe de fonctionnement",
      image: "Principe de fonctionnement.png",
      description: `
Le serveur physique (hôte) exécute un hyperviseur qui partage ses ressources matérielles (processeur, mémoire, stockage).
Chaque machine virtuelle (VM) dispose de son propre système d’exploitation et fonctionne comme un ordinateur indépendant.
L’hyperviseur assure l’isolation, la gestion et la répartition des ressources entre les VM.`,
    },
    {
      titre: "Intérêts et recommandations pour le technicien SISR",
      image: "Intérêts et Recommandations.png",
      description: `
Avantages :
• Optimisation des ressources et réduction des coûts.
• Simplification des sauvegardes, migrations et maintenance.
• Création d’environnements de test sécurisés.

Recommandations :
• Tester Proxmox VE ou VMware en labo.
• Se former à Docker et Kubernetes.
• Utiliser Ansible ou Terraform pour l’automatisation.`,
    },
    {
      titre: "Les avantages et limites",
      image: "Avantages et limites.png",
      description: `
✅ Avantages :
• Réduction des coûts matériels.
• Haute disponibilité et répartition de charge.
• Flexibilité et isolation des environnements.

⚠️ Limites :
• Dépendance à l’hyperviseur.
• Risque de surcharge ou de panne hôte.
• Besoin de stockage performant et sécurisé.`,
    },
    {
      titre: "Évolutions récentes",
      image: "Évolutions.svg",
      description: `
La virtualisation évolue vers les conteneurs (Docker, Kubernetes), plus légers et adaptés au cloud computing.
Les entreprises combinent virtualisation et cloud pour plus de flexibilité et d’automatisation (Infrastructure as Code).`,
    },
    {
      titre: "Conclusion",
      image: "Conclusion.png",
      description: `
La virtualisation est aujourd’hui un pilier essentiel des infrastructures modernes.
Elle s’allie désormais à la conteneurisation, à l’automatisation et à l’intelligence artificielle pour créer des systèmes plus performants et flexibles.
Le technicien SISR doit maîtriser ces technologies pour concevoir des environnements sécurisés et évolutifs.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="veille" className="py-20 px-8 md:px-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-4 border-l-8 border-blue-600 pl-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Ma Veille Technologique
        </motion.h2>

        <p className="text-gray-700 mb-12 leading-relaxed">
          La veille technologique consiste à surveiller les évolutions techniques et les innovations dans un secteur donné. Elle comprend la collecte, le partage et la diffusion d’informations pour anticiper les changements.
          Ma veille porte sur la virtualisation des serveurs, permettant d’exécuter plusieurs systèmes d’exploitation sur une seule machine physique grâce à un hyperviseur. Apparue chez IBM dans les années 1960, cette technologie s’est démocratisée avec VMware, Hyper-V ou Proxmox. Elle optimise les ressources matérielles, simplifie la gestion, la maintenance et la haute disponibilité, et permet des environnements isolés et sécurisés.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={article.image}
                alt={article.titre}
                className="w-20 h-20 mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold text-blue-800 mb-3 text-center">
                {article.titre}
              </h3>

              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              >
                {openIndex === i ? "Fermer" : "En savoir plus"}
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    className="text-gray-700 text-sm whitespace-pre-line leading-relaxed mt-4 text-center"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {article.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
