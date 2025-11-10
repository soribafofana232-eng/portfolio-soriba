import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Dentegen from "./Components/Dentegen";
import BlediPhone from "./Components/BlediPhone";

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
            {/* Page principale */}
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

            {/* Page BlediPhone */}
            <Route path="/blediphone" element={<BlediPhone />} />


            {/* Page Save La Défense */}
            <Route path="/save-la-defense" element={<SaveLaDefense />} />

            {/* Page Save Wagram */}
            <Route path="/save-wagram" element={<SaveWagram />} />

            {/* Page Dentegen */}
            <Route path="/dentegen" element={<Dentegen />} />
          </Routes>
        </main>

        {/* ChatBox flottante */}
        <ChatBox />
      </div>
    </Router>
  );
}
