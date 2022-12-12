import ScrollToTopButton from './components/commons/ScrollTopButton'
import { Header } from './components/01-Header/Header'
import { Home } from './components/02-Home/Home'
import { About } from './components/03-About/About'
import { Services } from './components/04-Services/Services'
import { Projects3 } from './components/05-Projects/Projects3'
import { Faq } from './components/06-Faq/Faq'
import { Contact } from './components/07-Contact/Contact'
import { Footer } from './components/08-Footer/Footer'

import Box from './components/05-Projects/Box'

import './styles/global.css'
import { Contact2 } from './components/07-Contact/Contact2'

export function App() {
  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Home />
      <About />
      <Services />
      <Projects3 />
      <Faq />
      <Contact2 />
      <Footer />
    </>
  )
}
