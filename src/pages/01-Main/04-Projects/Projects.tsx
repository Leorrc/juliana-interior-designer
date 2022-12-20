import React from 'react'
import { Eyebrow } from '../../../components/commons/Eyebrow'
import { CardProject } from './CardProject'
import dataModal from '../../../data/Projects/ImgsModal/capas.json'
import { MdClose } from 'react-icons/md'

import { Home2 } from '../../02-Projects/Modal/Home2'
import { Modal2 } from '../../02-Projects/Modal2/Modal2'

export function Projects() {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <section className="py-40 bg-baseBege">
        <div className="mx-6 pb-16">
          <Eyebrow>MEUS PROJETOS</Eyebrow>
        </div>

        <div className="flex w-full px-4 flex-col items-center">
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
              <div className="overlay flex flex-col">
                <div className="text-twice mb-2">
                  <button
                    className="bg-twice flex rounded "
                    onClick={() => setShowModal(false)}
                  >
                    <i>
                      <MdClose className="text-2xl text-baseCinza" />
                    </i>
                  </button>
                </div>

                <Modal2 />
              </div>
            </>
          ) : null}
        </div>
      </section>
      <div className="divider-2"></div>
    </>
  )
}
