// import React, { useContext, useEffect } from 'react'
// import SettingsBarMoreTop from '../../components/SettingsBar/SettingsBar'
// import DashNavbar from '../../components/DashNavbar/DashNavbar'
// import { Outlet, useNavigate } from 'react-router-dom'
// import styles from './Dash.module.css'
// import MobileCard from './MobileCard'
// import { useMediaQuery } from 'react-responsive'
// import { cartContext } from '../../context/ForProvided'
// import axios from 'axios'
// import SwiperCards from '../../components/SwiperCards/SwiperCards'



// export default function Dashboard() {


//   const context=useContext(cartContext)

//   // تحديد عرض الشاشة أقل من 300 بكسل
//   const isSmallScreen = useMediaQuery({ maxWidth: 299 });
//   // تحديد القيم بناءً على عرض الشاشة
//   const width = isSmallScreen ? 210 : 250;
//   const height = isSmallScreen ? 430 : 480;

//   const getAllCards = async (f_L_token:string) => {
//     try {
//       const response = await axios.get('https://card.lixir-interiors.com/api/my-cards', {
//         headers: {
//           'Authorization': `Bearer ${f_L_token}`
//      } })
//       console.log('All cards are =>', response.data);
//       console.log('user data => ',response.data.name,response.data.email,response.data.domin_name)
//       context?.setArrayOfCards(response.data.cards)

//       const { domin_name, name, email, cards } = response.data;
//       context?.setUserData({
//         domin_name,
//         user_name: name,
//         email,
//         numOfCards: cards.length
//       });
  

//     } catch (error) {
//       if (axios.isAxiosError(error) && error.response) {
//         // setApiError(error.response.data.message);
//        console.log('error ==>>',error.response.data.message);
       

//       } else {
//         // setApiError('An unexpected error occurred. Please try again.');
//         console.error('Error>>>>>>>>>>:', error);
//       }
     
//     }
//   };
  
//   useEffect(() => {



//     const fetchCards = async () => {
//       if (context?.f_L_token) {
//         await getAllCards(context.f_L_token);
//         console.log('user Data =>',context?.userData);
//         console.log(' all cards => ',context?.arrayOfCards);
//       }

//       else {

//         console.log('getAllCards is not work');
        
//       }

//     }

  
  
//     fetchCards();
// }, []); // [] تعني أن هذا useEffect سيعمل مرة واحدة عند تحميل المكون
  

//   return (
 
//     <> 
//     <SettingsBarMoreTop ></SettingsBarMoreTop>
  

//     <div className="grid grid-cols-12  mt-36 ">
         
//            {/* <div className={`col-span-12 md:col-span-5  p-4 m-auto my-4  `} >
                 
//                   <div style={{backgroundColor:'white'}} className={`w-[250px] h-[480px] rounded-3xl border-[8px] border-black overflow-y-auto flex flex-col gap-0 relative  ${styles.mobileStyles}`}  >
//                   <i className="fa-solid fa-arrow-up-from-bracket absolute text-xl top-[13px] left-[13px] "></i>
//                           <img className='h-60 w-[100%]' src="https://www.shutterstock.com/image-photo/young-confident-handsome-man-full-260nw-1416442523.jpg" alt="" />                      
                        
//                          <svg className=' absolute top-[190px] z-10  ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill='white' fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,133.3C672,160,768,160,864,186.7C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                        
//                          <svg className=' absolute top-[160px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={backgroundMobile} fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,133.3C672,160,768,160,864,186.7C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

//                           <svg className='absolute top-[200px] ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={backgroundMobile} fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,42.7C384,53,480,107,576,133.3C672,160,768,160,864,186.7C960,213,1056,267,1152,256C1248,245,1344,171,1392,133.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
                              
                                
//                             <ul className='px-3 relative mt-2 ' > 
//                                   <li className='flex items-center mb-3 ' >

//                                       <div style={{backgroundColor:backgroundMobile}} className="cyrcleIcon w-9 h-9  rounded-full flex justify-center items-center "><i  style={{color:inpColorInnerIcon}} className='fa-brands fa-facebook text-xl  ' ></i></div>
//                                         <p style={{color:titleIcon}}  className='ms-2 mb-0' >Facebook Profile</p>
//                                   </li>
//                                   <li className='flex items-center mb-3 ' >

//                                       <div style={{backgroundColor:backgroundMobile}} className="cyrcleIcon w-9 h-9  rounded-full flex justify-center items-center "><i  style={{color:inpColorInnerIcon}} className='fa-brands fa-youtube text-xl  ' ></i></div>
//                                         <p style={{color:titleIcon}}  className='ms-2 mb-0' >You Tube chanal</p>
//                                   </li>
//                                   <li className='flex items-center mb-3 ' >

//                                       <div style={{backgroundColor:backgroundMobile}} className="cyrcleIcon w-9 h-9  rounded-full flex justify-center items-center "><i  style={{color:inpColorInnerIcon}} className='fa-brands fa-twitter text-xl  ' ></i></div>
//                                         <p style={{color:titleIcon}}  className='ms-2 mb-0' >You Tube chanal</p>
//                                   </li>
                                
//                               </ul>


//                     </div>
                

//           </div> */}

// <div className={`${styles.mobileParent}  col-span-12 md:col-span-5  m-auto my-4  `} >

              
//                <MobileCard width={width} height={height} caseProp={'dashboard'}  />
//                {/* <SwiperCards /> */}

//          </div>


//           <div className={`${styles.outLetClass} col-span-12 md:col-span-7 bg-gray-100  pt-5 pb-16 rounded-xl`}>
//                 <div className="">

//                   <DashNavbar></DashNavbar>
//                   <div className='container' > <Outlet/></div>
//                   </div>
//           </div>
         

//     </div>
    
//     </>
//   )
// }
import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import { cartContext } from '../../context/ForProvided'
import SettingsBarMoreTop from '../../components/SettingsBar/SettingsBar'
import DashNavbar from '../../components/DashNavbar/DashNavbar'
import { Outlet } from 'react-router-dom'
import styles from './Dash.module.css'
import MobileCard from './MobileCard'
import { useMediaQuery } from 'react-responsive'

export default function Dashboard() {
  const context = useContext(cartContext)

  // تحديد عرض الشاشة أقل من 300 بكسل
  const isSmallScreen = useMediaQuery({ maxWidth: 299 });
  // تحديد القيم بناءً على عرض الشاشة
  const width = isSmallScreen ? 210 : 250;
  const height = isSmallScreen ? 430 : 480;


  useEffect(() => {
    console.log('user Data =>', context?.userData);
    console.log('all cards =>', context?.arrayOfCards);
  }, [context?.userData, context?.arrayOfCards]);


  useEffect(() => {
    const fetchCards = async () => {
      if (context?.getAllCards) {
        await context.getAllCards();
      }
    };
    fetchCards();
  },[]);


  return (
    <>
      <SettingsBarMoreTop />
      <div className="grid grid-cols-12 mt-36">
        <div className={`${styles.mobileParent} col-span-12 md:col-span-5 mx-auto w-[100%] h-[450px] `}>
          <div className='flex justify-center ' >
          {/* <SwiperCards /> */}

          <MobileCard width={width} height={height} caseProp={'dashboard'} />

          </div>
        </div>

{/* 

mt-44 sm:mt-34 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0    
الكلام ده معناه ان كل الشاشات هتاخد 44 من فوق لكن انا هنا بعمل اوفر ريد على الشاشه اللى انا عاوزها 
فى التيلويند ال break point  دى بتارجت الشاشا فما فوق يعنى مثلا الشاشه ال sm:mt-44  فى الحاله دى هيكون فى مارجين من فوق فى الشاشه الصغيره دى فما فوق 
طب لما كل الشاشات بتارجت نفسها فما فوق طب الشاشه الصغيره هنتارجت اللى اصغر منها ازاى بكل بساطه بنعمل نفس اللى عملناه  فى الكود اللى تحت ده وهو ان ادى mt-44  يعنى 
كده كل الشاشات واخده المارجين ده سواء بقا اللى اكبر من ال sm  او اللى اصغر منها وبكده انا قدرت اتارجت الشاشه اللى تحت ال sm  الباقى بقا مقدور عليها وابتدى 
احدد كل الشاشات على مزاجى 

*/}

        <div className={`${styles.outLetClass} col-span-12 md:col-span-7 bg-gray-100 pt-5 pb-16 rounded-xl  mt-44 sm:mt-34 md:mt-0 lg:mt-0 xl:mt-0 2xl:mt-0   `}>
          <div className="">
            <DashNavbar />
            <div className='container'><Outlet /></div>
          </div>
        </div>
      </div>
    </>
  )
}
