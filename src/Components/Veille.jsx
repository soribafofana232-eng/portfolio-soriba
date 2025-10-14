import { motion } from "framer-motion";

export default function Veille() {
  const articles = [
    {
      titre: "Les différents types de virtualisation",
      description: `
Virtualisation de serveurs : la plus courante, utilisée pour exécuter plusieurs systèmes sur un même hôte.
Virtualisation du stockage : mutualisation et abstraction des ressources de stockage (SAN, NAS).
Virtualisation du réseau : segmentation logique via VLAN, SDN.
Virtualisation du poste de travail : postes virtuels (VDI) accessibles à distance.`,
    },
    {
      titre: "Principe de fonctionnement",
      description: `
Le serveur physique (hôte) exécute un hyperviseur qui partage ses ressources matérielles (processeur, mémoire, stockage).
Chaque machine virtuelle (VM) dispose de son propre système d’exploitation et fonctionne comme un ordinateur indépendant.
L’hyperviseur assure l’isolation, la gestion et la répartition des ressources entre les VM.`,
    },
    {
      titre: "Intérêts et recommandations pour le technicien SISR",
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
      description: `
La virtualisation évolue vers les conteneurs (Docker, Kubernetes), plus légers et adaptés au cloud computing.
Les entreprises combinent virtualisation et cloud pour plus de flexibilité et d’automatisation (Infrastructure as Code).`,
    },
    {
      titre: "Conclusion",
      description: `
La virtualisation est aujourd’hui un pilier essentiel des infrastructures modernes.
Elle s’allie désormais à la conteneurisation, à l’automatisation et à l’intelligence artificielle pour créer des systèmes plus performants et flexibles.
Le technicien SISR doit maîtriser ces technologies pour concevoir des environnements sécurisés et évolutifs.`,
    },
  ];

  return (
    <section id="veille" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* --- Titre --- */}
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-4 border-l-8 border-blue-600 pl-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Veille Technologique
        </motion.h2>

        {/* --- Introduction --- */}
        <p className="text-gray-700 mb-12 leading-relaxed">
          Ma veille porte sur <strong>la virtualisation des serveurs</strong>. 
          La virtualisation consiste à exécuter plusieurs systèmes d’exploitation ou serveurs sur une seule machine physique. 
          Apparue dans les années 1960 avec IBM, elle s’est démocratisée dans les années 2000 grâce à VMware et Proxmox, et constitue aujourd’hui 
          une base essentielle du <strong>cloud computing</strong>.
        </p>

        {/* --- Cartes des articles --- */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {article.titre}
              </h3>
              <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
                {article.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
