import React, { useEffect, useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  AnimateSharedLayout,
  usePresence
} from 'framer-motion'
import { MdClose } from 'react-icons/md'

import meL from '../../data/ImgProjects/meL.json'
import { Eyebrow } from '../commons/Eyebrow'

interface CardProps {
  imgUrl?: string
  title?: string
  onClick?: () => void
}

export function Projects3() {
  return (
    <>
      <section className="sectionS bg-bege-100 overflow-hidden">
        <header className="mx-6 mb-8">
          <Eyebrow>Meus Projetos</Eyebrow>
        </header>

        <AnimateSharedLayout>
          <motion.div className="container">
            <motion.div className="grid lg:grid-cols-3 gap-6">
              {meL.map(card => (
                <Card imgUrl={card.imgUrl} title={card.title} />
              ))}
            </motion.div>
          </motion.div>
        </AnimateSharedLayout>
      </section>
      <div className="divider-2"></div>
    </>
  )
}

const Card = ({ imgUrl, title }: CardProps) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)

  return (
    <>
      <motion.button onClick={() => setSelected(title)}>
        <motion.div
          layoutId={title}
          className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover "
        >
          <img
            src={imgUrl}
            className="w-full h-64 transition duration-300 ease-linear align-middle"
          />

          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed">
            <div className="flex justify-start items-end h-full">
              <h5 className="text-lg font-bold text-white m-6">{title}</h5>
            </div>
          </div>
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {selected && (
          <motion.div className="overlay" layoutId={selected}>
            <MdClose
              className="cursor-pointer text-4xl font-bold text-bege-600"
              onClick={() => setSelected(undefined)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
