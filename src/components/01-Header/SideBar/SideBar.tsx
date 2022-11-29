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
            ? 'fixed z-[999] h-screen w-screen bg-base2 top-0 left-0 grid place-content-center ease-in-out duration-300'
            : 'hidden'
        }
      >
        <div className="absolute right-10 toggle top-6">
          <HiX onClick={toggle} />
        </div>
        <ul className="grid gap-16">
          <li className="text-center">
            <a
              className="title hover:text-base3 transition-colors relative group"
              href="#"
            >
              Home
              <div className="absolute w-[136px] h-0.5 bg-base3 scale-x-0 group-hover:scale-x-100 transition-all " />
            </a>
          </li>
          <li className="text-center">
            <a className="title hover:text-base3 relative group" href="#">
              Projetos
              <div className="absolute w-full h-0.5 bg-base3 scale-x-0 group-hover:scale-x-100 transition-transform " />
            </a>
          </li>
          <li className="text-center">
            <a className="title hover:text-base3 relative group" href="#">
              Serviços
              <div className="absolute w-full h-0.5 bg-base3 scale-x-0 group-hover:scale-x-100 transition-transform " />
            </a>
          </li>
          <li className="text-center">
            <a className="title hover:text-base3 relative group" href="#">
              Contato
              <div className="absolute w-full h-0.5 bg-base3 scale-x-0 group-hover:scale-x-100 transition-transform " />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
