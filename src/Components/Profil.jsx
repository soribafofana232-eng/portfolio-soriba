import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function Profil() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section
      id="profil"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-indigo-900 to-violet-800 text-white overflow-hidden"
    >
      {/* --- FOND ANIMÉ --- */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#A78BFA" },
            links: {
              color: "#A78BFA",
              distance: 130,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 1, outModes: { default: "out" } },
            number: { value: 70, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* --- CONTENU --- */}
      <div className="z-10 text-center px-6 max-w-2xl">
        {/* --- PHOTO --- */}
        <motion.img
          src="/soriba.jpg"
          alt="Photo de Soriba Fofana"
          className="w-40 h-40 object-cover rounded-full mx-auto mb-6 border-4 border-indigo-400 shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.h1
          className="text-6xl md:text-7xl font-extrabold text-indigo-300 mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Soriba FOFANA
        </motion.h1>

        <motion.h2
          className="text-xl md:text-2xl text-indigo-100 mb-6 tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          BTS SIO – Option SISR | Administrateur Réseau
        </motion.h2>

        <motion.p
          className="text-indigo-200 leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          "Toujours en quête de nouveaux défis, je cherche à devenir un expert
          en administration réseau et sécurité, avec une approche innovante et
          efficace."
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          {["Système", "Réseau", "Cybersécurité"].map((skill, index) => (
            <motion.span
              key={index}
              className="px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm md:text-base font-medium hover:bg-indigo-600/50 transition"
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        <motion.a
          href="/CV_2025-10-09_Soriba_Fofana.pdf"
          download
          className="inline-block mt-10 px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full shadow-lg transition"
          whileHover={{ scale: 1.05 }}
        >
          Télécharger mon CV
        </motion.a>
      </div>
    </section>
  );
}
