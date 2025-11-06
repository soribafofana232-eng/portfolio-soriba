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

export default function App() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden flex">
      {/* --- Navbar --- */}
      <Navbar />

      {/* --- Contenu principal --- */}
      <main
        className="
          flex-1
          ml-0               /* contenu centré sur mobile */
          md:ml-64           /* décalé à droite sur desktop */
          transition-all
          duration-300
          px-4               /* espace latéral pour respirer sur mobile */
          overflow-y-auto
          overflow-x-hidden
          relative
          z-0
        "
      >
        <div className="w-full mx-auto">
          <section id="profil" className="w-full">
            <Profil />
          </section>

          <section id="btssio" className="bg-white text-gray-900 w-full">
            <BTSSIO />
          </section>

          <section id="parcours" className="bg-white text-gray-900 w-full">
            <Parcours />
          </section>

          <section id="entreprise" className="bg-white text-gray-900 w-full">
            <Entreprise />
          </section>

          <section id="realisations" className="bg-white text-gray-900 w-full">
            <Realisations />
          </section>

          <section id="epreuves" className="bg-white text-gray-900 w-full">
            <Epreuves />
          </section>

          <section id="veille" className="bg-white text-gray-900 w-full">
            <Veille />
          </section>

          <section id="certifications" className="bg-white text-gray-900 w-full">
            <Certifications />
          </section>

          <section id="contact" className="bg-white text-gray-900 w-full">
            <Contact />
          </section>
        </div>
      </main>

      {/* ChatBox flottante */}
      <ChatBox />
    </div>
  );
}
