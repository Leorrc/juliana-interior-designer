import { Header } from './components/01-Header/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import { NewServices } from './components/NewServices'
import { Works } from './components/04-Works/Works'
import { Footer } from './components/02-Footer/Footer'

import './styles/global.css'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <NewServices />
      <Works />
      <Footer />
    </>
  )
}
