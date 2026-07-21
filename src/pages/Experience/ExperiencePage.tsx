import { SectionHeading, Tag } from '../../components'
import { courses } from '../../data/courses'
import { education } from '../../data/education'
import { experiences } from '../../data/experience'
import styles from './ExperiencePage.module.css'

function ExperiencePage() {
  return (
    <div className={styles.page}>
      <SectionHeading
        id="experience-title"
        level={1}
        title="Experiência"
        description="Histórico profissional, formação e cursos registrados nos dados do portfólio."
      />

      <section aria-labelledby="timeline-title">
        <h2 id="timeline-title">Trajetória profissional</h2>
        <ol className={styles.timeline}>
          {experiences.map((experience) => (
            <li key={experience.id}>
              <article className={styles.timelineItem}>
                <p className={styles.period}>
                  {experience.startDate} — {experience.isCurrent ? 'Atual' : experience.endDate}
                </p>
                <h3>{experience.role}</h3>
                <p className={styles.company}>{experience.company}</p>
                <p>{experience.description}</p>
                {experience.achievements.length ? (
                  <ul className={styles.achievements}>
                    {experience.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}
                  </ul>
                ) : null}
                <ul className={styles.tags} aria-label="Tecnologias utilizadas">
                  {experience.technologies.map((technology) => <li key={technology}><Tag>{technology}</Tag></li>)}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.section} aria-labelledby="education-title">
        <h2 id="education-title">Formação</h2>
        {education.map((item) => (
          <article key={item.id} className={styles.card}>
            <h3>{item.program}</h3>
            <p>{item.institution}</p>
            <p>{item.startYear} — {item.isCurrent ? 'Atual' : item.endYear}</p>
          </article>
        ))}
      </section>

      <section className={styles.section} aria-labelledby="courses-title">
        <h2 id="courses-title">Cursos</h2>
        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <article key={course.id} className={styles.card}>
              <h3>{course.title}</h3>
              <p>{course.institution}{course.completionYear ? ` — ${course.completionYear}` : ''}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ExperiencePage
