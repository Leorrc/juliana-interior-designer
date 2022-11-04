import imgAbout from '../images/logos/about-creative.svg'
import Badge from '../images/logos/Badge.svg'

export function About() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex flex-row items-center opacity-80">
              <hr className="w-16 bg-marrom-400"></hr>
              <p className="text-body-sm font-semibold tracking-widest text-primary-600 pl-4">
                Sobre mim
              </p>
            </div>
            <h2 className="font-display md:text-display-xl text-display-md font-normal pb-4">
              Seu texto de preferência
              <span className="italic">para seu sonho</span> virar realidade
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              fringilla dui amet faucibus nam. Erat id laoreet posuere etiam
              morbi.
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700">
              Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
              mauris posuere auctor justo. Habitant proin aliquet volutpat leo
              ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc.
              Faucibus sit odio bibendum lobortis diam.
            </p>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <img src={imgAbout} alt="" />
            <img
              src={Badge}
              alt="Award Badge"
              className="absolute left-[42%] -top-14"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
