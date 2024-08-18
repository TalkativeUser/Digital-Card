import  { useContext, useEffect, useRef } from 'react';
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
  background: "#e7e7e7",
};

export default function SettingsBarMoreTop() {
  const ulRef = useRef<HTMLUListElement>(null);
  const context =useContext(cartContext)

  const [isCopied, setCopied] = useClipboard( `http://${window.location.host}/Digital-Card/#/digitalCard/${context?.userData&& context?.userData.id? context?.userData.id:""}`, {
    successDuration: 2000, 
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

  useEffect (()=>{

    
    if(context&& context.userData) {

      console.log('context.userData.id => ', context?.userData);

    } else {

      console.log( 'there is not context.userData.id');
      
    }


  },[context?.userData])




  return (
    <>
      <div className= {`w-[100%]  fixed-top ${styles.settingBar} `} style={navStyles}>
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
              
              <Link to={`/digitalCard/${context?.userData?.id}`} target='_blank' className='text-blue-400 text-lg text-nowrap' style={linkStyle}>
              { ` jecard/${context?.userData?.domin_name }`  }
              </Link> : <p className='m-0 text-nowrap text-red-500' > you are not user </p> 
            
            
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
        <div className={` px-3 items-center ${styles.mobileMode}`}>
          <label className='mt-[27px]' style={{alignSelf:"self-start"}} >
            <input className={styles.checkBooks} type="checkbox" name="" />
            <div className={`${styles.bar}`}>
              <span onClick={displayOrHiddenMobileMode} className={styles.top}></span>
              <span onClick={displayOrHiddenMobileMode} className={styles.middle}></span>
              <span onClick={displayOrHiddenMobileMode} className={styles.bottom}></span>
            </div>
          </label>

          <ul ref={ulRef} className='mt-10 h-0 overflow-hidden ' style={{transition: "height 0.4s ease-in-out"}}>
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
              {context?.QRcodeSmallScreen? <div className={` fixed top-[20%] left-[55%] translate-x-[-50%]  mt-1 p-[2px] rounded-lg `} style={{  background: 'linear-gradient(to right, rgb(0 211 211) 12%, rgb(50 184 50 / 72%))'}} >
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
              <Link to={`/digitalCard/${context?.userData?.id}`}  target='_blank' className='text-blue-400 text-lg mt-2' style={linkStyle}>
              {context?.userData?.domin_name ? ` jecard/${context?.userData?.domin_name }` : <p className='m-0 text-nowrap text-red-500' > you are not user </p> }              </Link>
            </li>
            <li>
              <Link to={'/home'} className='no-underline text-black  '>
                <i className="fa-solid fa-arrow-left mx-1"></i>Back to Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
