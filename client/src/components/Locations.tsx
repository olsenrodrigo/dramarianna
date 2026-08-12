import { motion } from "framer-motion";
import { MapPin, Clock, Users, Shield } from "lucide-react";

export default function Locations() {
  const features = [
    {
      icon: Shield,
      text: "Ambiente acolhedor e discreto no coração do Itaim Bibi",
    },
    {
      icon: Clock,
      text: "Consultas particulares com tempo dedicado a cada paciente",
    },
    {
      icon: Users,
      text: "Equipe de secretárias para suporte em agendamentos e orientações",
    },
    {
      icon: MapPin,
      text: "Fácil acesso para quem vem do Itaim, Vila Olímpia, Jardins, Faria Lima, Brooklin, Moema e Pinheiros",
    },
  ];

  return (
    <section id="locations" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(130, 126, 204, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#755751" }}>Consultório no Itaim Bibi</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Consultório de Ginecologia no Itaim Bibi
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Um espaço pensado para oferecer conforto, privacidade e tranquilidade durante o atendimento,
            na Rua Joaquim Floriano, em São Paulo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info do Consultório */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border"
                  style={{ borderColor: "rgba(130, 126, 204, 0.15)" }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#FCF3EB" }}>
                    <feature.icon className="w-5 h-5" style={{ color: "#827ECC" }} />
                  </div>
                  <span className="font-medium pt-2" style={{ color: "#212529" }}>{feature.text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-2xl border"
              style={{ borderColor: "rgba(130, 126, 204, 0.2)", backgroundColor: "rgba(252, 243, 235, 0.5)" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#827ECC" }} />
                <div>
                  <p className="font-bold" style={{ color: "#212529" }}>Endereço</p>
                  <address className="not-italic" style={{ color: "#3C3C3C" }}>
                    Rua Joaquim Floriano, 466<br />
                    Conjunto 902 — Itaim Bibi<br />
                    São Paulo/SP
                  </address>
                  <p className="text-sm mt-3 leading-relaxed" style={{ color: "#3C3C3C" }}>
                    Referência para quem procura uma <strong>ginecologista no Itaim Bibi</strong>: o
                    consultório fica na Rua Joaquim Floriano, a poucos minutos da Av. Brigadeiro Faria Lima
                    e da Av. Juscelino Kubitschek, com estacionamentos no entorno.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg border"
            style={{ borderColor: "rgba(130, 126, 204, 0.15)", position: "relative", minHeight: "480px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8!2d-46.677!3d-23.585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDM1JzA2LjAiUyA0NsKwNDAnMzcuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa do consultório de ginecologia no Itaim Bibi — Rua Joaquim Floriano, 466, São Paulo"
            />
          </motion.div>
        </div>

        {/* Área de atendimento — SEO local */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mt-12 text-center"
        >
          <h4 className="text-lg font-bold mb-3" style={{ color: "#755751" }}>
            Ginecologia e obstetrícia no Itaim e região
          </h4>
          <p className="text-base leading-relaxed" style={{ color: "#3C3C3C" }}>
            O consultório atende mulheres do Itaim Bibi e de toda a região de São Paulo — Vila Olímpia,
            Jardins, Faria Lima, Brooklin, Moema, Pinheiros e Vila Nova Conceição — que procuram uma
            ginecologista e obstetra para o acompanhamento contínuo da saúde da mulher, da primeira consulta
            à menopausa, incluindo pré-natal e cirurgias por laparoscopia, histeroscopia e cirurgia robótica.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
