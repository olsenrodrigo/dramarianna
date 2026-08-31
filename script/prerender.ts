import { build as viteBuild } from "vite";
import { readFile, writeFile, rm } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";

const ROOT = process.cwd();
const SSR_OUT = path.resolve(ROOT, "dist/.prerender");
const HTML = path.resolve(ROOT, "dist/public/index.html");

/**
 * Gera o HTML estático da home e injeta dentro de <div id="root">.
 *
 * Sem esta etapa o site é 100% client-side: o HTML servido tem só
 * <div id="root"></div>. O Google até renderiza JavaScript, mas os robôs
 * de busca generativa (GPTBot, OAI-SearchBot, PerplexityBot, ClaudeBot)
 * não executam JS e enxergam a página vazia.
 */
export async function prerender() {
  await viteBuild({
    configFile: path.resolve(ROOT, "vite.config.ts"),
    logLevel: "warn",
    build: {
      ssr: path.resolve(ROOT, "client/src/entry-server.tsx"),
      outDir: SSR_OUT,
      emptyOutDir: true,
      rollupOptions: { output: { entryFileNames: "entry-server.js" } },
    },
  });

  const entry = pathToFileURL(path.join(SSR_OUT, "entry-server.js")).href;
  const { render } = (await import(entry)) as { render: (p?: string) => string };
  const appHtml = render("/");

  const html = await readFile(HTML, "utf-8");
  if (!html.includes('<div id="root"></div>')) {
    throw new Error('prerender: <div id="root"></div> não encontrado em dist/public/index.html');
  }
  await writeFile(HTML, html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`));
  await rm(SSR_OUT, { recursive: true, force: true });

  console.log(`prerender: ${appHtml.length} caracteres de HTML injetados em dist/public/index.html`);
}
