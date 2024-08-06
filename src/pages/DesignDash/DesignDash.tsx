import { useContext } from 'react';
import styles from './DesignDash.module.css';
import { cartContext } from '../../context/ForProvided';

export default function DesignDash() {


const context=useContext(cartContext);
// const setInpColorIcon=context?.setInpColorIcon
// const setInpColorInnerIcon=context?.setInpColorInnerIcon
// const setTitleIcon=context?.setTitleIcon
// const setBackgroundMobile=context?.setBackgroundMobile


  const handleInpColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
  
context?.setInpColorIcon(newColor)
localStorage.setItem('inpBackgroundIcons',newColor)


  };
  const handleInpInnerColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    context?.setInpColorInnerIcon(newColor)
    localStorage.setItem('inpIcons',newColor)
  };
  const handleTitleIconColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    context?.setTitleIcon(newColor);
    localStorage.setItem('inpTitleIcons',newColor)

  };
  const handleBackgroundColorMobile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
   context?.setBackgroundMobile(newColor);
   localStorage.setItem('inpBackgroundMobile',newColor)

  };




  return (
    <div className='' >

      <h1 className={`text-center mt-16 ${styles.titleDesignDash} `}>Design Dashboard</h1>
      <div className="flex justify-between px-5 mt-12">
           <h5  >   Do you want to change background color icons</h5>
   
          <input
                type="color"
                className={`${styles.colorPicker}  `  }
                value={context?.inpColorIcon}
                onChange={handleInpColor}
              />

      </div>
      <div className="flex justify-between  px-5 mt-12">
        <h5 className={styles.designDash_h5}  >Do you want to change color icons </h5>
        <input
          type="color"
          className={styles.colorPicker}
          value={context?.inpColorInnerIcon}
          onChange={handleInpInnerColor}
        />
      </div>
      <div className="flex justify-between  px-5 mt-12">
        <h5 className={styles.designDash_h5}>Do you want to change title icons</h5>
        <input
          type="color"
          className={styles.colorPicker}
          value={context?.titleIcon}
          onChange={handleTitleIconColor}
        />
      </div>
      <div className="flex justify-between  px-5 mt-12">
        <h5 className={styles.designDash_h5} >Do you want to change background card</h5>
        <input
          type="color"
          className={styles.colorPicker}
          value={context?.backgroundMobile}
          onChange={handleBackgroundColorMobile}
        />
      </div>


    </div>
  );
}
