import React from 'react'
import { MdClose } from 'react-icons/md'
import {
  SlideModal2,
  SliderModal2,
  SliderModal2Props
} from './Modal/SliderModal2'

interface CardProps {
  imgUrl: string
  title: string
  onClick?: () => void
  modal: string[]
}

export function CardProject({ imgUrl, onClick, modal, title }: CardProps) {
  const settings: SliderModal2Props = {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true
    },
    grabCursor: true,
    loop: true,
    preloadImages: true,
    autoplay: {
      delay: 15000,
      disableOnInteraction: false
    }
  }
  const [showModal, setShowModal] = React.useState(false)

  return (
    <>
      <div className="flex flex-col text-center">
        <h5 className="text-2xl text-baseCinza p-4 uppercase">
          {title}
          <hr className="hrPro" />
        </h5>

        <div className="zoom shadow-lg rounded-lg  overflow-hidden bg-no-repeat  ">
          <img
            src={imgUrl}
            className="w-full h-64 transition duration-300 ease-linear align-middle"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>

      {showModal ? (
        <>
          <div className="flex flex-col fixed w-screen h-screen top-0 left-0 right-0 bottom-0 ">
            <div
              className="bg-black/70 w-full h-full z-[1] "
              onClick={() => setShowModal(false)}
            ></div>

            <div
              className="
                flex flex-col z-[2] fixed top-[7%] left-0 right-0 bottom-0 w-11/12 
                max-w-[1920px] h-2/5 max-h-[844px] m-auto p-2 bg-baseCinza rounded-lg
                md:w-[95%] 
                lg:w-[95%] lg:h-[60%] lg:top-[11%]
                xl:w-[92%] xl:h-[85%]
                "
            >
              <div className="text-twice mb-2">
                <button
                  className="bg-twice flex rounded"
                  onClick={() => setShowModal(false)}
                >
                  <i>
                    <MdClose className="text-2xl text-baseCinza" />
                  </i>
                </button>
              </div>

              <SliderModal2 settings={settings}>
                {modal.map(imgUrl => (
                  <SlideModal2>
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
