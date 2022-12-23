import { ReactNode } from 'react'
import { Swiper, SwiperProps } from 'swiper/react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import './SliderModal2.css'

interface SliderModal2Props {
  settings: SwiperProps
  children: ReactNode
}

export default function SliderModal2({
  settings,
  children
}: SliderModal2Props) {
  return (
    <Swiper modules={[Navigation, Pagination, Autoplay, A11y]} {...settings}>
      {children}
    </Swiper>
  )
}
