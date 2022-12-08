import { FaPhoneSquareAlt, FaInstagram } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { Eyebrow } from '../commons/Eyebrow'

export function Contact() {
  return (
    <>
      <section className="sectionS bg-bege-100">
        <header className="mx-6 mb-12">
          <Eyebrow>Contato</Eyebrow>
        </header>
        <div className="container grid gap-16 md:grid-cols-2 md:max-w-5xl">
          <div className="">
            <button className="button">Entrar em contato</button>
          </div>
          <div className="">
            <ul className="grid gap-8">
              <li className="flex gap-4 place-items-center">
                <i className="text-4xl text-cinza-100 hover:text-cinza-400 cursor-pointer">
                  <FaPhoneSquareAlt />
                </i>
                <span className="text-2xl text-black">(47) 9 9611-6189</span>
              </li>
              <li className="flex gap-4 place-items-center">
                <i className="text-4xl text-cinza-100 hover:text-cinza-400 cursor-pointer">
                  <IoMdMail />
                </i>
                <span className="text-2xl text-black">
                  dalcoldesign@hotmail.com
                </span>
              </li>
              <li className="flex gap-4 place-items-center">
                <i className="text-4xl text-cinza-100 hover:text-cinza-400 cursor-pointer">
                  <FaInstagram />
                </i>
                <span className="text-2xl text-black cursor-pointer">
                  @dalcoldesign
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
