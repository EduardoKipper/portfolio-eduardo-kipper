import { Link } from 'react-router-dom'
import routePaths from '../../routes/routePaths'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <section className={styles.page} aria-labelledby="not-found-title">
      <h1 id="not-found-title">Não encontrado</h1>
      <p>[CONTEÚDO TEMPORÁRIO] Página não encontrada.</p>
      <Link to={routePaths.home}>Voltar para a Home</Link>
    </section>
  )
}

export default NotFoundPage
