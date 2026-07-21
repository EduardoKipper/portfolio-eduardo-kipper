# Arquitetura do portfólio

## Visão geral

O portfólio é uma aplicação React de página única, construída com TypeScript e Vite. A arquitetura deve favorecer conteúdo tipado, componentes pequenos e páginas compostas a partir de blocos reutilizáveis. A estética final será definida posteriormente; este documento descreve responsabilidades e limites, não uma implementação visual.

No estado atual, `src/App.tsx` concentra o conteúdo do template inicial e `src/main.tsx` monta a aplicação. As estruturas abaixo representam a direção recomendada e devem ser introduzidas incrementalmente.

## Organização das páginas

Cada destino navegável deve ter um componente de página em `src/pages/`. A página coordena seções e dados, mas evita concentrar detalhes visuais ou regras reutilizáveis.

Rotas previstas, sujeitas à validação do conteúdo:

| Página | Responsabilidade |
| --- | --- |
| Início | Apresentação resumida e acesso às principais áreas. |
| Sobre | Perfil e contexto profissional validados. |
| Experiência | Histórico profissional em ordem coerente. |
| Competências | Tecnologias e áreas de atuação confirmadas. |
| Projetos | Lista filtrável ou organizada dos projetos publicados. |
| Detalhe do projeto | Estudo individual identificado por `slug`. |
| Currículo | Resumo profissional e acesso ao PDF fornecido. |
| Contato | Canais de contato confirmados e acessíveis. |
| Não encontrada | Resposta para URLs sem rota correspondente. |

Estrutura sugerida:

```text
src/
├── components/
│   ├── layout/
│   └── ui/
├── data/
├── pages/
├── routes/
├── styles/
├── types/
├── App.tsx
└── main.tsx
```

Só devem ser criadas pastas e abstrações quando houver um uso concreto.

## Componentes compartilhados

`src/components/layout/` deve reunir componentes estruturais usados por várias páginas, como cabeçalho, navegação, rodapé e contêiner principal. `src/components/ui/` deve conter elementos reutilizáveis e independentes de página, como links de ação, títulos de seção, cartões de projeto e listas de tecnologias.

Cada componente deve:

- ser funcional e tipado;
- ter uma responsabilidade principal;
- receber dados por propriedades em vez de importar conteúdo específico, sempre que isso aumentar a reutilização;
- usar seu próprio arquivo `*.module.css` para estilos locais;
- preservar semântica, foco visível, operação por teclado e nomes acessíveis;
- usar Lucide React para ícones comuns, evitando bibliotecas redundantes.

Componentes exclusivos de uma página podem ficar próximos dela. Um componente só deve ser promovido à área compartilhada depois de existir reutilização real ou uma responsabilidade transversal clara.

## Camada de dados

O conteúdo profissional deve ficar separado da apresentação, preferencialmente em módulos de `src/data/`. Projetos, experiências, competências, contatos e perfil devem usar tipos explícitos, permitindo validação pelo TypeScript e renderização consistente.

Exemplos de entidades:

- `Project`: `slug`, título, resumo, descrição, tecnologias, imagens, links e destaque;
- `Experience`: organização, função, período, descrição e realizações;
- `SkillGroup`: categoria e lista de competências;
- `Profile`: apresentação, localização pública, links e caminho do currículo.

Campos exatos devem acompanhar as necessidades reais das telas. Conteúdo ainda não confirmado deve ser omitido ou marcado com `[CONTEÚDO TEMPORÁRIO]`; referências visuais não são fonte de fatos profissionais definitivos.

No início, módulos TypeScript locais são suficientes. Uma API ou CMS só deve ser introduzido se houver necessidade concreta de atualização externa, volume ou colaboração editorial que justifique a dependência.

## Sistema de rotas

O React Router deve definir as rotas em um ponto central, dentro de `src/routes/` ou no componente raiz enquanto a configuração ainda for pequena. Um layout compartilhado pode renderizar cabeçalho, conteúdo e rodapé por meio de uma rota pai e de `Outlet`.

Convenção sugerida:

```text
/
/sobre
/experiencia
/competencias
/projetos
/projetos/:slug
/curriculo
/contato
/*
```

O parâmetro `:slug` deve buscar um projeto na camada de dados. Slugs inexistentes devem levar a um estado de conteúdo não encontrado, sem falha de renderização. Links internos devem usar os componentes do React Router; links externos e downloads devem continuar semanticamente como links.

A hospedagem precisa oferecer fallback para `index.html` em acessos diretos a rotas da SPA. Se esse suporte não estiver disponível, a estratégia de roteamento deve ser revista antes da publicação.

## Sistema visual

O sistema visual será definido em uma etapa posterior. A implementação deve preservar a separação abaixo:

- `src/styles/global.css`: reset e regras globais de elementos;
- `src/styles/tokens.css`: propriedades customizadas para cores, tipografia, espaços, bordas, sombras e camadas;
- `src/styles/utilities.css`: poucas classes utilitárias globais com propósito transversal;
- `*.module.css`: composição e aparência de páginas e componentes.

Não usar Tailwind, estilos inline ou valores visuais espalhados sem necessidade. Tokens devem ter nomes semânticos, e estados de interação precisam incluir `hover` quando aplicável, foco visível e preferências como redução de movimento. O layout deve ser responsivo e manter contraste e legibilidade adequados.

As imagens em `docs/references/` servem apenas como referência para uma fase futura e não devem ser copiadas, editadas ou tratadas como especificação completa.

## Estratégia para projetos e currículo

### Projetos

A listagem e a página de detalhe devem consumir a mesma coleção tipada. Cada projeto precisa de um `slug` único, um resumo para cartões e conteúdo detalhado opcional. A interface deve lidar explicitamente com campos ausentes, sem fabricar textos para completar a composição.

Imagens de projetos devem ser adicionadas somente depois de fornecidas ou aprovadas. Metadados como autoria, cliente, resultados, datas, repositório e URL pública precisam de confirmação antes da publicação.

### Currículo

O PDF fornecido permanece como arquivo estático em `public/documents/` e não deve ser modificado. A aplicação pode oferecer um link para visualização ou download, com nome acessível e comportamento claro. Uma eventual página de currículo deve obter seus dados da mesma fonte tipada usada nas demais páginas, evitando divergências entre seções.

Atualizações de currículo devem substituir o arquivo apenas quando uma nova versão aprovada for fornecida. O conteúdo exibido no site e o documento para download devem ser revisados em conjunto para manter consistência.
