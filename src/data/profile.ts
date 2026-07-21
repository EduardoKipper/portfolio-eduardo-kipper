const temporaryContent = '[CONTEÚDO TEMPORÁRIO]'

type ProfileLink = {
  label: string
  href: string
}

type Profile = {
  name: string
  role: string
  email: ProfileLink
  github: ProfileLink
  linkedin: ProfileLink
  location: string
  resumePath: string
}

export const profile: Profile = {
  name: 'Eduardo Kipper',
  role: `${temporaryContent} Cargo a confirmar`,
  email: {
    label: `${temporaryContent} E-mail a confirmar`,
    href: 'mailto:contato@example.com',
  },
  github: {
    label: `${temporaryContent} GitHub a confirmar`,
    href: 'https://github.com/',
  },
  linkedin: {
    label: `${temporaryContent} LinkedIn a confirmar`,
    href: 'https://www.linkedin.com/',
  },
  location: `${temporaryContent} Localização a confirmar`,
  resumePath: '/documents/curriculo-eduardo-kipper-full-stack.pdf',
}
