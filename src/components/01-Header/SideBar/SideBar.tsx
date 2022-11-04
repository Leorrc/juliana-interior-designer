import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

type Props = {
  isOpen: boolean
  toggle: () => void
}

export function SideBar({ isOpen, toggle }: Props) {
  return (
    <div
      className={
        isOpen
          ? 'fixed z-[999] w-full h-full bg-gray-300  ease-in-out duration-3000'
          : 'hidden'
      }
    >
      <div>
        <HiX onClick={toggle} className=" top-5 right-5 text-2xl" />
      </div>
      <ul className="flex-col items-center">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Projetos</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </div>
  )
}
