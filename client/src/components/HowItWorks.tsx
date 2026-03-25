import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const topics = [
    {
      title: "Anticoncepcao — qual o melhor metodo?",
      description: "DIU, implante, pilula ou outros metodos. A escolha ideal depende do historico de saude, do estilo de vida e dos objetivos reprodutivos de cada mulher.",
    },
    {
      title: "Endometriose: diagnostico e tratamento",
      description: "Dor pelvica, colicas intensas e dificuldade para engravidar podem ser sinais da doenca. O diagnostico precoce pode mudar completamente a evolucao do quadro.",
    },
    {
      title: "Reposicao hormonal na menopausa",
      description: "Quando indicada corretamente, a reposicao hormonal pode melhorar sintomas, qualidade de vida, saude ossea e bem-estar.",
    },
    {
      title: "Cirurgia robotica: o que e e quando indicar",
      description: "Tecnologia de alta precisao utilizada em cirurgias ginecologicas complexas, com incisoes menores e recuperacao mais rapida.",
    },
    {
      title: "Falta de libido e cansaco",
      description: "Alteracoes hormonais podem impactar diretamente energia, humor e desejo sexual. Uma avaliacao adequada pode identificar causas trataveis.",
    },
    {
      title: "Saude feminina apos os 40 anos",
      description: "Habitos, alimentacao, atividade fisica e acompanhamento medico adequado fazem diferenca real na longevidade e qualidade de vida.",
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
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#F5EDF0" }}>
            <span className="text-sm font-medium" style={{ color: "#C4919D" }}>Conteudo Educativo</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            O que voce precisa saber
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Informacao de qualidade para cuidar melhor da sua saude.
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
              style={{ borderColor: "rgba(196, 145, 157, 0.15)" }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#F5EDF0" }}
              >
                <BookOpen className="w-5 h-5" style={{ color: "#C4919D" }} />
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