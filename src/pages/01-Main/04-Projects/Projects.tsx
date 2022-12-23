import React from 'react'
import { Eyebrow } from '../../../components/commons/Eyebrow'
import { CardProject } from './CardProject'

import modal from '../../../data/modal.json'

export function Projects() {
  return (
    <>
      <section className="py-40 bg-baseBege relative" id="projects">
        <div className="mx-6 pb-16">
          <Eyebrow>MEUS PROJETOS</Eyebrow>
        </div>

        <div className="flex w-full px-1 flex-col items-center">
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
            {modal.map(data => (
              <CardProject imgUrl={data.imgUrl} modal={data.modal} />
            ))}
          </div>
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
