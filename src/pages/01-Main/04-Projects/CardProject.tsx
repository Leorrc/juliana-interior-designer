/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { MdClose } from 'react-icons/md'
import {
  SlideModal2,
  SliderModal2,
  SliderModal2Props,
} from './Modal/SliderModal2'

interface CardProps {
  imgUrl: string
  title?: string
  modal: string[]
}

export function CardProject({ imgUrl, modal, title }: CardProps) {
  const settings: SliderModal2Props = {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
    grabCursor: true,
    loop: true,
    preloadImages: true,
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
  }
  const [showModal, setShowModal] = React.useState(false)

  return (
    <>
      <div className="flex flex-col text-center">
        <h5 className="p-4 text-2xl text-baseCinza">
          {title}
          <hr className="hrPro" />
        </h5>

        <div className="zoom overflow-hidden rounded-lg  bg-no-repeat shadow-lg">
          <img
            src={imgUrl}
            className="h-64 w-full align-middle transition duration-300 ease-linear"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>

      {showModal ? (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 flex h-screen w-screen flex-col ">
            <div
              className="z-[1] h-full w-full bg-black/70 "
              onClick={() => setShowModal(false)}
            ></div>

            <div
              className="
                fixed top-[7%] left-0 right-0 bottom-0 z-[2] m-auto flex h-2/5 
                max-h-[844px] w-11/12 max-w-[1920px] flex-col rounded-lg bg-baseCinza p-2
                md:w-[95%] 
                lg:top-[11%] lg:h-[60%] lg:w-[95%]
                xl:h-[85%] xl:w-[92%]
                "
            >
              <div className="mb-2 text-twice">
                <button
                  className="flex rounded bg-twice"
                  onClick={() => setShowModal(false)}
                >
                  <i>
                    <MdClose className="text-2xl text-baseCinza" />
                  </i>
                </button>
              </div>

              <SliderModal2 settings={settings}>
                {modal.map((imgUrl, index) => (
                  <SlideModal2 key={index}>
                    <img src={imgUrl} />
                  </SlideModal2>
                ))}
              </SliderModal2>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}
