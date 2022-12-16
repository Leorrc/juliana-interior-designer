import { Eyebrow } from '../../../components/commons/Eyebrow'

import services from '../../../data/services.json'

interface ServicesProps {
  icon?: string
  description: string
}

export function Services() {
  return (
    <>
      <section className="py-40 bg-bege-600" id="services">
        <header className="mx-6">
          <Eyebrow>Serviços</Eyebrow>
        </header>
        <div className="grid mx-6 my-8 justify-center ">
          <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
            {services.map(cards => (
              <Card icon={cards.icon} description={cards.description} />
            ))}
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}

const Card = ({ icon, description }: ServicesProps) => {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden  cursor-pointer">
        <div className="min-w-56 max-w-[250px] px-6 py-4 mx-auto flex flex-col gap-2">
          <div className="w-20 h-20 fa fa-cog">
            <img className="text-baseCinza" src={icon}></img>
          </div>
          <hr className="hrCard" />
          <p className="text-baseCinza text-center text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
