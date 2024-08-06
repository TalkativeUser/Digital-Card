
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function SwiperSlideer(props:any) {

const modifier=props.modifier
const rotate=props.rotate

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate,
          stretch: 0,
          depth: 100,
          modifier,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}

        loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper flex items-center mt-14 "
      >
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className={`w-[100%]  rounded-xl  `}  src="./images/features/featuresCurosal/featuresCurosal1.png" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src="./images/features/featuresCurosal/featuresCurosal2.png" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src="./images/features/featuresCurosal/featuresCurosal3.png" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src="./images/features/featuresCurosal/featuresCurosal4.png" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src="./images/features/featuresCurosal/featuresCurosal5.png" />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src="./images/features/featuresCurosal/featuresCurosal6.png" />
        </SwiperSlide>
       
     
      </Swiper>
    </>
  );
}
