

import { Link, useNavigate } from 'react-router-dom';
import mainStyles from './Verify.module.css'
import React, { useState } from 'react';

/* HTML: <div class="loader"></div> */

import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import LoaderButtons from '../../components/LoaderButtons/LoaderButtons';
interface FormValues {


  email: string;
  password: string;
  password_confirmation:string
  reset_code:string
}


const VerificationCode: React.FC = () => {

  const navigate = useNavigate();
  const [isError,setIsError]=useState('')
  const [isLoading,setIsLoading]=useState(false)



  const formik = useFormik<FormValues>({
    initialValues: {

    
      email: '',
      password: '',
      password_confirmation:"",
    reset_code:""

    },
    validationSchema: Yup.object({
 
      
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
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Must contain at least one special character'),
        password_confirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),

        reset_code:Yup.string().required('required')


    }),
    onSubmit: async (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
  
      try {
        setIsLoading(true);
        const response = await axios.post('https://card.lixir-interiors.com/api/password/reset', values);
        console.log('Success:', response);
        setIsLoading(false);
        navigate('/login');
      } catch (error) {
        setIsLoading(false);


        if (axios.isAxiosError(error)) {



                      if (error.response && error.response.data && error.response.data.message) {
                        console.error('Error message:', error.response.data.message);
                        setIsError(error.response.data.message);
                      } 
                      
                      else {
                        console.error('Unexpected error:', error.message);
                        setIsError('An unexpected error occurred.');
                      }

        } 
        
        
        else {
          console.error('Unexpected error:', (error as Error).message);
          setIsError('An unexpected error occurred.');
        }



      } finally {
        setSubmitting(false);
      }


    },
  });




  return (

<div className='mt-36' >

<form className="form" onSubmit={formik.handleSubmit}>
      <p className="title"> Verify and Reset Password </p>
      <p className="message">Signup now and get full access to our app.</p>

  
   
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
          placeholder="Enter your New password"
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

        <label>
        {formik.touched.password_confirmation && !formik.errors.password_confirmation ? (
          <div className="text-green-500 py-2 mt-3 rounded-xl absolute top-[-10px] end-0">
            <i className="fa-solid fa-circle-check ms-2"></i>
          </div>
        ) : ""}
        <input
          required
          placeholder="Re New password"
          type="password"
          className="input"
          {...formik.getFieldProps('password_confirmation')}
        />
        {formik.touched.password_confirmation && formik.errors.password_confirmation ? (
          <div className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
            {formik.errors.password_confirmation}
            <i className="fa-solid fa-bug ms-2"></i>
          </div>
        ) : null}
      </label>
        <label>
        {formik.touched.reset_code && !formik.errors.reset_code ? (
          <div className="text-green-500 py-2 mt-3 rounded-xl absolute top-[-10px] end-0">
            <i className="fa-solid fa-circle-check ms-2"></i>
          </div>
        ) : ""}
        <input
          required
          placeholder="reset code"
          type="password"
          className="input"
          {...formik.getFieldProps('reset_code')}
        />
        {formik.touched.reset_code && formik.errors.reset_code ? (
          <div className="error text-red-500 px-3 py-2 mt-3 rounded-xl">
            {formik.errors.reset_code}
            <i className="fa-solid fa-bug ms-2"></i>
          </div>
        ) : null}
      </label>

      {isError?<h6 className='text-red-600 ms-3' > {isError} </h6>: "" }
      
      <button type="submit" className="submit w-32 mt-2 flex justify-center ">  
{ isLoading? <LoaderButtons></LoaderButtons>  :'Send' }

      </button>
   
    </form>
 </div>
  );
};

export default VerificationCode;

