import { Link, useNavigate } from "react-router-dom";
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from "react";
import LoaderButtons from "../../components/LoaderButtons/LoaderButtons";
interface FormValues {

  email: string;

}

export default function ForgetPass() {


  const navigate = useNavigate();
  const [isLoading,setIsLoading]=useState(false)
  const [isError,setIsError]=useState('')


  const formik = useFormik<FormValues>({
    initialValues: {
  
      email: '',
    
    },
    validationSchema: Yup.object({
    

      email: Yup.string()
      .required('Required')
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email address. Please use a valid email format like user@example.com'
      )
    }),
    onSubmit: async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      try {
        setIsLoading(true)
        const response = await axios.post('https://card.lixir-interiors.com/api/forgot-password', values);
        console.log('Success:', response);
        setIsLoading(false)
        navigate('/verify_resetPass');
      } catch (error:any) {
        setIsLoading(false)
        if (error.response && error.response.data && error.response.data.message) {
          console.error('Error message:', error.response.data.message);
          setIsError(error.response.data.message);
        } else {
          console.error('Unexpected error:', error.message);
          setIsError('An unexpected error occurred.');
        }
      } finally {
        setSubmitting(false);
      }
    },
  });




  return (

<><div className="flex justify-center mt-36">

<div className=' flex justify-center pt-44 align-items-center flex-col w-[88%] sm:w-[50%]' >

           <form onSubmit={formik.handleSubmit} className="w-[100%]"  >

    

<label className="relative w-[100%] " >

  <h5 className="mb-3" >Enter your email for send verfiy code to you</h5>

{formik.touched.email && !formik.errors.email ? (
                  <div className="text-green-500 py-2 mt-3 rounded-md absolute top-[-10px] end-3">
                    <i className="fa-solid fa-circle-check ms-2"></i>
                  </div>
                ) : ""}

    <input type="email" 
     {...formik.getFieldProps('email')}
    placeholder='Enter your email'
     className='p-3 rounded-xl w-[100%] focus:outline-none  ' 
     
     style={{border:"2px solid aqua"}}  />
                        
                      
                        {formik.touched.email && formik.errors.email ? (
                  <div className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
                    {formik.errors.email}
                    <i className="fa-solid fa-bug ms-2"></i>
                  </div>
                ) : null}
                      
                        </label>
                        {isError? <h6 className="text-red-600 mt-3 " > {isError} </h6>: <h6 className="text-green-600" > {isError} </h6> }

               <div className="flex justify-end" >
                  
                <button type="submit" className='w-44 mt-3  text-white bg-[#45d9d9]  rounded-xl p-3 flex justify-center align-items-center ' >
                  
               {isLoading? <LoaderButtons></LoaderButtons> :'Send'}
                   
                   </button>

              </div>
           </form>



</div>


</div></>

  )
}


{/* <div className="flex justify-center ">

          <div className=' flex justify-center pt-44 align-items-center flex-col w-[88%] sm:w-[50%]' >

                        <input type="text"  placeholder='Enter your email' className='p-3 rounded-xl w-[100%] focus:outline-none  ' style={{border:"2px solid aqua"}}  />
                        <div className="flex justify-end" >
                            <button className='w-44 mt-3  text-white bg-[#45d9d9]  rounded-xl p-3 flex justify-center align-items-center ' > Send </button>
                        </div>



          </div>


</div> */}