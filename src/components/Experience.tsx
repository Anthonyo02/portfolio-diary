import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Stage en Marketing Digital",
    period: "2023",
    responsibilities: [
      "Développement de stratégies pour transformer les prospects en clients",
      "Support aux actions de communication et de promotion",
      "Analyse des performances des campagnes digitales",
      "Création de contenu pour les réseaux sociaux",
      "Optimisation du parcours client digital",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experiences"
      className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold mb-4">
            Expériences Professionnelles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="1000"
              className="bg-navy-800/50 backdrop-blur-sm p-8 rounded-2xl border border-navy-700 shadow-xl hover:border-sky-400 transition-all duration-300"
            >
              {/* En-tête (icône + titre + période) alignés en haut */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-sky-400 to-blue-500 p-3 rounded-lg shadow-lg shadow-sky-500/30">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                </div>
                <span className="text-sky-400 font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>

              {/* Liste des responsabilités */}
              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-sky-400 mt-1">▸</span>
                    <span className="text-gray-300">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
