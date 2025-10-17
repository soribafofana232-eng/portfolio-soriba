import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 p-8 md:p-16">
      {/* --- TITRE --- */}
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-4xl font-bold text-indigo-800 mb-2">Contact</h1>
        <div className="h-1 w-24 bg-indigo-600 rounded"></div>
      </div>

      {/* --- CONTENU PRINCIPAL --- */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* FORMULAIRE DE CONTACT */}
        <motion.div
          className="bg-white shadow-md rounded-xl border border-gray-100 p-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
            Envoyez-moi un message
          </h2>

          <form
            className="space-y-4"
            action="https://formspree.io/f/xyzabcd"
            method="POST"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Nom et prénom
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Soriba FOFANA"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Expliquez-moi votre besoin ou votre message ici..."
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md"
            >
              <Mail size={18} />
              Envoyer le message
            </button>
          </form>
        </motion.div>

        {/* COORDONNÉES */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Coordonnées</h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <span>Saint-Denis, France</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <a
                  href="mailto:soribafofana232@gmail.com"
                  className="hover:underline"
                >
                  soribafofana232@gmail.com
                </a>
              </div>

              <div className="mt-4">
                <h3 className="text-sm uppercase text-indigo-100 font-semibold mb-1">
                  Disponibilité
                </h3>
                <p className="bg-indigo-500/40 px-4 py-2 rounded-lg inline-block text-sm font-medium">
                  24h/24, 7j/7
                </p>
              </div>
            </div>
          </div>

          {/* --- LIEN LINKEDIN --- */}
          <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
            <h3 className="text-indigo-800 font-semibold mb-3">
              Réseaux sociaux
            </h3>
            <a
              href="https://www.linkedin.com/in/soribafofana"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
