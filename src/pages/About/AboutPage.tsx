import { SectionHeading } from '../../components'
import { profile } from '../../data/profile'
import styles from './AboutPage.module.css'

function AboutPage() {
  return (
    <article className={styles.page} aria-labelledby="about-title">
      <SectionHeading
        id="about-title"
        level={1}
        eyebrow="Sobre"
        title={profile.fullName}
        description={profile.summary}
      />

      <div className={styles.introduction}>
        <img
          className={styles.profileImage}
          src={profile.imagePath}
          alt={profile.imageAlt}
        />
        <section aria-labelledby="about-summary-title">
          <h2 id="about-summary-title">Resumo profissional</h2>
          <p>{profile.summary}</p>
          <p>Localização: {profile.location}</p>
        </section>
      </div>

      <section className={styles.section} aria-labelledby="characteristics-title">
        <h2 id="characteristics-title">Características profissionais</h2>
        <ul>
          {profile.professionalCharacteristics.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="interests-title">
        <h2 id="interests-title">Interesses</h2>
        <ul>
          {profile.interests.map((interest) => <li key={interest}>{interest}</li>)}
        </ul>
      </section>
    </article>
  )
}

export default AboutPage
