import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "DTS Commerce, Marketing et Communication",
    institution: "Institut de Formation Technique (IFT)",
    period: "2023 - 2024",
    description:
      "Formation pratique en commerce, marketing digital et communication d’entreprise, axée sur la gestion de projets et la relation client.",
  },
  {
    degree: "Baccalauréat A2",
    institution: "Enseignement secondaire",
    period: "2021",
    description: "Acquisition des bases en économie, gestion et mathématiques appliquées, préparant aux études supérieures en commerce et management.",
  },
];

export default function Education() {
  return (
    <section id="formation" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Formation</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              {/* En-tête (icône + titre + période) */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-sky-400 to-blue-500 p-3 rounded-lg shadow-lg shadow-sky-500/30">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">
                    {item.degree}
                  </h3>
                </div>
                <span className="text-sky-500 font-medium mt-2 md:mt-0 ml-auto   px-2 py-1 ">
                  {item.period}
                </span>
              </div>

              {/* Institution + description */}
              <p className="text-gray-700 font-medium mb-2">
                {item.institution}
              </p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
