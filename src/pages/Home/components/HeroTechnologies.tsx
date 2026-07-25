import gitIcon from '../../../assets/icons/technologies/git.svg'
import nodeIcon from '../../../assets/icons/technologies/nodejs.svg'
import postgresqlIcon from '../../../assets/icons/technologies/postgresql.svg'
import pythonIcon from '../../../assets/icons/technologies/python.svg'
import reactIcon from '../../../assets/icons/technologies/react.svg'
import typescriptIcon from '../../../assets/icons/technologies/typescript.svg'
import styles from './HeroTechnologies.module.css'

const technologies = [
  { icon: reactIcon, name: 'React' },
  { icon: typescriptIcon, name: 'TypeScript' },
  { icon: pythonIcon, name: 'Python' },
  { icon: nodeIcon, name: 'Node.js' },
  { icon: postgresqlIcon, name: 'PostgreSQL' },
  { icon: gitIcon, name: 'Git' },
] as const

function HeroTechnologies() {
  return (
    <section className={styles.technologies} aria-labelledby="technologies-title">
      <h2 className={styles.title} id="technologies-title">
        Tecnologias
      </h2>
      <ul className={styles.list}>
        {technologies.map((technology) => (
          <li className={styles.item} key={technology.name}>
            <span className={styles.iconBox}>
              <img
                className={styles.icon}
                src={technology.icon}
                alt=""
                aria-hidden="true"
              />
            </span>
            <span className={styles.name}>{technology.name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default HeroTechnologies
