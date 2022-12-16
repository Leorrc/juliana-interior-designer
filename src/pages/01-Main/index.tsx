import { Home } from './01-Home/Home'
import { About } from './02-About/About'
import { Services } from './03-Services/Services'
import { Projects } from './04-Projects/Projects'
import { ProjectsTroll } from './04-Projects/ProjectTroll'
import { Faq } from './05-Faq/Faq'

export function Main() {
  return (
    <>
      <Home />
      <About />
      <Services />
      {/* <Projects /> */}
      <ProjectsTroll />
      <Faq />
    </>
  )
}
