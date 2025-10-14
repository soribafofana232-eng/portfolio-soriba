import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-indigo-700/80 to-violet-900/80 backdrop-blur-lg text-white flex flex-col justify-between px-6 py-10 border-r border-white/10 shadow-2xl">
      {/* --- Haut : Infos utilisateur --- */}
      <div className="flex flex-col items-center text-center">
        <motion.img
          src="/soriba.jpg"  // 👈 utilise la même image que dans Profil
          alt="Soriba Fofana"
          className="w-28 h-28 rounded-full border-4 border-indigo-400 shadow-lg object-cover"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <h2 className="text-2xl font-bold mt-4">Soriba FOFANA</h2>
        <p className="text-sm text-indigo-200 mt-1 font-light">
          Administrateur Réseau
        </p>
      </div>

      {/* --- Menu navigation --- */}
      <nav className="mt-10 flex flex-col gap-5 text-sm font-medium">
        {[
          "Profil",
          "BTS SIO",
          "Parcours",
          "Entreprise",
          "Réalisations",
          "Épreuves",
          "Veille",
          "Certifications",
          "Contact",
        ].map((section) => (
          <motion.a
            key={section}
            href={`#${section.toLowerCase().replace(" ", "")}`}
            className="relative group py-1"
            whileHover={{ x: 5 }}
          >
            <span className="text-gray-300 group-hover:text-white transition">
              {section}
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
          </motion.a>
        ))}
      </nav>

      {/* --- Bas : copyright --- */}
      <p className="text-xs text-center text-indigo-300 mt-8">
        © 2025 Soriba FOFANA
      </p>
    </aside>
  );
}
