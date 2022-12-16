import { FaPhoneSquareAlt, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { Eyebrow } from '../commons/Eyebrow'

export function Contact2() {
  return (
    <div id="contact">
      <section className="bg-bege-100 py-28 px-4">
        <Eyebrow>Contato</Eyebrow>
        <div className="flex flex-col mx-auto  mt-8 md:flex-row md:flex md:justify-around ">
          <div className="flex flex-col p-0 gap-4 mb-8 md:mb-0 md:order-1 ">
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
              <FaInstagram className="text-4xl text-card hover:text-cinza-400 transition-colors cursor-pointer" />
              <h2 className="text-lg text-baseCinza cursor-pointer">
                @dalcoldesign
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-4xl text-card hover:text-cinza-400 transition-colors cursor-pointer" />
              <h2 className="text-lg text-baseCinza cursor-pointer">
                Balneário Camboriú, Santa Catarina
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center sm:py-12 md:order-2">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
              <div className="absolute inset-0 bg-baseCinza shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div className="relative px-4 py-10 bg-baseVerde shadow-lg sm:rounded-3xl sm:p-10">
                <div className="max-w-md mx-auto">
                  <div>
                    <h1 className="text-3xl font-extrabold text-twice">
                      Solicite seu orçamento
                    </h1>

                    <hr className="mt-3 border-twice" />
                  </div>
                  <div className="divide-y divide-gray-200">
                    <form className="pt-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7 -mb-8">
                      <label
                        className="block uppercase tracking-wide text-twice text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Nome <span className="text-baseCinza">*</span>
                      </label>
                      <input
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Digite seu Nome"
                      />

                      <label
                        className="block uppercase tracking-wide text-twice text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Email <span className="text-baseCinza">*</span>
                      </label>
                      <input
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="email"
                        placeholder="Digite seu Email"
                      />

                      <label
                        className="block uppercase tracking-wide text-twice text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Mensagem <span className="text-baseCinza">*</span>
                      </label>
                      <textarea
                        required
                        className="resize-y py-3 px-4 border focus:outline-none rounded-md w-full bg-gray-200"
                        placeholder="Sua mensagem..."
                      ></textarea>

                      <div className="flex items-end justify-end pb-3">
                        <button className="bg-baseCinza hover:bg-cinza-200 transition-colors text-white font-semibold py-2 px-4 rounded">
                          ENVIAR
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-2"></div>
    </div>
  )
}

{
  /* <div classNameName="bg-card rounded-lg py-8 px-8 md:order-2">
<div classNameName="flex flex-col justify-center items-center gap-10">
  <div>
    <h2 classNameName="text-xl text-twice">Solicite um orçamento</h2>
  </div>
  <div classNameName="flex gap-8 text-4xl text-twice">
    <a href="#"></a>
  </div>
</div>
</div>
</div> */
}
