import { ArrowRight, Mail } from 'lucide-react'
import { ButtonLink, ProjectCard, SectionHeading, Tag } from '../../components'
import { getFeaturedProjects } from '../../data/projects'
import { profile } from '../../data/profile'
import routePaths from '../../routes/routePaths'
import styles from './HomePage.module.css'

function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <p className={styles.eyebrow}>Portfólio profissional</p>
        <h1 id="home-title">{profile.name}</h1>
        <p className={styles.role}>{profile.role}</p>
        <p className={styles.summary}>{profile.summary}</p>
        <div className={styles.actions}>
          <ButtonLink
            to={routePaths.projects}
            icon={<ArrowRight size={18} />}
          >
            Ver projetos
          </ButtonLink>
          <ButtonLink
            to={routePaths.contact}
            variant="secondary"
            icon={<Mail size={18} />}
          >
            Entrar em contato
          </ButtonLink>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="technologies-title">
        <SectionHeading
          id="technologies-title"
          title="Tecnologias principais"
          description="Tecnologias presentes nos dados atuais do portfólio."
        />
        <ul className={styles.tags}>
          {profile.mainTechnologies.map((technology) => (
            <li key={technology}><Tag>{technology}</Tag></li>
          ))}
        </ul>
      </section>

      <section className={styles.section} aria-labelledby="featured-title">
        <SectionHeading
          id="featured-title"
          title="Projetos em destaque"
          description="Seleção provisória de trabalhos para contextualizar a atuação profissional."
        />
        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              headingLevel={3}
              detailsHref={`${routePaths.projects}/${project.slug}`}
            />
          ))}
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="home-contact-title">
        <SectionHeading
          id="home-contact-title"
          title="Vamos conversar?"
          description="Conheça os canais disponíveis para contato e futuras oportunidades."
        />
        <ButtonLink to={routePaths.contact}>Ir para contato</ButtonLink>
      </section>
    </div>
  )
}

export default HomePage
