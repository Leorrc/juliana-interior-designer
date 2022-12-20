import aa from '/images/works/aboutPhoto.webp'
import logoAbout from '/images/Logos/logoSpin.png'

import { Eyebrow } from '../../../components/commons/Eyebrow'

// font-thin absolute left-24 top-[1370px]
export function About() {
  return (
    <>
      <section className="py-20 overflow-hidden bg-bege-100 md:py-40">
        <div className="mx-6">
          <Eyebrow>Sobre mim</Eyebrow>
        </div>
        <div className="containerL pt-8 grid gap-8  md:grid-flow-col md:mx-auto justify-center">
          <div className="animate-spin-slow w-52 h-52 flex mx-auto xl:mr-80 xl:mt-16 xl:w-62 xl:h-62 lg:absolute lg:left-56">
            <img src={logoAbout} alt="" />
          </div>
          <div className="max-w-md">
            <div className="grid relative max-w-xs mx-auto">
              <span className="text-8xl text-center text-baseVerde/30 font-fontAbout absolute z-0 -top-[5%] right-[1%]">
                Juliana Dal Col
              </span>

              <h1 className="text-[40px] font-semibold text-center text-baseCinza relative">
                Juliana Dal Col
              </h1>
            </div>

            <div className="mt-8 text-base text-justify ">
              <p>
                Sou Designer de Interiores formada pela Universidade do Vale do
                Itajaí do campus de Balneário Camboriú.
              </p>
              <br />
              <p>
                Atuo na área de decoração e projeto de interiores, assessoro
                cliente com soluções únicas e funcionais, expondo seus desejos,
                necessidades e estilo de vida.
              </p>
              <br />
              <p>
                Busco executar os projetos com excelência, focando nos mínimos
                detalhes e no controle dos processos para que o cliente tenha
                uma experiência incrível, desde o inicio do projeto até a
                finalização, afinal é a realização de um sonho.
              </p>
            </div>
          </div>
          <div className="relative max-w-[350px] mx-auto mt-4 lg:absolute lg:flex lg:right-[15%]">
            <span className="fundoImg"></span>
            <img className="rounded-lg relative " src={aa} alt="" />
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
