import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

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
            <a
              className="titleHeader hover:text-cinza-600 transition-colors relative group"
              href="#"
            >
              Home
              <div className="absolute w-[136px] h-0.5 bg-cinza-600 scale-x-0 group-hover:scale-x-100 transition-all " />
            </a>
          </li>
          <li className="text-center">
            <a
              className="titleHeader hover:text-cinza-600 relative group"
              href="#"
            >
              Projetos
              <div className="absolute w-full h-0.5 bg-cinza-600 scale-x-0 group-hover:scale-x-100 transition-transform " />
            </a>
          </li>
          <li className="text-center">
            <a
              className="titleHeader hover:text-cinza-600 relative group"
              href="#"
            >
              Serviços
              <div className="absolute w-full h-0.5 bg-cinza-600 scale-x-0 group-hover:scale-x-100 transition-transform " />
            </a>
          </li>
          <li className="text-center">
            <a
              className="titleHeader hover:text-cinza-600 relative group"
              href="#"
            >
              Contato
              <div className="absolute w-full h-0.5 bg-cinza-600 scale-x-0 group-hover:scale-x-100 transition-transform " />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
