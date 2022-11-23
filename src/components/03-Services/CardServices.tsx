import { FaPenFancy, FaPencilRuler, FaFeatherAlt } from 'react-icons/fa'

export function CardServices() {
  return (
    <>
      <div className="flex flex-col md:gap-20 gap-6 md:p-10 p-8 border border-primary-100">
        <FaPenFancy className="w-12 h-12 mx-auto" />
        <div className="flex flex-col gap-4">
          <p className="font-display md:text-display-md text-display-sm font-normal">
            PROJETOS
          </p>
          <p className="text-body-lg font-light text-neutral-700">
            Atuação multidisciplinar, se destacando em desenvolver projetos
            online e presenciais nas seguintes áreas: residenciais, comerciais,
            hoteleiros e corporativos.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:gap-20 gap-6 md:p-10 p-8 border border-primary-100">
        <FaPencilRuler className="w-12 h-12 mx-auto" />
        <div className="flex flex-col gap-4">
          <p className="font-display md:text-display-md text-display-sm font-normal">
            GERENCIAMENTO DE OBRA
          </p>
          <p className="text-body-lg font-light text-neutral-700">
            Além de atender o cliente com o projeto de interiores, o objetivo é
            concretizar e viabilizar a construção dos espaços. Assessoria
            completa para a implantação da obra, juntamente com time de
            parceiros que acaba resultando em excelência.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:gap-20 gap-6 md:p-10 p-8 border border-primary-100">
        <FaFeatherAlt className="w-12 h-12 mx-auto" />
        <div className="flex flex-col gap-4">
          <p className="font-display md:text-display-md text-display-sm font-normal">
            AMBIENTAÇÃO
          </p>
          <p className="text-body-lg font-light text-neutral-700">
            Criação de ambientes únicos, com a personalidade do cliente, visando
            sempre a estética e a funcionalidade. A decoração é a fase final, a
            cereja do bolo, que se torna essencial para um resultado harmonioso
            e coerente.
          </p>
        </div>
      </div>
    </>
  )
}
