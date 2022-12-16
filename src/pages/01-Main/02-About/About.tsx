import aa from '/images/works/ju.png'
import logoAbout from '/images/Logos/logoAbout.png'

import { Eyebrow } from '../../../components/commons/Eyebrow'

export function About() {
  return (
    <>
      <section className="sectionS overflow-hidden bg-bege-100 md:py-40 lg:relative">
        <div className="mx-6 pb-16">
          <Eyebrow>Sobre mim</Eyebrow>
        </div>
        <div className="containerL grid gap-8 md:grid-flow-col md:max-w-5xl md:mx-auto ">
          <div className="relative max-w-xs mx-auto">
            <span className="fundoImg"></span>
            <img className="rounded-lg relative " src={aa} alt="" />
          </div>
          <div className=" lg:relative md:max-w-md md:top-0">
            <div className="p-4 text-base text-justify ">
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
                uma experiencia incrível, desde o inicio do projeto até a
                finalização, afinal é a realização de um sonho.
              </p>
            </div>
            <div className="overflow-hidden animate-spin-slow w-52 h-52 flex mx-auto mt-8 lg:absolute top-[-13rem] right-[-20rem]">
              <img src={logoAbout} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
