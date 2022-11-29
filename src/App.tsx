import { Header } from './components/01-Header/Header'
import { Home4 } from './components/00-Homes/Home4'
import { About } from './components/commons/About'

import AboutUs from './components/03-Services/Services3'

import { Works } from './components/04-Works/Works'
import { Footer } from './components/02-Footer/Footer'
import SmallCentered from './components/02-Footer/FooterUi'
import Contact from './components/commons/ContactUs'
import Features from './components/03-Services/Service4'

import './styles/global.css'

export function App() {
  return (
    <>
      <Header />
      <Home4 />
      <About />
      <AboutUs />
      {/* <Works /> */}
      {/* <Footer /> */}
      <Contact />
      <SmallCentered />
    </>
  )
}
