import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './MainLayout.module.css'

function MainLayout() {
  return (
    <div className={styles.layout}>
      <a className={styles.skipLink} href="#main-content">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main className={styles.main} id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
