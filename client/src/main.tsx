import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;

// Em produção o HTML da home vem pré-renderizado (script/prerender.ts):
// hidratamos em vez de recriar a árvore, para não descartar o conteúdo
// que os robôs de busca já enxergam no HTML.
if (container.firstChild) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
