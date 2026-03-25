import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const topics = [
    {
      title: "Anticoncepção — qual o melhor método?",
      description: "DIU, implante, pílula ou outros métodos. A escolha ideal depende do histórico de saúde, do estilo de vida e dos objetivos reprodutivos de cada mulher.",
    },
    {
      title: "Endometriose: diagnóstico e tratamento",
      description: "Dor pélvica, cólicas intensas e dificuldade para engravidar podem ser sinais da doença. O diagnóstico precoce pode mudar completamente a evolução do quadro.",
    },
    {
      title: "Reposição hormonal na menopausa",
      description: "Quando indicada corretamente, a reposição hormonal pode melhorar sintomas, qualidade de vida, saúde óssea e bem-estar.",
    },
    {
      title: "Cirurgia robótica: o que é e quando indicar",
      description: "Tecnologia de alta precisão utilizada em cirurgias ginecológicas complexas, com incisões menores e recuperação mais rápida.",
    },
    {
      title: "Falta de libido e cansaço",
      description: "Alterações hormonais podem impactar diretamente energia, humor e desejo sexual. Uma avaliação adequada pode identificar causas tratáveis.",
    },
    {
      title: "Saúde feminina após os 40 anos",
      description: "Hábitos, alimentação, atividade física e acompanhamento médico adequado fazem diferença real na longevidade e qualidade de vida.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#FCF3EB" }}>
            <span className="text-sm font-medium" style={{ color: "#827ECC" }}>Conteúdo Educativo</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            O que você precisa saber
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Informação de qualidade para cuidar melhor da sua saúde.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(130, 126, 204, 0.15)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#FCF3EB" }}
              >
                <BookOpen className="w-5 h-5" style={{ color: "#827ECC" }} />
              </div>

              <h4 className="text-lg font-bold mb-3" style={{ color: "#212529" }}>
                {topic.title}
              </h4>

              <p className="text-sm leading-relaxed" style={{ color: "#3C3C3C" }}>
                {topic.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
