import "./App.css";
import {

  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import FAQ from "./pages/FAQ/FAQ";
import {ForProvided} from "./context/ForProvided";
import Layout from "./components/Layout/Layout";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import ForgetPass from "./pages/ForgetPass/ForgetPass";
import VerificationCode from "./pages/VerificationCode/VerificationCode";
import Dashboard from "./pages/Dashboard/Dashboard";
import ProtectedRoute from "./context/ProtectedRoute";
import LinksDash from "./pages/LinksDash/LinksDash";
import SettingsDash from "./pages/SettingsDash/SettingsDash";
import DesignDash from "./pages/DesignDash/DesignDash";
import BusinessCard from "./pages/BusinessCard/BusinessCard";
import { useEffect, useRef } from "react";
import { Offline} from "react-detect-offline";
import Users from "./pages/Users/Users";



const router = createHashRouter(
  createRoutesFromElements( <>
 
 <Route path="/digitalCard/:userId"  element={<BusinessCard></BusinessCard>} ></Route>
     

       <Route path="/" element={ <Layout></Layout> } >

       <Route index element={<Home></Home>} ></Route>
        <Route path="/home" element={ <Home></Home> } ></Route>
        <Route path="/faq" element={  <FAQ></FAQ> } ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/signUp" element={<SignUp></SignUp>} ></Route>
        <Route path="/forgetPass" element={<ForgetPass></ForgetPass>} ></Route>
        <Route path="/verify_resetPass" element={<VerificationCode></VerificationCode> } ></Route>
        <Route path="/users" element={ <Users /> } ></Route>

       </Route>






       <Route path="/dashboard" element={<ProtectedRoute><Dashboard></Dashboard></ProtectedRoute> } >
       
       
            <Route index element={<LinksDash></LinksDash>} ></Route>
            <Route path="linksdash" element={ <LinksDash></LinksDash> } ></Route>
            <Route path="settingsdash" element={  <SettingsDash></SettingsDash> } ></Route>
            <Route path="designdash" element={<DesignDash></DesignDash>} ></Route>
            
       </Route>

        </>
  )
);


export default function App() {

  const displayBTNWhenScroll=useRef<HTMLButtonElement>(null)


  const handleScroll = () => {
    if(window.scrollY < 200 && displayBTNWhenScroll.current) {

      displayBTNWhenScroll.current.style.display='none'

    }


    else   {


      if(displayBTNWhenScroll.current) {

        displayBTNWhenScroll.current.style.display='flex'

      }

    }  
      

  } 

  document.addEventListener('scroll', handleScroll);




useEffect(()=>{

console.log(' your domain is ----> ', localStorage.getItem('yourDomain'));
  

},[])

  return <>

      <ForProvided>  

            <RouterProvider router={router} ></RouterProvider>


            <Offline>
          <div className="position-fixed bottom-0 start-0 p-2 rounded-md m-2 bg-dark text-white ">
            you are offline please check your network
          </div>
        </Offline>

        <button style={{display:"none"}}  ref={displayBTNWhenScroll} className=" justify-center items-center p-3 bg-indigo-600 fixed end-[25px] bottom-[25px] z-10 rounded-full w-12 h-12 " 
           onClick={()=> {    scroll({
          top: 0, 
          behavior: 'smooth'
          });}}
          >
        
        <i className="fa-solid fa-arrow-up text-white text-xl "></i> </button>

      

      </ForProvided>
  </>;
}


