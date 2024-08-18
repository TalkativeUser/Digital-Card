
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import them_1 from '../../../images/features/featuresCurosal/featuresCurosal1.png'
import them_2 from '../../../images/features/featuresCurosal/featuresCurosal2.png'
import them_3 from '../../../images/features/featuresCurosal/featuresCurosal3.png'
import them_4 from '../../../images/features/featuresCurosal/featuresCurosal4.png'
import them_5 from '../../../images/features/featuresCurosal/featuresCurosal5.png'
import them_6 from '../../../images/features/featuresCurosal/featuresCurosal6.png'


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
          <img className={`w-[100%]  rounded-xl  `}  src={them_1} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src={them_2}/>
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src={them_3} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src={them_4} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src={them_5} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  overflow-hidden w-[50%] h-64 ' >
          <img className='w-[100%]  rounded-xl ' src={them_6}/>
        </SwiperSlide>
       
     
      </Swiper>
    </>
  );
}
