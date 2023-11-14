import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css';

import slider1 from "../../../../assets/home/slide1.jpg"
import slider2 from "../../../../assets/home/slide2.jpg"
import slider3 from "../../../../assets/home/slide3.jpg"
import slider4 from "../../../../assets/home/slide4.jpg"
import slider5 from "../../../../assets/home/slide5.jpg"
import SectionTitle from '../../../../Componets/SectionTitle';

const Category = () => {
    return (
       <>
        <SectionTitle subHeading={"From 11:00am to 10:00pm"}heading={"ORDER ONLINE"} >
           
        
        </SectionTitle>
         <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide className='py-10'>
            <img src={slider1} alt="" />
            <p className='text-3xl uppercase -mt-32 text-center text-white'>Salad</p>
        </SwiperSlide>
        <SwiperSlide className='py-10'>
            <img src={slider2} alt="" />
            <p className='text-3xl uppercase -mt-32 text-center text-white'>pizza</p>
        </SwiperSlide>
        <SwiperSlide className='py-10'>
            <img src={slider3} alt="" />
            <p className='text-3xl uppercase -mt-32 text-center text-white'>soup</p>
        </SwiperSlide>
        <SwiperSlide className='py-10'>
            <img src={slider4} alt="" />
            <p className='text-3xl uppercase -mt-32 text-center text-white'>desserts</p>
        </SwiperSlide>
        <SwiperSlide className='py-10'>
            <img src={slider5} alt="" />
            <p className='text-3xl uppercase -mt-32 text-center text-white'>salad</p>
        </SwiperSlide>
        
      </Swiper>
       </>
    );
};

export default Category;