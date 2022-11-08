import React from 'react'
import socialData from '../../data/social.json'

export function Footer() {
  return (
    <footer className="bg-bege-300">
      <div className="container mx-auto">
        <div className="mt-2 md:mb-20 mb-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-12">
          <div className="lg:col-span-6 md:pr-24">
            <h3 className="font-display md:text-display-lg text-display-sm font-normal pb-4">
              Dê o pontapé inicial na casa dos seus sonhos conosco
            </h3>
            <a
              href="/"
              className="font-display md:text-display-lg text-display-sm italic text-primary-600 underline"
            >
              Envie-nos um oi
            </a>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 xl:pl-80 lg:pl-48">
            <div className="flex flex-col gap-2">
              <p className="text-display-xs font-display font-normal">
                Balneário Camboriú , Santa Catarina
              </p>
              <p className="text-body-sm font-light text-neutral-900">
                R. 2000, 369 - Centro, Balneário Camboriú - SC, 88330-414
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                Envie-nos um e-mail para
              </p>
              <a
                className="text-display-xs font-display font-normal text-primary-600"
                href="mailto:hello@landify.design"
              >
                juliana@design
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-body-sm font-light text-neutral-900">
                Se você estiver com pressa, ligue rapidamente para nós
              </p>
              <a
                className="text-display-xs font-display font-normal text-primary-600"
                href="/"
              >
                +55 (47) 9 9647-3535
              </a>
            </div>
          </div>
        </div>
        <div className="md:my-20 my-10">
          <hr className="text-neutral-300"></hr>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 lg:items-center justify-between md:mb-20 mb-10">
          <div className="flex lg:flex-row flex-col lg:items-center md:gap-6 gap-4">
            <div className="flex flex-row items-center opacity-70">
              <p className="text-body-sm font-semibold tracking-widest text-neutral-700 pr-4">
                Minhas redes sociais
              </p>
              <hr className="w-16 text-neutral-700"></hr>
            </div>
            <div className="flex flex-row  items-center gap-6">
              {socialData.map(social => (
                <a
                  href={social.href}
                  key={social.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="h-10 w-10" src={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="text-body-md font-light">
            © {new Date().getFullYear()} Site desenvolvido por{' '}
            <a
              href="https://landify.design/?ref=inteo"
              className="text-primary-600"
            >
              Leonardo Carvalho
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
