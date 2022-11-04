import { Button } from '@material-tailwind/react'
import { WorkItem } from './WorkItem'

import works from '../../data/works.json'

export function Works() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
          <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
              <div className="flex flex-col gap-6">
                <div className="flex flex-row items-center opacity-80">
                  <hr className="w-16 bg-marrom-400"></hr>
                  <p className="text-body-sm font-semibold tracking-widest text-primary-600 pl-4">
                    Meus trabalhos
                  </p>
                </div>
                <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                  Alguns dos <span className="italic">meus trabalhos</span>{' '}
                  feito com amor
                </h3>
              </div>
              {works.slice(0, 1).map(work => (
                <WorkItem
                  imgUrl={work.imgUrl}
                  title={work.title}
                  description={work.description}
                />
              ))}
              <div className="xl:flex hidden items-start">
                <Button className="bg-musgo-400">Contato</Button>
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
              {works.slice(1, 3).map(work => (
                <WorkItem
                  imgUrl={work.imgUrl}
                  title={work.title}
                  description={work.description}
                />
              ))}
            </div>
          </div>
          <div className="xl:hidden flex items-start">
            <Button className="bg-musgo-400">Contato</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
