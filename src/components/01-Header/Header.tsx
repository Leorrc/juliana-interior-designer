import { useState } from 'react'
import { NavBar } from './NavBar/NavBar'
import { SideBar } from './SideBar/SideBar'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle1={toggle} />
    </>
  )
}
