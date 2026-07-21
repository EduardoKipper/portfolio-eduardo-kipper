import styles from './SectionHeading.module.css'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6
type SectionHeadingAlignment = 'left' | 'center'

type SectionHeadingProps = {
  alignment?: SectionHeadingAlignment
  description?: string
  eyebrow?: string
  id?: string
  level?: HeadingLevel
  title: string
}

const headingTags = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
} as const

function SectionHeading({
  alignment = 'left',
  description,
  eyebrow,
  id,
  level = 2,
  title,
}: SectionHeadingProps) {
  const Heading = headingTags[level]

  return (
    <header className={`${styles.heading} ${styles[alignment]}`}>
      {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
      <Heading className={styles.title} id={id}>
        {title}
      </Heading>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  )
}

export default SectionHeading
export type { HeadingLevel, SectionHeadingAlignment, SectionHeadingProps }
