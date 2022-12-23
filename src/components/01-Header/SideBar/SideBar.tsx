import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

type Props = {
  isOpen: boolean
  toggle: () => void
}

export function SideBar({ isOpen, toggle }: Props) {
  return (
    <>
      <div
        className={
          isOpen
            ? 'fixed z-[999] h-screen w-screen bg-cinza-100 top-0 left-0 grid place-content-center ease-in-out duration-300'
            : 'hidden'
        }
      >
        <div className="absolute right-10 toggle top-6">
          <HiX onClick={toggle} className="text-twice" />
        </div>
        <ul className="grid gap-16 text-twice">
          <li className="text-center">
            <LinkS
              className="titleHeader hover:text-cinza-600 transition-colors relative group"
              to="hometop"
              onClick={toggle}
            >
              Home
              <div className="absolute w-[136px] h-0.5 bg-cinza-600 scale-x-0 group-hover:scale-x-100 transition-all " />
            </LinkS>
          </li>
          <li className="text-center">
            <LinkS
              className="titleHeader hover:text-cinza-600 relative group"
              to="projects"
              onClick={toggle}
            >
              Projetos
              <div className="absolute w-full h-0.5 bg-cinza-600 scale-x-0 group-hover:scale-x-100 transition-transform " />
            </LinkS>
          </li>
          <li className="text-center">
            <LinkS
              className="titleHeader hover:text-cinza-600 relative group"
              to="services"
              onClick={toggle}
            >
              Serviços
              <div className="absolute w-full h-0.5 bg-cinza-600 scale-x-0 group-hover:scale-x-100 transition-transform " />
            </LinkS>
          </li>
          <li className="text-center">
            <LinkS
              className="titleHeader hover:text-cinza-600 relative group"
              to="contact"
              onClick={toggle}
            >
              Contato
              <div className="absolute w-full h-0.5 bg-cinza-600 scale-x-0 group-hover:scale-x-100 transition-transform " />
            </LinkS>
          </li>
        </ul>
      </div>
    </>
  )
}
