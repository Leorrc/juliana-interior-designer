import ScrollToTopButton from './components/commons/ScrollTopButton'
import './styles/global.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Header } from './components/01-Header/Header'
import { Contact2 } from './components/07-Contact/Contact2'
import { Footer } from './components/08-Footer/Footer'
import { Main } from './pages/01-Main'
import { Projects } from './pages/01-Main/04-Projects/Projects'
import { Contact3 } from './components/07-Contact/Contact3'

export function App() {
  return (
    <>
      <Router>
        <ScrollToTopButton />
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

        <Contact3 />
        <Footer />
      </Router>
    </>
  )
}
