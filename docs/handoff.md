# Handoff do portfólio

## O que está pronto

- Aplicação React com TypeScript, Vite e rotas centralizadas.
- Páginas de início, sobre, projetos, detalhe de projeto, habilidades, experiência, contato, currículo e rota não encontrada.
- Rota dinâmica de projetos baseada em `slug`, incluindo estado para projeto inexistente.
- Navegação interna com React Router, retorno ao topo e foco no conteúdo principal após mudança de rota.
- Componentes funcionais, props tipadas, chaves estáveis e conteúdo profissional separado em `src/data/`.
- CSS Modules nos componentes, tokens globais e regras específicas para impressão do currículo.
- Estrutura básica de acessibilidade com hierarquia de headings, labels de formulário, textos alternativos, link para pular ao conteúdo e foco visível.

## O que ainda é provisório

- Os dois projetos em `src/data/projects.ts` estão marcados como exemplos; imagens, status e eventual publicação precisam de aprovação.
- Os interesses em `src/data/profile.ts` e as descrições de habilidades em `src/pages/Skills/SkillsPage.tsx` estão marcados como conteúdo temporário.
- A mensagem da rota não encontrada em `src/pages/NotFound/NotFoundPage.tsx` está marcada como conteúdo temporário.
- O formulário em `src/pages/Contact/ContactPage.tsx` apenas valida os campos localmente e não envia mensagens.
- O título técnico em `index.html` ainda deve ser substituído por um título editorial aprovado.
- Não há links de demonstração, repositório ou estudo de caso cadastrados nos projetos atuais.

## Onde alterar textos

- `src/data/profile.ts`: nome público, cargo, resumo, localização, contatos, tecnologias, características, diferenciais e interesses.
- `src/data/experience.ts`: experiência profissional, período, descrição, resultados e tecnologias.
- `src/data/education.ts`: formação acadêmica.
- `src/data/courses.ts`: cursos e certificados.
- `src/pages/Home/HomePage.tsx`: textos editoriais das seções da página inicial.
- `src/pages/Skills/SkillsPage.tsx`: descrições temporárias das habilidades.
- `src/pages/Contact/ContactPage.tsx`: textos e aviso do formulário.
- `src/pages/NotFound/NotFoundPage.tsx`: mensagem temporária da rota não encontrada.
- `index.html`: título exibido na aba do navegador.

Todo texto profissional deve ser confirmado antes da alteração. Conteúdo ainda não aprovado deve continuar identificado como temporário ou exemplo.

## Onde alterar projetos

- `src/data/projects.ts`: cadastro, ordem, destaque, status, descrições, tecnologias, imagens e links dos projetos.
- `src/types/portfolio.ts`: contrato de dados, somente se um campo realmente novo for necessário.
- `public/images/`: destino de novas imagens aprovadas. Não substituir nem editar imagens fornecidas sem autorização.

## Onde alterar cores e espaçamentos

- `src/styles/tokens.css`: fonte única para cores, escala de espaçamento, tipografia, raios, sombras e largura de contêiner.
- Arquivos `*.module.css`: composição e ajustes locais dos componentes e páginas; reutilizar os tokens em vez de repetir valores.
- `src/styles/global.css`: limitar a reset, comportamento global, utilitários transversais e impressão.

## Checklist para acabamento visual

- [ ] Comparar cada página com as referências em `docs/references/`, sem modificar os arquivos de referência.
- [ ] Revisar alinhamentos, ritmo vertical e largura de leitura em telas pequenas, médias e grandes.
- [ ] Confirmar contraste de texto, links, botões, bordas e estados de foco.
- [ ] Verificar textos longos, URLs e nomes de tecnologias sem overflow horizontal.
- [ ] Validar imagens aprovadas em diferentes proporções e densidades de tela.
- [ ] Conferir estados de hover, foco, ativo e menu móvel apenas por teclado.
- [ ] Conferir o currículo na pré-visualização de impressão e em PDF, incluindo quebras de página.

## Checklist para publicação

- [ ] Aprovar todos os textos profissionais, contatos, datas, resultados e competências.
- [ ] Substituir conteúdos marcados como temporários, exemplos e TODOs.
- [ ] Adicionar apenas imagens de projetos aprovadas e revisar seus textos alternativos.
- [ ] Validar todos os links externos, downloads e endereços de e-mail.
- [ ] Confirmar que o PDF do currículo e o conteúdo da página de currículo estão consistentes.
- [ ] Definir título, descrição, favicon e demais metadados públicos aprovados.
- [ ] Configurar a hospedagem com fallback de SPA para `index.html` nas rotas diretas.
- [ ] Testar as rotas `/`, `/sobre`, `/projetos`, `/projetos/:projectSlug`, `/habilidades`, `/experiencia`, `/contato`, `/curriculo` e uma URL inexistente.
- [ ] Testar navegação completa com teclado e um leitor de tela.
- [ ] Executar `npm run lint` e `npm run build` no ambiente de publicação.
