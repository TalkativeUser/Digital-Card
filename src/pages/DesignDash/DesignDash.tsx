import { useContext, useEffect, useRef, useState } from 'react';
import styles from './DesignDash.module.css';
import { cartContext } from '../../context/ForProvided';
import axios from 'axios';
import { Bars } from 'react-loader-spinner';

export default function DesignDash() {

  const context = useContext(cartContext);

  // استخدام useRef لإنشاء مراجع لكل حقل
  const backgroundColorRef = useRef<HTMLInputElement> (null);
  const iconColorRef = useRef<HTMLInputElement>(null);
  const titleColorRef = useRef<HTMLInputElement>(null);
  const shareColorRef = useRef<HTMLInputElement>(null);
  const [loaderDesign,setLoaderDesign]=useState(false)

  async function updateDesigns() {
    setLoaderDesign(true)
    try {

     
      const backgroundColor = backgroundColorRef.current?.value==context?.arrayOfCards[0].background_color ?context?.arrayOfCards[0].background_color :backgroundColorRef.current?.value ;
      const titleColor = titleColorRef.current?.value==context?.arrayOfCards[0].title_color?context?.arrayOfCards[0].title_color:titleColorRef.current?.value
      const iconColor = iconColorRef.current?.value==context?.arrayOfCards[0].icon_color?context?.arrayOfCards[0].icon_color:iconColorRef.current?.value
      const shareColor = shareColorRef.current?.value==context?.arrayOfCards[0].share_color?context?.arrayOfCards[0].share_color:shareColorRef.current?.value

      // بناء كائن JSON
      const designData = {
        background_color: backgroundColor,
        icon_color: iconColor,
        share_color: shareColor,
        title_color: titleColor,
      };


      // إرسال الطلب إلى الخادم باستخدام axios
      const response = await axios.post(
        `https://card.lixir-interiors.com/api/cards/${context?.arrayOfCards[0].id}`,
        designData,
        {
          headers: {
            'Authorization': `Bearer ${context?.f_L_token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log('Success:', response.data);
      context?.getAllCards()
      setLoaderDesign(false)

      // يمكنك هنا معالجة البيانات المستلمة من الخادم بعد التحديث
    } catch (error) {
      console.error('Error:', error);
      setLoaderDesign(false)
      // معالجة أي أخطاء تحدث أثناء الإرسال
    }
  }


  function handleInputsColor() {
//  لازم نهندل الحته دى عشان هنلعب على حتة ال  id

    if (backgroundColorRef.current) {
      console.log('background_color from backEnd',context?.arrayOfCards&&context?.arrayOfCards[0].background_color);
      backgroundColorRef.current.value = context?.arrayOfCards&&context?.arrayOfCards[0].background_color;
      console.log('background_color when reRender component',backgroundColorRef.current.value);
      
    }



    if (iconColorRef.current) {
      console.log('icon_color from backEnd',context?.arrayOfCards&&context?.arrayOfCards[0].icon_color);
      iconColorRef.current.value = context?.arrayOfCards&&context?.arrayOfCards[0].icon_color;
      console.log('icon_color when reRender component',iconColorRef.current.value);
    }


    if (titleColorRef.current) {
      console.log('title_color from backEnd',context?.arrayOfCards&&context?.arrayOfCards[0].title_color);
      titleColorRef.current.value = context?.arrayOfCards&&context?.arrayOfCards[0].title_color;
      console.log('title_color when reRender component',titleColorRef.current.value);
    }

    if (shareColorRef.current) {
      console.log('share_color from backEnd',context?.arrayOfCards&&context?.arrayOfCards[0].share_color);
      shareColorRef.current.value = context?.arrayOfCards&&context?.arrayOfCards[0].share_color;
      console.log('Share_color when reRender component',shareColorRef.current.value);
    }

  }

  useEffect(()=>{


    handleInputsColor()

  },[context?.arrayOfCards])

  return (
    <div>
      <div className=''>

        <h1 className={`text-center mt-16 ${styles.titleDesignDash}`}>Design Dashboard</h1>

        <div className="flex justify-between px-5 mt-12">
          <h5 className={styles.designDash_h5} >Change background icons</h5>
          <input
            type="color"
            ref={backgroundColorRef} 
            className={`${styles.colorPicker}`}
          
          />
        </div>

    

        <div className="flex justify-between px-5 mt-12">
          <h5 className={styles.designDash_h5}>Change title icons</h5>
          <input
            type="color"
            ref={titleColorRef}
            className={styles.colorPicker}
            
          />
        </div>

        <div className="flex justify-between px-5 mt-12">
          <h5 className={styles.designDash_h5}>Change color icons </h5>
          <input
            type="color"
            ref={iconColorRef} 
            className={styles.colorPicker}
         
          />
        </div>

        <div className="flex justify-between px-5 mt-12">
          <h5 className={styles.designDash_h5}>Change share color</h5>
          <input
            type="color"
            ref={shareColorRef} 
            className={styles.colorPicker}

          />
        </div>

      </div>

      <button
        onClick={updateDesigns}
        className='px-4 py-3 w-[80%] rounded-lg text-white m-auto mt-5 flex justify-center items-center '
        style={{ background: "linear-gradient(to right, rgb(0, 211, 211) 12%, rgba(50, 184, 50, 0.72))" }}
      >
        {
            loaderDesign?<Bars
            height="27"
            width="130"
            color="white"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />:"save design"



        }
      </button>
    </div>
  );
}
