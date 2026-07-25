import { ArrowRight } from 'lucide-react'
import type { Project } from '../../../types'
import { PROJECT_STATUS } from '../../../types'
import { ButtonLink } from '../ButtonLink'
import { ProjectMedia } from '../ProjectMedia'
import { Tag } from '../Tag'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  compact?: boolean
  detailsHref: string
  headingLevel?: 2 | 3
  linkLabel?: string
  maxTechnologies?: number
  project: Project
}

function ProjectCard({
  compact = false,
  detailsHref,
  headingLevel = 2,
  linkLabel = 'Ver detalhes',
  maxTechnologies,
  project,
}: ProjectCardProps) {
  const isInProgress = project.status === PROJECT_STATUS.inProgress
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const visibleTechnologies = maxTechnologies
    ? project.technologies.slice(0, maxTechnologies)
    : project.technologies
  const hiddenTechnologyCount =
    project.technologies.length - visibleTechnologies.length

  return (
    <article
      className={`${styles.card} ${compact ? styles.compact : ''}`.trim()}
    >
      <ProjectMedia project={project} />
      <div className={styles.content}>
        {isInProgress ? <p className={styles.status}>Em andamento</p> : null}
        <Heading className={styles.title}>{project.title}</Heading>
        <p className={styles.description}>{project.summary}</p>
        <ul className={styles.tags} aria-label="Tecnologias utilizadas">
          {visibleTechnologies.map((technology) => (
            <li key={technology}>
              <Tag>{technology}</Tag>
            </li>
          ))}
          {hiddenTechnologyCount > 0 ? (
            <li>
              <Tag>+{hiddenTechnologyCount}</Tag>
            </li>
          ) : null}
        </ul>
        <ButtonLink
          to={detailsHref}
          variant="ghost"
          icon={<ArrowRight size={18} strokeWidth={1.75} />}
        >
          {linkLabel}
        </ButtonLink>
      </div>
    </article>
  )
}

export default ProjectCard
export type { ProjectCardProps }
