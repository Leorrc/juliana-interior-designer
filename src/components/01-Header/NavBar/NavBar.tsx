import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { SideBar } from '../SideBar/SideBar'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  return (
    <>
      <header className="bg-gray-100 fixed w-full text-black border-b-2 border-gray-200">
        <nav className="flex justify-between p-4 items-center md:max-w-5xl m-auto">
          <div className="text-xl font-bold text-center">
            <a className="text-musgo-400" href="">
              Juliana <span className="text-marrom-100">Designer</span>
            </a>
          </div>
          <div className="absolute right-6 md:hidden top-6 scale-150">
            <HiMenu onClick={toggle1} className=" cursor-pointer" />
          </div>
          <ul className="hidden md:flex gap-8 p-6 uppercase">
            <li>
              <a className="hover:text-marrom-100" href="">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-marrom-100" href="">
                Projetos
              </a>
            </li>
            <li>
              <a className="hover:text-marrom-100" href="">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-marrom-100" href="">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
