import React from 'react'
import { Eyebrow } from '../../../components/commons/Eyebrow'
import gif from '/images/g.gif'

export function ProjectsTroll() {
  return (
    <>
      <section className="py-40 bg-baseBege" id="projects2">
        <div className="mx-6 pb-16">
          <Eyebrow>MEUS PROJETOS</Eyebrow>
        </div>

        <div className="mx-6 md:max-w-3xl flex md:mx-auto">
          <img src={gif} alt="" className="rounded-2xl" />
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
