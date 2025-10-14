export default function BTSSIO() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-800 p-8 md:p-16">
      {/* --- TITRE --- */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-2">BTS SIO</h1>
        <div className="h-1 w-20 bg-blue-600 rounded"></div>
      </div>

      {/* --- OBJECTIFS ET DEBOUCHES --- */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Objectifs du BTS */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Objectifs du BTS
          </h2>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed">
            <li>
              Former des techniciens capables de gérer un parc informatique ou
              développer des applications.
            </li>
            <li>
              Apporter des compétences techniques solides et une culture
              générale en informatique.
            </li>
            <li>
              Permettre une insertion professionnelle rapide ou une poursuite
              d’études.
            </li>
          </ul>
        </div>

        {/* Débouchés professionnels */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-6">
            Débouchés professionnels
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Administrateur système",
              "Technicien réseaux",
              "Support technique",
              "Cybersécurité",
              "Développeur",
              "Intégrateur web",
              "Base de données",
              "Chef de projet",
              "Consultant IT",
            ].map((job, i) => (
              <span
                key={i}
                className="bg-white/10 backdrop-blur-sm text-sm text-white px-4 py-2 rounded-lg border border-white/20 text-center"
              >
                {job}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- LES OPTIONS --- */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-8">
        {/* SISR */}
        <div className="bg-white shadow-md border-l-4 border-blue-600 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-blue-700 mb-2 flex items-center gap-2">
            💻 SISR{" "}
            <span className="text-gray-500 text-sm">Option suivie</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>Solutions d'Infrastructure, Systèmes et Réseaux (SISR)</strong>{" "}
            forme aux métiers liés à la conception et à la maintenance
            d'infrastructures réseaux, avec un focus important sur la
            cybersécurité.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3">
            <li>Réseaux et infrastructures</li>
            <li>Cybersécurité</li>
            <li>Administration systèmes</li>
            <li>Virtualisation</li>
          </ul>
        </div>

        {/* SLAM */}
        <div className="bg-white shadow-md border-l-4 border-gray-400 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
            ⚙️ SLAM{" "}
            <span className="text-gray-500 text-sm">Option alternative</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>Solutions Logicielles et Applications Métiers (SLAM)</strong>{" "}
            prépare aux métiers du développement d’applications, avec des
            compétences en programmation et en bases de données.
          </p>
          <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-3">
            <li>Développement</li>
            <li>Bases de données</li>
            <li>Applications métiers</li>
            <li>Solutions de gestion</li>
          </ul>
        </div>
      </div>
    </section>
  );
}