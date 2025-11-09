export default function Parcours() {
  return (
    <section className="min-h-screen bg-white text-gray-800 p-8 md:p-16">
      {/* --- TITRE --- */}
      <div className="max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-800 border-l-8 border-blue-600 pl-3">
          Mon Parcours
        </h1>
        <p className="text-gray-600 mt-4">
          Découvrez mon parcours scolaire et professionnel.
        </p>
      </div>

      {/* --- CONTENU --- */}
      <div className="max-w-4xl mx-auto relative border-l-2 border-blue-200 pl-8 space-y-12">
        {[
          {
            titre: "BTS SIO - Institut IEF2I",
            periode: "2025 – 2027",
            description: "Brevet de Technicien Supérieur en Services Informatiques aux Organisations, spécialité SISR."
          },
          {
            titre: "Formation RNCP38718 - Tele Pop Music",
            periode: "2024 – 2025",
            description: "Diplôme reconnu par l’État, axé sur la réparation, le reconditionnement et la vente de produits électroménagers."
          },
          {
            titre: "BUT GEII - IUT de Cachan",
            periode: "2023 – 2024",
            description: "Bachelor Universitaire Technologique en Génie Électrique et Informatique Industrielle."
          },
          {
            titre: "BAC STI2D - Lycée Colbert",
            periode: "2022 – 2023",
            description: "Baccalauréat Sciences et Technologies de l’Industrie et du Développement Durable, spécialité ITEC."
          },
          {
            titre: "Brevet des collèges - Collège Maxence Van Der Meersch",
            periode: "2019 – 2020",
            description: "Brevet des collèges Mention Bien."
          }
        ].map((item, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[18px] top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
            <h2 className="text-lg font-semibold text-blue-700">{item.titre}</h2>
            <p className="text-sm text-gray-500 mb-2">{item.periode}</p>
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
