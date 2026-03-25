import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function FAQ() {
  const testimonials = [
    {
      text: "A Dra. Marianna me acolheu em um momento delicado da minha vida. Explica tudo com clareza e nunca me senti apressada. Encontrei uma médica de verdade.",
      name: "Paciente",
      detail: "Tratamento de endometriose",
    },
    {
      text: "Fui para uma consulta de rotina e saí com um plano de saúde completo. A atenção aos detalhes e a forma como ela ouve fazem toda a diferença.",
      name: "Paciente",
      detail: "Acompanhamento ginecológico",
    },
    {
      text: "Operei com a Dra. Marianna e a recuperação foi incrível. Ela usa técnicas modernas e o resultado foi muito melhor do que eu esperava.",
      name: "Paciente",
      detail: "Cirurgia laparoscópica",
    },
  ];

  return (
    <section id="faq" className="py-24" style={{ backgroundColor: "#FCF3EB" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(130, 126, 204, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#755751" }}>Depoimentos</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
            O que dizem as pacientes
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Histórias reais de mulheres que confiaram seu cuidado à Dra. Marianna.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border relative"
              style={{ borderColor: "rgba(130, 126, 204, 0.15)" }}
            >
              <Quote className="w-8 h-8 mb-4 opacity-20" style={{ color: "#827ECC" }} />

              <p className="text-base leading-relaxed mb-6" style={{ color: "#3C3C3C" }}>
                "{item.text}"
              </p>

              <div className="flex items-center gap-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" style={{ color: "#827ECC" }} />
                ))}
              </div>

              <div>
                <p className="font-semibold text-sm" style={{ color: "#212529" }}>{item.name}</p>
                <p className="text-xs" style={{ color: "#827ECC" }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #827ECC 0%, #755751 100%)" }}
        >
          <h4 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Pronta para cuidar de você com a atenção que você merece?
          </h4>
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-lg" style={{ color: "#FCF3EB" }}>
            <span>Atendimento particular</span>
            <span>|</span>
            <span>Localização privilegiada no Itaim Bibi</span>
          </div>
          <p className="text-base mb-8" style={{ color: "rgba(252, 243, 235, 0.8)" }}>
            Rua Joaquim Floriano, 466 — São Paulo
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#755751" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Agendar consulta agora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
