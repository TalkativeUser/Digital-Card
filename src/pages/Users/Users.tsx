import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/ForProvided'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';
import MobileCard from '../Dashboard/MobileCard';
import { useMediaQuery } from 'react-responsive';
import { ColorRing, InfinitySpin } from 'react-loader-spinner';

export default function Users() {

    const [allUsers,setAllUsers]=useState<any> ()
    const context=useContext(cartContext)
    const [allUsersLoader,setAllUsersLoader]=useState(false)
    const navigate=useNavigate()
      // تحديد عرض الشاشة أقل من 300 بكسل
  const isSmallScreen = useMediaQuery({ maxWidth: 299 });
  // تحديد القيم بناءً على عرض الشاشة
  const width = isSmallScreen ? 210 : 250;
  const height = isSmallScreen ? 430 : 480;

async function getAllUsers(){

    setAllUsersLoader(true)


    try {

        const response=await axios.get(`https://card.lixir-interiors.com/api/users`,{

                headers:{

                    Authorization: `Bearer ${context?.f_L_token}`,
                }

        } )
        setAllUsers(response.data)
        setAllUsersLoader(false)
        
        
    } catch (error) {

        console.log('errors from all users =>',error);
        setAllUsersLoader(false)

        
    }


}

//  انا كنت ممكن معملش الفانكشن دى وامسك الفانكشن بتاعة getAllUsers  واحطها فى الكونتكست لان انا لما بمسح مستخدم المسح بيتم هناك فى الكونتكست وهنا مبيحصلش 
//  اى reRender  خالص لذلك العنصر اللى بيتمسح مش بيختفى ولازم اعمل ريفريش بأيدى عشان كده انا هندلتها بالشكل ده هنا 
const handleDeleteAccount = async (userId: number) => {
    try {

        if(context)
        await context.deleteAccount(userId)
        // تحديث حالة allUsers بعد حذف المستخدم
        setAllUsers((prevUsers: any) => prevUsers.filter((user: any) => user.id !== userId))
    } catch (error) {
        console.log('Error deleting account:', error)
    }
}






useEffect(()=>{
    



    getAllUsers()


    

    if (context ) {

        if ( context.isAdmin===false ) {
            navigate('/home');
        }
     
    }


    console.log("context?.isAdmin => ",context?.isAdmin);


},

[context?.isAdmin])
    


if(allUsersLoader )
{

    return(

<div className=' fixed inset-0 flex justify-center items-center ' >
<ColorRing
  visible={true}
  height="80"
  width="80"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
  />

</div>

    )
}

  return ( <>
  
    {

      context?.isAdmin? <>





                <Helmet>
                    <meta charSet="utf-8" />
                    <title> All Users </title>
                        
                        <meta name="description" content="This page contains all the users of the application. You can find detailed information about each user." />
                        
                        {/* إضافة كلمات مفتاحية */}
                        <meta name="keywords" content="users, user list, application users, user profiles , jecard users" />
                        
                        {/* إضافة مؤلف الصفحة */}
                        <meta name="auther" content="Mohammed Morshidy , jecard " />
                        
                    
                        
                    
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>





                <div className='container mt-44 ' >

                <h3 className='text-center' >All Users in our site</h3>
                <ul className='mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center mx-0 px-0'>
                    
                    {allUsers&&allUsers?.length > 0 ? <>
                    
                        {allUsers?.map((user: any, index: number) => (

                        <li className='flex justify-center flex-col items-center '  key={index}>
                            <MobileCard width={width} height={height} userDataFromAllUsers={user} />
                            <h6 className='mt-2' > {user.name} </h6>
                            <button style={{width:width-20}} className=' mt-1 py-2 text-red-500 border-1 border-red-500  hover:bg-red-500 hover:text-white
                            px-3 rounded-lg  ' onClick={ ()=>{handleDeleteAccount(user.id) } }  > delete Account  </button>

                        </li>


                            
                    
                    ))}
                    
                    </>:

<div className=' fixed inset-0 flex justify-center items-center ' >
<h3 className='text-center mt-44  ' > there is noy any digital cards in our web site </h3>


</div>


                    
                    
                    
                    }
                    
                



                </ul>

                </div>


            </>:""

            }
  
  
  </>
  
  )
}
