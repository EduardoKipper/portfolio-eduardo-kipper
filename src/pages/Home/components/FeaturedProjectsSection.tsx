import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../../../types'
import routePaths from '../../../routes/routePaths'
import FeaturedProjectsCarousel from './FeaturedProjectsCarousel'
import styles from './FeaturedProjectsSection.module.css'

type FeaturedProjectsSectionProps = {
  projects: Project[]
}

function FeaturedProjectsSection({ projects }: FeaturedProjectsSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="featured-title">
      <header className={styles.header}>
        <div className={styles.heading}>
          <span className={styles.star} aria-hidden="true">
            <Star size={20} fill="currentColor" strokeWidth={1.7} />
          </span>
          <h2 id="featured-title">Projetos em destaque</h2>
        </div>

        <Link className={styles.allProjectsLink} to={routePaths.projects}>
          <span>Ver todos os projetos</span>
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </header>

      <FeaturedProjectsCarousel projects={projects} />
    </section>
  )
}

export default FeaturedProjectsSection
