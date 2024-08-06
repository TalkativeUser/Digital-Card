import  { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './SettingsBar.module.css';
import { cartContext } from '../../context/ForProvided';
import QRCodeComponent from '../MyQRCode/MyQRCode';
import useClipboard from 'react-use-clipboard';


const linkStyle = {
  background: 'linear-gradient(to right, #319898 12%, rgb(50 184 50))',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text'
};

const navStyles = {
  background: "#d6d6d696",
};

export default function SettingsBarMoreTop() {
  const ulRef = useRef<HTMLUListElement>(null);
  const context =useContext(cartContext)

  // انشاء الله بعد ما ارفع على الجيت والسيرفر الحقيقى لازم هعدل النقطه دى عشان الدومين بتاع المستخدم يظهر مع الدومين بتاعنا صح 
  const [isCopied, setCopied] = useClipboard( `http://${window.location.host}/${localStorage.getItem('yourDomain') as string }`, {
    successDuration: 2000, // إعادة تعيين حالة isCopied بعد 1000 ملي ثانية (1 ثانية)
  });





  function displayOrHiddenMobileMode() {
    console.log('hello from toggle icon ');
    context?.setQRcodeSmallScreen(false)

    if (ulRef.current) {
      if (ulRef.current.style.height === '0px' || ulRef.current.style.height === '') {
        ulRef.current.style.height = `${ulRef.current.scrollHeight}px`;
        ulRef.current.style.overflow = 'auto';
      } else {
        ulRef.current.style.height = '0';
        ulRef.current.style.overflow = 'hidden';
      }
    }
  }




  return (
    <>
      <div className= {`w-[100%] backdrop-blur-sm bg-gray-300 fixed-top ${styles.settingBar} `} style={navStyles}>
        {/* وضع الديسكتوب ، حجم الشاشة الكبير */}
        <div className={`flex justify-between items-center container ${styles.descTopMode}`}>
          <div>
            <Link to={'/home'} className='no-underline text-black'>
              <i className="fa-solid fa-arrow-left mx-1"></i>Back to Home
            </Link>
          </div>
          <div>
            <div className='flex gap-[20px]'>

              {  context?.userData?.domin_name ?   
              
              <Link to={`/jecard/${context?.userData?.domin_name}`}  target='_blank' className='text-blue-400 text-lg text-nowrap' style={linkStyle}>
              { ` jecard/${context?.userData?.domin_name }`  }
              </Link> : <p className='m-0 text-nowrap ' style={linkStyle}> please login for security </p> 
            
            
            }



              

              <div className="relative flex flex-col justify-center  ">

{/*this button opens QR Code menu  */}
                    <button onClick={()=>{ context?.setQRcodeBigScreen(true) }}  className='rounded-md border-1  border-black hover:bg-black hover:text-white py-1 px-3'>
                      share
                    </button>

                    {context?.QRcodeBigScreen ? <div className={styles.QRCodeOverLay} >
                      <div className="QRCodeOverLay w-[150px] bg-gray-200   py-3 px-6 rounded-lg relative ">

                      <i onClick={()=>{ context?.setQRcodeBigScreen(false) }} className="fa-solid fa-xmark text-red-600 rounded-md  px-2 py-1 cursor-pointer absolute  top-0 right-0 "></i>

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

              </div>
           

        
            </div>
          </div>
        </div>

        {/* وضع الهاتف المحمول ، حجم الشاشة الصغير */}
        <div className={`mt-3 px-3 ${styles.mobileMode}`}>
          <label className='ms-14'>
            <input className={styles.checkBooks} type="checkbox" name="" />
            <div className={`${styles.bar}`}>
              <span onClick={displayOrHiddenMobileMode} className={styles.top}></span>
              <span onClick={displayOrHiddenMobileMode} className={styles.middle}></span>
              <span onClick={displayOrHiddenMobileMode} className={styles.bottom}></span>
            </div>
          </label>

          <ul ref={ulRef} className='mt-10 h-0 overflow-hidden' style={{transition: "height 0.4s ease-in-out"}}>
            <li className='mb-3 flex justify-center'>
              <img
                className='w-[40px] h-[40px] rounded-full cursor-pointer hover:border-2 border-indigo-600'
                src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                alt=""
              />
            </li>
            <li className='mb-3  relative flex flex-col justify-center'>
              <button onClick={()=>{ context?.setQRcodeSmallScreen(true) }} className='rounded-md border-1 border-black hover:bg-black hover:text-white p-2 relative '>
               share
              </button>
              {context?.QRcodeSmallScreen? <div className={` fixed left-[50%] translate-x-[-50%] top-[63%] mt-1 p-[2px] rounded-lg `} style={{  background: 'linear-gradient(to right, rgb(0 211 211) 12%, rgb(50 184 50 / 72%))'}} >
                      <div className=" w-[150px] bg-gray-200   py-3 px-6 rounded-lg relative ">

                      <i onClick={()=>{ context?.setQRcodeSmallScreen(false) }} className="fa-solid fa-xmark text-red-600 rounded-md  px-2 py-1 cursor-pointer absolute  top-0 right-0 "></i>

                      <p onClick={setCopied} className='hover:text-green-600 cursor-pointer flex items-center mt-3'>
                            {isCopied ? "copied! ✅" : (
                              <>
                                Copy Link! <i className="fa-regular fa-copy ml-2 mt-1"></i>
                              </>
                            )}
                          </p>                             <QRCodeComponent />

                          </div>
                      </div>:""}
              
            </li>
            <li className='mb-3'>
              <Link to={`/${localStorage.getItem('yourDomain') as string}`} target='_blank' className='text-blue-400 text-lg mt-2' style={linkStyle}>
              {context?.userData?.domin_name ? ` jecard/${context?.userData?.domin_name }` : "dont have account"}              </Link>
            </li>
            <li>
              <Link to={'/home'} className='no-underline text-black'>
                <i className="fa-solid fa-arrow-left mx-1"></i>Back to Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
