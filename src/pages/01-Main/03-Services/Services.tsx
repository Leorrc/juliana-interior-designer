import { Eyebrow } from '../../../components/commons/Eyebrow'

import services from '../../../data/services.json'

interface ServicesProps {
  icon?: string
  description: string
}

export function Services() {
  return (
    <>
      <section className="bg-bege-600 py-40" id="services">
        <header className="mx-6">
          <Eyebrow>Serviços</Eyebrow>
        </header>
        <div className="mx-6 my-8 grid justify-center ">
          <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-10">
            {services.map((cards, index) => (
              <Card
                key={index}
                icon={cards.icon}
                description={cards.description}
              />
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
      <div className="max-w-sm cursor-pointer overflow-hidden  rounded">
        <div className="min-w-56 mx-auto flex max-w-[250px] flex-col gap-2 px-6 py-4">
          <div className="fa fa-cog h-20 w-20">
            <img className="text-baseCinza" src={icon} alt="index" />
          </div>
          <hr className="hrCard" />
          <p className="text-center text-[16px] text-baseCinza">
            {description}
          </p>
        </div>
      </div>
    </>
  )
}
