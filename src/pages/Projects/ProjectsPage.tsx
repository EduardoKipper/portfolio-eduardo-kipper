import styles from './ProjectsPage.module.css'
import { EmptyState, ProjectCard, SectionHeading } from '../../components'
import { projects } from '../../data/projects'
import routePaths from '../../routes/routePaths'

function ProjectsPage() {
  return (
    <section className={styles.page} aria-labelledby="projects-title">
      <SectionHeading id="projects-title" level={1} title="Projetos" />
      {projects.length > 0 ? (
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              detailsHref={`${routePaths.projects}/${project.slug}`}
            />
          ))}
        </div>
      ) : (
        <EmptyState
          title="Nenhum projeto disponível"
          description="Os projetos publicados aparecerão aqui."
        />
      )}
    </section>
  )
}

export default ProjectsPage
