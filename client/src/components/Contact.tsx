import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: "#EFEFEF" }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-2 rounded-full mb-6" style={{ backgroundColor: "rgba(196, 145, 157, 0.15)" }}>
            <span className="text-sm font-medium" style={{ color: "#4A2D3A" }}>Entre em Contato</span>
          </div>

          <h3 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "#212529" }}>
            Agende sua Consulta
          </h3>

          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3C3C3C" }}>
            Atendimento particular. Consultório em São Paulo.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Info de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(196, 145, 157, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F5EDF0" }}>
                  <MapPin className="w-5 h-5" style={{ color: "#C4919D" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Endereço</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    Rua Joaquim Floriano, 466<br />
                    Conjunto 902 — Itaim Bibi<br />
                    São Paulo/SP
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(196, 145, 157, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F5EDF0" }}>
                  <Phone className="w-5 h-5" style={{ color: "#C4919D" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>Contato</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    Telefone: A confirmar<br />
                    WhatsApp: A confirmar
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border" style={{ borderColor: "rgba(196, 145, 157, 0.15)" }}>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#F5EDF0" }}>
                  <Mail className="w-5 h-5" style={{ color: "#C4919D" }} />
                </div>
                <div>
                  <p className="font-bold mb-1" style={{ color: "#212529" }}>E-mail</p>
                  <p className="text-sm" style={{ color: "#3C3C3C" }}>
                    A confirmar
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-bold mb-2" style={{ color: "#4A2D3A" }}>Mensagem Enviada!</h4>
                  <p className="mb-6" style={{ color: "#3C3C3C" }}>Entraremos em contato em breve.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-6 py-2 rounded-lg border font-medium transition-colors hover:bg-gray-50 cursor-pointer"
                    style={{ borderColor: "rgba(196, 145, 157, 0.3)", color: "#4A2D3A" }}
                    data-testid="button-new-message"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>Nome Completo</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                        style={{ borderColor: "rgba(196, 145, 157, 0.3)" }}
                        placeholder="Seu nome"
                        data-testid="input-name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>Telefone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                        style={{ borderColor: "rgba(196, 145, 157, 0.3)" }}
                        placeholder="(11) 99999-9999"
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>E-mail</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all outline-none"
                      style={{ borderColor: "rgba(196, 145, 157, 0.3)" }}
                      placeholder="seu@email.com"
                      data-testid="input-email"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#212529" }}>Mensagem</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all resize-none outline-none"
                      style={{ borderColor: "rgba(196, 145, 157, 0.3)" }}
                      placeholder="Como podemos ajudá-la?"
                      data-testid="input-message"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">Ocorreu um erro ao enviar. Tente novamente.</p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-8 py-4 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-xl transition-all cursor-pointer disabled:opacity-70"
                    style={{ background: "linear-gradient(135deg, #C4919D 0%, #4A2D3A 100%)" }}
                    data-testid="button-submit"
                  >
                    {status === "loading" ? (
                      <><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>
                    ) : (
                      <>Enviar Mensagem <Send size={20} /></>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
