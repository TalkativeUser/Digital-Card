
import { useContext, useEffect, useState } from 'react';
import styles from './Links.module.css'
import OverLayIcons from './OverLayIcons';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { cartContext } from '../../context/ForProvided';

type DetailsOverLayType = {
  overLayTitle: string;
  placeHolderFirstInput: string;
  placeHolderSecondInput: string;
  textIcon: string;
  textButton: string;
};

interface LinkSocialProps {

  detailsOverLay: DetailsOverLayType
  linkUpdatedID?:number;
  linkUpdatedIndex?:number
}


export default function LinkSocial({linkUpdatedIndex,linkUpdatedID ,detailsOverLay}: LinkSocialProps) {
  const context = useContext(cartContext);
  const [overLayiconsState, setoverLayiconsState] = useState(false);
 const [iconError,setIconError]=useState('')

  const handleClickLinkSocial = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.id === 'layOutLinkSocial') {
      context?.setLayOut(false);
      context?.setChoiesdIcon('');
      context?.setUpdateLayOut(false)
    }
  };

  const validationSchema = Yup.object({
    linkTitle: Yup.string().required('Link title is required'),
    link: Yup.string().required('Link is required'),
  });

  const formik = useFormik({
    initialValues: {
   linkTitle: detailsOverLay.overLayTitle === 'Update' && linkUpdatedIndex !== undefined? context?.arrayAllLinks && context?.arrayAllLinks[linkUpdatedIndex]?.title || '': '',

    link: detailsOverLay.overLayTitle === 'Update' && linkUpdatedIndex !== undefined? context?.arrayAllLinks && context?.arrayAllLinks[linkUpdatedIndex]?.link || '': '',
    },
    validationSchema,
    onSubmit: (values) => {



      
      if (context?.choiesdIcon=="") {  
        setIconError('Icon required');
        return;
      }
      context?.handleSaveChangesAddButton(values,linkUpdatedID);
    },
  });



useEffect(()=>{ 
  if(context?.arrayAllLinks) {


    context.setChoiesdIcon(  linkUpdatedIndex ||linkUpdatedIndex== 0?context.arrayAllLinks[linkUpdatedIndex].logo:'')

    // console.log('arrayAllLinks[linkUpdatedIndex].logo => ', linkUpdatedIndex || linkUpdatedIndex==0?context.arrayAllLinks[linkUpdatedIndex].logo:'not found link update index');
  }




},[])


  const buttonStyle = {
    background: 'linear-gradient(to right, rgb(0 211 211) 12%, rgb(50 184 50 / 72%))',
  };

  return (
    <div id='layOutLinkSocial' className={styles.layOutLinkSocial} onClick={(event) => handleClickLinkSocial(event)} >
      <div className={`bg-white rounded-lg overflow-hidden animate__animated animate__zoomInUp ${styles.innerLayOut}`}>
        <div className='flex items-center justify-between w-[100%] px-4 mt-3'>
          <h4>{detailsOverLay.overLayTitle}</h4>
          <i onClick={() => { 
              context?.setLayOut(false);
              context?.setChoiesdIcon('') 
              context?.setUpdateLayOut(false)
              
              }} className="fa-solid fa-xmark text-2xl text-white rounded-md bg-red-500 px-2 py-1 cursor-pointer"></i>
        </div>
        <hr />


        <form onSubmit={formik.handleSubmit}>
          <div className={`flex justify-between items-center px-4 mt-5 ${styles.parentInputsAndImage}`}>
            <div className={` ${styles.linksInput} w-[70%]`}>
              
              <input
                id="linkTitle"
                name="linkTitle"
                type="text"
                placeholder={detailsOverLay.placeHolderFirstInput}
                className='my-2 p-2 w-[100%] rounded-lg bg-gray-300 focus:outline-none'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.linkTitle}
              />
            
            
              {formik.touched.linkTitle && formik.errors.linkTitle ? (
                <span className="text-red-500">{formik.errors.linkTitle}</span>
              ) : null}
            



              <input
                id="link"
                name="link"
                type="text"
                placeholder={detailsOverLay.placeHolderSecondInput}
                className='my-2 p-2 w-[100%] rounded-lg bg-gray-300 focus:outline-none'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.link}
              />
            
      
        {formik.touched.link && formik.errors.link ? (
                <span className="text-red-500 ">{formik.errors.link}</span>
              ) : null}
      

            </div>


            <div className={`h-[104px] w-[114px] rounded-lg bg-gray-300 flex flex-col justify-center items-center relative ${styles.addIconButton}`}>
            <div className={`absolute inset-0 flex justify-center items-center rounded-lg ${styles.overLayUpdateIconMiniMize} `} >
                  
                  <i className="fa-solid fa-circle-plus text-5xl text-white cursor-pointer " onClick={() => { setoverLayiconsState(true) }} ></i> 
                  
                  </div>
                  {context?.choiesdIcon ? (
                    <div className={`border-2 border-black rounded-full m-2 w-[60px] h-[60px] flex justify-center items-center`}>
                      <i className={`${context.choiesdIcon} text-3xl cursor-pointer`}></i>
                    </div>
                  ) : (
                <>
                 <div className={`absolute inset-0 flex justify-center items-center rounded-lg ${styles.overLayUpdateIconMiniMize} `} >
                  
                   <i className="fa-solid fa-circle-plus text-5xl text-white cursor-pointer " onClick={() => { setoverLayiconsState(true) }} ></i> 
                   
                   </div>
                 <p className='m-0 p-1 text-center cursor-pointer hover:text-green-700' >{linkUpdatedIndex !== undefined? 
                    
                    <><i className={` ${ context?.arrayAllLinks? context?.arrayAllLinks[linkUpdatedIndex].logo:""} text-5xl`} ></i>
                  
                  
                  </>:"+ Add icon" }</p>
               
                  {iconError?<p className='text-red-500' > {iconError} </p>:""}            </> 
                  )}


            </div>


          </div>

          

          <button
            type="submit"
            className={`w-[100%] py-3 bg-indigo-500 text-white mt-5`}
            style={buttonStyle}
          >
            {detailsOverLay.textButton}
          </button>
        </form>


      </div>
      {overLayiconsState && <OverLayIcons overLayiconsState={overLayiconsState} setoverLayiconsState={setoverLayiconsState} />}
    </div>
  )
}
