

import { Helmet } from 'react-helmet'
import styles from './FAQ.module.css'
export default function FAQ() {




  return (
    <div className=" " >

            <Helmet>
                  <meta charSet="utf-8" />
                  <title>Frequently Asked Questions (FAQ)</title>

                 
                  <meta name="description" content="Find answers to the most commonly asked questions about our products, services, and policies. Our FAQ page provides detailed information to help you understand everything you need to know." />
                  
                  {/* كلمات مفتاحية */}
                  <meta name="keywords" content="FAQ, Frequently Asked Questions, customer support, help, questions and answers" />
                  
                  {/* معلومات إضافية للسيو */}
                  <meta name="author" content="jecard , mohammed morshedy " />
                              
                                
                  
              </Helmet>

<h1 className= {`flex justify-center items-center h-36 pt-44 pb-36 ${styles.title} `}  style={{background:"linear-gradient(to top, #00fdfd -8%, rgb(87 210 87))"}} >
Frequently Asked Questions</h1>

      <div className='container ' >

          <div className='ps-4 pt-4' >
                        <details   >

              <summary className={`text-xl font-bold  my-4 ${styles.summaryTitle_FAQ} `} >

                  Why do i need Jecard
              </summary>

              <p className="  p-3" >



                 jecard are the new personal websites. Platforms like Instagram, Twitter, and TikTok only allow for one link in the bio. Using bio link lets you link to all your pages — websites, social posts, videos, music — making it easier for your audience to discover all your content.
 
                    jecard is also incredibly fast, elegantly designed, and optimized for clicks.              </p>
              </details>


              <details  >

              <summary  className={`text-xl font-bold  my-4 ${styles.summaryTitle_FAQ} `}>

                   Is it really 100 % free
              </summary>

              <p className="  p-3" >




              It is. All the features you enjoy — analytics, themes, embeds — will be free for you, forever.

             You only pay if you'd like to use a custom domain to host your bio link.              </p>
              </details>


              <details    >

              <summary className={`text-xl font-bold  my-4 ${styles.summaryTitle_FAQ} `}>

                   Why choose jeCard over the alternative
              </summary>

              <p className="  p-3" >




              jecard was designed by the team at Buy Me a Coffee for our 500,000+ creators.

               We obsessed over speed, design, and above all, giving users complete control over their audience. We hope you like it.
              </p>
              </details>

           
          </div>

      </div>
    </div>
  )
}
