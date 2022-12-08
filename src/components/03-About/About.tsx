import aa from '/works/aa.jpg'
import logoAbout from '/Logos/logoAbout.png'
import img1 from '/Helps/help1.svg'
import { Eyebrow } from '../commons/Eyebrow'

export function About() {
  return (
    <>
      <section className="sectionS overflow-hidden bg-bege-100 md:py-40 lg:relative">
        <div className="containerL grid gap-8 md:grid-flow-col md:max-w-5xl md:mx-auto lg:rela">
          <div className="relative max-w-xs">
            <span className="fundoImg"></span>
            <img className="rounded-lg relative " src={aa} alt="" />
          </div>
          <div className=" mx-16 lg:mt-12 lg:relative">
            <Eyebrow>Sobre mim</Eyebrow>
            <div className="bg-baseVerde bg-opacity-10 rounded-lg p-4">
              <p className="text-justify">
                Me chamo{' '}
                <strong className="text-base3">Juliana Dal Col Viana</strong>,
                sou Designer
                <br /> de Interiores e me formei pela Universidade do Vale do
                Itajaí do campus de Balneário Camboriú.
              </p>
              <br />
              <p>
                A busca pela excelência no resultado final quanto no atendimento
                é o diferencial, já que os clientes ficam encantados e
                satisfeitos com a maneira que os seus sonhos se tornam
                realidade.
              </p>
              <br />
              <p>
                A dedicação nos mínimos detalhes é a chave fundamental para a
                realização de um grande projeto.
              </p>
            </div>
            <div className="overflow-hidden animate-spin-slow w-52 h-52 flex mx-auto mt-8 lg:absolute top-[-13rem] right-[-10rem]">
              <img src={logoAbout} alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
