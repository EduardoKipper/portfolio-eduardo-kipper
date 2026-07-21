import type { MouseEvent } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import styles from './MainLayout.module.css'

function MainLayout() {
  const focusMainContent = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    document.getElementById('main-content')?.focus()
  }

  return (
    <div className={styles.layout}>
      <a className={styles.skipLink} href="#main-content" onClick={focusMainContent}>
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
