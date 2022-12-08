import { FaPenFancy, FaPencilRuler, FaFeatherAlt } from 'react-icons/fa'
import { Eyebrow } from '../commons/Eyebrow'

export function Services() {
  return (
    <>
      <section className="py-40 bg-bege-600 ">
        <div className="grid mx-6">
          <header>
            <Eyebrow>Serviços</Eyebrow>
          </header>
          <div className="container mx-auto flex flex-wrap my-8 justify-center">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-16">
              <div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer  card">
                <div className="px-6 py-4 mx-auto">
                  <i>
                    <FaPenFancy className="fa fa-cog" />
                  </i>
                  <h1 className="font-bold mb-2 h1Card">Projetos</h1>
                  <hr className="hrCard" />
                  <p className=" text-base text-justify">
                    Atuação multidisciplinar, se destacando em desenvolver
                    projetos online e presenciais nas seguintes áreas:
                    residenciais, comerciais, hoteleiros e corporativos.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer  card">
                <div className="px-6 py-4">
                  <i>
                    <FaPencilRuler className="fa fa-cog" />
                  </i>
                  <h1 className="font-bold mb-2 h1Card">
                    Gerenciamento de obra
                  </h1>
                  <hr className="hrCard" />
                  <p className=" text-base">
                    Além de atender o cliente com o projeto de interiores, o
                    objetivo é concretizar e viabilizar a construção dos
                    espaços. Assessoria completa para a implantação da obra,
                    juntamente com time de parceiros que acaba resultando em
                    excelência.
                  </p>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-xl cursor-pointer  card">
                <div className="px-6 py-4">
                  <i>
                    <FaFeatherAlt className="fa fa-cog" />
                  </i>
                  <h1 className="font-bold mb-2 h1Card">Ambientação</h1>
                  <hr className="hrCard" />
                  <p className=" text-base">
                    Criação de ambientes únicos, com a personalidade do cliente,
                    visando sempre a estética e a funcionalidade. A decoração é
                    a fase final, a cereja do bolo, que se torna essencial para
                    um resultado harmonioso e coerente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
