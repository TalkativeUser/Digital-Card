import { Navigate } from "react-router-dom";
import { cartContext } from "../../context/ForProvided";
import { useContext } from "react";

export default function ProtectedRoute({ children }: any) {
  const contextValue = useContext(cartContext);

  if (!contextValue || contextValue.token==null) {
    console.log( 'token before return Login', contextValue?.token);
    
    return <Navigate to='/login' />;
  }

  console.log( 'token before return FAQ', contextValue?.token);


  return <>{children}</>;
}
// import { Navigate } from "react-router-dom";
// import { cartContext } from "../../context/ForProvided";
// import { useContext } from "react";

// export default function ProtectedRoute({ children }: any) {

//   if (!localStorage.getItem('token')) {
    
//     return <Navigate to='/login' />;
//   }



//   return <>{children}</>;
// }