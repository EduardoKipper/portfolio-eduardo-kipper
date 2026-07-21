# Portfólio — Eduardo Kipper

Portfólio profissional de Eduardo Kipper, criado para apresentar sua trajetória, competências, projetos e formas de contato em uma experiência web rápida, acessível e responsiva.

O projeto está em fase inicial. A aplicação ainda mantém parte do conteúdo do template do Vite, e a identidade visual e as páginas definitivas serão desenvolvidas em etapas posteriores. Textos temporários devem ser identificados como placeholders e não representam informações profissionais finais.

## Tecnologias

- React 19 para a interface;
- TypeScript para tipagem estática;
- Vite para desenvolvimento e build;
- React Router para navegação entre páginas;
- CSS Modules para estilos de componentes;
- CSS global para reset, tokens e utilitários;
- Lucide React para ícones;
- ESLint para análise estática.

## Requisitos

- Node.js compatível com o Vite 8;
- npm (o repositório inclui `package-lock.json`).

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm install` | Instala as dependências do projeto. |
| `npm run dev` | Inicia o servidor local do Vite com atualização automática. |
| `npm run lint` | Executa o ESLint em todo o projeto. |
| `npm run build` | Valida o TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente o build existente para conferência. |

## Estrutura de pastas

Estrutura atual relevante:

```text
portfolio-eduardo-kipper/
├── docs/
│   ├── architecture.md       # decisões e direção arquitetural
│   └── references/           # referências visuais fornecidas (não editar)
├── public/
│   ├── documents/            # documentos públicos fornecidos
│   └── images/               # imagens públicas fornecidas
├── src/
│   ├── assets/               # arquivos importados pelo código-fonte
│   ├── App.tsx               # componente raiz atual
│   ├── App.css               # estilos do template atual
│   ├── index.css             # estilos globais atuais
│   └── main.tsx              # ponto de entrada da aplicação
├── AGENTS.md                 # regras para contribuições assistidas
├── package.json              # dependências e scripts
└── vite.config.ts            # configuração do Vite
```

A evolução sugerida para `src/` está detalhada em [`docs/architecture.md`](docs/architecture.md). As pastas propostas devem ser criadas à medida que houver código real para elas, sem antecipar abstrações vazias.

## Desenvolvimento local

1. Clone o repositório e acesse sua pasta.
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o ambiente de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra o endereço exibido pelo Vite no terminal.

Antes de concluir uma alteração, execute:

```bash
npm run lint
npm run build
```

Não altere arquivos de referência, documentos ou imagens fornecidos. Novos assets devem ter nomes descritivos e ser adicionados somente quando necessários.

## Build de produção

Gere os arquivos otimizados com:

```bash
npm run build
```

O resultado será salvo em `dist/`. Para validá-lo localmente:

```bash
npm run preview
```

Como a navegação usa `HashRouter`, as rotas internas ficam após `#` na URL e continuam funcionando no GitHub Pages mesmo quando a página é atualizada diretamente.

## Deploy no GitHub Pages

O projeto é publicado automaticamente pelo workflow do GitHub Actions. Antes do primeiro deploy, acesse **Settings → Pages** no repositório e selecione **GitHub Actions** como fonte de publicação.

- Um push na branch `main` dispara o lint, o build de produção e o deploy.
- A URL esperada é `https://eduardokipper.github.io/portfolio-eduardo-kipper/`.
- Para executar manualmente, abra a aba **Actions**, selecione o workflow **Deploy to GitHub Pages**, clique em **Run workflow** e escolha a branch `main`.
- Em caso de falha, abra a execução correspondente na aba **Actions** e consulte o log da etapa que falhou, especialmente instalação, lint, build, upload do artifact ou deploy.

## Como inserir projetos e informações profissionais

Os conteúdos definitivos devem ser confirmados com Eduardo antes da publicação. Não deduza clientes, cargos, datas, resultados, links ou competências a partir das referências visuais.

Na implementação da camada de dados:

1. mantenha projetos, experiências, competências, contatos e dados de perfil em módulos tipados dentro de `src/data/`;
2. defina os contratos TypeScript correspondentes em `src/types/` ou junto ao domínio quando forem usados por uma única área;
3. adicione um identificador estável (`slug`) a cada projeto para sua URL de detalhes;
4. associe imagens por caminhos existentes e escreva textos alternativos úteis;
5. marque conteúdo ainda não aprovado com um rótulo inequívoco, como `[CONTEÚDO TEMPORÁRIO]`;
6. mantenha o currículo público em `public/documents/` e atualize seus links na camada de dados, sem editar o arquivo fornecido;
7. valide links externos, datas e ortografia antes do build final.

Exemplo apenas estrutural, sem conteúdo profissional definitivo:

```ts
export const projects = [
  {
    slug: 'projeto-temporario',
    title: '[CONTEÚDO TEMPORÁRIO] Nome do projeto',
    summary: '[CONTEÚDO TEMPORÁRIO] Breve descrição.',
    technologies: ['[TECNOLOGIA A CONFIRMAR]'],
  },
]
```
