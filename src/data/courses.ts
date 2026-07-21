import type { Course } from '../types'

export const courses = [
  {
    id: 'alura-tech-lead',
    title: 'Tech Lead',
    institution: 'Alura',
  },
  {
    id: 'alura-react',
    title: 'React',
    institution: 'Alura',
  },
  {
    id: 'alura-front-end',
    title: 'Front-end',
    institution: 'Alura',
  },
] satisfies readonly Course[]
