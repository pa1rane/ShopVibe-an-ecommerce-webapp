import React from 'react';
import data from "../../testimonials data";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const renderStarRating = (rating) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const starArray = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      starArray.push(<FaStar key={i} className="text-yellow-400" />);
    } else if (i === Math.ceil(roundedRating) && roundedRating % 1 !== 0) {
      starArray.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
    } else {
      starArray.push(<FaStar key={i} className="text-gray-300" />);
    }
  }
  return starArray;
};

const Testimonial = () => {
  const testimonials = [...data.testimonials];

  return (
    <div className="bg-[#9466c6] py-20">
      <div className="max-w-4xl md:mx-auto mx-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
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
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white px-12 py-4 md:h-[270px] max:h[90vh] text-center rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto md:h-14 md:w-14 h-10 w-10 rounded-full mb-4"
                />
                <p className="text-gray-700 md:mb-4 mb-2 text-xs md:text-sm">{testimonial.review}</p>
                <div className="flex md:flex-col-reverse items-center justify-center mb-2">
                  <p className="text-gray-600 font-bold">{testimonial.name}</p>
                  <p className="text-yellow-400 flex md:text-xl text:sm mr-2">{renderStarRating(testimonial.rating)}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;