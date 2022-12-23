import { Slider, SliderProps, Slide } from './Slider'
import imgsHome from '../../../data/SliderHome.json'

interface ImgsHomeProps {
  imgUrl?: string
}

export function Home({ imgUrl }: ImgsHomeProps) {
  const settings: SliderProps = {
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
      delay: 5000,
      disableOnInteraction: false
    }
  }

  return (
    <>
      <div className="relative" id="hometop" />

      <span className="text-[50px] italic text-baseVerde font-extrabold absolute word_back z-[90] right-12 top-[580px] md:text-9xl md:top-[750px] xl:text-twice/50 lg:mix-blend-overlay">
        Inspire-se
      </span>
      <Slider settings={settings}>
        {imgsHome.map(imgs => (
          <Slide>
            <img src={imgs.imgUrl} />
          </Slide>
        ))}
      </Slider>
      <div className="divider-2"></div>
    </>
  )
}
