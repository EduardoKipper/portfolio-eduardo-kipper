import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { profile } from '../../data/profile'
import routePaths from '../../routes/routePaths'
import styles from './Header.module.css'

const navigationItems = [
  { label: 'Sobre', path: routePaths.about },
  { label: 'Projetos', path: routePaths.projects },
  { label: 'Habilidades', path: routePaths.skills },
  { label: 'Experiência', path: routePaths.experience },
  { label: 'Contato', path: routePaths.contact },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return

      closeMenu()
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink
          className={({ isActive }) =>
            `${styles.brand} ${isActive ? styles.brandActive : ''}`.trim()
          }
          end
          onClick={closeMenu}
          to={routePaths.home}
          aria-label="EK — página inicial"
        >
          EK
        </NavLink>

        <button
          ref={menuButtonRef}
          className={styles.menuButton}
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu principal' : 'Abrir menu principal'}
          onClick={() => setIsMenuOpen((currentState) => !currentState)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>

        <nav
          className={styles.navigation}
          id="primary-navigation"
          aria-label="Navegação principal"
          data-open={isMenuOpen}
        >
          <ul className={styles.list}>
            {navigationItems.map(({ label, path }) => (
              <li key={path}>
                <NavLink
                  className={({ isActive }) =>
                    `${styles.link} ${isActive ? styles.active : ''}`.trim()
                  }
                  onClick={closeMenu}
                  to={path}
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className={styles.downloadLink}
                download
                href={profile.resumePath}
                onClick={closeMenu}
              >
                Baixar CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
