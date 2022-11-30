import './styles/global.css'
import { Header } from './components/01-Header/Header'
import { Home } from './components/02-Home/Home'
import { About } from './components/About'

import { Services } from './components/03-Services/Services'

export function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
    </>
  )
}
