import { Header } from './components/01-Header/Header'
import { Home } from './components/02-Home/Home'

import { About } from './components/commons/About'
import { Works } from './components/04-Works/Works'
import { Footer } from './components/05-Footer/Footer'

import './styles/global.css'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      {/* <Works /> */}
      {/* <Footer /> */}
    </>
  )
}
