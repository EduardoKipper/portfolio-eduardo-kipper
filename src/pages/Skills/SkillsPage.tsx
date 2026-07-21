import styles from './SkillsPage.module.css'
import { SectionHeading, SkillCard } from '../../components'
import { skillCategories } from '../../data/skills'
import { profile } from '../../data/profile'

function SkillsPage() {
  return (
    <section className={styles.page} aria-labelledby="skills-title">
      <SectionHeading id="skills-title" level={1} title="Habilidades" />
      {skillCategories.map((category) => (
        <section
          className={styles.category}
          key={category.slug}
          aria-labelledby={`${category.slug}-title`}
        >
          <SectionHeading
            id={`${category.slug}-title`}
            level={2}
            title={category.name}
          />
          <div className={styles.grid}>
            {category.skills.map((skill) => (
              <SkillCard
                key={skill.slug}
                skill={skill}
                description="[CONTEÚDO TEMPORÁRIO] Descrição pendente de validação."
              />
            ))}
          </div>
        </section>
      ))}
      <section className={styles.highlights} aria-labelledby="professional-highlights-title">
        <SectionHeading
          id="professional-highlights-title"
          level={2}
          title="Diferenciais profissionais"
        />
        <ul>
          {profile.professionalHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default SkillsPage
