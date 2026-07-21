import { useState } from 'react'
import { EmptyState, ProjectCard, SectionHeading } from '../../components'
import { projects } from '../../data/projects'
import routePaths from '../../routes/routePaths'
import { PROJECT_STATUS, type ProjectStatus } from '../../types'
import styles from './ProjectsPage.module.css'

type Filter = 'all' | ProjectStatus

const filters: readonly { label: string; value: Filter }[] = [
  { label: 'Todos', value: 'all' },
  { label: 'Concluídos', value: PROJECT_STATUS.completed },
  { label: 'Em andamento', value: PROJECT_STATUS.inProgress },
]

function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')
  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.status === activeFilter)

  return (
    <section className={styles.page} aria-labelledby="projects-title">
      <SectionHeading
        id="projects-title"
        level={1}
        title="Projetos"
        description="Projetos e exemplos registrados atualmente no portfólio."
      />

      <div className={styles.filters} aria-label="Filtrar projetos">
        {filters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            aria-pressed={activeFilter === filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {visibleProjects.length > 0 ? (
        <div className={styles.grid}>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              detailsHref={`${routePaths.projects}/${project.slug}`}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Nenhum projeto neste filtro"
          description="Selecione outro filtro para visualizar os projetos disponíveis."
        />
      )}
    </section>
  )
}

export default ProjectsPage
