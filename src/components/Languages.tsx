const languages = [
  { name: 'Malagasy', level: 100, description: 'Langue maternelle' },
  { name: 'Français', level: 80, description: 'Courant' },
  { name: 'Anglais', level: 40, description: 'Débutant' },
];

const technicalSkills = [
  { name: 'Marketing Digital', level: 85 },
  { name: 'Communication', level: 90 },
  { name: 'Bureautique', level: 80 },
  { name: 'Réseaux Sociaux', level: 85 },
];

export default function Languages() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Langues & Compétences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-navy-900 mb-8">Langues</h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-navy-900">{lang.name}</span>
                    <span className="text-sky-500 font-medium">{lang.description}</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-1000 shadow-lg shadow-sky-500/30"
                      style={{ width: `${lang.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
            <h3 className="text-2xl font-bold text-navy-900 mb-8">Compétences Techniques</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-navy-900">{skill.name}</span>
                    <span className="text-sky-500 font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all duration-1000 shadow-lg shadow-sky-500/30"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
