import { Mail, Phone, Linkedin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Téléphone",
    value: "+261 38 53 63 108",
    href: "tel:+261385363108",
  },
  {
    icon: Mail,
    label: "Email",
    value: "diaritianarafanomezantsoa72@gmail.com",
    href: "mailto:diaritianarafanomezantsoa72@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Diaritiana Rafanomezantsoa",
    href: "https://www.linkedin.com/in/diaritiana-rafanomezantsoa",
  },
];

export default function Contact() {
  return (
    <>
      {" "}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-navy-900 via-navy-800 to-sky-900 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl font-bold mb-4">Me Contacter</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-400 to-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-300 text-lg">
              N'hésitez pas à me contacter pour discuter de vos projets
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                data-aos="fade-up"
                data-aos-duration="1000"
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={
                  item.label === "LinkedIn" ? "noopener noreferrer" : undefined
                }
                className="group bg-navy-800/50 backdrop-blur-sm p-8 rounded-2xl border border-navy-700 hover:border-sky-400 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/20 hover:-translate-y-2 text-center"
              >
                <div className="bg-gradient-to-br from-sky-400 to-blue-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-sky-500/30">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.label}</h3>
                <p className="text-sm text-gray-300 break-words">
                  {item.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="py-5 text-center bg-black">
        <p className="text-gray-400">
          © 2025 Diaritiana Paola Rafanomezantsoa. Tous droits réservés.
        </p>
      </div>
    </>
  );
}
