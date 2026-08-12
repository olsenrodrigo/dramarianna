import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

/**
 * Perguntas frequentes com foco em busca local (Itaim Bibi / São Paulo).
 * O mesmo conteúdo está espelhado no schema FAQPage em client/index.html —
 * ao editar uma pergunta aqui, atualize também o JSON-LD.
 */
const faqs = [
  {
    question: "Onde fica o consultório de ginecologia no Itaim?",
    answer:
      "O consultório da Dra. Marianna Siqueira fica na Rua Joaquim Floriano, 466 — Conjunto 902, Itaim Bibi, São Paulo/SP. A localização é de fácil acesso para quem vem do Itaim Bibi, Vila Olímpia, Jardins, Faria Lima, Brooklin, Moema e Pinheiros.",
  },
  {
    question: "A Dra. Marianna é ginecologista e obstetra no Itaim Bibi?",
    answer:
      "Sim. A Dra. Marianna Siqueira de Assumpção é Ginecologista, Obstetra e Cirurgiã em São Paulo e atende no Itaim Bibi. São 15 anos de experiência no cuidado da mulher, com subespecialização em cirurgia laparoscópica, histeroscopia e certificação em cirurgia robótica pela Intuitive. CRM 144411/SP.",
  },
  {
    question: "Quais atendimentos de saúde da mulher são oferecidos no Itaim?",
    answer:
      "O consultório oferece cuidado da mulher em todas as fases da vida: consulta ginecológica de rotina, pré-natal e acompanhamento obstétrico, tratamento de endometriose e dor pélvica, miomas, alterações hormonais e menopausa, anticoncepção (DIU, implante hormonal e Implanon), laser ginecológico e cirurgias por laparoscopia, histeroscopia e cirurgia robótica.",
  },
  {
    question: "O atendimento é particular ou por convênio?",
    answer:
      "O atendimento no consultório do Itaim Bibi é particular, com consultas de tempo dedicado a cada paciente. Ao final da consulta é emitido recibo para solicitação de reembolso junto ao seu plano de saúde, quando o plano oferece essa cobertura.",
  },
  {
    question: "O que significa ginecologia com cuidado, técnica e verdade?",
    answer:
      "É a forma como a Dra. Marianna pratica a medicina: escuta atenta e sem pressa (cuidado), procedimentos com as técnicas cirúrgicas mais atuais como laparoscopia, histeroscopia e cirurgia robótica (técnica) e explicações honestas e baseadas em evidências científicas sobre diagnóstico, alternativas e expectativas de resultado (verdade).",
  },
  {
    question: "Como agendar consulta com a ginecologista no Itaim Bibi?",
    answer:
      "O agendamento pode ser feito pelo formulário de contato deste site, por WhatsApp ou por e-mail. A equipe de secretárias retorna com os horários disponíveis e orienta sobre a preparação necessária para a consulta.",
  },
];

export default function PerguntasFrequentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(130, 126, 204, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#755751" }}>Perguntas Frequentes</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#212529" }}>
            Dúvidas sobre a consulta no Itaim
          </h3>

          <p className="text-lg max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            As perguntas que as pacientes mais fazem antes da primeira consulta de ginecologia no Itaim Bibi.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border overflow-hidden"
                style={{
                  borderColor: "rgba(130, 126, 204, 0.2)",
                  backgroundColor: isOpen ? "rgba(252, 243, 235, 0.5)" : "#FFFFFF",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start gap-4 text-left p-6 cursor-pointer"
                  data-testid={`faq-question-${index}`}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#FCF3EB" }}
                  >
                    <HelpCircle className="w-5 h-5" style={{ color: "#827ECC" }} />
                  </div>

                  <h4 className="flex-1 text-lg font-semibold pt-1" style={{ color: "#212529" }}>
                    {faq.question}
                  </h4>

                  <ChevronDown
                    className="flex-shrink-0 w-5 h-5 mt-2 transition-transform"
                    style={{
                      color: "#827ECC",
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  />
                </button>

                {/* Renderizado sempre no DOM (apenas oculto quando fechado) para que
                    buscadores e motores generativos indexem as respostas. */}
                <div className={isOpen ? "px-6 pb-6" : "hidden"}>
                  <p className="text-base leading-relaxed sm:pl-[52px]" style={{ color: "#3C3C3C" }}>
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
