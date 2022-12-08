import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { SideBar } from '../SideBar/SideBar'

import logo from '/Logos/logoHeader.png'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  return (
    <>
      <header className="border-b-2 border-white fixed top-0 left-0 z-[100] bg-cinza-100 w-full">
        <nav className="flex items-center justify-between mx-auto py-3 px-8 lg:px-20">
          <div>
            <img src={logo} />
          </div>
          <ul className="hidden md:flex gap-8  uppercase text-twice font-medium">
            <li>
              <a href="#" className="hover:text-baseBege relative group">
                Home
                <div className="absolute w-full h-0.5 bg-twice scale-x-0 group-hover:scale-x-100 transition-all " />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-baseBege relative group">
                Projetos
                <div className="absolute w-full h-0.5 bg-twice scale-x-0 group-hover:scale-x-100 transition-all" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-baseBege relative group">
                Serviços
                <div className="absolute w-full h-0.5 bg-twice scale-x-0 group-hover:scale-x-100 transition-all" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-baseBege relative group">
                Contato
                <div className="absolute w-full h-0.5 bg-twice scale-x-0 group-hover:scale-x-100 transition-all" />
              </a>
            </li>
          </ul>
          <div className="absolute right-6 md:hidden scale-150 ">
            <HiMenu onClick={toggle1} className=" cursor-pointer text-twice " />
          </div>
        </nav>
      </header>
    </>
  )
}
