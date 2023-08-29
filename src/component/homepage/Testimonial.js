import React from 'react';
import data from "../../testimonials data";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';


const Testimonial = () => {

  const testimonials = [...data.testimonials]
  return (
    <>
      <Swiper
      spaceBetween={30}
      slidesPerView={3}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='mySwiper w-full h-full'
      >
     
      {
        testimonials.map((testimonial) => (
          <SwiperSlide
          key={testimonial.id}
          >
            <div className='text-center'>
            <img src={testimonial.image} alt={testimonial.name} />
            <p>{testimonial.review}</p>
            <p>{testimonial.rating}</p>
            <p>{testimonial.name}</p>
            </div>
             </SwiperSlide>
        ))
      }    

      </Swiper>
    </>
  )
}

export default Testimonial;
