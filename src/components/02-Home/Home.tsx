import { Slider, SliderProps, Slide } from './Slider'
import imgsHome from '../../data/imgsHome.json'

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
    <div>
      <Slider settings={settings}>
        {imgsHome.map(imgs => (
          <Slide>
            <img src={imgs.imgUrl} />
          </Slide>
        ))}
      </Slider>
    </div>
  )
}
