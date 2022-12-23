import meL from '../../../data/Projects/ImgsModal/MeL/meL.json'
import { SliderModal2Props, SliderModal2, SlideModal2 } from './SliderModal2'

export function Modal2() {
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
      delay: 100,
      disableOnInteraction: false
    },
    zoom: true
  }

  return (
    <>
      <SliderModal2 settings={settings}>
        {meL.map(imgs => (
          <SlideModal2>
            <img className="h-auto" src={imgs.imgUrl} />
          </SlideModal2>
        ))}
      </SliderModal2>
    </>
  )
}
