import React from 'react'
import { Eyebrow } from '../../../components/commons/Eyebrow'
import { CardProject } from './CardProject'
import { Home2 } from '../../02-Projects/Modal/Home2'

import dataModal from '../../../data/Projects/ImgsModal/imgsModal.json'

export function Projects() {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <section className="py-40 bg-baseBege">
        <div className="mx-6 pb-16">
          <Eyebrow>MEUS PROJETOS</Eyebrow>
        </div>

        <div className="flex w-full px-10 flex-col items-center">
          <div className="grid gap-5 grid-cols-1 lg:grid-cols-3">
            {dataModal.map(data => (
              <CardProject
                imgUrl={data.imgUrl}
                title={data.title}
                onClick={() => setShowModal(true)}
              />
            ))}
          </div>
          {showModal ? (
            <>
              <div className="overlay h-62">
                <div className="w-full h-auto">
                  <Home2 />
                </div>
              </div>
            </>
          ) : null}
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
