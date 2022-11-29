import { FaPenFancy, FaPencilRuler, FaFeatherAlt } from 'react-icons/fa'

export function NewServices() {
  return (
    <div className="py-36 ">
      <div className="grid gap-8 mx-6 lg:max-w-4xl lg:mx-auto">
        <header>
          <h2 className="mx-6 text-center">Serviços</h2>
        </header>
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          <div className="bg-slate-300 py-[3.625rem] px-8 divide-solid border-b rounded-t rounded-b-none text-center shadow-leo sm:px-12">
            <FaPenFancy className="block mb-6 text-7xl fill-cyan-500 mx-auto" />

            <h3 className="text-2xl mb-3">PROJETOS</h3>
            <p>
              Atuação multidisciplinar, se destacando em desenvolver projetos
              online e presenciais nas seguintes áreas: residenciais,
              comerciais, hoteleiros e corporativos.
            </p>
          </div>
          <div className="bg-base2 py-[3.625rem] px-8 divide-solid border-b rounded-t rounded-b-none text-center shadow-leo">
            <FaPencilRuler className="block mb-6 text-7xl fill-cyan-500 mx-auto" />

            <h3 className="text-2xl mb-3">GERENCIAMENTO DE OBRA</h3>
            <p>
              Além de atender o cliente com o projeto de interiores, o objetivo
              é concretizar e viabilizar a construção dos espaços. Assessoria
              completa para a implantação da obra, juntamente com time de
              parceiros que acaba resultando em excelência.
            </p>
          </div>
          <div className="bg-base2 py-[3.625rem] px-8 divide-solid border-b rounded-t rounded-b-none text-center shadow-leo">
            <FaFeatherAlt className="block mb-6 text-7xl fill-cyan-500 mx-auto" />

            <h3 className="text-2xl mb-3">AMBIENTAÇÃO</h3>
            <p>
              Criação de ambientes únicos, com a personalidade do cliente,
              visando sempre a estética e a funcionalidade. A decoração é a fase
              final, a cereja do bolo, que se torna essencial para um resultado
              harmonioso e coerente.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
