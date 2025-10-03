import { Download } from "lucide-react";

export default function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv-diaritiana.png";
    link.download = "cv-diaritiana.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-sky-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-sky-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 animate-fade-in flex flex-col items-center">
          <img
            src="/me.png"
            alt="Diaritiana Paola Rafanomezantsoa"
            className="w-44 h-44 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-sky-400 shadow-2xl shadow-sky-500/30 mt-20 mb-6"
          />

          <span className="text-sky-400 text-lg font-medium">
            Bienvenue sur mon portfolio
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-slide-up">
          Je suis{" "}
          <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
            Diaritiana
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-12 animate-slide-up-delay">
          Spécialiste Commerce & Marketing Digital
        </p>

        <button
          onClick={handleDownloadCV}
          className="group inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/50 hover:scale-105 animate-fade-in-delay"
        >
          <Download size={20} className="group-hover:animate-bounce" />
          Télécharger mon CV
        </button>

        <div className="mt-5 flex justify-center gap-8 animate-fade-in-delay-2">
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400">1+</div>
            <div className="text-sm text-gray-400">Années d'expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400">4+</div>
            <div className="text-sm text-gray-400">Compétences clés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400">100%</div>
            <div className="text-sm text-gray-400">Satisfaction client</div>
          </div>
        </div>
      </div>
    </section>
  );
}
