import type { ComponentPropsWithoutRef } from 'react'
import styles from './Tag.module.css'

type TagProps = ComponentPropsWithoutRef<'span'>

function Tag({ className, ...props }: TagProps) {
  const classNames = [styles.tag, className].filter(Boolean).join(' ')

  return <span className={classNames} {...props} />
}

export default Tag
export type { TagProps }
