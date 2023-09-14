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
        <div className="mt-8 flex flex-col md:flex lg:mt-16 lg:flex-row lg:justify-evenly lg:gap-16">
          <div className="md:order-0 flex flex-col justify-center lg:ml-4">
            <div className="relative py-3 sm:mx-auto sm:max-w-xl">
              <div className="absolute inset-0 -skew-y-6 transform bg-baseVerde shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl "></div>
              <div className="relative bg-baseCinza px-4 py-10 shadow-lg sm:rounded-3xl sm:p-10">
                <div className="mx-auto max-w-md">
                  <div>
                    <h1 className="text-3xl  text-twice">
                      Solicite seu orçamento
                    </h1>
                    <hr className="mt-3 border-twice" />
                  </div>
                  <div className="divide-y divide-gray-200">
                    <form
                      className="-mb-8 space-y-4 pt-8 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7"
                      action="https://formsubmit.co/dalcoldesign@hotmail.com"
                      method="POST"
                    >
                      <label
                        className="mb-2 block text-xs uppercase tracking-wide text-twice"
                        htmlFor="grid-first-name"
                      >
                        Nome <span className="text-twice">*</span>
                      </label>
                      <input
                        required
                        className="mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-first-name"
                        type="text"
                        name="name"
                        placeholder="Digite seu Nome"
                      />

                      <label
                        className="mb-2 block text-xs uppercase tracking-wide  text-twice"
                        htmlFor="grid-first-name"
                      >
                        Email <span className="text-twice">*</span>
                      </label>
                      <input
                        required
                        className="mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                        id="grid-first-name"
                        type="email"
                        name="email"
                        placeholder="Digite seu Email"
                      />

                      <label
                        className="mb-2 block text-xs uppercase tracking-wide  text-twice"
                        htmlFor="grid-first-name"
                      >
                        Mensagem <span className="text-twice">*</span>
                      </label>
                      <textarea
                        required
                        name="message"
                        className="w-full resize-y rounded-md border bg-gray-200 py-3 px-4 focus:bg-white focus:outline-none"
                        placeholder="Sua mensagem..."
                      ></textarea>
                      <input type="hidden" name="_captcha" value="false" />
                      <input
                        type="hidden"
                        name="_next"
                        value="http://localhost:5173/obrigado.html"
                      />

                      <div className="flex items-end justify-end pb-3">
                        <button className="rounded bg-baseVerde py-2 px-4 font-semibold text-twice transition-colors hover:bg-verde-300">
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

          <div className="mx-auto mt-16 mb-8 flex flex-col gap-4 md:order-2 md:mb-0 md:self-center lg:mx-0 ">
            <div className="flex items-center gap-2 ">
              <a
                href="https://wa.link/mni507"
                className="cursor-pointer text-4xl text-card transition-colors hover:text-cinza-300 md:text-5xl lg:text-6xl "
              >
                <FaPhoneSquareAlt />
              </a>
              <h2 className="cursor-pointer text-lg text-baseCinza md:text-3xl lg:text-3xl">
                (47) 9 9611-6189
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <IoMdMail className="cursor-pointer text-4xl text-card transition-colors hover:text-cinza-400 md:text-5xl lg:text-6xl" />
              <h2 className="cursor-pointer text-lg text-baseCinza md:text-3xl lg:text-3xl">
                dalcoldesign@hotmail.com
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/dalcoldesign/"
                target="_blank"
                className="flex items-center gap-1"
                rel="noreferrer"
              >
                <FaInstagram className="cursor-pointer text-4xl text-card transition-colors hover:text-cinza-400 md:text-5xl lg:text-6xl" />
                <h2 className="cursor-pointer text-lg text-baseCinza md:text-3xl lg:text-3xl">
                  @dalcoldesign
                </h2>
              </a>
            </div>

            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="cursor-pointer text-4xl text-card transition-colors hover:text-cinza-400 md:text-5xl lg:text-6xl" />
              <h2 className="cursor-pointer text-lg text-baseCinza md:text-3xl lg:text-3xl">
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
