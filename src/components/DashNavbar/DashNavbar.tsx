import React from 'react'
import { NavLink } from 'react-router-dom'
import './DashNavbar.css'
export default function DashNavbar() {
  return (
    <div>
      

        <nav className="">
            <ul className="flex p-0 rounded-xl gap-0 justify-center ">

                <li> <NavLink className={`text-black no-underline  relative navlinkDash `}  to={'linksdash'} > Links </NavLink> </li>
                <li> <NavLink className={`text-black no-underline  relative navlinkDash `}  to={'settingsdash'} >Settings </NavLink> </li>
                <li> <NavLink className={`text-black no-underline  relative navlinkDash `}  to={'designdash'} >Design</NavLink> </li>

            </ul>
        
        </nav>

    </div>
  )
}
