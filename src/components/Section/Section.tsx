import type { ComponentPropsWithoutRef, ElementType } from 'react'
import styles from './Section.module.css'

type SectionProps<T extends ElementType = 'section'> = {
  as?: T
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>

function Section<T extends ElementType = 'section'>({
  as,
  className,
  ...props
}: SectionProps<T>) {
  const Component: ElementType = as ?? 'section'
  const classNames = [styles.section, className].filter(Boolean).join(' ')

  return <Component className={classNames} {...props} />
}

export default Section
export type { SectionProps }
