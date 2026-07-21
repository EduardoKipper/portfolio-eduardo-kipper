import type { ReactNode } from 'react'
import styles from './EmptyState.module.css'

type EmptyStateProps = {
  action?: ReactNode
  description: string
  title: string
}

function EmptyState({ action, description, title }: EmptyStateProps) {
  return (
    <div className={styles.emptyState} role="status">
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {action ? <div className={styles.action}>{action}</div> : null}
    </div>
  )
}

export default EmptyState
export type { EmptyStateProps }
