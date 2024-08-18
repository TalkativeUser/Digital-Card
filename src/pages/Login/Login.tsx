

import { Link } from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../context/ForProvided';
import { Helmet } from 'react-helmet';

interface FormValues {
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);
  const context =useContext(cartContext)

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .required('Required')
       ,
      password: Yup.string()
        .required('Required')
      
    }),
    onSubmit: async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      try {
        setApiError(null); // إعادة تعيين رسالة الخطأ
        const response = await axios.post('https://card.lixir-interiors.com/api/login', values);
        console.log('Success:', response.data.authorization.token);
        localStorage.setItem('f_L_token',response.data.authorization.token)
       context?.setF_L_token(response.data.authorization.token)
    
        navigate('/dashboard');
      

      } catch (error:any) {
        if (axios.isAxiosError(error) && error.response) {
          setApiError(error.response.data.message);
        } else {
          setApiError(error.message);
        }
        console.error('Error:', error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (context?.f_L_token) {

      navigate('/dashboard');
  
    }
  }, [context, navigate]);

  return (
    <div className='pt-44' >

 <Helmet>

        <meta charSet="utf-8" />
        <title>Login - Access Your Account</title>

        {/* وصف الصفحة */}
        <meta name="description" content="Log in to your account to access personalized content, manage your settings, and stay connected with our community." />
        
        {/* كلمات مفتاحية */}
        <meta name="keywords" content="login, sign in, access account, member login, user authentication" />
        
        {/* معلومات إضافية للسيو */}
        <meta name="author" content="jecard for creating digital card" />
        <meta name="contact" content="morshedy480@gmail.com" />
        

 </Helmet>

      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="flex-column">
          <label className=''>
            Email: 
            
            
            {formik.touched.email && formik.errors.email ? (
            <span className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
              {formik.errors.email}<i className="fa-solid fa-bug ms-2"></i>
            </span>
          ) : null}
          </label>
        </div>
        <div className="inputForm relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="0 0 32 32"
            height="20"
          >
            <g data-name="Layer 3" id="Layer_3">
              <path
                d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
              ></path>
            </g>
          </svg>
          {formik.touched.email && !formik.errors.email ? (
            <div className='text-green-500 py-2 mt-3 rounded-xl absolute top-[-10px] end-5'>
              <i className="fa-solid fa-circle-check ms-2"></i>
            </div>
          ) : ""}
          <input placeholder="Enter your Email" className="input" type="text" {...formik.getFieldProps('email')} />
        </div>
        <div className="flex-column">
          <label className=''>
            Password: 
            
            {formik.touched.password && formik.errors.password ? (
            <span className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
              {formik.errors.password}<i className="fa-solid fa-bug ms-2"></i>
            </span>
          ) : null}
          </label>
        </div>
        <div className="inputForm relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            viewBox="-64 0 512 512"
            height="20"
          >
            <path
              d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0"
            ></path>
            <path
              d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969-16-16-16s-16 7.167969-16 16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0"
            ></path>
          </svg>
          {formik.touched.password && !formik.errors.password ? (
            <div className='text-green-500 py-2 mt-3 rounded-xl absolute top-[-10px] end-5'>
              <i className="fa-solid fa-circle-check ms-2"></i>
            </div>
          ) : ""}
          <input placeholder="Enter your Password" className="input" type="password" {...formik.getFieldProps('password')} />
        </div>
        {/* <h5 className='text-center mt-4'>Or Login with</h5>
        <div className='flex justify-between mt-3'>

          <button className='w-[47%] bg-white text-black rounded-full p-3 flex justify-center align-items-center'>
            <img style={{ width: "22px", height: "22px" }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/300px-Facebook_icon_2013.svg.png" alt="" className='me-2' /> Facebook
          </button>

          <button className='w-[47%] bg-white text-black rounded-full p-3 flex justify-center align-items-center'>
            <img style={{ width: "22px", height: "22px" }} src="https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png" alt="" className='me-2' /> Google
          </button>

        </div> */}
        <button type="submit" className="button-submit" disabled={formik.isSubmitting}>
          {formik.isSubmitting ? 'Loading...' : 'Sign In'}
        </button>
        {apiError && <div className="error text-red-500 px-3 py-2 mt-3 rounded-xl">{apiError}</div>}
        <div className="forgetPass ms-auto me-3 mt-2">
          <Link className='text-red-600 no-underline' to={'/forgetPass'}>Forget Password <i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
        </div>
      </form>
    </div>
  );
}
