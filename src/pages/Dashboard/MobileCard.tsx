import React, { useContext } from 'react'
import { cartContext } from '../../context/ForProvided';
import styles from './Dash.module.css'
import styles2 from '../../components/SettingsBar/SettingsBar.module.css'
import { useMediaQuery } from 'react-responsive';
import { ColorRing } from 'react-loader-spinner';
import useClipboard from 'react-use-clipboard';
import QRCodeComponent from '../../components/MyQRCode/MyQRCode';
import { Link } from 'react-router-dom';
interface mobileCardIProps {

    width:number;
    height:number;
    caseProp?:string
  
  }

export default function MobileCard( {width,height,caseProp}:mobileCardIProps) {

   // انشاء الله بعد ما ارفع على الجيت والسيرفر الحقيقى لازم هعدل النقطه دى عشان الدومين بتاع المستخدم يظهر مع الدومين بتاعنا صح 
   const [isCopied, setCopied] = useClipboard( `http://${window.location.host}/${localStorage.getItem('yourDomain') as string }`, {
    successDuration: 2000, // إعادة تعيين حالة isCopied بعد 1000 ملي ثانية (1 ثانية)
  });


    const context=useContext(cartContext);
    const inpColorIcon=context?.inpColorIcon
    const inpColorInnerIcon=context?.inpColorInnerIcon
    const titleIcon=context?.titleIcon
    const backgroundMobile=context?.backgroundMobile

    const isSmallScreen = useMediaQuery({ maxWidth: 299 });
    const topPosition = isSmallScreen ? 195 : 190;
  

  return (
   
    <div  style={{backgroundColor: 'white', width: `${width}px`, height: `${height}px`
      }} className={` rounded-3xl  overflow-y-auto flex flex-col gap-0 relative bg-green-800 mt-5 ${styles.mobileStyles}`}  >
    

    <i className={`fa-solid fa-arrow-up-from-bracket absolute text-xl top-[13px] left-[13px] cursor-pointer`}  onClick={()=>{context?.setQRcodeMobileMode(true)} } style={{color:inpColorIcon}} ></i>

    {context?.QRcodeMobileMode ? <div className={` absolute z-10 top-8 left-8  `} >
                      <div className="QRCodeOverLay w-[150px] bg-gray-200   py-3 px-6 rounded-lg relative ">

                      <i onClick={()=>{ context?.setQRcodeMobileMode(false) }} className="fa-solid fa-xmark text-red-600 rounded-md  px-2 py-1 cursor-pointer absolute  top-0 right-0 "></i>

                      <p onClick={setCopied} className='hover:text-green-600 cursor-pointer flex items-center mt-3'>
                            {isCopied ? "copied! ✅" : (
                              <>
                                Copy Link! <i className="fa-regular fa-copy ml-2 mt-1"></i>
                              </>
                            )}
                          </p>                        
                          <QRCodeComponent />

                          </div>
                      </div>:""}


               {context?.LOADERforDetailsCard? <div style={{paddingBlock:"82px"}} className='flex justify-center items-center' >
                <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="color-ring-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="color-ring-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                    />
               </div> :  context?.profileImage ? (
                    <>
                    <div className='h-60 flex justify-center items-center ' > 

                      <img src={`https://card.lixir-interiors.com/public/storage/${context?.profileImage as string}`} alt="Uploaded" className="h-60 w-[100%]" />
                    </div>
                    </>
                  ) :     <img src="../../../images/add-profile-bigger.jpg" alt="" className={` w-[100%]`}  />
                }




                <div className={` w-[100%]`}  style={{transform:"rotateY(180deg)",position:"absolute",top:topPosition }} >  
  
                     <svg className=''   xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={backgroundMobile}fillOpacity="1" d="M0,0L80,26.7C160,53,320,107,480,154.7C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
                
                </div>
            
              <ul className='px-3 relative mt-4 '   > 


              {context?.arrayAllLinks && context?.arrayAllLinks.length > 0 ?<> 
                { 
              context.arrayAllLinks.map((item, index) => {
                const truncatedTitle = item.title.length > 20 ? item.title.slice(0, 20) + "...." : item.title;
                
    return (
      <li key={index} className='flex items-center mb-3'>
        <div style={{ backgroundColor: backgroundMobile }} className="cyrcleIcon w-9 h-9 rounded-full flex justify-center items-center">
          <i style={{ color: inpColorInnerIcon }} className={`${item.logo} text-xl`}></i>
        </div>

        {/^\d+$/.test(item.link)?     
           <p style={{ color: titleIcon }} className='ms-2 mb-0 no-underline '>{truncatedTitle}</p>
        :      <Link to={item.link} target='_blank' style={{ color: titleIcon }} className='ms-2 mb-0 no-underline '>{truncatedTitle}</Link>

      }
      </li>
    );
  })
}


</> : <><p className={`mt-5 ${styles.pleaseAddLink} `} >please go to Links to add link</p> 
              <p className={`mt-2 ${styles.pleaseAddLink} `} >and go to setting to add img</p>  </> }
                
            
           
                  
                </ul>


      </div>
  )
}
