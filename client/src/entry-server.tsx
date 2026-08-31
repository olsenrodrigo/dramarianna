import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

/**
 * Entrada de renderização estática (prerender).
 * Usada apenas em tempo de build para gravar o HTML da home dentro de
 * <div id="root"> — sem isso, robôs que não executam JavaScript
 * (GPTBot, PerplexityBot, ClaudeBot, OAI-SearchBot) enxergam a página vazia.
 */
export function render(path = "/") {
  return renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>,
  );
}
