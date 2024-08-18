

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './SignUp.css';
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../../context/ForProvided';
import { Helmet } from 'react-helmet';

interface FormValues {
  domin_name: string;
  name: string;
  email: string;
  password: string;
  // confirmPassword: string;
}

interface LocationState {
  domainName?: string;
}

export default function SignUp() {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;
  const domainName = state?.domainName || '';
  const [isError,setIsError]=useState<string> ()
  const context =useContext(cartContext)

  const formik = useFormik<FormValues>({
    initialValues: {
      domin_name: domainName,
      name: '',
      email: '',
      password: '',
      // confirmPassword: '',
    },
    validationSchema: Yup.object({
      domin_name: Yup.string()
        .min(6, 'Must be at least 6 characters')
        .max(30, 'Must be 30 characters or less')
        .required('Required'),
      name: Yup.string()
        .required('Required')
        .min(6, 'Must be at least 6 characters')
        .max(30, 'Must be 30 characters or less'),
      email: Yup.string()
        .required('Required')
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Invalid email address. Please use a valid email format like user@example.com'
        ),
      password: Yup.string()
        .required('Required')
        .min(6, 'Must be at least 6 characters')
        .max(30, 'Must be 30 characters or less')
        .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Must contain at least one lowercase letter')
        .matches(/\d/, 'Must contain at least one number')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain at least one special character')
      // confirmPassword: Yup.string()
      //   .oneOf([Yup.ref('password')], 'Passwords must match')
      //   .required('Required'),
    }),
    onSubmit: async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
      try {
        const response = await axios.post('https://card.lixir-interiors.com/api/register', values );
        console.log('Success:', response.data);
        localStorage.setItem('yourDomain',`jecard/${values.domin_name}`)
        navigate('/login');
      } catch (error:any) {
        console.error('Error:', error.response.data.message );
        setIsError(error.response.data.message)
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


<> 

        <Helmet>

              <meta charSet="utf-8" />
              <title>Sign Up</title>
              {/* وصف الصفحة */}
              <meta name="description" content="Create your account today and join our community. Sign up to access exclusive features and stay updated with the latest news." />
              
              {/* كلمات مفتاحية */}
              <meta name="keywords" content="sign up, create account, join us, registration, membership" />
              
              {/* معلومات إضافية للسيو */}
              <meta name="author" content=" jecard " />
              <meta name="contact" content=" morshedy@gmail.com " />

        </Helmet>
        
<form className="form mt-36 " onSubmit={formik.handleSubmit}>
      <p className="title">Register</p>
      <p className="message">Signup now and get full access to our app.</p>

      <label className="relative">
        {formik.touched.domin_name && !formik.errors.domin_name ? (
          <div className="text-green-500 py-2 mt-3 rounded-xl absolute top-[-10px] end-0">
            <i className="fa-solid fa-circle-check ms-2"></i>
          </div>
        ) : ""}
        <input
          required
          placeholder="Enter your Domain name"
          type="text"
          className="input"
          {...formik.getFieldProps('domin_name')}
        />
        {formik.touched.domin_name && formik.errors.domin_name ? (
          <div className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
            {formik.errors.domin_name}
            <i className="fa-solid fa-bug ms-2"></i>
          </div>
        ) : null}
      </label>
      <label>
        {formik.touched.name && !formik.errors.name ? (
          <div className="text-green-500 py-2 mt-3 rounded-xl absolute top-[-10px] end-0">
            <i className="fa-solid fa-circle-check ms-2"></i>
          </div>
        ) : ""}
        <input
          required
          placeholder="Enter your name"
          type="text"
          className="input"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
            {formik.errors.name}
            <i className="fa-solid fa-bug ms-2"></i>
          </div>
        ) : null}
      </label>
      <label>
        {formik.touched.email && !formik.errors.email ? (
          <div className="text-green-500 py-2 mt-3 rounded-xl absolute top-[-10px] end-0">
            <i className="fa-solid fa-circle-check ms-2"></i>
          </div>
        ) : ""}
        <input
          required
          placeholder="Enter your email"
          type="email"
          className="input"
          {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
            {formik.errors.email}
            <i className="fa-solid fa-bug ms-2"></i>
          </div>
        ) : null}
      </label>
      <label>
        {formik.touched.password && !formik.errors.password ? (
          <div className="text-green-500 py-2 mt-3 rounded-xl absolute top-[-10px] end-0">
            <i className="fa-solid fa-circle-check ms-2"></i>
          </div>
        ) : ""}
        <input
          required
          placeholder="Enter your password"
          type="password"
          className="input"
          {...formik.getFieldProps('password')}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
            {formik.errors.password}
            <i className="fa-solid fa-bug ms-2"></i>
          </div>
        ) : null}
      </label>
      {/* <label>
        {formik.touched.confirmPassword && !formik.errors.confirmPassword ? (
          <div className="text-green-500 py-2 mt-3 rounded-xl absolute top-[-10px] end-0">
            <i className="fa-solid fa-circle-check ms-2"></i>
          </div>
        ) : ""}
        <input
          required
          placeholder="Re password"
          type="password"
          className="input"
          {...formik.getFieldProps('confirmPassword')}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
            {formik.errors.confirmPassword}
            <i className="fa-solid fa-bug ms-2"></i>
          </div>
        ) : null}
      </label> */}
<div className='flex justify-between items-center ' >
<span className='ms-3 text-red-500' >{isError}</span>
<button type="submit" className="submit w-32 mt-2">Sign Up</button>
  </div>     
    
      <p className="signin text-xl">
        Already have an account? <Link to={'/login'} className="no-underline text-decoration-none">Login</Link>
      </p>
    </form>
</>    
  );
}

