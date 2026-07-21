import { useParams } from 'react-router-dom'
import styles from './ProjectDetailsPage.module.css'

function ProjectDetailsPage() {
  const { projectSlug } = useParams<{ projectSlug: string }>()

  return (
    <section className={styles.page} aria-labelledby="project-title">
      <h1 id="project-title">Detalhes do projeto</h1>
      <p>[CONTEÚDO TEMPORÁRIO] Página de detalhes do projeto em preparação.</p>
      <p>Slug: {projectSlug}</p>
    </section>
  )
}

export default ProjectDetailsPage
