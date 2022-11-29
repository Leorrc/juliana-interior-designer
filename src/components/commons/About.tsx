import aa from '../../../public/works/aa.jpg'

const ImgLoop = `
  hidden 
  animate-spin-slow 
  md:absolute
  md:flex
  md:w-[300px]
  md:h-[300px]
  md:right-[1rem]
  md:top-[3rem]
  lg:w-[500px]
  lg:h-[500px]
  lg:right-[17rem]
  lg:top-[2rem]
  `

export function About() {
  return (
    <section className="sectionS overflow-hidden bg-base2 md:py-40">
      <div className="containerL grid gap-8 md:grid-flow-col md:max-w-5xl md:mx-auto">
        <div className="relative max-w-xs">
          <span className="fundoImg"></span>
          <img className="rounded-lg relative" src={aa} alt="" />
        </div>
        <div className="text-justify">
          <h2 className="title">Sobre mim</h2>
          <p>
            Me chamo{' '}
            <strong className="text-base3 text-lg">
              Juliana Dal Col Viana
            </strong>
            , sou Designer de Interiores e me formei pela Universidade do Vale
            do Itajaí do campus de Balneário Camboriú.
          </p>
          <br />
          <p>
            A busca pela excelência no resultado final quanto no atendimento é o
            diferencial, já que os clientes ficam encantados e satisfeitos com a
            maneira que os seus sonhos se tornam realidade. A dedicação nos
            mínimos detalhes é a chave fundamental para a realização de um
            grande projeto.
          </p>
        </div>
      </div>
    </section>
  )
}
