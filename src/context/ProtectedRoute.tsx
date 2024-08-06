import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { cartContext } from './ForProvided';

interface ReactProtectedProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({children}:ReactProtectedProps) {
  const context = useContext(cartContext);

  if (!context) {

    console.log(` context is false`);
    
    return <Navigate to='/home' />;
  }

  const { f_L_token: token } = context;

  if (localStorage.getItem('f_L_token') === null) {

    console.log(` Token is null`);

    return <Navigate to='/home' />;
  }

  return <>
  {children}
  </>
}
