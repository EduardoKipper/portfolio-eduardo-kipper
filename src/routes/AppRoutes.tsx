import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import {
  AboutPage,
  ContactPage,
  ExperiencePage,
  HomePage,
  NotFoundPage,
  ProjectDetailsPage,
  ProjectsPage,
  ResumePage,
  SkillsPage,
} from '../pages'
import routePaths from './routePaths'
import ScrollToTop from './ScrollToTop'

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routePaths.about} element={<AboutPage />} />
          <Route path={routePaths.projects} element={<ProjectsPage />} />
          <Route path={routePaths.projectDetails} element={<ProjectDetailsPage />} />
          <Route path={routePaths.skills} element={<SkillsPage />} />
          <Route path={routePaths.experience} element={<ExperiencePage />} />
          <Route path={routePaths.contact} element={<ContactPage />} />
          <Route path={routePaths.resume} element={<ResumePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
