import { useContext, useEffect, useRef, useState } from 'react'
import styles from './Links.module.css'
import LinkSocial from './LinkSocial';
import { cartContext } from '../../context/ForProvided';
import axios from 'axios';
const buttonStyle = {
  background: 'linear-gradient(to right, rgb(0 211 211) 12%, rgb(50 184 50 / 72%))',

};



export default function LinksDash() {


  const context=useContext(cartContext)
  const [linkUpdatedID,setLinkUpdatedID]=useState<number>()
  const [linkUpdatedIndex,setLinkUpdatedIndex]=useState<number>()
  const [numOfTruncate,setNumOfTruncate]=useState<number> (15)

function linkUpdate(linkID:number|undefined,index:number) {


  context?.setUpdateLayOut(true)
  setLinkUpdatedID(linkID)
  setLinkUpdatedIndex(index)


  

}

async function removeLinkMethod (idOFlink:number|undefined) {

try {

  await axios.delete(`https://card.lixir-interiors.com/api/cards-link/${idOFlink}`, {
    headers: {
      Authorization: `Bearer ${context?.f_L_token}`,
    },
  });

  context?.getAllCards()
  
} catch (error) {
  console.log('error because delete this item',error);
  
}

}


const ulRef = useRef<HTMLUListElement>(null);

useEffect(() => {
  const handleResize = () => {
    if (ulRef.current) {
      // console.log('Current ul width:', ulRef.current.offsetWidth);

      //  520  اول ما اوصل هنا اخليهم تلاتين حرف
    
      // 420  هنا هخليهم خمسه وعشرين حرف
      // 350  هنا هخليهم عشرين حرف
      // 282  هنا هخليهم 17 حرف
      // 242  هنا هخليهم 14 حرف



      if(ulRef.current.offsetWidth <=242) {
        setNumOfTruncate(11)
      } 
      else if (ulRef.current.offsetWidth <=282) {

        setNumOfTruncate(14)

      }
      else if (ulRef.current.offsetWidth <=350) {

        setNumOfTruncate(20)

      }
      else if (ulRef.current.offsetWidth <=420) {

        setNumOfTruncate(25)

      }
      else if (ulRef.current.offsetWidth <=520) {

        setNumOfTruncate(30)

      }
  

      else {
        setNumOfTruncate(40)


      }

    }
  };

  window.addEventListener('resize', handleResize);

  // Initial log on component mount
  handleResize();

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


  return (
    <div className='mt-16 flex flex-col items-center' >
      

<button onClick={()=>{context?.setLayOut(true)}} className={` ${styles.LinksButton}
   py-3 rounded-xl bg-indigo-500 text-white w-[70%] `} style={buttonStyle} > + ADD LINK </button>



<ul ref={ulRef} className= {`${styles.Links_ul}  m-0 ps-0 pt-6  flex flex-col items-center w-[70%]`} >


{ context?.arrayAllLinks && context.arrayAllLinks.length > 0 ? (
  context.arrayAllLinks.map((item, index) =>  {

    const linkStr = item.link.toString();  // تأكد من تحويل الرابط إلى سلسلة
    const titleStr = item.title.toString();  // تأكد من تحويل العنوان إلى سلسلة

    const truncatedLink = linkStr.length > numOfTruncate ? linkStr.slice(0, numOfTruncate) + '....' : linkStr;
    const truncatedTitle = titleStr.length > numOfTruncate ? titleStr.slice(0, numOfTruncate) + '....' : titleStr;

    return (

      <li 
      key={index}
      className='rounded-lg py-3 flex justify-between items-center px-4 bg-white mt-2'
      style={{boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"}}
    >
      <div>
        <h6 className={styles.linkTitle}>{truncatedTitle}</h6>
        <p
          className={`${styles.urlLink} text-black m-0 rounded-md`}
          onClick={() => { console.log('link.id is => ', item.id); }}
        >
          {truncatedLink}
        </p>
      </div>
      <div className=''>
        <i
          onClick={() => { linkUpdate(item.id,index); }}
          className={`fa-solid fa-pen-to-square fa-xl cursor-pointer ${styles.updateDetailsLinkIcon}`}
        ></i>
        <i
          className="fa-solid fa-trash-can fa-xl cursor-pointer ms-3 text-red-400 hover:text-red-500"
          onClick={() => { removeLinkMethod(item.id); }}
        ></i>
      </div>
    </li>
    )

  }


   

     

)

) : (
  <div className='h-36 flex justify-center items-center'>
    <h5>There is not any links</h5>
  </div>
)}



</ul>


{context?.layOut?<LinkSocial detailsOverLay={{

overLayTitle :"Add",
placeHolderFirstInput:"Enter title  ",
 placeHolderSecondInput :"Enter link title",
 textIcon :"Add icon +",
  textButton:"Save Changes"


}} />:""}
{context?.updateLayOut?<LinkSocial linkUpdatedIndex={linkUpdatedIndex} linkUpdatedID={linkUpdatedID} detailsOverLay={{

overLayTitle :"Update",
placeHolderFirstInput:"Update title ",
 placeHolderSecondInput :"Update link title ",
 textIcon :"update icon  +",
  textButton:"Save updates"


}} />:""}


    </div>
  )
}
