import { motion } from "framer-motion";
import { GraduationCap, Eye, Heart } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: GraduationCap,
      title: "Formacao de excelencia",
      description: "Graduada pela USP, com residencia medica em ginecologia e obstetricia, subespecializacao em laparoscopia e histeroscopia e certificacao internacional em cirurgia robotica pela Intuitive. 15 anos de experiencia clinica e cirurgica.",
    },
    {
      icon: Eye,
      title: "Transparencia e verdade",
      description: "A consulta e baseada em informacao clara sobre o quadro clinico e todas as possibilidades de tratamento. Sem promessas irreais. Apenas o que a ciencia comprova e o que faz sentido para cada paciente.",
    },
    {
      icon: Heart,
      title: "Visao integral da saude feminina",
      description: "Saude hormonal, bem-estar, qualidade de vida e longevidade fazem parte da mesma conversa. A mulher e vista de forma completa — nao apenas pela queixa do momento.",
    },
  ];

  return (
    <section id="differentials" className="py-24" style={{ backgroundColor: "#F5EDF0" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(196, 145, 157, 0.15)" }}>
              <span className="text-sm font-medium" style={{ color: "#4A2D3A" }}>Por que escolher</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
              Por que escolher a Dra. Marianna?
            </h3>

            <p className="text-xl" style={{ color: "#3C3C3C" }}>
              Tecnica cirurgica de alto nivel com o acolhimento que toda mulher merece.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border text-center"
                style={{ borderColor: "rgba(196, 145, 157, 0.15)" }}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #C4919D 0%, #4A2D3A 100%)" }}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                <h4 className="text-xl font-bold mb-4" style={{ color: "#212529" }}>
                  {item.title}
                </h4>

                <p className="leading-relaxed" style={{ color: "#3C3C3C" }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}