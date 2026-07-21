import { PROJECT_STATUS, type Project, type ProjectStatus } from '../types'

export const projects = [
  {
    slug: 'exemplo-sistema-interno-arquivos-comunicacao',
    title: '[EXEMPLO] Sistema interno de arquivos e comunicação',
    summary:
      'Plataforma interna com autenticação própria, gestão de arquivos e comunicação.',
    description:
      'Registro de exemplo baseado em uma solução descrita no currículo, com liderança técnica de uma equipe de seis pessoas.',
    technologies: [
      'Python',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'JWT',
      'Docker',
    ],
    // TODO: Substituir pelo caminho da imagem aprovada para o projeto.
    imagePath: `${import.meta.env.BASE_URL}images/projects/sistema-interno-placeholder.webp`,
    imageAlt: 'Imagem provisória do sistema interno de arquivos e comunicação',
    featured: true,
    // TODO: Confirmar o status de publicação do projeto.
    status: PROJECT_STATUS.inProgress,
  },
  {
    slug: 'exemplo-automacao-hotelbeds',
    title: '[EXEMPLO] Automação Hotelbeds',
    summary:
      'Automação de lançamentos financeiros que reduziu o trabalho manual da equipe.',
    description:
      'Registro de exemplo baseado em uma automação descrita no currículo, com economia informada de 16 horas semanais para a equipe financeira.',
    technologies: ['Python', 'Integração de dados', 'Automação de processos'],
    // TODO: Substituir pelo caminho da imagem aprovada para o projeto.
    imagePath: `${import.meta.env.BASE_URL}images/projects/automacao-hotelbeds-placeholder.webp`,
    imageAlt: 'Imagem provisória da automação Hotelbeds',
    featured: false,
    // TODO: Confirmar o status de publicação do projeto.
    status: PROJECT_STATUS.completed,
  },
] satisfies readonly Project[]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured)
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return projects.filter((project) => project.status === status)
}
