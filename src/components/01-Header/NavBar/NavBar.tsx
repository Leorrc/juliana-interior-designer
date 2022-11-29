import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { SideBar } from '../SideBar/SideBar'

import logo from '/works/logo7.png'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  return (
    <>
      <header className="border-b border-base3 fixed top-0 left-0 z-[100] bg-base2 bg-opacity-80  w-full max-h-24">
        <nav className="flex items-center justify-between mx-auto py-0 px-8">
          <div className="p-1 text-base3">
            <img src={logo} />
          </div>
          <ul className="hidden md:flex gap-8 p-6 uppercase text-black font-semibold">
            <li>
              <a href="#" className="hover:text-base3 relative group">
                Home
                <div className="absolute w-full h-0.5 bg-base3 scale-x-0 group-hover:scale-x-100 transition-transform " />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-base3 relative group">
                Projetos
                <div className="absolute w-full h-0.5 bg-base3 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-base3 relative group">
                Serviços
                <div className="absolute w-full h-0.5 bg-base3 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-base3 relative group">
                Contato
                <div className="absolute w-full h-0.5 bg-base3 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
          </ul>
          <div className="absolute right-6 md:hidden scale-150 ">
            <HiMenu onClick={toggle1} className=" cursor-pointer text-black " />
          </div>
        </nav>
      </header>
    </>
  )
}
