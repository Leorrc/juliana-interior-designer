import { ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import './Slider.css'

interface SliderProps {
  settings: SwiperProps
  children: ReactNode
}

export default function Slider({ settings, children }: SliderProps) {
  return (
    <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
      {children}
    </Swiper>
  )
}
