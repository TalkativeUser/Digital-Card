import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import MobileCard from '../../pages/Dashboard/MobileCard';
import { useMediaQuery } from 'react-responsive';

export default function SwiperSlideer(props:any) {

  const isSmallScreen = useMediaQuery({ maxWidth: 299 });
  // تحديد القيم بناءً على عرض الشاشة
  const width = isSmallScreen ? 210 : 250;
  const height = isSmallScreen ? 430 : 480;

  const modifier = props.modifier

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1} // عرض شريحة واحدة في كل مرة
        slidesPerGroup={1} // التنقل بشريحة واحدة في كل مرة
        coverflowEffect={{
          rotate:40,
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
        className="mySwiper flex items-center bg-yellow-400 p-0 "
      >
        <SwiperSlide className='flex justify-center rounded-xl  w-full bg-red-300  h-[570px] items-center   '>
          <MobileCard width={width} height={height} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  w-full bg-red-300  h-[570px] items-center   '>
          <MobileCard width={width} height={height} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  w-full bg-red-300  h-[570px] items-center   '>
          <MobileCard width={width} height={height} />
        </SwiperSlide>
        <SwiperSlide className='flex justify-center rounded-xl  w-full bg-red-300  h-[570px] items-center   '>
          <MobileCard width={width} height={height} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
