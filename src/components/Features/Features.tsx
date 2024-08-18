import styled from "styled-components";
import SlickSlider from "../SwiperSlider/SwiperSlider";
import styles from '../../pages/Home/Home.module.css'
const GradientText = styled.h3`
text-align: center;
background: linear-gradient(to right, aqua 12%, #74e274);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text; /* For non-webkit browsers */
color: transparent;
font-size:36px;
`;

import them_1 from '../../../images/features/features_part3.png'
import them_2 from '../../../images/features/features_part1.png'
import them_3 from '../../../images/features/features_part2.png'
import them_4 from '../../../images/features/features_2.png'
import them_5 from '../../../images/features/features_3.png'




export default function Features() {



  return (
<>

<GradientText className={`mt-52 mb-6  px-2 ${styles.featuresTitle} `} >Unmatchable features. Free, forever.</GradientText>
<div className='container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-4 mb-52 ' >
      

      <div className="flex justify-center items-center my-5 " > 

              <img className='w-[70px]' src={them_1} alt="" />
              <img className='w-[50%]' src={them_2}  alt="" />
              <img className='w-[50px]' src={them_3} alt="" />

      </div>

      <div className="flex justify-center my-5" > <img className='w-[50%]' src={them_4}  alt="" /></div>
      <div className="flex justify-center  " > <img className='w-[60%]' src={them_5}  alt="" /></div>

      <SlickSlider modifier={1} rotate={70} ></SlickSlider>

  </div>

  




</>
  )
}
