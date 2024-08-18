import { Link } from "react-router-dom"
import styles from './Footer.module.css'

export default function Footer() {

    
const styles_GooglePlay={

    border:"1px solid aqua",
    textDecoration: "none",
    color:'black'

    
    }
  return (
    <footer className={`w-[80%] grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 ${styles.footer} `} >

        <div className="socialIcons flex justify-center my-8  ">

      <Link target="_blank" to={`https://www.facebook.com/jecard26`} > <i className={`fa-brands fa-facebook text-black  text-2xl ${styles.footerIcons}`}></i></Link>
      <Link target="_blank" to={`https://x.com/jecard_ae`} > <i className= {`fa-brands fa-twitter text-black  text-2xl ${styles.footerIcons}`} ></i></Link>
      <Link target="_blank" to={`https://www.tiktok.com/@jecard_ae?_t=8ogQtETJpCa&_r=1`} > <i className= {`fa-brands fa-tiktok text-black  text-2xl ${styles.footerIcons}`} ></i></Link>
      <Link target="_blank" to={`https://www.instagram.com/jecard_ae`} > <i className= {`fa-brands fa-square-instagram text-black  text-2xl ${styles.footerIcons} `} ></i> </Link>







       
       
       
        
        </div>

        <div className= {`flex justify-center my-8 ${styles.googlePlayAppStore} `} >

        <div className={` ${styles.GooglePlay}`}  ><Link to={''} style={styles_GooglePlay} className={`rounded-xl p-2 ${styles.GooglePlay_link}  `} ><i className= {`fa-brands fa-google-play  text-2xl ${styles.footerIcons} `} ></i> Google Play</Link> </div>
        <div className={` ${styles.GooglePlay}`} > <Link to={``} style={styles_GooglePlay} className={`rounded-xl p-2 ${styles.GooglePlay_link} `}  ><i className={`fa-brands fa-apple  text-2xl ${styles.footerIcons} `} ></i> App Store</Link>  </div>

        </div>
      
    </footer>
  )
}
