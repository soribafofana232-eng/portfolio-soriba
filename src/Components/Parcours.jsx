export default function Parcours() {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-8 md:px-16 py-20">
      {/* --- TITRE --- */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-2 border-l-8 border-blue-600 pl-3">
          Mon Parcours
        </h1>
      </div>

      {/* --- CONTENU --- */}
      <div className="max-w-6xl mx-auto relative border-l-2 border-blue-200 pl-8 md:pl-12 space-y-12">
        {/* 2025 – 2027 */}
        <div className="relative">
          <div className="absolute -left-[18px] top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h2 className="text-lg font-semibold text-blue-700">
            BTS SIO - Institut IEF2I
          </h2>
          <p className="text-sm text-gray-500 mb-2">2025 – 2027</p>
          <p className="text-gray-700 leading-relaxed">
            Brevet de Technicien Supérieur en Services Informatiques aux Organisations, 
            spécialité SISR (Solutions d’Infrastructure, Systèmes et Réseaux).
          </p>
        </div>

        {/* 2024 – 2025 */}
        <div className="relative">
          <div className="absolute -left-[18px] top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h2 className="text-lg font-semibold text-blue-700">
            Formation RNCP38718 - Tele Pop Music 
          </h2>
          <p className="text-sm text-gray-500 mb-2">2024 – 2025</p>
          <p className="text-gray-700 leading-relaxed">
            Diplôme reconnu par l’État, axé sur la réparation, le reconditionnement et la vente de produits électroménagers.
          </p>
        </div>

        {/* 2023 – 2024 */}
        <div className="relative">
          <div className="absolute -left-[18px] top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h2 className="text-lg font-semibold text-blue-700">
            BUT GEII - IUT de Cachan
          </h2>
          <p className="text-sm text-gray-500 mb-2">2023 – 2024</p>
          <p className="text-gray-700 leading-relaxed">
            Bachelor Universitaire Technologique en Génie Électrique et Informatique Industrielle, avant ma réorientation en formation RNCP38718.
          </p>
        </div>

        {/* 2021 – 2023 */}
        <div className="relative">
          <div className="absolute -left-[18px] top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h2 className="text-lg font-semibold text-blue-700">BAC STI2D - Lycée Colbert</h2>
          <p className="text-sm text-gray-500 mb-2">2021 – 2023</p>
          <p className="text-gray-700 leading-relaxed">
            Baccalauréat Sciences et Technologies de l’Industrie et du Développement Durable, spécialité Innovation Technologique et Éco-conception (ITEC).
          </p>
        </div>

        {/* 2016 – 2020 */}
        <div className="relative">
          <div className="absolute -left-[18px] top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
          <h2 className="text-lg font-semibold text-blue-700">Brevet des collèges - Collège Maxence Van Der Meersch</h2>
          <p className="text-sm text-gray-500 mb-2">2016 – 2020</p>
          <p className="text-gray-700 leading-relaxed">
            Brevet des collèges Mention Bien.
          </p>
        </div>
      </div>
    </section>
  );
}
