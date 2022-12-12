import { FaPhoneSquareAlt, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { Eyebrow } from '../commons/Eyebrow'

export function Contact2() {
  return (
    <>
      <section className="bg-bege-100 py-28 px-4">
        <Eyebrow>Contato</Eyebrow>
        <div className="flex flex-col mx-auto gap-8 md:flex-row md:max-w-3xl md:gap-16 ">
          <div className="flex flex-col p-0 gap-4 pt-8 mx-auto md:order-1">
            <div className="flex items-center gap-2">
              <FaPhoneSquareAlt className="text-4xl text-baseCinza hover:text-cinza-400 transition-colors cursor-pointer" />
              <h2 className="text-lg text-baseCinza cursor-pointer">
                (47) 9 9611-6189
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <IoMdMail className="text-4xl text-card hover:text-cinza-400 transition-colors cursor-pointer" />
              <h2 className="text-lg text-baseCinza cursor-pointer">
                dalcoldesign@hotmail.com
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-4xl text-card hover:text-cinza-400 transition-colors cursor-pointer" />
              <h2 className=" text-baseCinza cursor-pointer">
                Balneário Camboriú, Santa Catarina
              </h2>
            </div>
          </div>

          <div className="bg-card rounded-lg w-full h-full py-14 px-8 md:order-2">
            <div className="flex flex-col justify-center items-center gap-10">
              <div>
                <h2 className="text-xl text-twice">Minhas redes sociais</h2>
              </div>
              <div className="flex gap-8 text-4xl text-twice">
                <a href="#">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-2"></div>
    </>
  )
}
