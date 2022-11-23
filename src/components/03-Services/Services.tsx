import { CardServices } from './CardServices'

export function Services() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:gap-20 gap-10 lg:py-28 md:py-20 py-12">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          <div className="flex flex-row items-center opacity-80">
            <hr className="w-16 bg-marrom-400"></hr>
            <p className="text-body-sm font-semibold tracking-widest text-primary-600 pl-4">
              Serviços
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
          <CardServices />
        </div>
      </div>
    </section>
  )
}
