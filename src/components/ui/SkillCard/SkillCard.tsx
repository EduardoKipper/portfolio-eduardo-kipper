import type { ReactNode } from 'react'
import type { Skill } from '../../../types'
import styles from './SkillCard.module.css'

type SkillCardProps = {
  description: string
  icon?: ReactNode
  skill: Skill
}

function SkillCard({ description, icon, skill }: SkillCardProps) {
  return (
    <article className={styles.card}>
      {icon ? (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      ) : null}
      <div className={styles.content}>
        <h3 className={styles.title}>{skill.name}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </article>
  )
}

export default SkillCard
export type { SkillCardProps }
