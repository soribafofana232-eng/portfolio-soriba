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

export default function App() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* --- Navbar (fixée) --- */}
      <Navbar />

      {/* --- Contenu principal --- */}
      <main className="w-full md:ml-64 md:w-[calc(100%-16rem)] overflow-y-auto overflow-x-hidden">
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
      </main>
    </div>
  );
}
