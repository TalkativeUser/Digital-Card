
import { useContext, useEffect,useState } from 'react';
import { cartContext, IpropLink } from '../../context/ForProvided';
import styles from './Dash.module.css';
import { useMediaQuery } from 'react-responsive';
import { ColorRing } from 'react-loader-spinner';
import useClipboard from 'react-use-clipboard';
import QRCodeComponent from '../../components/MyQRCode/MyQRCode';
import { Link, useParams } from 'react-router-dom';
import defImage from '../../../images/add-profile-bigger.jpg';
import axios from 'axios';
import { Helmet } from 'react-helmet';

interface mobileCardIProps {
  width: number;
  height: number;
  caseProp?: string;
}

export default function MobileCard({ width, height }: mobileCardIProps) {



  const context = useContext(cartContext);
  let { userId } = useParams();
  const isSmallScreen = useMediaQuery({ maxWidth: 299 });
  const topPosition = isSmallScreen ? 195 : 190;
  const [userDataForVisitor, setUserDAtaForVisitor] = useState<any>();
  const [numOfTruncate,setNumOfTruncate]=useState<number> (16)

  
  
  const [isCopied, setCopied] = useClipboard(
    `http://${window.location.host}/Digital-Card/#/digitalCard/${userId?userId: context?.userData&& context?.userData.id? context?.userData.id:""  }`,
    {
      successDuration: 2000, // إعادة تعيين حالة isCopied بعد 2000 ملي ثانية (2 ثانية)
    }
  );

  useEffect(() => {
    const handleResize = () => {
      

        console.log("window.innerWidth => ", window.innerWidth);
        


        if(window.innerWidth <=300) {
          setNumOfTruncate(9)
        } 
      
  
        else {
          setNumOfTruncate(16)
  
  
        }

    };
  
    window.addEventListener('resize', handleResize);
  
    // Initial log on component mount
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  async function getUserData() {
    try {
      const response = await axios.get(`https://card.lixir-interiors.com/api/user-cars/${userId}`);
      setUserDAtaForVisitor(response.data);
    } catch (error) {
      console.log('user error without token => ', error);
    }
  }

  useEffect(()=>{

    console.log('user data without token => ', userDataForVisitor);



  },[userDataForVisitor])

  useEffect(() => {
    if (userId) {

      getUserData();
      console.log('user id => ', userId);

    } 
  }, [userId]);

  const handleSaveContact = (item:IpropLink) => {
    // معلومات جهة الاتصال
    const contactName = item.title;
    const phoneNumber = item.link;

    // إنشاء vCard
    const vCardData = `BEGIN:VCARD
      VERSION:3.0
      FN:${contactName}
      TEL:${phoneNumber}
      END:VCARD`;

    // تحويل vCard إلى Blob
    const blob = new Blob([vCardData], { type: 'text/vcard' });

    // إنشاء رابط للتنزيل
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${contactName}.vcf`;

    // الضغط على الرابط لتنزيل vCard
    link.click();

    // تحرير الذاكرة
    URL.revokeObjectURL(url);
  };


  return (
    <div className='mt-5 rounded-3xl overflow-hidden' style={{backgroundColor:"transparent"}} >

        <Helmet>

                <meta charSet="utf-8" />
                {/* <title>Digital Card</title> */}
                {/* <link rel="canonical" href="http://mysite.com/verify-reset-password" /> */}

                {/* وصف الصفحة */}
                <meta name="description" content=" this page for users watchin user data " />

                {/* كلمات مفتاحية */}
                <meta name="keywords" content=" mobile card mode  " />

                {/* معلومات إضافية للسيو */}
                <meta name="author" content="jecard" />
                <meta name="contact" content="morshedy480@gmail.com" />


        </Helmet>
       
        <div
          style={{ backgroundColor: 'white', width: `${width}px`, height: `${height}px` }}
          className={`rounded-3xl overflow-y-auto flex flex-col gap-0 relative bg-green-800  ${styles.mobileStyles}`}
        >

          <i
            className={`fa-solid fa-arrow-up-from-bracket absolute text-xl top-[13px] left-[13px] cursor-pointer`}
            onClick={() => {
              context?.setQRcodeMobileMode(true);
            }}
            style={{
              
             color: userId&&userDataForVisitor?  userDataForVisitor.cards&&userDataForVisitor.cards[0]?userDataForVisitor.cards[0].share_color :""
                  
              :context?.arrayOfCards&&context?.arrayOfCards[0]?context?.arrayOfCards[0].share_color:""            
            
            }}
          ></i>

          {context?.QRcodeMobileMode ? (
            <div className={`absolute z-10 top-8 left-8`}>
              <div className="QRCodeOverLay w-[150px] bg-gray-200 py-3 px-6 rounded-lg relative">
                <i
                  onClick={() => {
                    context?.setQRcodeMobileMode(false);
                  }}
                  className="fa-solid fa-xmark text-red-600 rounded-md px-2 py-1 cursor-pointer absolute top-0 right-0"
                ></i>

                <p onClick={setCopied} className="hover:text-green-600 cursor-pointer flex items-center mt-3">
                  {isCopied ? 'copied! ✅' : <>Copy Link! <i className="fa-regular fa-copy ml-2 mt-1"></i></>}
                </p>
                <QRCodeComponent />
              </div>
            </div>
          ) : (
            ''
          )}

          {context?.LOADERforDetailsCard ? (
            <div style={{ paddingBlock: '82px' }} className="flex justify-center items-center">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
            </div>
          ) : userId ? (
            <>

             {  userDataForVisitor ? <>
             
                                          {userDataForVisitor.cards[0].image && userDataForVisitor.cards[0].image !== 'add-profile-bigger.jpg' ? (
                                            <div className="h-60 flex justify-center items-center">
                                              <img
                                                src={`https://card.lixir-interiors.com/public/storage/${userDataForVisitor.cards[0].image}`}
                                                alt="Uploaded"
                                                className={`h-[100%] w-[100%] ${styles.profileImage} `}
                                              />
                                            </div>
                                          ) : (
                                            <div className="h-60 flex justify-center items-center">
                                              <img src={defImage} alt="Uploaded" className="h-60 w-[100%]" />
                                            </div>
                                          )}
                                    
                                    
                                    
                                    </>
             
                              :  ""
                    
                    }

            </>
          ) : (
            <>
              {context?.profileImage && context.profileImage !== 'add-profile-bigger.jpg' ? (
                <div className="h-60 flex justify-center items-center">
                  <img
                    src={`https://card.lixir-interiors.com/public/storage/${context?.profileImage as string}`}
                    alt="Uploaded"
                    className={`h-[100%] w-[100%] ${styles.profileImage} `}
                  />
                </div>
              ) : (
                <div className="h-60 flex justify-center items-center">
                  <img src={defImage} alt="Uploaded" className="h-60 w-[100%]" />
                </div>
              )}
            </>
          )}

          <div
            className={`w-[100%]`}
            style={{ transform: 'rotateY(180deg)', position: 'absolute', top: topPosition }}
          >
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill={ userId&&userDataForVisitor?  userDataForVisitor.cards&&userDataForVisitor.cards[0]?userDataForVisitor.cards[0].background_color :""
                  
                  :context?.arrayOfCards&&context?.arrayOfCards[0]?context?.arrayOfCards[0].background_color:""
                 }
                fillOpacity="1"
                d="M0,0L80,26.7C160,53,320,107,480,154.7C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              ></path>
            </svg>
          </div>




          <ul  className="px-3 relative mt-4">
            {userId ? 

                <>
                       {  userDataForVisitor ? <> {



                          userDataForVisitor.cards[0].card_links.map((item: any, index: number) => {

                            const linkStr = item.title.toString();  // تأكد من تحويل الرابط إلى سلسلة
                            const truncatedLink = linkStr.length > numOfTruncate ? linkStr.slice(0, numOfTruncate) + '....' : linkStr;                            return (

                              <li key={index} className="flex items-center mb-3 px-1 py-1 rounded-full " 
                              style={{ border:`1px solid ${userDataForVisitor.cards&&userDataForVisitor.cards[0]&&userDataForVisitor.cards[0].background_color} `}}

                              >
                                <div style={{ backgroundColor:userDataForVisitor.cards&&userDataForVisitor.cards[0]?userDataForVisitor.cards[0].background_color:"" }} className="cyrcleIcon w-9 h-9 rounded-full flex justify-center items-center">
                                  <i style={{ color:userDataForVisitor.cards&&userDataForVisitor.cards[0]?userDataForVisitor.cards[0].icon_color:"" }} className={`${item.logo} text-xl`}></i>
                                </div>
                                {(/^\d+$/.test(item.link)) ? (
                                  <p style={{ color: userDataForVisitor.cards&&userDataForVisitor.cards[0]?userDataForVisitor.cards[0].title_color:""  }} className="ms-2 mb-0 no-underline cursor-pointer " 
                                  onClick={()=> {handleSaveContact(item) } } >{truncatedLink}</p>
                                ) : (
                                  <Link to={item.link} target="_blank" style={{ color: userDataForVisitor.cards&&userDataForVisitor.cards[0]?userDataForVisitor.cards[0].title_color:""  }} className="ms-2 mb-0 no-underline">{truncatedLink}</Link>
                                )}
                              </li>

                            );

                          })  }    </> :<>      < p className='mt-14 text-center' >There is not any links</p>     </>






                       }
                
                
                
                
                </>
            
            
            
            
            
            : (
              context?.arrayAllLinks && context?.arrayAllLinks.length > 0 ? (
                context.arrayAllLinks.map((item, index) => {

                  const linkStr = item.title.toString();  // تأكد من تحويل الرابط إلى سلسلة
                  const truncatedLink = linkStr.length > numOfTruncate ? linkStr.slice(0, numOfTruncate) + '....' : linkStr;


                  return (
                    <li key={index} className="flex items-center mb-3  px-1 py-1 rounded-full "
                    style={{ border: `1px solid ${context?.arrayOfCards&&context?.arrayOfCards[0]&&context?.arrayOfCards[0].background_color}`}}
                    >
                      <div style={{ backgroundColor: context?.arrayOfCards&&context?.arrayOfCards[0]&&context?.arrayOfCards[0].background_color }} className="cyrcleIcon w-9 h-9 rounded-full flex justify-center items-center">
                        <i style={{ color: context?.arrayOfCards&&context?.arrayOfCards[0]&&context?.arrayOfCards[0].icon_color }} className={`${item.logo} text-xl`}></i>
                      </div>
                      {/*   هنحط مكان البراجراف ده ممكن البراجراف او اللينك اللى بيحفظ فى جهة الاتصال  */}

                      {(/^\d+$/.test(item.link)) ? (
                        <p style={{ color: context?.arrayOfCards&&context?.arrayOfCards[0]&&context?.arrayOfCards[0].title_color }} className="ms-2 mb-0 no-underline cursor-pointer" 
                        
                        onClick={()=> {handleSaveContact(item) } }
                        >{truncatedLink}</p>
                      ) : (
                        <Link to={item.link} target="_blank" style={{ color: context?.arrayOfCards&&context?.arrayOfCards[0]&&context?.arrayOfCards[0].title_color }} className="ms-2 mb-0 no-underline">{truncatedLink}</Link>
                      )}
                    </li>
                  );
                })
              ) : (
                <>
                  <p className={`mt-5 text-center ${styles.pleaseAddLink}`}>There is not links </p>
                </>
              )
            )}
          </ul>



   {/* add here the link of project */}


        </div>
      
     </div>
  );
}



