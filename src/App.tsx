import ScrollToTopButton from './components/commons/ScrollTopButton'
import './styles/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/01-Header/Header'
import { Contact } from './components/07-Contact/Contact'
import { Footer } from './components/08-Footer/Footer'
import { Main } from './pages/01-Main'

export function App() {
  return (
    <>
      <Router>
        <ScrollToTopButton />
        <Header />

        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>

        <Contact />
        <Footer />
      </Router>
    </>
  )
}
