import type { ComponentPropsWithoutRef } from 'react'
import styles from './Container.module.css'

type ContainerProps = ComponentPropsWithoutRef<'div'>

function Container({ className, ...props }: ContainerProps) {
  const classNames = [styles.container, className].filter(Boolean).join(' ')

  return <div className={classNames} {...props} />
}

export default Container
export type { ContainerProps }
