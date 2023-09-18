/* eslint-disable import/no-absolute-path */
import aa from '/images/works/sobre.png'
import logoAbout from '/images/Logos/logoSpin.png'

import { Eyebrow } from '../../../components/commons/Eyebrow'

export function About() {
  return (
    <>
      <section className="overflow-hidden bg-bege-100 py-20 md:py-40">
        <div className="mx-6">
          <Eyebrow>Sobre mim</Eyebrow>
        </div>

        <div className="containerL grid gap-8 pt-8  md:grid-flow-col xl:gap-0">
          <div className="mx-auto h-52 w-52 animate-spin-slow xl:mt-16 xl:h-62 xl:w-62">
            <img src={logoAbout} alt="" />
          </div>

          <div className="mx-auto max-w-md">
            <div className="relative mx-auto grid max-w-xs">
              <span className="absolute -top-[5%] right-[1%] z-0 text-center font-fontAbout text-8xl text-baseVerde/30">
                Juliana Dal Col
              </span>

              <h1 className="relative text-center text-[40px] font-semibold text-baseCinza">
                Juliana Dal Col
              </h1>
            </div>

            <div className="mt-8 text-justify text-base ">
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

          <div className="relative mx-auto max-w-[350px]  ">
            <span className="fundoImg"></span>
            <img className="relative rounded-lg " src={aa} alt="" />
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
