
// import { useContext } from 'react';
// import styles from './Links.module.css';
// import { cartContext } from '../../context/ForProvided';

// const iconClasses = [
//   "fab fa-facebook-f",
//   "fab fa-twitter",
//   "fab fa-instagram",
//   "fab fa-linkedin-in",
//   "fab fa-youtube",
//   "fab fa-pinterest-p",
//   "fab fa-snapchat-ghost",
//   "fab fa-tiktok",
//   "fab fa-reddit-alien",
//   "fab fa-whatsapp",
//   "fab fa-telegram-plane",
//   "fab fa-discord",
//   "fab fa-tumblr",
//   "fab fa-weixin",
//   "fab fa-line",
//   "fab fa-viber",
//   "fab fa-skype",
//   "fab fa-facebook-messenger",
//   "fab fa-signal",
//   "fab fa-vk",
//   "fa-solid fa-envelope-circle-check",
//   "fab fa-flickr",
//   "fab fa-medium-m",
//   "fab fa-dribbble",
//   "fab fa-behance",
//   "fab fa-github",
//   "fab fa-stack-overflow",
//   "fab fa-quora",
//   "fab fa-yelp",
//   "fab fa-periscope",
//   "fab fa-meetup",
//   "fab fa-twitch",
//   "fab fa-slack",
//   "fab fa-soundcloud",
//   "fab fa-spotify",
//   "fab fa-mixcloud",
//   "fab fa-bilibili",
//   "fab fa-mastodon",
//   "fab fa-deviantart",
//   "fab fa-xing",
//   "fab fa-rss",
//   "fab fa-researchgate",
//   "fab fa-apple",
//   "fab fa-google"
// ];




// interface OverLayIconsProps {
//     overLayiconsState?: boolean;
//     setoverLayiconsState: React.Dispatch<React.SetStateAction<boolean>>;
//   }


  

// export default function OverLayIcons({setoverLayiconsState}:OverLayIconsProps) {

//     const context=useContext(cartContext)
//     function handleChoiesIcon(iconClass:string) {
//         context?.setChoiesdIcon(iconClass)
        
//          }

//   return (
//     <div className={`${styles.overLayIcons} pt-4 `}>
//       <i onClick={()=>{setoverLayiconsState(false)}} className="fa-solid fa-xmark text-2xl text-white rounded-md bg-red-500 px-2 py-1 cursor-pointer absolute right-5 top-5"></i>
//       <p className='text-center text-white mt-5 text-2xl'>
//         Choose the best icons 
//         <i className="fa-solid fa-circle-check text-green-500 text-xl ms-3"></i>
//       </p>


//       <div className="socialIcons flex flex-wrap justify-evenly p-5">
//         {iconClasses.map((iconClass, index) => (
//           <div key={index} className={`border-2 rounded-full m-2 w-[60px] h-[60px] flex justify-center items-center  ${styles.parentIcon} `} >
//             <i onClick={()=>{handleChoiesIcon(iconClass) }}  className={`${iconClass} text-white text-3xl cursor-pointer `}></i>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import { useState, useContext } from 'react';
import styles from './Links.module.css';
import { cartContext } from '../../context/ForProvided';

const iconClasses = [
  "fab fa-facebook-f",
  "fab fa-twitter",
  "fab fa-instagram",
  "fab fa-linkedin-in",
  "fab fa-youtube",
  "fab fa-pinterest-p",
  "fab fa-snapchat-ghost",
  "fab fa-tiktok",
  "fab fa-reddit-alien",
  "fab fa-whatsapp",
  "fab fa-telegram-plane",
  "fab fa-discord",
  "fab fa-tumblr",
  "fab fa-weixin",
  "fab fa-line",
  "fab fa-viber",
  "fab fa-skype",
  "fab fa-facebook-messenger",
  "fab fa-signal",
  "fab fa-vk",
  "fa-solid fa-envelope-circle-check",
  "fab fa-flickr",
  "fab fa-medium-m",
  "fab fa-dribbble",
  "fab fa-behance",
  "fab fa-github",
  "fab fa-stack-overflow",
  "fab fa-quora",
  "fab fa-yelp",
  "fab fa-periscope",
  "fab fa-meetup",
  "fab fa-twitch",
  "fab fa-slack",
  "fab fa-soundcloud",
  "fab fa-spotify",
  "fab fa-mixcloud",
  "fab fa-bilibili",
  "fab fa-mastodon",
  "fab fa-deviantart",
  "fab fa-xing",
  "fab fa-rss",
  "fab fa-researchgate",
  "fab fa-apple",
  "fab fa-google"
];

interface OverLayIconsProps {
  overLayiconsState?: boolean;
  setoverLayiconsState: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function OverLayIcons({ setoverLayiconsState }: OverLayIconsProps) {
  const [activeIcon, setActiveIcon] = useState<string | null>(null); // حالة لتتبع الأيقونة المختارة
  const context = useContext(cartContext);

  function handleChoiesIcon(iconClass: string) {
    setActiveIcon(iconClass); // تعيين الأيقونة المختارة كـ active
    context?.setChoiesdIcon(iconClass);
  }

  return (
    <div className={`${styles.overLayIcons} pt-4 `}>
      <i 
        onClick={() => { setoverLayiconsState(false) }} 
        className="fa-solid fa-xmark text-2xl text-white rounded-md bg-red-500 px-2 py-1 cursor-pointer absolute right-5 top-5">
      </i>
      <p className='text-center text-white mt-5 text-2xl'>
        Choose the best icon
        <i className="fa-solid fa-circle-check text-green-500 text-xl ms-3"></i>
      </p>

      <div className="socialIcons flex flex-wrap justify-evenly p-5">
        {iconClasses.map((iconClass, index) => (
          <div 
            key={index} 
            className={`border-2 rounded-full m-2 w-[60px] h-[60px] flex justify-center items-center cursor-pointer relative ${styles.parentIcon} `}
            onClick={() => { handleChoiesIcon(iconClass) }}
          >

           {activeIcon === iconClass ?  <i className="fa-regular fa-circle-check absolute top-[-20px] right-[-15px] text-green-500 text-2xl"></i> : ''}
            <i className={`${iconClass} text-white text-3xl cursor-pointer `}></i>
          </div>
        ))}
      </div>
    </div>
  );
}
