import ArchitectureIcon from '../../images/service-icons/interior-design.svg'
import RenovationIcon from '../../images/service-icons/building-renovation.svg'
import ConstructionIcon from '../../images/service-icons/construction.svg'
import { ServiceItem } from './ServiceItem'

export function Services() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
            <div className="flex flex-row items-center opacity-80">
              <hr className="w-16 bg-marrom-400"></hr>
              <p className="text-body-sm font-semibold tracking-widest text-primary-600 pl-4">
                Serviços
              </p>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col gap-8">
            <ServiceItem
              icon={ArchitectureIcon}
              title="Designer de interiores"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={RenovationIcon}
              title="Renovação de Edifício"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
            <ServiceItem
              icon={ConstructionIcon}
              title="
              Gerenciamento de construção"
              description="Non diam pretium tristique augue placerat dolor. Accumsan nibh
                  nunc, molestie volutpat ipsum, ultricies."
            />
          </div>
        </div>
      </div>
    </div>
  )
}
