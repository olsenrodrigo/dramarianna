import { motion } from "framer-motion";
import { Scissors, Activity, AlertCircle, Monitor, Microscope, Baby } from "lucide-react";

export default function Treatments() {
  const surgeries = [
    { icon: Microscope, text: "Cirurgia laparoscópica (endometriose, cistos e miomas)" },
    { icon: Activity, text: "Histeroscopia diagnóstica e cirúrgica" },
    { icon: Monitor, text: "Cirurgia robótica (certificação Intuitive)" },
    { icon: Scissors, text: "Histerectomia (retirada do útero)" },
    { icon: Scissors, text: "Miomectomia" },
    { icon: Baby, text: "Parto normal e cesárea" },
  ];

  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "#F5EDF0" }}>
            <span className="text-sm font-medium" style={{ color: "#C4919D" }}>Cirurgias</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Cirurgia Ginecológica Avançada
          </h3>

          <p className="text-lg max-w-3xl mx-auto mb-2" style={{ color: "#C4919D" }}>
            <strong>Especialização em laparoscopia, histeroscopia e cirurgia robótica</strong>
          </p>

          <p className="text-lg max-w-4xl mx-auto" style={{ color: "#3C3C3C" }}>
            Procedimentos realizados com técnicas minimamente invasivas, que permitem mais precisão,
            menor trauma cirúrgico e recuperação mais rápida.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {surgeries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-lg border hover:shadow-xl transition-all"
              style={{ borderColor: "rgba(196, 145, 157, 0.15)" }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F5EDF0" }}>
                <item.icon className="w-5 h-5" style={{ color: "#C4919D" }} />
              </div>
              <span className="font-medium pt-2" style={{ color: "#212529" }}>{item.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 max-w-3xl mx-auto p-6 rounded-xl"
          style={{ backgroundColor: "rgba(196, 145, 157, 0.08)" }}
        >
          <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#C4919D" }} />
          <p className="text-base" style={{ color: "#3C3C3C" }}>
            A indicação cirúrgica é feita apenas quando necessária, sempre com decisão compartilhada
            e orientação clara à paciente.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            className="px-8 py-4 text-white rounded-full font-medium hover:shadow-xl transition-all cursor-pointer"
            style={{ background: "#C4919D" }}
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Quero saber mais
          </button>
        </motion.div>
      </div>
    </section>
  );
}
