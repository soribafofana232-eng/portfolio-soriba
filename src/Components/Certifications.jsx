import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Certifications() {
  const data = {
    "1ʳᵉ année": [
      { t: "Créez votre site web avec HTML5 et CSS3", o: "OpenClassrooms", d: "Bases du développement web.", p: 100 },
      { t: "Concevez votre réseau TCP/IP", o: "OpenClassrooms", d: "Maîtrise des concepts réseaux.", p: 100 },
      { t: "Concevez votre site web avec PHP et MySQL", o: "OpenClassrooms", d: "Développement d’applications dynamiques.", p: 100 },
    ],
    "2ᵉ année": [
      { t: "Utilisez ChatGPT pour améliorer votre productivité", o: "OpenClassrooms", d: "Optimiser son temps avec l’IA.", p: 100 },
      { t: "Administrez un système Linux", o: "OpenClassrooms", d: "Administration Debian / Ubuntu.", p: 100 },
      { t: "Concevez l’architecture d’un système", o: "OpenClassrooms", d: "Modélisation d’infrastructure.", p: 100 },
      { t: "Sécuriser vos informations", o: "OpenClassrooms", d: "Sécurité réseau et durcissement.", p: 100 },
      { t: "Certification PIX", o: "Pix.com", d: "Compétences numériques certifiées.", p: 100 },
    ],
  };

  const [index, setIndex] = useState({ "1ʳᵉ année": 0, "2ᵉ année": 0 });
  const perSlide = 2;

  const slide = (year, dir) => {
    const total = Math.ceil(data[year].length / perSlide);
    setIndex((i) => ({ ...i, [year]: (i[year] + dir + total) % total }));
  };

  return (
    <section className="py-20 px-6 bg-white text-gray-900 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-blue-900 mb-8 border-l-8 border-blue-600 pl-3">Certifications</h2>

      {Object.entries(data).map(([year, certs]) => {
        const start = index[year] * perSlide;
        const visible = certs.slice(start, start + perSlide);

        return (
          <div key={year} className="mb-16 relative">
            <h3 className="text-2xl font-bold text-blue-800 mb-6">{year}</h3>

            <button
              onClick={() => slide(year, -1)}
              className="absolute -left-6 sm:-left-10 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 shadow-lg"
            >
              <ChevronLeft />
            </button>

            <div className="overflow-hidden w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index[year]}
                  className="grid gap-8 sm:grid-cols-2"
                  initial={{ x: 80, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -80, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {visible.map((c, i) => (
                    <div key={i} className="border rounded-2xl shadow-md p-6 bg-white hover:shadow-xl">
                      <h4 className="text-xl font-semibold text-blue-800">{c.t}</h4>
                      <p className="text-sm text-gray-500">{c.o}</p>
                      <p className="text-gray-700 text-sm mb-4">{c.d}</p>
                      <div className="w-full bg-gray-200 h-3 rounded-full mb-2">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: `${c.p}%` }} />
                      </div>
                      <p className="text-sm text-gray-600 text-right">{c.p}%</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => slide(year, 1)}
              className="absolute -right-6 sm:-right-10 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 shadow-lg"
            >
              <ChevronRight />
            </button>
          </div>
        );
      })}
    </section>
  );
}
