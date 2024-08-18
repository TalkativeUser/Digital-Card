

import { useContext, useEffect} from 'react';
import styles from './settingsDash.module.css'
import { Link } from 'react-router-dom'
import { cartContext } from '../../context/ForProvided';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';
import defaultImage from '../../../images/add-profile-picture-icon-upload-photo-of-social-media-user-vector.png'
import 'react-image-crop/dist/ReactCrop.css'


export default function SettingsDash(  ) {

  const context = useContext(cartContext);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
      context?.setLOADERforDetailsCard(true)

      try {
                if(context?.arrayOfCards.length>0 ) {
                  await axios.post(`https://card.lixir-interiors.com/api/cards/${context?.arrayOfCards[0].id}`, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      'Authorization': `Bearer ${localStorage.getItem('f_L_token')}`, 
                    },
                    
                  }  );

                }

                else {

                  await axios.post(`https://card.lixir-interiors.com/api/cards`, formData, {
                    headers: {
                      'Content-Type': 'multipart/form-data',
                      'Authorization': `Bearer ${localStorage.getItem('f_L_token')}`, 
                    },
                    
                  }  );


                }
     
        context?.setLOADERforDetailsCard(false)

       
      context?.getAllCards()


      } catch (error) {
        console.error('Error uploading image:', error);
        context?.setLOADERforDetailsCard(false)

      }
    }
  };

  const callRemoveImageMethod = () => {
    removeImage ()

  };




  async function removeImage() {


    try {
            const response = await axios.post(
              `https://card.lixir-interiors.com/api/detete-image/${context?.arrayOfCards[0].id} `,null,
              {
                headers: {
                  'Authorization': `Bearer ${localStorage.getItem('f_L_token')}`,           }
              }
            );

            console.log('success', response.data);

            context?.getAllCards()

    }  
    
    
    catch (error) {
      console.log(error);
    }

  }




useEffect(()=>{  

useContext

console.log( "context?.userData.email => ",context?.userData );

if (context?.profileImage) {

  console.log( "context?.profile image => ",context?.profileImage );

}


},[])




  return (
    <div>
      <h2 className='mt-16 text-center'>Account setting</h2>
      <div className={`${styles.myPageTitle} mt-6`}>
        <h5 className='text-center mb-4'>My Pages</h5>
        <div className={`mt-2 flex justify-between flex-col items-center bg-white rounded-lg border-1 border-black w-[40%] m-auto p-3 ${styles.parImageInput}`}>
          <div className=''>


{context?.LOADERforDetailsCard? <ColorRing
                            visible={true}
                            height="80"
                            width="80"
                            ariaLabel="color-ring-loading"
                            wrapperStyle={{}}
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            /> : context?.profileImage && context.profileImage!='add-profile-bigger.jpg' ?<>

                            <div className={styles.imageContainer}>
                              <img src={`https://card.lixir-interiors.com/public/storage/${context?.profileImage as string}`} alt="Uploaded" className={styles.uploadedImage} />
                              <span className={styles.closeButton} onClick={callRemoveImageMethod}><i className="fa-solid fa-xmark"></i></span>
                            </div>
                    </>:
                      <div className={styles.imageContainer}>
                      <img src={defaultImage} alt="Uploaded" className={`w-[180px]`} />
                    </div>
                            
                            
                            
                            }


          </div>
          <div>
            <div className={styles.uploadContainer}>
              <input
                type="file"
                accept="image/*"
                id="upload"
                className={styles.uploadInput}
                onChange={handleFileChange}
              />
              <label htmlFor="upload" className={styles.uploadLabel}>
                {context?.profileImage?"UpDate":'Choose'} Profile Image
              </label>
            </div>
            <h6 className='mt-3'> {context?.userData?.user_name} </h6>
            <p className={`text-black no-underline ${styles.userDomain}`} > {context?.userData?.domin_name ? ` jecard/${context?.userData?.domin_name }` : "Go to home to add your domain"} </p>
          </div>
        </div>
        <div className={`${styles.account} bg-white p-8 rounded-lg flex flex-col items-center mt-24`}>
          <input className={`bg-gray-100 p-3 w-[80%] rounded-lg ${styles.updateEmail}`} readOnly type="email" name="" id="" value={ context?.userData? context?.userData.email:"please again login" } />
          <Link to={'/forgetPass'} className={`py-2 px-6 no-underline mt-4 border-blue-400 border-1 rounded-lg text-blue-400 hover:bg-blue-400 hover:text-white  block w-[80%] ${styles.changePassword}`}>Change Password</Link>
        </div>
        <div className="dangerZone bg-white p-8 rounded-lg mt-8">
          <h5>Danger Zone</h5>
          <p>Deleting your account permanently deletes your page and all your data</p>
          <button className={`py-2 px-6 mt-2 border-red-600 border-1 rounded-lg text-red-600 hover:bg-red-600 hover:text-white ${styles.deleteAccount}`} 
          onClick={context?.deleteAccount}
          
          >Delete this Account</button>
        </div>

        {/* <h1> {  context?.profileImage? context?.profileImage as any :""} </h1> */}
      </div>
    </div>
  );
}
