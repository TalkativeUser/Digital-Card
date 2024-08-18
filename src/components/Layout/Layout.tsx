
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar';
import './Layout.module.css'



export default function Layout() {



  

  
  
    return (
     
        
        
       <>   
        <Navbar/>
        <div className='' > <Outlet/></div>
        <Link target='_blank' to={`https://api.whatsapp.com/send?phone=971503055871`} className="flex justify-center no-underline items-center p-3 bg-green-500 fixed start-[25px] bottom-[25px] z-10 rounded-full w-12 h-12 " >
        
        <i className="fa-brands fa-whatsapp  text-white text-2xl "></i> </Link>

                 
        </>
        
      
    );
 






















  




}
