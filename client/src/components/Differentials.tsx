import { motion } from "framer-motion";
import { GraduationCap, Eye, Heart } from "lucide-react";

export default function Differentials() {
  const differentials = [
    {
      icon: GraduationCap,
      title: "Formação de excelência",
      description: "Graduada pela USP, com residência médica em ginecologia e obstetrícia, subespecialização em laparoscopia e histeroscopia e certificação internacional em cirurgia robótica pela Intuitive. 15 anos de experiência clínica e cirúrgica.",
    },
    {
      icon: Eye,
      title: "Transparência e verdade",
      description: "A consulta é baseada em informação clara sobre o quadro clínico e todas as possibilidades de tratamento. Sem promessas irreais. Apenas o que a ciência comprova e o que faz sentido para cada paciente.",
    },
    {
      icon: Heart,
      title: "Visão integral da saúde feminina",
      description: "Saúde hormonal, bem-estar, qualidade de vida e longevidade fazem parte da mesma conversa. A mulher é vista de forma completa — não apenas pela queixa do momento.",
    },
  ];

  return (
    <section id="differentials" className="py-24" style={{ backgroundColor: "#FCF3EB" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(130, 126, 204, 0.15)" }}>
              <span className="text-sm font-medium" style={{ color: "#755751" }}>Por que escolher</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
              Por que escolher a Dra. Marianna?
            </h3>

            <p className="text-xl" style={{ color: "#3C3C3C" }}>
              Técnica cirúrgica de alto nível com o acolhimento que toda mulher merece.
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
                style={{ borderColor: "rgba(130, 126, 204, 0.15)" }}
              >
                <div className="mx-auto w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "linear-gradient(135deg, #827ECC 0%, #755751 100%)" }}
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
