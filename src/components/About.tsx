export default function About() {
  return (
    <section id="a-propos" className="py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up"
          data-aos-duration="1000">
          <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-navy-700 shadow-xl" data-aos="fade-up"
          data-aos-duration="1000" >
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Passionnée par le commerce et le marketing , je suis spécialisée dans la création et la mise en œuvre de stratégies innovantes pour transformer les prospects en clients fidèles.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Avec une formation solide en commerce, marketing et communication, je combine créativité et analyse pour développer des campagnes digitales impactantes qui génèrent des résultats mesurables.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Mon objectif est de contribuer au succès des entreprises en optimisant leur présence digitale et en créant des expériences clients mémorables qui favorisent la croissance et la fidélisation.
          </p>
        </div>
      </div>
    </section>
  );
}
