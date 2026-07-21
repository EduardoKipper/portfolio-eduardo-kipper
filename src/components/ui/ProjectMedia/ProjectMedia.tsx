import type { Project } from '../../../types'
import styles from './ProjectMedia.module.css'

type ProjectMediaProps = {
  project: Project
  priority?: boolean
}

function ProjectMedia({ project, priority = false }: ProjectMediaProps) {
  const usesTemporaryImage = project.imagePath.includes('placeholder')

  if (usesTemporaryImage) {
    return (
      <div
        className={styles.placeholder}
        role="img"
        aria-label={project.imageAlt}
      >
        <span>[IMAGEM TEMPORÁRIA]</span>
        <small>Imagem do projeto pendente de aprovação.</small>
      </div>
    )
  }

  return (
    <img
      className={styles.image}
      src={project.imagePath}
      alt={project.imageAlt}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
}

export default ProjectMedia
export type { ProjectMediaProps }
