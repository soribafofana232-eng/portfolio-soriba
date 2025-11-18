import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./Components/Navbar";
import Profil from "./Components/Profil";
import BTSSIO from "./Components/BTSSIO";
import Parcours from "./Components/Parcours";
import Entreprise from "./Components/Entreprise";
import Realisations from "./Components/Realisations";
import Epreuves from "./Components/Epreuves";
import Veille from "./Components/Veille";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import ChatBox from "./Components/ChatBox";
import SaveLaDefense from "./Components/SaveLaDefense";
import SaveWagram from "./Components/SaveWagram";
import BlediPhone from "./Components/BlediPhone";

// 🔹 Ce composant gère le scroll automatique vers la bonne section
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const id = location.hash.replace("#", "");
    let attempts = 0;

    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        const offset = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: offset, behavior: "smooth" });
      } else if (attempts < 15) {
        // 🔁 Réessaye jusqu’à 15 fois (≈3 secondes au total)
        attempts++;
        setTimeout(tryScroll, 200);
      }
    };

    tryScroll();
  }, [location]);

  return null;
}


export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden flex">
        {/* --- Navbar --- */}
        <Navbar />

        {/* --- Contenu principal --- */}
        <main
          className="
            flex-1
            ml-0
            md:ml-64
            transition-all
            duration-300
            px-4
            overflow-y-auto
            overflow-x-hidden
            relative
            z-0
          "
        >
          <Routes>
            {/* --- Page principale --- */}
            <Route
              path="/"
              element={
                <div className="w-full mx-auto">
                  <section id="profil">
                    <Profil />
                  </section>
                  <section id="btssio">
                    <BTSSIO />
                  </section>
                  <section id="parcours">
                    <Parcours />
                  </section>
                  <section id="entreprise">
                    <Entreprise />
                  </section>
                  <section id="realisations">
                    <Realisations />
                  </section>
                  <section id="epreuves">
                    <Epreuves />
                  </section>
                  <section id="veille">
                    <Veille />
                  </section>
                  <section id="certifications">
                    <Certifications />
                  </section>
                  <section id="contact">
                    <Contact />
                  </section>
                </div>
              }
            />

            {/* --- Pages projets individuelles --- */}
            <Route path="/blediphone" element={<BlediPhone />} />
            <Route path="/save-la-defense" element={<SaveLaDefense />} />
            <Route path="/save-wagram" element={<SaveWagram />} />
          </Routes>
        </main>

        {/* --- ChatBox flottante --- */}
        <ChatBox />
      </div>

      {/* 🔹 Gestion du scroll automatique après redirection */}
      <ScrollToHashElement />
    </Router>
  );
}
