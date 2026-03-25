import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";

interface HeroProps {
  scrollToSection?: (section: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const goTo = (id: string) => {
    if (scrollToSection) {
      scrollToSection(id);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center">
      {/* PLACEHOLDER: Substituir por imagem de hero da Dra. Marianna */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full"
          style={{
            background: "linear-gradient(135deg, #4A2D3A 0%, #6B3F52 40%, #C4919D 100%)"
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, rgba(74, 45, 58, 0.95), rgba(74, 45, 58, 0.7), rgba(74, 45, 58, 0.3))" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 pt-32 sm:pt-36">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-block px-4 py-2 backdrop-blur-sm border rounded-full mb-6"
              style={{ backgroundColor: "rgba(196, 145, 157, 0.2)", borderColor: "rgba(196, 145, 157, 0.3)" }}
            >
              <span className="text-sm font-medium" style={{ color: "#F5EDF0" }}>
                Ginecologista, Obstetra e Cirurgia
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Ginecologia com{" "}
              <span style={{ color: "#C4919D" }}>
                tecnica, cuidado e verdade
              </span>
            </h2>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#F5EDF0" }}>
              Dra. Marianna Siqueira — Ginecologista, Obstetra e Cirurgia
            </p>

            <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(245, 237, 240, 0.85)" }}>
              Especialista em cirurgia laparoscopica, robotica e histeroscopia, com 15 anos de experiencia
              cuidando da saude da mulher em todas as fases da vida. Atendimento particular, humanizado e
              baseado em evidencias cientificas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("contact")}
                className="group px-8 py-4 text-white rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer"
                style={{ background: "#C4919D" }}
                data-testid="button-agendar-hero"
              >
                <Calendar size={20} />
                Agendar Consulta
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo("about")}
                className="px-8 py-4 backdrop-blur-sm text-white rounded-full font-medium border-2 transition-all flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", borderColor: "rgba(255, 255, 255, 0.2)" }}
                data-testid="button-sobre-hero"
              >
                <User size={20} />
                Conheca a Dra. Marianna
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-16 pt-6 sm:pt-10 border-t"
            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
          >
            {[
              { value: "15+", label: "Anos de Experiencia" },
              { value: "3", label: "Subespecialidades" },
              { value: "USP", label: "Formacao Academica" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm" style={{ color: "#F5EDF0" }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10"
        style={{ background: "linear-gradient(to top, #FFFFFF, transparent)" }}
      />
    </div>
  );
}