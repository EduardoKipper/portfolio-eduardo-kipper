import { NavLink } from 'react-router-dom'
import routePaths from '../../routes/routePaths'
import styles from './Header.module.css'

const navigationItems = [
  { label: 'Home', path: routePaths.home },
  { label: 'Sobre', path: routePaths.about },
  { label: 'Projetos', path: routePaths.projects },
  { label: 'Habilidades', path: routePaths.skills },
  { label: 'Experiência', path: routePaths.experience },
  { label: 'Contato', path: routePaths.contact },
  { label: 'Currículo', path: routePaths.resume },
]

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation} aria-label="Navegação principal">
        <ul className={styles.list}>
          {navigationItems.map(({ label, path }) => (
            <li key={path}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`.trim()
                }
                end={path === routePaths.home}
                to={path}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
