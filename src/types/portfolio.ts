export type SocialLink = {
  label: string
  href: string
  ariaLabel: string
}

export type Profile = {
  name: string
  fullName: string
  role: string
  summary: string
  location: string
  imagePath: string
  imageAlt: string
  resumePath: string
  email: SocialLink
  github: SocialLink
  linkedin: SocialLink
  mainTechnologies: readonly string[]
  professionalCharacteristics: readonly string[]
  professionalHighlights: readonly string[]
  interests: readonly string[]
}

export type Skill = {
  slug: string
  name: string
  level?: 'basic' | 'intermediate' | 'advanced'
}

export type SkillCategory = {
  slug: string
  name: string
  skills: readonly Skill[]
}

export type Experience = {
  id: string
  company: string
  role: string
  startDate: string
  endDate?: string
  isCurrent: boolean
  description: string
  achievements: readonly string[]
  technologies: readonly string[]
}

export type ProjectLink = {
  label: string
  href: string
  kind: 'demo' | 'repository' | 'case-study'
}

export const PROJECT_STATUS = {
  completed: 'completed',
  inProgress: 'in-progress',
} as const

export type ProjectStatus =
  (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS]

export type Project = {
  slug: string
  title: string
  summary: string
  description?: string
  technologies: readonly string[]
  imagePath: string
  imageAlt: string
  links?: readonly ProjectLink[]
  featured: boolean
  status: ProjectStatus
  challenge?: string
  solution?: string
  features?: readonly string[]
}

export type Education = {
  id: string
  institution: string
  program: string
  startYear: number
  endYear?: number
  isCurrent: boolean
}

export type Course = {
  id: string
  title: string
  institution: string
  completionYear?: number
  certificateUrl?: string
}
