/**
 * Contatos da clínica — fonte única.
 *
 * Até 14/09/2026 telefone, WhatsApp e e-mail estavam como "A confirmar" em três
 * arquivos diferentes (Contact, Navbar, Rodapé), e os ícones de WhatsApp e
 * e-mail apontavam para `#contact` em vez de abrir a conversa. Centralizar aqui
 * evita que os três voltem a divergir.
 *
 * Dados confirmados pela clínica em 14/09/2026.
 */

export const contato = {
  telefone: "(11) 3079-5050",
  telefoneLink: "tel:+551130795050",

  whatsapp: "(11) 97675-0665",
  whatsappNumero: "5511976750665",

  email: "m@dramariannaassumpcao.com",

  instagram: "https://www.instagram.com/dramariassumpcao",
} as const;

export const emailLink = `mailto:${contato.email}`;

/** Link do WhatsApp já com a mensagem de abertura preenchida. */
export const whatsappLink = `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(
  "Olá! Vim pelo site e gostaria de agendar uma consulta.",
)}`;
