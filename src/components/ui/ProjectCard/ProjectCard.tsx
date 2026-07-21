import { ArrowRight } from 'lucide-react'
import type { Project } from '../../../types'
import { PROJECT_STATUS } from '../../../types'
import { ButtonLink } from '../ButtonLink'
import { ProjectMedia } from '../ProjectMedia'
import { Tag } from '../Tag'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  detailsHref: string
  headingLevel?: 2 | 3
  project: Project
}

function ProjectCard({ detailsHref, headingLevel = 2, project }: ProjectCardProps) {
  const isInProgress = project.status === PROJECT_STATUS.inProgress
  const Heading = headingLevel === 2 ? 'h2' : 'h3'

  return (
    <article className={styles.card}>
      <ProjectMedia project={project} />
      <div className={styles.content}>
        {isInProgress ? <p className={styles.status}>Em andamento</p> : null}
        <Heading className={styles.title}>{project.title}</Heading>
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
