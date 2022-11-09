import { HeaderTest } from './components/HeaderTest'
import { Hero } from './components/HeroTest'
import { About } from './components/About'
import { Metrics } from './components/Metrics'
import { Services } from './components/03-Services/Services'
import { Works } from './components/04-Works/Works'
import { Footer } from './components/02-Footer/Footer'

import './styles/global.css'
import styles from './styles/styles'
import { Ver } from './components/Ver'

export function App() {
  return (
    <>
      <HeaderTest />
      <Hero />
      <Ver />
      {/* <About /> */}
      <Metrics />
      <Services />
      <Works />
      <Footer />
    </>
  )
}
