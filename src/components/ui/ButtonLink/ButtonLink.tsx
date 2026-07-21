import type { ReactNode } from 'react'
import { Link, type To } from 'react-router-dom'
import styles from './ButtonLink.module.css'

type ButtonLinkVariant = 'primary' | 'secondary' | 'ghost'

type ButtonLinkBaseProps = {
  children: ReactNode
  className?: string
  icon?: ReactNode
  variant?: ButtonLinkVariant
}

type ButtonLinkProps =
  | (ButtonLinkBaseProps & { to: To; href?: never })
  | (ButtonLinkBaseProps & { href: string; to?: never })

function ButtonLink(props: ButtonLinkProps) {
  const { children, className, icon, variant = 'primary' } = props
  const classNames = [styles.link, styles[variant], className]
    .filter(Boolean)
    .join(' ')
  const content = (
    <>
      <span>{children}</span>
      {icon ? <span aria-hidden="true">{icon}</span> : null}
    </>
  )

  if (props.to !== undefined) {
    return (
      <Link className={classNames} to={props.to}>
        {content}
      </Link>
    )
  }

  const opensNewTab = /^https?:\/\//i.test(props.href)

  return (
    <a
      className={classNames}
      href={props.href}
      rel={opensNewTab ? 'noopener noreferrer' : undefined}
      target={opensNewTab ? '_blank' : undefined}
    >
      {content}
    </a>
  )
}

export default ButtonLink
export type { ButtonLinkProps, ButtonLinkVariant }
