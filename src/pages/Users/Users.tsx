import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../context/ForProvided'
import {Helmet} from "react-helmet";
import { useNavigate } from 'react-router-dom';

export default function Users() {

    const [allUsers,setAllUsers]=useState<any> ()
    const context=useContext(cartContext)
    const navigate=useNavigate()

async function getAllUsers(){


    try {

        const response=await axios.get(`https://card.lixir-interiors.com/api/users`,{

                headers:{

                    Authorization: `Bearer ${context?.f_L_token}`,
                }

        } )
        setAllUsers(response.data)
        
        
    } catch (error) {

        console.log('errors from all users =>',error);
        
        
    }


}

useEffect(()=>{


    getAllUsers()
  if( !context?.isAdmin ) {

    navigate('/home')

  }


},[])

useEffect(()=>{


    console.log(' these are responses => ',allUsers);

},

[allUsers])
    


  return ( <>
  
  {

context?.isAdmin? <>




<div className='container mt-44 bg-red-400' >

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

<h1>hello users</h1>

</div>





</>:""

  }
  
  
  </>
  
  )
}
