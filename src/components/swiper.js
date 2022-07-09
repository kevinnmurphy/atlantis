import React from 'react'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper } from 'swiper/react'

// Styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const Carousel = ({ children }, ...rest) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={5}
      slidesPerView={3}
      navigation
      freemode="true"
      pagination={{ clickable: true }}
      loop={true}
      // centeredSlides={true}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
      {...rest}
    >
      {children}
    </Swiper>
  )
}

export default Carousel
