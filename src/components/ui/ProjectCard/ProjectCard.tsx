import { ArrowRight } from 'lucide-react'
import type { Project } from '../../../types'
import { PROJECT_STATUS } from '../../../types'
import { ButtonLink } from '../ButtonLink'
import { Tag } from '../Tag'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  detailsHref: string
  project: Project
}

function ProjectCard({ detailsHref, project }: ProjectCardProps) {
  const isInProgress = project.status === PROJECT_STATUS.inProgress

  return (
    <article className={styles.card}>
      <img
        className={styles.image}
        src={project.imagePath}
        alt={project.imageAlt}
        loading="lazy"
      />
      <div className={styles.content}>
        {isInProgress ? <p className={styles.status}>Em andamento</p> : null}
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.summary}</p>
        <ul className={styles.tags} aria-label="Tecnologias utilizadas">
          {project.technologies.map((technology) => (
            <li key={technology}>
              <Tag>{technology}</Tag>
            </li>
          ))}
        </ul>
        <ButtonLink
          to={detailsHref}
          variant="ghost"
          icon={<ArrowRight size={18} strokeWidth={1.75} />}
        >
          Ver detalhes
        </ButtonLink>
      </div>
    </article>
  )
}

export default ProjectCard
export type { ProjectCardProps }
