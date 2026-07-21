import type { ReactNode } from 'react'
import type { SocialLink as SocialLinkData } from '../../../types'
import styles from './SocialLink.module.css'

type SocialLinkProps = {
  icon: ReactNode
  link: SocialLinkData
  showLabel?: boolean
}

function SocialLink({ icon, link, showLabel = true }: SocialLinkProps) {
  const opensNewTab = /^https?:\/\//i.test(link.href)

  return (
    <a
      className={styles.link}
      href={link.href}
      aria-label={link.ariaLabel}
      rel={opensNewTab ? 'noopener noreferrer' : undefined}
      target={opensNewTab ? '_blank' : undefined}
    >
      <span aria-hidden="true">{icon}</span>
      <span className={showLabel ? undefined : 'sr-only'}>{link.label}</span>
    </a>
  )
}

export default SocialLink
export type { SocialLinkProps }
