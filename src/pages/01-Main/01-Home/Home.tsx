import { Slider, SliderProps, Slide } from './Slider'
import imgsHome from '../../../data/SliderHome.json'

export function Home() {
  const settings: SliderProps = {
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
      delay: 5000,
      disableOnInteraction: false,
    },
  }

  return (
    <>
      <div className="relative" id="hometop" />

      <span
        className="
      word_back  absolute right-12 
      top-[700px] z-[90] text-[52px] font-extrabold text-baseVerde 
      md:top-[750px] md:text-9xl md:italic 
      lg:mix-blend-overlay
    xl:text-twice/50 "
      >
        Inspire-se
      </span>

      <Slider settings={settings}>
        {imgsHome.map((imgs, index) => (
          <Slide key={index}>
            <img src={imgs.imgUrl} alt="index" />
          </Slide>
        ))}
      </Slider>
      <div className="divider-2"></div>
    </>
  )
}
