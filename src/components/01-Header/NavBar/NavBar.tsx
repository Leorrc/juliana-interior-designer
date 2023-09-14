import { HiMenu } from 'react-icons/hi'
// eslint-disable-next-line import/no-absolute-path
import logo from '/images/Logos/logoHeader.png'
import { Link as LinkS } from 'react-scroll'

type Props = {
  toggle1: () => void
}

export function NavBar({ toggle1 }: Props) {
  return (
    <>
      <header className="fixed top-0 left-0 z-[100] w-full border-b-2 border-white bg-cinza-100">
        <nav className="mx-auto flex items-center justify-between py-3 px-8 lg:px-20">
          <LinkS className="cursor-pointer" to="hometop">
            <img src={logo} alt="Logo Header" />
          </LinkS>
          <ul className="hidden cursor-pointer items-center  gap-8 font-medium uppercase text-twice md:flex">
            <li>
              <LinkS
                to="hometop"
                className="group relative hover:text-baseBege"
              >
                Home
                <div className="absolute h-0.5 w-full scale-x-0 bg-twice transition-all group-hover:scale-x-100 " />
              </LinkS>
            </li>
            <li>
              <LinkS
                to="projects"
                className="group relative hover:text-baseBege"
              >
                Projetos
                <div className="absolute h-0.5 w-full scale-x-0 bg-twice transition-all group-hover:scale-x-100 " />
              </LinkS>
            </li>
            <li>
              <LinkS
                to="services"
                className="group relative hover:text-baseBege"
              >
                Serviços
                <div className="absolute h-0.5 w-full scale-x-0 bg-twice transition-all group-hover:scale-x-100" />
              </LinkS>
            </li>
            <li>
              <LinkS to="faq" className="group relative hover:text-baseBege">
                Perguntas frequentes
                <div className="absolute h-0.5 w-full scale-x-0 bg-twice transition-all group-hover:scale-x-100" />
              </LinkS>
            </li>
            <li>
              <LinkS
                to="contact"
                className="group relative hover:text-baseBege"
              >
                Contato
                <div className="absolute h-0.5 w-full scale-x-0 bg-twice transition-all group-hover:scale-x-100" />
              </LinkS>
            </li>
          </ul>

          <div className="absolute right-6 scale-150 md:hidden ">
            <HiMenu onClick={toggle1} className=" cursor-pointer text-twice " />
          </div>
        </nav>
      </header>
    </>
  )
}
