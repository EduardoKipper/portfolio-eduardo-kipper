import type { SkillCategory } from '../types'

export const skillCategories = [
  {
    slug: 'desenvolvimento-full-stack',
    name: 'Desenvolvimento full stack',
    skills: [
      { slug: 'python', name: 'Python', level: 'intermediate' },
      { slug: 'react', name: 'React', level: 'intermediate' },
      { slug: 'typescript', name: 'TypeScript', level: 'intermediate' },
      { slug: 'javascript', name: 'JavaScript', level: 'intermediate' },
      { slug: 'node-js', name: 'Node.js', level: 'intermediate' },
      { slug: 'rest-api', name: 'REST API', level: 'intermediate' },
    ],
  },
  {
    slug: 'dados-e-infraestrutura',
    name: 'Dados e infraestrutura',
    skills: [
      { slug: 'power-bi', name: 'Power BI', level: 'advanced' },
      { slug: 'postgresql', name: 'PostgreSQL', level: 'basic' },
      { slug: 'redis', name: 'Redis', level: 'basic' },
      { slug: 'docker', name: 'Docker', level: 'basic' },
      { slug: 'cloud', name: 'Cloud', level: 'intermediate' },
      { slug: 'observabilidade', name: 'Observabilidade', level: 'intermediate' },
    ],
  },
  {
    slug: 'qualidade-e-arquitetura',
    name: 'Qualidade e arquitetura',
    skills: [
      { slug: 'testes-unitarios', name: 'Testes unitários', level: 'intermediate' },
      { slug: 'git', name: 'Git', level: 'intermediate' },
      { slug: 'microsservicos', name: 'Microsserviços', level: 'intermediate' },
    ],
  },
] satisfies readonly SkillCategory[]
