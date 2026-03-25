import { motion } from "framer-motion";
import { Award, BookOpen, GraduationCap, Briefcase, IdCard, Heart } from "lucide-react";

export default function About() {
  const credentials = [
    { icon: Briefcase, text: "15 anos de experiencia em ginecologia e obstetricia" },
    { icon: Award, text: "Especialista em cirurgia laparoscopica e histeroscopia" },
    { icon: BookOpen, text: "Certificacao em cirurgia robotica pela Intuitive" },
    { icon: GraduationCap, text: "Formada pela Universidade de Sao Paulo (USP)" },
    { icon: Heart, text: "Mae de dois filhos" },
    { icon: IdCard, text: "CRM 144411/SP" },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#F5EDF0" }}>
              <span className="text-sm font-medium" style={{ color: "#C4919D" }}>Sobre a Especialista</span>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "#212529" }}>
              Dra. Marianna Siqueira
            </h3>

            <p className="text-lg mb-6 font-medium" style={{ color: "#C4919D" }}>
              Medicina com proposito, tecnica e humanidade
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              A <strong>Dra. Marianna Siqueira de Assumpcao</strong> e ginecologista e obstetra formada pela
              <strong> Universidade de Sao Paulo (USP)</strong>, com residencia medica na especialidade e
              subespecializacao em <strong>cirurgia laparoscopica e histeroscopia</strong>. Possui tambem
              certificacao em <strong>cirurgia robotica pela Intuitive</strong>.
            </p>

            <p className="text-lg mb-4 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Sua trajetoria na medicina comecou ainda na adolescencia, ao acompanhar de perto o tratamento
              de cancer de mama de sua mae, experiencia que despertou o desejo de cuidar de pessoas em
              momentos importantes da saude.
            </p>

            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#3C3C3C" }}>
              Com <strong>15 anos de atuacao</strong>, dedica-se ao diagnostico e tratamento de condicoes que
              impactam a qualidade de vida feminina, como endometriose, miomas e alteracoes hormonais. Mae
              de dois filhos, acredita em uma medicina baseada em escuta, transparencia e evidencias
              cientificas, respeitando a individualidade de cada mulher.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {credentials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="flex items-center gap-3 rounded-xl p-3 border"
                  style={{ borderColor: "rgba(196, 145, 157, 0.15)", backgroundColor: "rgba(245, 237, 240, 0.4)" }}
                >
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F5EDF0" }}>
                    <item.icon className="w-4 h-4" style={{ color: "#C4919D" }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: "#212529" }}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* PLACEHOLDER: Substituir por foto da Dra. Marianna */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-sm">
              <div
                className="w-full h-[550px] flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #F5EDF0 0%, #C4919D 100%)" }}
              >
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <p className="text-lg font-medium opacity-80">Foto da Dra. Marianna</p>
                  <p className="text-sm opacity-60 mt-2">Substituir por foto profissional</p>
                </div>
              </div>
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(196, 145, 157, 0.2), transparent)" }} />
            </div>
            <div className="absolute -bottom-6 -right-6 w-56 h-56 rounded-3xl -z-10" style={{ backgroundColor: "rgba(196, 145, 157, 0.1)" }} />
            <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full -z-10" style={{ backgroundColor: "rgba(196, 145, 157, 0.1)" }} />
          </motion.div>
        </div>

        {/* Indicadores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t"
          style={{ borderColor: "rgba(196, 145, 157, 0.2)" }}
        >
          {[
            { value: "15 anos", label: "de experiencia em ginecologia e obstetricia" },
            { value: "3 subespecialidades", label: "Laparoscopia, Histeroscopia e Cirurgia Robotica" },
            { value: "Formacao USP", label: "Uma das principais universidades medicas do pais" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-bold mb-2" style={{ color: "#4A2D3A" }}>{item.value}</div>
              <div className="text-base" style={{ color: "#3C3C3C" }}>{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Frase de Posicionamento */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <blockquote className="text-3xl md:text-4xl font-bold italic max-w-3xl mx-auto mb-8" style={{ color: "#4A2D3A" }}>
            "Cada mulher e unica e merece um cuidado que respeite isso."
          </blockquote>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 text-white rounded-full font-medium hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "#C4919D" }}
          >
            Agendar minha consulta
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}