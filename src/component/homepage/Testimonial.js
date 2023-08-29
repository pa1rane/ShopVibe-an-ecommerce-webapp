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
    <div className="bg-[#c49def] py-12">
      <div className="max-w-4xl mx-auto">
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
              <div className="bg-white px-12 py-4 h-[270px] text-center rounded-lg shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="mx-auto h-14 w-14 rounded-full mb-4"
                />
                <p className="text-gray-700 mb-4">{testimonial.review}</p>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-yellow-400 flex text-xl mr-2">{renderStarRating(testimonial.rating)}</p>
                  <p className="text-gray-600 font-bold">{testimonial.name}</p>
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