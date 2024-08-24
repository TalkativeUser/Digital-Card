  //  ده الكود اللى الاصلى فى حالة ان اللاير  بتاعت التعديل ظاهره على الصوره اللى بختارها 

// import { useContext, useEffect, useState} from 'react';
// import styles from './settingsDash.module.css'
// import { Link } from 'react-router-dom'
// import { cartContext } from '../../context/ForProvided';
// import axios from 'axios';
// import { ColorRing } from 'react-loader-spinner';
// import defaultImage from '../../../images/add-profile-picture-icon-upload-photo-of-social-media-user-vector.png'
// import 'react-image-crop/dist/ReactCrop.css'
// import Cropper, { Area } from "react-easy-crop"



// export default function SettingsDash(  ) {

//   const context = useContext(cartContext);
//   const [crop, setCrop] = useState({ x: 0, y: 0 })
//   const [zoom, setZoom] = useState(1)


//   const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       const formData = new FormData();
//       formData.append('image', file);
//       context?.setLOADERforDetailsCard(true)

//       try {
//                 if(context?.arrayOfCards.length>0 ) {
//                   await axios.post(`https://card.lixir-interiors.com/api/cards/${context?.arrayOfCards[0].id}`, formData, {
//                     headers: {
//                       'Content-Type': 'multipart/form-data',
//                       'Authorization': `Bearer ${localStorage.getItem('f_L_token')}`, 
//                     },
                    
//                   }  );

//                 }

//                 else {

//                   await axios.post(`https://card.lixir-interiors.com/api/cards`, formData, {
//                     headers: {
//                       'Content-Type': 'multipart/form-data',
//                       'Authorization': `Bearer ${localStorage.getItem('f_L_token')}`, 
//                     },
                    
//                   }  );


//                 }
     
//         context?.setLOADERforDetailsCard(false)

       
//       context?.getAllCards()


//       } catch (error) {
//         console.error('Error uploading image:', error);
//         context?.setLOADERforDetailsCard(false)

//       }
//     }
//   };

//   const callRemoveImageMethod = () => {
//     removeImage ()

//   };




//   async function removeImage() {


//     try {
//             const response = await axios.post(
//               `https://card.lixir-interiors.com/api/detete-image/${context?.arrayOfCards[0].id} `,null,
//               {
//                 headers: {
//                   'Authorization': `Bearer ${localStorage.getItem('f_L_token')}`,           }
//               }
//             );

//             console.log('success', response.data);

//             context?.getAllCards()

//     }  
    
    
//     catch (error) {
//       console.log(error);
//     }

//   }



//   const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
//     console.log(croppedArea, croppedAreaPixels)
//   }




// useEffect(()=>{  

// useContext

// console.log( "context?.userData.email => ",context?.userData );

// if (context?.profileImage) {

//   console.log( "context?.profile image => ",context?.profileImage );

// }


// },[])




//   return (
//     <div>
//       <h2 className='mt-16 text-center'>Account setting</h2>
//       <div className={`${styles.myPageTitle} mt-6`}>
//         <h5 className='text-center mb-4'>My Pages</h5>
//         <div className={`mt-2 flex justify-between flex-col items-center bg-white rounded-lg border-1 border-black w-[40%] m-auto p-3 ${styles.parImageInput}`}>
//           <div className=''>


// {context?.LOADERforDetailsCard? <ColorRing
//                             visible={true}
//                             height="80"
//                             width="80"
//                             ariaLabel="color-ring-loading"
//                             wrapperStyle={{}}
//                             wrapperClass="color-ring-wrapper"
//                             colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
//                             /> : context?.profileImage && context.profileImage!='add-profile-bigger.jpg' ?<>

//                             <div className={` flex m-auto ${styles.imageContainer}`}>


//                                       <div className="relative w-full h-60 bg-gray-900 overflow-hidden"> 
 
//                                                 <Cropper
//                                                 image={ `https://card.lixir-interiors.com/public/storage/${context?.profileImage}`}
//                                                 crop={crop}
//                                                 zoom={zoom}
//                                                 aspect={4 / 3}
//                                                 onCropChange={setCrop}
//                                                 onCropComplete={onCropComplete}
//                                                 onZoomChange={setZoom}
//                                                 cropSize={{ width: 240, height: 240 }} 
//                                                 style={{ 
//                                                   containerStyle: { 
//                                                     width: '100%', 
//                                                     height: '100%',
//                                                     position: 'relative',
//                                                     overflow: 'hidden' ,
//                                                     display: 'flex', // استخدام flexbox للتمركز
//                                                     justifyContent: 'center', // التمركز أفقياً
//                                                     alignItems: 'center', // التمركز عمودياً
//                                                   },
//                                                   mediaStyle: {
//                                                     margin:"auto",
//                                                   } 
//                                                 }}
//                                                 />

//                                       </div>


//                               <span className={styles.closeButton} onClick={callRemoveImageMethod}><i className="fa-solid fa-xmark"></i></span>
//                             </div>
//                     </>:
//                       <div className={styles.imageContainer}>
//                       <img src={defaultImage} alt="Uploaded" className={`w-[180px]`} />
//                     </div>
                            
                            
                            
//                             }


//           </div>
//           <div>
//             <div className={styles.uploadContainer}>
//               <input
//                 type="file"
//                 accept="image/*"
//                 id="upload"
//                 className={styles.uploadInput}
//                 onChange={handleFileChange}
//               />
//               <label htmlFor="upload" className={styles.uploadLabel}>
//                 {context?.profileImage?"UpDate":'Choose'} Profile Image
//               </label>
//             </div>
//             <h6 className='mt-3'> {context?.userData?.user_name} </h6>
//             <p className={`text-black no-underline ${styles.userDomain}`} > {context?.userData?.domin_name ? ` jecard/${context?.userData?.domin_name }` : "Go to home to add your domain"} </p>
//           </div>
//         </div>
//         <div className={`${styles.account} bg-white p-8 rounded-lg flex flex-col items-center mt-24`}>
//           <input className={`bg-gray-100 p-3 w-[80%] rounded-lg ${styles.updateEmail}`} readOnly type="email" name="" id="" value={ context?.userData? context?.userData.email:"please again login" } />
//           <Link to={'/forgetPass'} className={`py-2 px-6 no-underline mt-4 border-blue-400 border-1 rounded-lg text-blue-400 hover:bg-blue-400 hover:text-white  block w-[80%] ${styles.changePassword}`}>Change Password</Link>
//         </div>
//         <div className="dangerZone bg-white p-8 rounded-lg mt-8">
//           <h5>Danger Zone</h5>
//           <p>Deleting your account permanently deletes your page and all your data</p>
//           <button className={`py-2 px-6 mt-2 border-red-600 border-1 rounded-lg text-red-600 hover:bg-red-600 hover:text-white ${styles.deleteAccount}`} 
//           onClick={context?.deleteAccount}
          
//           >Delete this Account</button>
//         </div>

//       </div>
//     </div>
//   );
// }





//  التعديل ده بيتم فيه قص الصوره والاحتفاظ بيها مقصوصه وبنبعتها للباك اند 

import { useContext, useState } from 'react';
import styles from './settingsDash.module.css';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/ForProvided';
import { ColorRing } from 'react-loader-spinner';
import defaultImage from '../../../images/add-profile-picture-icon-upload-photo-of-social-media-user-vector.png';
import 'react-image-crop/dist/ReactCrop.css';
import Cropper, { Area } from 'react-easy-crop';
import axios from 'axios';

export default function SettingsDash() {
  const context = useContext(cartContext);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [imageURLdata, setImageURLdata] = useState<string | undefined>(undefined);
  const [cropSize, setCropSize] = useState({ width: 240, height: 240 });
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);
  const [showCroppedImage,setShowCroppedImage]=useState('')


  const showCroppedImageMethod = async () => {
    if (croppedArea&&imageURLdata) {
      try {
        const croppedImageTest = await getCroppedImg(
          imageURLdata,
          croppedArea
        );
        console.log("Cropped Image:", croppedImageTest);
        setShowCroppedImage(croppedImageTest ? croppedImageTest:"");
      } catch (e) {
        console.error(e);
      }
    }
  };

 

  const onCropComplete = ( croppedArea: Area,croppedAreaPixels: Area) => {
    console.log(croppedArea);
    
    setCroppedArea(croppedAreaPixels);
  };

  const handleSaveImage = async () => {

    setShowCroppedImage('')
    if (imageURLdata && croppedArea) {    //   هنا بنتأكد ان الصوره اللى المستخدم اختارها موجوده بالفعل + برضه كمان احداث الصوره لازم تكون موجوده


      const croppedImageUrl = await getCroppedImg(imageURLdata, croppedArea);

      if (croppedImageUrl) {

        // setShowCroppedImage(croppedImageUrl)
        const response = await fetch(croppedImageUrl);
        const blob = await response.blob();

        const formData = new FormData();
        formData.append('image', blob,'croppedImage.jpg');   // سؤالى هنا  بقا لى الصوره اللى بتتبعت للباك اند هى هى كل مره

        context?.setLOADERforDetailsCard(true);

        try {
          let res;
          if (context?.arrayOfCards.length > 0) {
           res=  await axios.post(`https://card.lixir-interiors.com/api/cards/${context?.arrayOfCards[0].id}`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('f_L_token')}`,
              },
            });
          } else {
            res=await axios.post(`https://card.lixir-interiors.com/api/cards`, formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('f_L_token')}`,
              },
            });
          }

          console.log(' edit image => ', res);
          
          context?.setLOADERforDetailsCard(false);
          context?.getAllCards();

        } catch (error) {
          console.error('Error uploading image:', error);
          context?.setLOADERforDetailsCard(false);
        }
      }
    }
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    // setShowCropperComp(true)
    const file = event.target.files?.[0];   // كده مسكنا الصوره اللى دخلت بالشكل ده 

    if (file) { // بنتأكد ان الصوره كده تمام وموجوده 

      const reader = new FileReader();  //  بننشئ حاجه اسمها قارئ عشان يقرا الملف او الصوره اللى حملتها 
     
      reader.onloadend = () => {    // دى زى فانكشن بتشتغل لما الملف يتحمل ويتقرا 
        setImageURLdata(reader.result as string);
      };

      reader.readAsDataURL(file); // هنا الملف  بيكون اتحمل وهنا بقا بنبتدى نقراه واول ما نقراه بنستدعى ال  reader.onloadend عشان احتفظ بالصوره اللى المستخدم اختارها 
    }
  };

  const increaseCropSize = () => {
    setCropSize(prev => ({ width: prev.width + 20, height: prev.height + 20 }));
  };

  const decreaseCropSize = () => {
    setCropSize(prev => ({ width: Math.max(100, prev.width - 20), height: Math.max(100, prev.height - 20) }));
  };

  function clearImageUrlData () {

    setImageURLdata('')
  }

  return (
    <div>
      <h2 className='mt-16 text-center'>Account setting</h2>
      <div className={`${styles.myPageTitle} mt-6`}>
        <h5 className='text-center mb-4'>My Pages</h5>
        <div className={`mt-2 flex justify-between flex-col items-center bg-white rounded-lg border-1 border-black w-[40%] m-auto p-3 ${styles.parImageInput}`}>
          <div className='relative' >

          { showCroppedImage? 
          
          <div 
          style={{  boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px" 
          }}
             className=' absolute inset-0 rounded-lg overflow-hidden z-[100000] animate__animated animate__backInUp  ' >

              <span onClick={ ()=> { setShowCroppedImage ('')  } } className={styles.closeButton}><i className="fa-solid fa-xmark"></i></span>
              <i className="fa-solid fa-circle-check fa-xl  absolute top-4 left-2 text-green-600 "></i>
              <img src= {showCroppedImage} alt="" className='w-[100%] h-[100%]'  />

          </div>
          
          :"" }


            {context?.LOADERforDetailsCard ? (
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            ) :
            
            
           
              <>

               {    imageURLdata===undefined ||imageURLdata==='' ?
                 <div className={styles.imageContainer}>
                 <img src={defaultImage} alt="Uploaded" className={`w-[180px]`} />
               </div>:

                  <div className={`flex justify-center items-center m-auto ${styles.imageContainer}`}>

                                    <div className="relative w-full h-60 bg-gray-900 overflow-hidden">
                                          <Cropper
                                            image={imageURLdata}
                                            crop={crop}
                                            zoom={zoom}
                                            aspect={4 / 3}
                                            onCropChange={setCrop}
                                            onCropComplete={onCropComplete}
                                            onZoomChange={setZoom}
                                            cropSize={cropSize}
                                            style={{
                                              containerStyle: {
                                                width: '100%',
                                                height: '100%',
                                                position: 'relative',
                                                overflow: 'hidden',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                              },
                                              mediaStyle: {
                                                margin: 'auto',
                                              },
                                            }}
                                          />
                                        </div>
















          {/* handle 4 icons on edit image  */}
              {
                      imageURLdata ? <>    
                      <span onClick={clearImageUrlData} className={styles.closeButton}><i className="fa-solid fa-xmark"></i></span>
                      <span onClick={decreaseCropSize} className={`p-2 ${styles.decreasseBtn}`}>-</span>
                      <span onClick={increaseCropSize} className={`p-2 ${styles.increesBtn}`}>+</span>
                      <span onClick={showCroppedImageMethod} className={`p-2 ${styles.SaveBtn}`}><i className="fa-regular fa-floppy-disk"></i></span>
                                  
                      
                      </>:""
              }


                  </div>

               }

              </>
             
              }






              
                
            
          </div>
          <div>
            <div className='flex flex-col'>
              <input
                type="file"
                accept="image/*"
                id="upload"
                className={styles.uploadInput}
                onChange={handleFileChange}
              />

               <label htmlFor="upload" className={styles.uploadLabel}>
                {context?.profileImage ? 'upLoad' : 'Choose'} Image  <i className="fa-solid fa-arrow-up-from-bracket ms-2 "></i> 
              </label>
              <button onClick={handleSaveImage} className={`px-3 py-2 border-1 hover:bg-green-700 border-green-700  rounded-lg text-green-700 mt-2 hover:text-white `}>save changes image</button>
             
            </div>
            <h6 className='mt-3'>{context?.userData?.user_name}</h6>
            <p className={`text-black no-underline ${styles.userDomain}`}>
              {context?.userData?.domin_name ? ` jecard/${context?.userData?.domin_name}` : "Go to home to add your domain"}
            </p>
          </div>
        </div>
        <div className={`${styles.account} bg-white p-8 rounded-lg flex flex-col items-center mt-24`}>
          <input className={`bg-gray-100 p-3 w-[80%] rounded-lg ${styles.updateEmail}`} readOnly type="email" name="" id="" value={context?.userData ? context?.userData.email : "please again login"} />
          <Link to={'/forgetPass'} className={`py-2 px-6 no-underline mt-4 border-blue-400 border-1 rounded-lg text-blue-400 hover:bg-blue-400 hover:text-white block w-[80%] ${styles.changePassword}`}>Change Password</Link>
        </div>
        <div className="dangerZone bg-white p-8 rounded-lg mt-8">

          <h5>Danger Zone</h5>
          
          <p>Deleting your account permanently deletes your page and all your data</p>
         <div className='flex flex-col justify-center items-center ' >
          <button className={`py-2 w-[80%] mt-2 border-red-600 border-1 rounded-lg text-red-600 hover:bg-red-600 hover:text-white ${styles.deleteAccount}`} onClick={()=>{context?.deleteAccount()}}>Delete user image</button>
         <button className={`py-2 w-[80%] mt-2 border-red-600 border-1 rounded-lg text-red-600 hover:bg-red-600 hover:text-white ${styles.deleteAccount}`} onClick={()=>{context?.deleteAccount()}}>Delete this Account</button>
        
         </div>
        </div>
      </div>
    </div>
  );
}




export const createImage = (url: string): Promise<HTMLImageElement> =>
  new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues
    image.src = url
  })

export function getRadianAngle(degreeValue: number): number {
  return (degreeValue * Math.PI) / 180
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(
  width: number,
  height: number,
  rotation: number
): { width: number; height: number } {
  const rotRad = getRadianAngle(rotation)

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  }
}

interface PixelCrop {
  x: number
  y: number
  width: number
  height: number
}

interface Flip {
  horizontal: boolean
  vertical: boolean
}

 async function getCroppedImg(
  imageSrc: string,
  pixelCrop: PixelCrop,
  rotation: number = 0,
  flip: Flip = { horizontal: false, vertical: false }
): Promise<string | null> {
  const image = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  const rotRad = getRadianAngle(rotation)

  // calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
    image.width,
    image.height,
    rotation
  )

  // set canvas size to match the bounding box
  canvas.width = bBoxWidth
  canvas.height = bBoxHeight

  // translate canvas context to a central location to allow rotating and flipping around the center
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
  ctx.rotate(rotRad)
  ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
  ctx.translate(-image.width / 2, -image.height / 2)

  // draw rotated image
  ctx.drawImage(image, 0, 0)

  const croppedCanvas = document.createElement('canvas')
  const croppedCtx = croppedCanvas.getContext('2d')

  if (!croppedCtx) {
    return null
  }

  // Set the size of the cropped canvas
  croppedCanvas.width = pixelCrop.width
  croppedCanvas.height = pixelCrop.height

  // Draw the cropped image onto the new canvas
  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  )

  // As a blob
  return new Promise<string | null>((resolve, reject) => {
    croppedCanvas.toBlob((file) => {
      if (file) {
        resolve(URL.createObjectURL(file))
      } else {
        reject(new Error('Blob creation failed'))
      }
    }, 'image/jpeg')
  })
}


