import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Eduardo Kipper',
  fullName: 'Eduardo Kipper Della Santa Rubio',
  role: 'Desenvolvedor Full Stack',
  summary:
    'Profissional de tecnologia com experiência em desenvolvimento full stack, automação de processos e análise de dados financeiros.',
  location: 'Florianópolis - SC',
  imagePath: '/images/profile/eduardo-kipper.jpg',
  imageAlt: 'Eduardo Kipper',
  resumePath: '/documents/curriculo-eduardo-kipper-full-stack.pdf',
  email: {
    label: 'E-mail',
    href: 'mailto:eduardo.k.rubio@gmail.com',
    ariaLabel: 'Enviar e-mail para Eduardo Kipper',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/EduardoKipper',
    ariaLabel: 'Perfil de Eduardo Kipper no GitHub',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/eduardo-kipper',
    ariaLabel: 'Perfil de Eduardo Kipper no LinkedIn',
  },
  mainTechnologies: ['Python', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Power BI'],
  professionalCharacteristics: [
    'Visão integrada entre necessidades de negócio e tecnologia',
    'Experiência com desenvolvimento, automação e análise de dados',
    'Atuação em colaboração e liderança técnica',
  ],
  professionalHighlights: [
    'Desenvolvimento full stack aplicado a processos internos',
    'Automação de rotinas financeiras',
    'Construção e evolução de dashboards',
  ],
  interests: [
    '[CONTEÚDO TEMPORÁRIO] Desenvolvimento de produtos digitais',
    '[CONTEÚDO TEMPORÁRIO] Automação e eficiência operacional',
    '[CONTEÚDO TEMPORÁRIO] Dados e visualização de informações',
  ],
}
