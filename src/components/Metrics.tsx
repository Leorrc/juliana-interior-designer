import React from 'react'

export function Metrics() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-8">
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className=" md:text-display-xl text-display-lg font-normal">
                100%
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                SATISFAÇÃO <br></br>CLIENTES
              </p>
            </div>
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className=" md:text-display-xl text-display-lg font-normal">
                250
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                EMPLOYEES ON <br></br>WORLDWIDE
              </p>
            </div>
            <div className="md:col-span-4 flex xl:flex-row md:flex-col flex-row xl:gap-4 md:gap-0 gap-4 xl:items-center md:items-start items-center">
              <p className=" md:text-display-xl text-display-lg font-normal">
                3469
              </p>
              <p className="text-body-sm font-normal tracking-wider pt-2">
                PROJETOS CONCLUÍDOS<br></br>POR MIM
              </p>
            </div>
          </div>
          <div className="md:mt-20 md:pb-12 mt-12 pb-12">
            <hr className="text-neutral-300"></hr>
          </div>
        </div>
      </div>
    </div>
  )
}
