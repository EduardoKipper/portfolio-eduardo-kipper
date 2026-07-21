import { Download } from 'lucide-react'
import { ButtonLink, Tag } from '../../components'
import { courses } from '../../data/courses'
import { education } from '../../data/education'
import { experiences } from '../../data/experience'
import { profile } from '../../data/profile'
import styles from './ResumePage.module.css'

function ResumePage() {
  return (
    <article className={styles.page} aria-labelledby="resume-title">
      <header className={styles.header}>
        <div>
          <h1 id="resume-title">Currículo — {profile.fullName}</h1>
          <p>{profile.role} · {profile.location}</p>
        </div>
        <ButtonLink className={styles.download} download href={profile.resumePath} icon={<Download size={18} />}>
          Baixar PDF
        </ButtonLink>
      </header>

      <section aria-labelledby="resume-summary-title">
        <h2 id="resume-summary-title">Resumo</h2>
        <p>{profile.summary}</p>
      </section>

      <section aria-labelledby="resume-experience-title">
        <h2 id="resume-experience-title">Experiência profissional</h2>
        <div className={styles.entries}>
          {experiences.map((experience) => (
            <article key={experience.id}>
              <h3>{experience.role} — {experience.company}</h3>
              <p>{experience.startDate} — {experience.isCurrent ? 'Atual' : experience.endDate}</p>
              <p>{experience.description}</p>
              <ul>{experience.achievements.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="resume-skills-title">
        <h2 id="resume-skills-title">Tecnologias principais</h2>
        <ul className={styles.tags}>{profile.mainTechnologies.map((item) => <li key={item}><Tag>{item}</Tag></li>)}</ul>
      </section>

      <section aria-labelledby="resume-education-title">
        <h2 id="resume-education-title">Formação</h2>
        <div className={styles.entries}>
          {education.map((item) => (
            <article key={item.id}>
              <h3>{item.program}</h3>
              <p>{item.institution} · {item.startYear} — {item.isCurrent ? 'Atual' : item.endYear}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="resume-courses-title">
        <h2 id="resume-courses-title">Cursos</h2>
        <ul>{courses.map((course) => <li key={course.id}>{course.title} — {course.institution}</li>)}</ul>
      </section>

      <section aria-labelledby="resume-contact-title">
        <h2 id="resume-contact-title">Contato</h2>
        <ul>
          <li><a href={profile.email.href}>{profile.email.label}</a></li>
          <li><a href={profile.github.href}>{profile.github.label}</a></li>
          <li><a href={profile.linkedin.href}>{profile.linkedin.label}</a></li>
        </ul>
      </section>
    </article>
  )
}

export default ResumePage
