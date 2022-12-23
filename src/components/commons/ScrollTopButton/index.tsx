import React, { useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa'
import { Container } from './styles'

import { BsArrowUpShort } from 'react-icons/bs'
import { RiArrowUpSLine } from 'react-icons/ri'
import { VscArrowSmallUp } from 'react-icons/vsc'

export default function ScrollToTopButton() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container className="top-to-btm">
      {showTopBtn && (
        <VscArrowSmallUp
          className="icon-position icon-style"
          onClick={goToTop}
        />
      )}
    </Container>
  )
}
