import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import SocialBubblesSidebar from "./SocialBubblesSidebar";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    "Profil",
    "BTS SIO",
    "Parcours",
    "Entreprise",
    "Réalisations",
    "Épreuves",
    "Veille",
    "Certifications",
    "Contact",
  ];

  const handleClick = (section) => {
    const id = section
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "");

    if (location.pathname === "/") {
      // Scroll vers la section sur la page principale
      const el = document.getElementById(id);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    } else {
      // Naviguer vers la page principale avec hash
      navigate(`/#${id}`);
    }

    setOpen(false); // fermer le menu mobile
  };

  return (
    <>
      {/* --- Bouton Hamburger mobile --- */}
      <button
        className="fixed top-5 left-5 z-50 md:hidden bg-indigo-600 text-white p-2 rounded-lg shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* --- Menu mobile --- */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-indigo-700/90 to-violet-900/90 text-white flex flex-col justify-between px-6 py-10 shadow-2xl z-40"
          >
            <div className="flex flex-col items-center text-center">
              <motion.img
                src="/soriba.jpg"
                alt="Soriba Fofana"
                className="w-28 h-28 rounded-full border-4 border-indigo-400 shadow-lg object-cover"
              />
              <h2 className="text-2xl font-bold mt-4">Soriba FOFANA</h2>
              <p className="text-sm text-indigo-200 mt-1 font-light">
                Administrateur Réseau
              </p>

              <SocialBubblesSidebar />
            </div>

            <nav className="mt-10 flex flex-col gap-5 text-sm font-medium">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleClick(section)}
                  className="relative group py-1 text-gray-300 hover:text-white transition text-left"
                >
                  {section}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            <p className="text-xs text-center text-indigo-300 mt-8">
              © 2025 Soriba FOFANA
            </p>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* --- Menu desktop --- */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-indigo-700/80 to-violet-900/80 text-white flex-col justify-between px-6 py-10 shadow-2xl">
        <div className="flex flex-col items-center text-center">
          <motion.img
            src="/soriba.jpg"
            alt="Soriba Fofana"
            className="w-28 h-28 rounded-full border-4 border-indigo-400 shadow-lg object-cover"
          />
          <h2 className="text-2xl font-bold mt-4">Soriba FOFANA</h2>
          <p className="text-sm text-indigo-200 mt-1 font-light">
            Administrateur Réseau
          </p>

          <SocialBubblesSidebar />
        </div>

        <nav className="mt-10 flex flex-col gap-5 text-sm font-medium">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => handleClick(section)}
              className="relative group py-1 text-gray-300 hover:text-white transition text-left"
            >
              {section}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
            </button>
          ))}
        </nav>

        <p className="text-xs text-center text-indigo-300 mt-8">
          © 2025 Soriba FOFANA
        </p>
      </aside>
    </>
  );
}
