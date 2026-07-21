import type { Experience } from '../types'

export const experiences = [
  {
    id: 'rede-andrade-analista-financeiro-tech-lead',
    company: 'Rede Andrade',
    role: 'Analista Financeiro e Tech Lead',
    startDate: '2024',
    isCurrent: true,
    description:
      'Atua conectando necessidades de negócio a soluções de tecnologia, com desenvolvimento full stack, automação de processos e análise de dados financeiros.',
    achievements: [
      'Liderança de uma equipe de seis pessoas na criação de um sistema interno de arquivos e comunicação.',
      'Criação de automações financeiras para lançamentos, caixa, cobrança de cartões e notas fiscais.',
      'Construção e evolução de dashboards em Power BI para faturamento e controle de cartões.',
    ],
    technologies: [
      'Python',
      'React',
      'Vite',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'PostgreSQL',
      'Redis',
      'JWT',
      'Docker',
      'Power BI',
    ],
  },
] satisfies readonly Experience[]
