import { SlideModal, SliderModal, SliderModalProps } from './SliderModal'

import meL from '../../../data/Projects/ImgsModal/MeL/meL.json'

export function Home2() {
  const settings: SliderModalProps = {
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
      delay: 335000,
      disableOnInteraction: false
    }
  }

  return (
    <>
      <SliderModal settings={settings}>
        {meL.map(imgs => (
          <SlideModal>
            <img className="h-auto" src={imgs.imgUrl} />
          </SlideModal>
        ))}
      </SliderModal>
    </>
  )
}
