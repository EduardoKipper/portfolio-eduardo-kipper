import { ExternalLink, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import styles from './Footer.module.css'

const socialLinks = [
  { ...profile.github, icon: ExternalLink },
  { ...profile.linkedin, icon: ExternalLink },
  { ...profile.email, icon: Mail },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          <span aria-hidden="true">©</span> {currentYear} {profile.name}
        </p>
        <nav aria-label="Links de contato">
          <ul className={styles.linkList}>
            {socialLinks.map(({ label, href, ariaLabel, icon: Icon }) => (
              <li key={label}>
                <a className={styles.link} href={href} aria-label={ariaLabel}>
                  <Icon aria-hidden="true" size={20} strokeWidth={1.75} />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
