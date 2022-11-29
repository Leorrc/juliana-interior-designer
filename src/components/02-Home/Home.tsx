import { SwiperProps, SwiperSlide } from 'swiper/react'
import { Slider, SliderProps, Slide } from './Slider'

import m1 from '/ImgsHome/m1.jpg'
import m2 from '/ImgsHome/m2.jpg'
import m3 from '/ImgsHome/m3.jpg'
import m4 from '/ImgsHome/m4.jpg'
import m5 from '/ImgsHome/m5.jpg'
import m6 from '/ImgsHome/m6.jpg'
import m7 from '/ImgsHome/m7.jpg'
import m8 from '/ImgsHome/m8.jpg'
import m9 from '/ImgsHome/m9.jpg'

export function Home() {
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
        <Slide>
          <img src={m1} alt="" />
        </Slide>
        <Slide>
          <img src={m2} alt="" />
        </Slide>
        <Slide>
          <img src={m3} alt="" />
        </Slide>
        <Slide>
          <img src={m4} alt="" />
        </Slide>
        <Slide>
          <img src={m5} alt="" />
        </Slide>
        <Slide>
          <img src={m6} alt="" />
        </Slide>
        <Slide>
          <img src={m7} alt="" />
        </Slide>
        <Slide>
          <img src={m8} alt="" />
        </Slide>
        <Slide>
          <img src={m9} alt="" />
        </Slide>
      </Slider>
    </div>
  )
}
