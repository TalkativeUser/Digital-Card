

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import styles from './SwiperSliderCreators.module.css'
import { Link } from 'react-router-dom';

const slideStyles = () => {


  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '18px',
    fontSize: '22px',
    color: '#fff',
    backgroundColor: "white",
    border:"1px solid aqua"
  };
};

const containerStyles = {
  width: '340px',
};

export default function App() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className={`mySwiper my-16 ${styles.parentSlides} `}
        style={containerStyles}
      >
        {Array.from({ length: 9 }).map((_, index) => (
          <SwiperSlide className=' flex-col' key={index} style={slideStyles()}>
              <img src="https://pngimg.com/d/man_PNG6531.png" className={`w-64 h-64 rounded-full m-8 ${styles.userImage}`} alt=""   />  
              <h4 className={`text-center p-3 pb-0 text-black ${styles.userName}`} >Mo morshedy  

                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline  ms-2 " data-v-242b6699="">

                      <path fillRule="evenodd" clipRule="evenodd" d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z" fill="#0095F6" data-v-242b6699=""> </path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z" fill="white" data-v-242b6699=""></path>
                        
                        </svg>
                
                
                 </h4>    
              <Link to={''} className={`text-center p-3 pt-0 flex justify-center items-center mb-3 ${styles.domainLink} `} ><i className="fa-solid fa-earth-asia"></i> jecard/mohammedmorshedy</Link>
    </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}





      