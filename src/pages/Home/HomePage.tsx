import { Code2, Send } from 'lucide-react'
import heroImage from '../../assets/images/hero-eduardo-kipper.png'
import { ButtonLink, SectionHeading } from '../../components'
import { getFeaturedProjects } from '../../data/projects'
import routePaths from '../../routes/routePaths'
import FeaturedProjectsSection from './components/FeaturedProjectsSection'
import HeroTechnologies from './components/HeroTechnologies'
import styles from './HomePage.module.css'

function HomePage() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Olá, eu sou</p>
          <h1 className={styles.title} id="home-title">
            Eduardo <span>Kipper</span>
          </h1>
          <p className={styles.role}>Desenvolvedor Full Stack</p>
          <p className={styles.summary}>
            Eu construo aplicações modernas, escaláveis e experiências digitais
            incríveis.
          </p>

          <div className={styles.actions}>
            <ButtonLink
              to={routePaths.projects}
              icon={<Code2 size={20} strokeWidth={1.8} />}
            >
              Ver projetos
            </ButtonLink>
            <ButtonLink
              className={styles.contactButton}
              to={routePaths.contact}
              variant="secondary"
              icon={<Send size={19} strokeWidth={1.8} />}
            >
              Entrar em contato
            </ButtonLink>
          </div>

          <HeroTechnologies />
        </div>

        <div className={styles.heroVisual}>
          <img
            className={styles.heroImage}
            src={heroImage}
            alt="Eduardo Kipper usando um moletom laranja"
          />
        </div>
      </section>

      <FeaturedProjectsSection projects={featuredProjects} />

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
