import Creators from '../../components/Creators/Creators';
import Features from '../../components/Features/Features';
import styles from './Home.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AllCreators from '../../components/AllCreators/AllCreators';
import Footer from '../../components/Footer/Footer';

import { useEffect, useState } from 'react';
import styled from 'styled-components';


const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: unset;/
  z-index: 1000; /* للتأكد من أنه أمام كل العناصر */
  display:flex;
  justify-content:center;
  align-items:center;
 
`;

const OverLayText = styled.h3`
text-align: center;
background: linear-gradient(to right, #317575 12%, #74e274);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text; /* For non-webkit browsers */
color: transparent;
font-size:22px;

`;


const styles_2 = {
  customInputContainer: {
    display: "flex",
    width: "500px",
    flexDirection: "row" as const,
    border: "2px solid aqua",
    borderRadius: "5px",
    overflow: "hidden",
  },
  readonlyPart: {
    width: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    color: "#000",
    paddingBlock: "15px",
    paddingLeft: "12px",
    order: "1",
    backgroundColor: "white",
  },
  inputPart: {
    flex: "1",
    border: "none",
    padding: "0 3px",
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    boxSizing: "border-box" as const,
    order: '2',
    color: "#000", // تأكد من تعيين لون النص
  },
  submitPart: {
    width: "130px",
    background: "linear-gradient(to right, #468686 16%, #66b166 70%, #33d8d8 90%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "3 10px",
    fontFamily: "Arial, sans-serif",
    fontSize: "18px",
    color: "white",
    cursor: "pointer",
    order: '3',
  },
  inputPartFocus: {
    outline: "none"
  }
};

const validationSchema = Yup.object({
  domainName: Yup.string()
    .min(6, 'The name must be more than 6 letters')
    .max(30, 'The name must be less than 30 letters')
    .required('This field is required'),
});


import imgThem_1 from '../../../images/theme-1.png'
import imgThem_2 from '../../../images/theme-2.png'
import imgThem_3 from '../../../images/theme-3.png'
import imgThem_4 from '../../../images/theme-4.png'
import imgSocial_1 from "../../../images/theme-1-socials.png"
import imgSocial_2 from "../../../images/theme-2-socials.png"
import { Helmet } from 'react-helmet';



export default function Home() {


  const [showOverlay, setShowOverlay] = useState(false);
  const location = useLocation();



  let scrollTop = 0;

window.addEventListener('scroll', handleScroll);

function handleScroll () {
  const mainImg_1:HTMLElement | null = document.getElementById('mainImg_1');
  // const supImg_1:HTMLElement | null = document.getElementById('supImg_1');
  const mainImg_2:HTMLElement | null = document.getElementById('mainImg_2');
  // const supImg_2 :HTMLElement | null= document.getElementById('supImg_2');
  
 
    scrollTop = window.scrollY;
    // console.log('scroll top >=> : ',scrollTop);
    
    const rotateCard1 = document.getElementById('rotateCard_1');
    const rotateCard2 = document.getElementById('rotateCard_2');
   
    
    
    if (rotateCard1 && rotateCard2) {
      const rotateValue1 = scrollTop % 720; // حساب قيمة الدوران للعنصر 1
      rotateCard1.style.transform = `rotateY(${rotateValue1}deg) rotateX(20deg)`; // تحديث خاصية الدوران للعنصر 1
      
      const rotateValue2 = 360 - (scrollTop % 720); // حساب قيمة الدوران للعنصر 2 باتجاه معاكس
      rotateCard2.style.transform = `rotateY(${rotateValue2}deg) rotateX(20deg)`; // تحديث خاصية الدوران للعنصر 2 باتجاه معاكس
      




  if (scrollTop >= 298.3999938964844 ) { // تحقق إذا كانت قيمة التمرير أكبر من أو تساوي 500 بكسل
    rotateCard1.style.display = 'none'; // إخفاء العنصر 1
    rotateCard2.style.display = 'none'; // إخفاء العنصر 2
    }  else {
      
      rotateCard1.style.display = 'block'; // إخفاء العنصر 1
      rotateCard2.style.display = 'block'; // إخفاء العنصر 2
      
      }


      
      if (mainImg_1 !== null ) {
        if (scrollTop >= 120.800) {
          mainImg_1.setAttribute('src', imgThem_3);
          mainImg_1.style.transform="rotateY(180deg)"
          // supImg_1.style.transform="rotateY(180deg)"

        } else {

          mainImg_1.setAttribute('src', imgThem_1);
          mainImg_1.style.transform="rotateY(0deg)"
          // supImg_1.style.transform="rotateY(0deg)"


        }



        if  (scrollTop >= 298.2000) {
          mainImg_1.setAttribute('src', imgThem_1);
          mainImg_1.style.transform="rotateY(0deg)"
          // supImg_1.style.transform="rotateY(0deg)"

        }
       
      }
      if (mainImg_2 !== null) {

               

                      
                                if (scrollTop >= 120.800 ) {
                                  mainImg_2.setAttribute('src',imgThem_4 );
                                  mainImg_2.style.transform="rotateY(180deg)"
                                  // supImg_2.style.transform="rotateY(180deg)"

                                } else {

                                  mainImg_2.setAttribute('src',imgThem_2 );
                                  mainImg_2.style.transform="rotateY(0deg)"
                                  // supImg_2.style.transform="rotateY(0deg)"

                                }



                                if  (scrollTop >= 304.2000) {
                                  mainImg_2.setAttribute('src', imgThem_2);
                                  mainImg_2.style.transform="rotateY(0deg)"
                                  // supImg_2.style.transform="rotateY(0deg)"

                                }


                
                        
      }
  
      }

    
 
  
}

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      domainName: '',
    },
    validationSchema,
    onSubmit: values => {
      console.log('Form submitted with values:', values);

      const storedToken = localStorage.getItem('f_L_token');
      if (storedToken) {

        console.log('you are authenticated alredy ');
        setShowOverlay(true)

        
      }
  else {
    navigate('/signUp', { state: { domainName: values.domainName } });
  
  
  }

    },
  });


  useEffect(()=>{




    console.log(location.pathname); // لطباعة المسار بدون علامة #
    console.log(location.hash); // لطباعة الجزء المتعلق بالتوجيه القائم على التجزئة

  },[])

  return (
    <>

               <Helmet>
                  <meta charSet="utf-8" />
                  <title> Home </title>
                      
                  <meta name="description" content="Welcome to jecard. Explore our features, learn about our services, and stay updated with the latest bussins card. Join us today to enhance your experience with bussins card." />
                      
                      {/* إضافة كلمات مفتاحية */}
                      <meta name="keywords" content="home, application home, home profiles , jecard home" />
                      
                      {/* إضافة مؤلف الصفحة */}
                      <meta name="auther" content="Mohammed Morshidy , jecard " />
                      
                    
                      
                  
              </Helmet>



<div className='' >


{showOverlay?<Overlay  >

<div style={{background: "#d6d6d696"}} className= {`${styles.overLay} flex flex-col w-[30%] backdrop-blur-md  rounded-xl animate__animated animate__zoomInUp text-white `}>

<OverLayText className={styles.fontOverLay} > you have alredy <br className= {`${styles.br_overLay }  ${styles.fontOverLay}`} /> business card
  
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline  ms-2 " data-v-242b6699="">

<path fillRule="evenodd" clipRule="evenodd" d="M8 0L9.99182 1.3121L12.3696 1.29622L13.3431 3.48797L15.3519 4.77336L14.9979 7.14888L16 9.32743L14.431 11.1325L14.1082 13.5126L11.8223 14.1741L10.277 16L8 15.308L5.72296 16L4.17772 14.1741L1.89183 13.5126L1.569 11.1325L0 9.32743L1.00206 7.14888L0.648112 4.77336L2.65693 3.48797L3.6304 1.29622L6.00818 1.3121L8 0Z" fill="#0095F6" data-v-242b6699=""> </path>
<path fillRule="evenodd" clipRule="evenodd" d="M10.4036 5.20536L7.18853 8.61884L6.12875 7.49364C5.8814 7.23102 5.46798 7.21864 5.20536 7.466C4.94274 7.71335 4.93036 8.12677 5.17771 8.38939L6.71301 10.0195C6.9709 10.2933 7.40616 10.2933 7.66405 10.0195L11.3546 6.10111C11.6019 5.83848 11.5896 5.42507 11.3269 5.17771C11.0643 4.93036 10.6509 4.94274 10.4036 5.20536Z" fill="white" data-v-242b6699=""></path>
  
  </svg> <br />  




<span className={` mt-2 block  ${styles.fontOverLay}`} > Go to signUp to  <br /> create anOther one</span> </OverLayText>

<div className={`flex justify-evenly mt-3 ${styles.parentButtons} `} >
  
      <button onClick={()=>{ setShowOverlay(false) }} className={`w-[70%] py-2 bg-red-600 text-white rounded-lg ${styles.buttonOverLay} `} style={{background:"linear-gradient(to right, #afaea6 12%, #ff0000ab 75%)"}} > Close </button>
       
        {/* <button  onClick={(e)=>{
          
          setShowOverlay(false)
          setCreateAnOtherCard(true)
          e.preventDefault();
           formik.handleSubmit();


        }} className= {` w-[40%] py-2 bg-green-600 text-white rounded-lg ${styles.buttonOverLay} `}  style={{background:"linear-gradient(to right, #31cdcd 12%, #74e274 80% )"}}  > Yes create one </button> */}

</div>

</div>

</Overlay>:""}

      <div className='pt-10 mt-36 flex justify-content-center flex-column align-items-center text-center '>
        <p className='mb-0 mt-12'>Loved by 500,000+ creators</p>
        <h1 className={`mb-5 ${styles.mainTitle}`}>Launch Digital card <br /> in seconds </h1>
        <div className={` ${styles.customInputContainer}`} style={styles_2.customInputContainer}>
          <div className={` ${styles.readonlyPart}`} style={styles_2.readonlyPart}>JeCard <span className='text-xl'>/</span></div>
          <input
            name='domainName'
            type="text"
            className={`focus:outline-none ${styles.inputPart}`}
            placeholder="Enter your Domain name"
            style={styles_2.inputPart}
            value={formik.values.domainName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <div
            onClick={(e) => { e.preventDefault(); formik.handleSubmit(); }}
            className={`submit-part font-blod text-2xl ${styles.submitPart}`}
            style={styles_2.submitPart}
          >Send</div>
        </div>
        {formik.touched.domainName && formik.errors.domainName ? (
          <div className=' text-red-500 px-3 py-2 mt-3 rounded-xl  ' >{formik.errors.domainName}</div>
        ) : formik.touched.domainName? <div className=' text-green-500 py-2 mt-3 rounded-xl  ' >success domain name <i className="fa-solid fa-circle-check ms-2 "></i> </div> :'' }
        <div className={`flex justify-between p-24 fixed z-[-1] ${styles.rotateCardParent}`}>
          <div id='rotateCard_1' className={`${styles.rotateCard_1} relative`}>
            <img id='mainImg_1' src={imgThem_1}alt="" className={`w-[100%] ${styles.img_1_rotateCard_1}`} />
            <img id='socialImg_1' src={imgSocial_1} alt="" className={`w-[80%] h-12 rounded-xl absolute top-[17%] start-[-41%] ${styles.img_3_rotateCard_1}`} />
          </div>
          <div id='rotateCard_2' className={`${styles.rotateCard_2} relative`}>
            <img id='mainImg_2' src={imgThem_2} alt="" className={`w-[100%] ${styles.img_1_rotateCard_2}`} />
            <img id='socialImg_1' src={imgSocial_2} alt="" className={`w-[80%] h-12 rounded-xl absolute top-[17%] end-[-41%] ${styles.img_3_rotateCard_2}`} />
          </div>
        </div>
      </div>
      <Features />
      <Creators />
      {/* <AllCreators/> */}


<div className='flex justify-center mt-96 ' ><hr className='w-[80%]' /></div>
<div className='flex justify-center' >   <Footer /></div> 



</div>


    </>
  );
}

