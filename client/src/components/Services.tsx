import { motion } from "framer-motion";
import { CheckCircle2, Heart, Stethoscope } from "lucide-react";

export default function Services() {
  const gynecologyServices = [
    "Anticoncepcao (DIU, Implanon e implante hormonal)",
    "Reposicao hormonal",
    "Endometriose e dor pelvica",
    "Falta de libido e cansaco hormonal",
    "Colicas e sangramentos menstruais",
    "Laser ginecologico",
    "Preenchimento genital",
    "Cauterizacao de lesoes",
    "Pre-natal e acompanhamento obstetrico",
  ];

  return (
    <section id="services" className="py-24" style={{ backgroundColor: "#F5EDF0" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(196, 145, 157, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#4A2D3A" }}>Especialidades</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Especialidades e Procedimentos
          </h3>

          <p className="text-xl max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Cuidado completo para a saude da mulher, do consultorio a sala cirurgica.
          </p>
        </motion.div>

        {/* Ginecologia & Saude da Mulher */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#C4919D" }}>
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold" style={{ color: "#212529" }}>Ginecologia & Saude da Mulher</h4>
            </div>
          </div>

          <p className="text-lg max-w-4xl mb-8" style={{ color: "#3C3C3C" }}>
            Atendimento clinico completo com foco em diagnostico preciso, prevencao e qualidade de vida.
            Da fase reprodutiva a menopausa, cada etapa da vida feminina merece atencao individualizada.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {gynecologyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border"
                style={{ borderColor: "rgba(196, 145, 157, 0.15)" }}
              >
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "#C4919D" }} />
                <span className="font-medium" style={{ color: "#212529" }}>{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-12 text-center text-white"
          style={{ background: "linear-gradient(135deg, #C4919D 0%, #4A2D3A 100%)" }}
        >
          <h4 className="text-3xl font-bold mb-4 text-white">
            Sua saude nao pode esperar
          </h4>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: "#F5EDF0" }}>
            Atendimento particular em Sao Paulo com consultas de aproximadamente 1 hora, dedicadas a entender
            profundamente o historico, realizar avaliacao clinica completa e orientar cada paciente com clareza.
          </p>
          <button
            className="px-8 py-4 bg-white rounded-full font-semibold hover:bg-opacity-90 transition-colors cursor-pointer"
            style={{ color: "#4A2D3A" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-agendar-cta"
          >
            Agendar Consulta
          </button>
        </motion.div>
      </div>
    </section>
  );
}