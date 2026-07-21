import { ExternalLink } from 'lucide-react'
import { useParams } from 'react-router-dom'
import { ButtonLink, EmptyState, ProjectMedia, Tag } from '../../components'
import { getProjectBySlug } from '../../data/projects'
import routePaths from '../../routes/routePaths'
import styles from './ProjectDetailsPage.module.css'

function ProjectDetailsPage() {
  const { projectSlug = '' } = useParams<{ projectSlug: string }>()
  const project = getProjectBySlug(projectSlug)

  if (!project) {
    return (
      <section className={styles.page} aria-labelledby="project-not-found-title">
        <h1 id="project-not-found-title">Projeto não encontrado</h1>
        <EmptyState
          title="O projeto solicitado não existe"
          description="Confira o endereço ou volte para a lista de projetos."
          action={<ButtonLink to={routePaths.projects}>Ver projetos</ButtonLink>}
        />
      </section>
    )
  }

  return (
    <article className={styles.page} aria-labelledby="project-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Detalhes do projeto</p>
        <h1 id="project-title">{project.title}</h1>
        <p>{project.description ?? project.summary}</p>
      </header>

      <div className={styles.media}><ProjectMedia project={project} priority /></div>

      <section className={styles.section} aria-labelledby="project-technologies-title">
        <h2 id="project-technologies-title">Tecnologias</h2>
        <ul className={styles.tags}>
          {project.technologies.map((technology) => (
            <li key={technology}><Tag>{technology}</Tag></li>
          ))}
        </ul>
      </section>

      {project.links?.length ? (
        <section className={styles.section} aria-labelledby="project-links-title">
          <h2 id="project-links-title">Links</h2>
          <div className={styles.links}>
            {project.links.map((link) => (
              <ButtonLink key={link.href} href={link.href} variant="secondary" icon={<ExternalLink size={18} />}>
                {link.label}
              </ButtonLink>
            ))}
          </div>
        </section>
      ) : null}

      {project.challenge ? <ProjectTextSection id="challenge" title="Desafio" text={project.challenge} /> : null}
      {project.solution ? <ProjectTextSection id="solution" title="Solução" text={project.solution} /> : null}
      {project.features?.length ? (
        <section className={styles.section} aria-labelledby="features-title">
          <h2 id="features-title">Funcionalidades</h2>
          <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        </section>
      ) : null}
    </article>
  )
}

type ProjectTextSectionProps = { id: string; text: string; title: string }

function ProjectTextSection({ id, text, title }: ProjectTextSectionProps) {
  return (
    <section className={styles.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      <p>{text}</p>
    </section>
  )
}

export default ProjectDetailsPage
