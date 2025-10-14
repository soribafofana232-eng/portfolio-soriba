import { motion } from "framer-motion";

export default function Certifications() {
  const certifications = {
    premiereAnnee: [
      {
        titre: "Créez votre site web avec HTML5 et CSS3",
        organisme: "OpenClassrooms",
        description:
          "Formation complète sur les fondamentaux du développement web.",
        progression: 100,
        couleur: "bg-green-500",
      },
      {
        titre: "Concevez votre réseau TCP/IP",
        organisme: "OpenClassrooms",
        description:
          "Maîtrise des concepts fondamentaux des réseaux TCP/IP.",
        progression: 100,
        couleur: "bg-green-500",
      },
    ],
    deuxiemeAnnee: [
      {
        titre: "Utilisez ChatGPT pour améliorer votre productivité",
        organisme: "OpenClassrooms",
        description:
          "Optimiser son temps avec les outils d’intelligence artificielle.",
        progression: 100,
        couleur: "bg-green-500",
      },
      {
        titre: "Administrez un système Linux",
        organisme: "OpenClassrooms",
        description:
          "Administration de systèmes Linux Debian / Ubuntu.",
        progression: 90,
        couleur: "bg-blue-500",
      },
    ],
  };

  return (
    <section id="certifications" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* --- TITRE PRINCIPAL --- */}
        <motion.h2
          className="text-4xl font-bold text-blue-900 mb-4 border-l-8 border-blue-600 pl-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Certifications
        </motion.h2>

        <p className="text-gray-700 mb-12 leading-relaxed">
          Voici l'ensemble des certifications réalisées au cours de ma formation
          <strong> BTS SIO SISR</strong>, réparties entre la première et la
          deuxième année.
        </p>

        {/* --- PREMIÈRE ANNÉE --- */}
        <h3 className="text-2xl font-bold text-blue-800 mb-6">1ʳᵉ année</h3>
        <div className="grid gap-8 sm:grid-cols-2">
          {certifications.premiereAnnee.map((certif, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-xl font-semibold text-blue-800 mb-1">
                {certif.titre}
              </h4>
              <p className="text-sm text-gray-500 mb-2">{certif.organisme}</p>
              <p className="text-gray-700 text-sm mb-4">{certif.description}</p>

              {/* Barre de progression */}
              <div className="w-full bg-gray-200 h-3 rounded-full mb-2">
                <div
                  className={`${certif.couleur} h-3 rounded-full`}
                  style={{ width: `${certif.progression}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 text-right">
                Progression : {certif.progression}%
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- DEUXIÈME ANNÉE --- */}
        <h3 className="text-2xl font-bold text-blue-800 mt-16 mb-6">
          2ᵉ année
        </h3>
        <div className="grid gap-8 sm:grid-cols-2">
          {certifications.deuxiemeAnnee.map((certif, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6"
              whileHover={{ scale: 1.03 }}
            >
              <h4 className="text-xl font-semibold text-blue-800 mb-1">
                {certif.titre}
              </h4>
              <p className="text-sm text-gray-500 mb-2">{certif.organisme}</p>
              <p className="text-gray-700 text-sm mb-4">{certif.description}</p>

              {/* Barre de progression */}
              <div className="w-full bg-gray-200 h-3 rounded-full mb-2">
                <div
                  className={`${certif.couleur} h-3 rounded-full`}
                  style={{ width: `${certif.progression}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 text-right">
                Progression : {certif.progression}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
