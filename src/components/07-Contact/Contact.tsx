import { FaPhoneSquareAlt, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { Eyebrow } from '../commons/Eyebrow'

export function Contact() {
  return (
    <div id="contact">
      <section className="bg-bege-100 py-28 px-4">
        <div className="md:mx-6">
          <Eyebrow>Contato</Eyebrow>
        </div>
        <div className="flex flex-col mt-8 lg:flex-row md:flex lg:mt-16 lg:gap-16 lg:justify-evenly">
          <div className="flex flex-col justify-center md:order-0 lg:ml-4">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-baseVerde shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl "></div>
              <div className="relative px-4 py-10 bg-baseCinza shadow-lg sm:rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div>
                    <h1 className="text-3xl  text-twice">
                      Solicite seu orçamento
                    </h1>
                    <hr className="mt-3 border-twice" />
                  </div>
                  <div className="divide-y divide-gray-200">
                    <form
                      className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8"
                      action="https://formsubmit.co/dalcoldesign@hotmail.com"
                      method="POST"
                    >
                      <label
                        className="block uppercase tracking-wide text-twice text-xs mb-2"
                        htmlFor="grid-first-name"
                      >
                        Nome <span className="text-twice">*</span>
                      </label>
                      <input
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        name="name"
                        placeholder="Digite seu Nome"
                      />

                      <label
                        className="block uppercase tracking-wide text-twice text-xs  mb-2"
                        htmlFor="grid-first-name"
                      >
                        Email <span className="text-twice">*</span>
                      </label>
                      <input
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="email"
                        name="email"
                        placeholder="Digite seu Email"
                      />

                      <label
                        className="block uppercase tracking-wide text-twice text-xs  mb-2"
                        htmlFor="grid-first-name"
                      >
                        Mensagem <span className="text-twice">*</span>
                      </label>
                      <textarea
                        required
                        name="message"
                        className="resize-y py-3 px-4 border rounded-md w-full bg-gray-200 focus:outline-none focus:bg-white"
                        placeholder="Sua mensagem..."
                      ></textarea>
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_next"
                        value="http://localhost:5173/obrigado.html"
                      />

                      <div className="flex items-end justify-end pb-3">
                        <button className="bg-baseVerde hover:bg-verde-300 transition-colors text-twice font-semibold py-2 px-4 rounded">
                          ENVIAR
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="v1"></div>
          </div>

          <div className="flex flex-col mt-16 mx-auto gap-4 mb-8 md:mb-0 md:order-2 md:self-center lg:mx-0 ">
            <div className="flex items-center gap-2 ">
              <a
                href="https://wa.link/mni507"
                className="text-4xl text-card md:text-5xl lg:text-6xl hover:text-cinza-300 transition-colors cursor-pointer "
              >
                <FaPhoneSquareAlt />
              </a>
              <h2 className="text-lg md:text-3xl lg:text-3xl text-baseCinza cursor-pointer">
                (47) 9 9611-6189
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <IoMdMail className="text-4xl text-card md:text-5xl lg:text-6xl hover:text-cinza-400 transition-colors cursor-pointer" />
              <h2 className="text-lg md:text-3xl lg:text-3xl text-baseCinza cursor-pointer">
                dalcoldesign@hotmail.com
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/dalcoldesign/"
                target="_blank"
                className="flex items-center gap-1"
              >
                <FaInstagram className="text-4xl text-card md:text-5xl lg:text-6xl hover:text-cinza-400 transition-colors cursor-pointer" />
                <h2 className="text-lg md:text-3xl lg:text-3xl text-baseCinza cursor-pointer">
                  @dalcoldesign
                </h2>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-4xl text-card md:text-5xl lg:text-6xl hover:text-cinza-400 transition-colors cursor-pointer" />
              <h2 className="text-lg md:text-3xl lg:text-3xl text-baseCinza cursor-pointer">
                Balneário Camboriú, Santa Catarina
              </h2>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-2"></div>
    </div>
  )
}
