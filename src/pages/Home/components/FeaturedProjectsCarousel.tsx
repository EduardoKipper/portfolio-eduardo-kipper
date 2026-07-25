import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type KeyboardEvent,
} from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ProjectCard } from '../../../components'
import routePaths from '../../../routes/routePaths'
import type { Project } from '../../../types'
import styles from './FeaturedProjectsCarousel.module.css'

const AUTOPLAY_INTERVAL = 6000

function getVisibleCount() {
  if (window.matchMedia('(min-width: 64.0625rem)').matches) {
    return 3
  }

  if (window.matchMedia('(min-width: 48.0625rem)').matches) {
    return 2
  }

  return 1
}

type FeaturedProjectsCarouselProps = {
  projects: Project[]
}

function FeaturedProjectsCarousel({
  projects,
}: FeaturedProjectsCarouselProps) {
  const viewportRef = useRef<HTMLUListElement>(null)
  const [activeStart, setActiveStart] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [isHovered, setIsHovered] = useState(false)
  const [hasFocus, setHasFocus] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const maxStart = Math.max(0, projects.length - visibleCount)
  const canRotate = projects.length > visibleCount
  const isPaused = isHovered || hasFocus
  const safeActiveStart = Math.min(activeStart, maxStart)

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 64.0625rem)')
    const tabletQuery = window.matchMedia('(min-width: 48.0625rem)')
    const updateVisibleCount = () => setVisibleCount(getVisibleCount())

    updateVisibleCount()
    desktopQuery.addEventListener('change', updateVisibleCount)
    tabletQuery.addEventListener('change', updateVisibleCount)

    return () => {
      desktopQuery.removeEventListener('change', updateVisibleCount)
      tabletQuery.removeEventListener('change', updateVisibleCount)
    }
  }, [])

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches)

    updateMotionPreference()
    motionQuery.addEventListener('change', updateMotionPreference)

    return () => motionQuery.removeEventListener('change', updateMotionPreference)
  }, [])

  const goTo = useCallback(
    (requestedIndex: number) => {
      const nextIndex = Math.max(0, Math.min(requestedIndex, maxStart))
      const viewport = viewportRef.current
      const target = viewport?.children.item(nextIndex) as HTMLElement | null

      if (!viewport || !target) {
        return
      }

      viewport.scrollTo({
        behavior: reducedMotion ? 'auto' : 'smooth',
        left: target.offsetLeft - viewport.offsetLeft,
      })
      setActiveStart(nextIndex)
    },
    [maxStart, reducedMotion],
  )

  const showNext = useCallback(() => {
    const nextIndex =
      safeActiveStart >= maxStart
        ? 0
        : Math.min(safeActiveStart + visibleCount, maxStart)

    goTo(nextIndex)
  }, [goTo, maxStart, safeActiveStart, visibleCount])

  const showPrevious = useCallback(() => {
    const previousIndex =
      safeActiveStart <= 0
        ? maxStart
        : Math.max(safeActiveStart - visibleCount, 0)

    goTo(previousIndex)
  }, [goTo, maxStart, safeActiveStart, visibleCount])

  useEffect(() => {
    if (!canRotate || isPaused || reducedMotion) {
      return
    }

    const intervalId = window.setInterval(showNext, AUTOPLAY_INTERVAL)

    return () => window.clearInterval(intervalId)
  }, [canRotate, isPaused, reducedMotion, showNext])

  const handleScroll = () => {
    const viewport = viewportRef.current

    if (!viewport) {
      return
    }

    const itemPositions = Array.from(viewport.children).map((item, index) => ({
      distance: Math.abs(
        (item as HTMLElement).offsetLeft -
          viewport.offsetLeft -
          viewport.scrollLeft,
      ),
      index,
    }))
    const closestItem = itemPositions.reduce((closest, item) =>
      item.distance < closest.distance ? item : closest,
    )

    setActiveStart(Math.min(closestItem.index, maxStart))
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (!canRotate) {
      return
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }

    if (event.key === 'Home') {
      event.preventDefault()
      goTo(0)
    }

    if (event.key === 'End') {
      event.preventDefault()
      goTo(maxStart)
    }
  }

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setHasFocus(false)
    }
  }

  if (projects.length === 0) {
    return (
      <p className={styles.empty}>
        Nenhum projeto está marcado como destaque no momento.
      </p>
    )
  }

  return (
    <div
      className={styles.carousel}
      role="region"
      aria-label="Carrossel de projetos em destaque"
      aria-roledescription="carrossel"
      onBlurCapture={handleBlur}
      onFocusCapture={() => setHasFocus(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {canRotate ? (
        <div className={styles.controls}>
          <p className="sr-only" aria-live="polite">
            Exibindo a partir do projeto {safeActiveStart + 1} de {projects.length}
          </p>
          <button
            className={styles.control}
            type="button"
            aria-label="Mostrar projetos anteriores"
            onClick={showPrevious}
          >
            <ChevronLeft size={20} aria-hidden="true" />
          </button>
          <button
            className={styles.control}
            type="button"
            aria-label="Mostrar próximos projetos"
            onClick={showNext}
          >
            <ChevronRight size={20} aria-hidden="true" />
          </button>
        </div>
      ) : null}

      <ul
        className={styles.viewport}
        ref={viewportRef}
        aria-label={canRotate ? 'Projetos. Use as setas para navegar.' : undefined}
        tabIndex={canRotate ? 0 : undefined}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
      >
        {projects.map((project, index) => (
          <li
            className={styles.item}
            key={project.slug}
            aria-label={`${index + 1} de ${projects.length}`}
            aria-roledescription="slide"
          >
            <ProjectCard
              compact
              detailsHref={`${routePaths.projects}/${project.slug}`}
              headingLevel={3}
              linkLabel="Ver projeto"
              maxTechnologies={4}
              project={project}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedProjectsCarousel
