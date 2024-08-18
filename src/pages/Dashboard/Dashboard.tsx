
import { useContext, useEffect } from 'react'
import { cartContext } from '../../context/ForProvided'
import SettingsBarMoreTop from '../../components/SettingsBar/SettingsBar'
import DashNavbar from '../../components/DashNavbar/DashNavbar'
import { Outlet } from 'react-router-dom'
import styles from './Dash.module.css'
import MobileCard from './MobileCard'
import { useMediaQuery } from 'react-responsive'
import { Helmet } from 'react-helmet'

export default function Dashboard() {
  const context = useContext(cartContext)

  // تحديد عرض الشاشة أقل من 300 بكسل
  const isSmallScreen = useMediaQuery({ maxWidth: 299 });
  // تحديد القيم بناءً على عرض الشاشة
  const width = isSmallScreen ? 210 : 250;
  const height = isSmallScreen ? 430 : 480;


  // useEffect(() => {
  //   console.log('user Data =>', context?.userData);
  //   console.log('all cards =>', context?.arrayOfCards);
  // }, [context?.userData, context?.arrayOfCards]);


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
    <Helmet>

    <meta charSet="utf-8" />
        <title>User Dashboard - Manage Your Profile</title>

        {/* وصف الصفحة */}
        <meta name="description" content="Access your personal dashboard to manage your profile data, update your profile picture, customize your digital card design, delete your account, and easily share it with friends." />
        
        {/* كلمات مفتاحية */}
        <meta name="keywords" content="user dashboard, profile management, digital card, edit profile, delete account, share with friends" />
        
        {/* معلومات إضافية للسيو */}
        <meta name="author" content=" jecard , digital card " />
        <meta name="contact" content="Jihadae54@gmail.com" />
        
    </Helmet>
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
