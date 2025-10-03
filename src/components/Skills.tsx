import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  ShoppingCart,
  TrendingUp,
  MessageCircle,
  FileSpreadsheet,
} from "lucide-react";

const skills = [
  {
    icon: ShoppingCart,
    title: "Commerce",
    description: "Stratégies commerciales et gestion de la relation client",
  },
  {
    icon: TrendingUp,
    title: "Marketing Digital",
    description: "Campagnes digitales, SEO, réseaux sociaux et analytics",
  },
  {
    icon: MessageCircle,
    title: "Communication",
    description: "Communication digitale et gestion de contenu",
  },
  {
    icon: FileSpreadsheet,
    title: "Bureautique",
    description: "Maîtrise des outils Office et gestion de données",
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 8000,
    });
  }, []);

  return (
    <section id="competences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Compétences & Expertises
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-200 hover:border-sky-400 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={index * 100} // effet décalé pour chaque carte
            >
              <div className="bg-gradient-to-br from-sky-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-sky-500/30">
                <skill.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
