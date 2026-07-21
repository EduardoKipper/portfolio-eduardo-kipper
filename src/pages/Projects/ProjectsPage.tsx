import styles from './ProjectsPage.module.css'
import { Link } from 'react-router-dom'
import routePaths from '../../routes/routePaths'

function ProjectsPage() {
  return (
    <section className={styles.page} aria-labelledby="projects-title">
      <h1 id="projects-title">Projetos</h1>
      <p>[CONTEÚDO TEMPORÁRIO] Página de projetos em preparação.</p>
      <Link to={`${routePaths.projects}/projeto-exemplo`}>
        Ver projeto de exemplo
      </Link>
    </section>
  )
}

export default ProjectsPage
