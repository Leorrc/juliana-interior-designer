import { HiX } from 'react-icons/hi'
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
            ? 'fixed top-0 left-0 z-[999] grid h-screen w-screen place-content-center bg-cinza-100 duration-300 ease-in-out'
            : 'hidden'
        }
      >
        <div className="toggle absolute right-10 top-6">
          <HiX onClick={toggle} className="text-twice" />
        </div>
        <ul className="grid gap-16 text-twice">
          <li className="text-center">
            <LinkS
              className="titleHeader group relative transition-colors hover:text-cinza-600"
              to="hometop"
              onClick={toggle}
            >
              Home
              <div className="absolute h-0.5 w-[136px] scale-x-0 bg-cinza-600 transition-all group-hover:scale-x-100 " />
            </LinkS>
          </li>
          <li className="text-center">
            <LinkS
              className="titleHeader group relative hover:text-cinza-600"
              to="projects"
              onClick={toggle}
            >
              Projetos
              <div className="absolute h-0.5 w-full scale-x-0 bg-cinza-600 transition-transform group-hover:scale-x-100 " />
            </LinkS>
          </li>
          <li className="text-center">
            <LinkS
              className="titleHeader group relative hover:text-cinza-600"
              to="services"
              onClick={toggle}
            >
              Serviços
              <div className="absolute h-0.5 w-full scale-x-0 bg-cinza-600 transition-transform group-hover:scale-x-100 " />
            </LinkS>
          </li>
          <li className="text-center">
            <LinkS
              className="titleHeader group relative hover:text-cinza-600"
              to="contact"
              onClick={toggle}
            >
              Contato
              <div className="absolute h-0.5 w-full scale-x-0 bg-cinza-600 transition-transform group-hover:scale-x-100 " />
            </LinkS>
          </li>
        </ul>
      </div>
    </>
  )
}
