import { ReactNode } from 'react'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper'

import 'swiper/css'

import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './Slider.css'

interface SliderProps {
  settings: SwiperProps
  children: ReactNode
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      autoplay={true}
      {...settings}
    >
      {children}
    </Swiper>
  )
}
