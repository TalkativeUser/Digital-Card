
import styled from "styled-components"
import SwiperSliderCreators from "../SwiberSlideCreators/SwiperSliderCreators";
import styles from '../SwiberSlideCreators/SwiperSliderCreators.module.css'


const TitleCreators=styled.h3`

text-align: center;
background: linear-gradient(to right, aqua 12%, #74e274);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text; /* For non-webkit browsers */
color: transparent;
font-size:50px;



`

export default function AllCreators() {
  return (
    <>  <div className="flex justify-center items-center flex-col container pt-0" >

    <TitleCreators className={`text-center ${styles.titleCreators} `} >Loved by 500,000+ <br /> creators</TitleCreators>
    <SwiperSliderCreators />

  
</div>
 </>
  
  )
}
