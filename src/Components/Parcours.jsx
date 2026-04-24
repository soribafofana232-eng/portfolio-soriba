export default function Parcours() {
  return (
    <section className="min-h-screen bg-white text-gray-800 px-8 md:px-16 py-20">
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-blue-800 mb-2 border-l-8 border-blue-600 pl-3">
          Mon Parcours
        </h1>
      </div>

      <div className="max-w-6xl mx-auto relative border-l-2 border-blue-200 pl-8 md:pl-12 space-y-12">
        {[
          {
            titre: "Formation RNCP40216 - Institut Emploi Formation",
            periode: "avril 2026 – septembre 2026",
            desc: "Diplôme reconnu par l’État, axé sur le traitement de commande, récéption, mise en stock, livraison etc..."
          },
          {
            titre: "BTS SIO - Institut IEF2I",
            periode: "octobre 2025 – décembre 2025",
            desc: "Brevet de Technicien Supérieur en Services Informatiques aux Organisations, spécialité SISR (Solutions d’Infrastructure, Systèmes et Réseaux)."
          },
          {
            titre: "Formation RNCP38718 - Tele Pop Music",
            periode: "août 2024 – octobre 2025",
            desc: "Diplôme reconnu par l’État, axé sur la réparation, le reconditionnement et la vente de produits électroménagers."
          },
          {
            titre: "BUT GEII - IUT de Cachan",
            periode: "septembre 2023 – juillet 2024",
            desc: "Bachelor Universitaire Technologique en Génie Électrique et Informatique Industrielle, avant ma réorientation en formation RNCP38718."
          },
          {
            titre: "BAC STI2D - Lycée Colbert",
            periode: "septembre 2021 – juillet 2023",
            desc: "Baccalauréat Sciences et Technologies de l’Industrie et du Développement Durable, spécialité Innovation Technologique et Éco-conception (ITEC)."
          },
          {
            titre: "Brevet des collèges - Collège Maxence Van Der Meersch",
            periode: "septembre 2016 – juillet 2020",
            desc: "Brevet des collèges Mention Bien."
          }
        ].map((item, i) => (
          <div className="relative" key={i}>
            <div className="absolute -left-[18px] top-1.5 w-4 h-4 bg-blue-600 rounded-full"></div>
            <h2 className="text-lg font-semibold text-blue-700">{item.titre}</h2>
            <p className="text-sm text-gray-500 mb-2">{item.periode}</p>
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
