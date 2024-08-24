import axios from "axios";
import { createContext, useEffect, useState } from "react";

// شويه حاجات لازم تتعدل بعد ما ارفع المشروع على الجيت او السيرفر الحقيقى  

// الخطوه بتاعة ال text to copy  لازم تتعدل برضه بعد ما ارفع على السيرفر او الجيت 
// ال value  دى قيمتها هتتغير لما نرفع الكلام ده على سيرفر او على الجيت الكلام ده فى ال QRCodeComponent


interface IPropsForProvided {  
  f_L_token: string | null;
  setF_L_token: React.Dispatch<React.SetStateAction<string | null>>;
  inpColorIcon:string;
  setInpColorIcon:React.Dispatch<React.SetStateAction<string>>;
  inpColorInnerIcon:string;
  setInpColorInnerIcon:React.Dispatch<React.SetStateAction<string>>;
  titleIcon:string;
  setTitleIcon:React.Dispatch<React.SetStateAction<string>>;
  backgroundMobile:string;
  setBackgroundMobile:React.Dispatch<React.SetStateAction<string>>;
  QRcodeBigScreen:boolean,
  setQRcodeBigScreen:React.Dispatch<React.SetStateAction<boolean>>;
  QRcodeSmallScreen:boolean,
  setQRcodeSmallScreen:React.Dispatch<React.SetStateAction<boolean>>;
  QRcodeMobileMode:boolean,
  setQRcodeMobileMode:React.Dispatch<React.SetStateAction<boolean>>;
  choiesdIcon:string;
  setChoiesdIcon:React.Dispatch<React.SetStateAction<string>>;
  profileImage:string|ArrayBuffer|null;
  setProfileImage:React.Dispatch<React.SetStateAction<string | ArrayBuffer | null>>;
  arrayAllLinks:IpropLink[]|null;
  setArrayAllLinks:React.Dispatch<React.SetStateAction<IpropLink[]|null>>
  arrayOfCards:any;
  setArrayOfCards:React.Dispatch<React.SetStateAction<any>>
  userData:any;
  setUserData:React.Dispatch<React.SetStateAction<any>>
  isUthenticated:boolean;
  setIsUthenticated:React.Dispatch<React.SetStateAction<boolean>>
  getAllCards:() => Promise<void>; 
  deleteAccount:( deleteIdFromAllUsers?:number) => Promise<void>; 
  signOut:() => void; 
  handleSaveChangesAddButton:(values:FormInputsProps,linkUpdatedID:number|undefined) => Promise<void>; 
  setLOADERforDetailsCard:React.Dispatch<React.SetStateAction<boolean>>
  LOADERforDetailsCard:boolean;
  setLayOut:React.Dispatch<React.SetStateAction<boolean>>
  updateLayOut:boolean;
  setUpdateLayOut:React.Dispatch<React.SetStateAction<boolean>>
  layOut:boolean;
  firstCharInUserName:string;
  setFirstCharInUserName:React.Dispatch<React.SetStateAction<string>>
  isAdmin:null| boolean;
  setIsAdmin:React.Dispatch<React.SetStateAction<null | boolean> >
}

interface FormInputsProps {
  linkTitle: string
  link: string
}
export interface IpropLink{

  title:string,
  link:string,
  logo:string
  id?:number


}
interface IpropLinkPostData{

  title:string,
  link:string,
  logo:string
  card_id?:number


}

export const cartContext = createContext<IPropsForProvided | null>(null);

export function ForProvided({ children }: any) {

  const inpBackgroundIcons =localStorage.getItem('inpBackgroundIcons')??'white'
  const inpIcons =localStorage.getItem('inpIcons')??'black'
  const inpTitleIcons =localStorage.getItem('inpTitleIcons')??"white"
  const inpBackgroundMobile =localStorage.getItem('inpBackgroundMobile')??'blue'


  const [f_L_token, setF_L_token] = useState<string | null>(null);
  const [inpColorIcon,setInpColorIcon]=useState(inpBackgroundIcons)
  const [inpColorInnerIcon,setInpColorInnerIcon]=useState(inpIcons)
  const [titleIcon,setTitleIcon]=useState(inpTitleIcons)
  const [backgroundMobile,setBackgroundMobile]=useState(inpBackgroundMobile)
  const [QRcodeBigScreen,setQRcodeBigScreen]=useState(false)
  const [QRcodeSmallScreen,setQRcodeSmallScreen]=useState(false)
  const [QRcodeMobileMode,setQRcodeMobileMode]=useState(false)
  const [choiesdIcon,setChoiesdIcon]=useState('')
  const [profileImage, setProfileImage] = useState<string | ArrayBuffer | null>(null);
  const [arrayAllLinks,setArrayAllLinks]=useState<IpropLink[]|null>(null)
  const [arrayOfCards,setArrayOfCards]=useState<any> (null)
  const [userData,setUserData]=useState<any> (null)
  const [isUthenticated,setIsUthenticated]=useState<boolean> (true)
  const [LOADERforDetailsCard,setLOADERforDetailsCard]=useState(false)
  const [firstCharInUserName,setFirstCharInUserName]=useState('')
  const [layOut,setLayOut]=useState<boolean>(false)
  const [updateLayOut,setUpdateLayOut]=useState<boolean>(false)
  const [isAdmin,setIsAdmin]=useState<null | boolean> (null)
  

  //  لودر التحميل بيحصله  true and false  فى الكمبوننت اللى انا فيه ده وكمان فى ال  setting dash  عشان وانا بضيف صوره بحتاج اعمل تحميل 

  async function handleSaveChangesAddButton(values: FormInputsProps,linkUpdatedID:number|undefined) {

    console.log("link Update => " ,linkUpdatedID);
    

    let link = values.link;

    if (/^\d+$/.test(link)) {
      if (choiesdIcon === 'fab fa-whatsapp') {
        link =`https://wa.me/${link}`;
      }
    }

    console.log(' disply bearer token for verify ',f_L_token);
    
    try {

      if(linkUpdatedID) {

        const response = await axios.post(`https://card.lixir-interiors.com/api/cards-link/${linkUpdatedID}` , {
          // card_id:arrayOfCards[0].id ,
          title: values.linkTitle,
          link:link,
          logo:choiesdIcon,
        },
      
        {
          headers: {
            Authorization: `Bearer ${f_L_token}`, // تأكد من تعريف المتغير token في مكان ما في الكود
          },
        }
      );
        console.log('Response:', response.data);
     
        await getAllCards()
        console.log('added link successfully ✅');
  
      } 

      else {
        const requestData:IpropLinkPostData = {
          title: values.linkTitle,
          link: link,
          logo: choiesdIcon,
          card_id :arrayOfCards[0].id
        };
        
        // if (arrayAllLinks&&arrayAllLinks.length != 0) {
        //   requestData.card_id = arrayOfCards[0].id;
        //   console.log('there is links alredy',arrayOfCards[0].id);
          
        // }
        
        const response = await axios.post(
          'https://card.lixir-interiors.com/api/cards-link',
          requestData,
          {
            headers: {
              Authorization: `Bearer ${f_L_token}`, // تأكد من تعريف المتغير f_L_token في مكان ما في الكود
            },
          }
        );
        
        console.log('Response:', response.data);
        
        await getAllCards();
        console.log('added link successfully ✅');
      }

     


    } catch (error) {
      console.error('Error:', error);
    }

    setChoiesdIcon('');
    setLayOut(false);
    setUpdateLayOut(false)
  }

  const getAllCards = async () => {
    setLOADERforDetailsCard(true)
    try {
      const response = await axios.get('https://card.lixir-interiors.com/api/my-cards', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('f_L_token')}`
        }
      })

      console.log('response from get all cards ' , response.data);
      

      if(response.data.email==='Jihadae54@gmail.com' || response.data.email==='Jeolord37@gmail.com' || response.data.email==='morshedy480@gmail.com') {

        console.log('i am admin => ',response.data.email);
        setIsAdmin(true)
        
      } else {
        console.log('i am normal user => ',response.data.email);

        setIsAdmin(false)

        
      }

   

      setArrayOfCards(response.data.cards)
      setProfileImage(response.data.cards[0].image)  // هنفترض ان هنا مفيش كاردس خالص انت كده بقا بتجيب الصوره منين يا معلم المعلمين  وعرفنا مشكله الايميل اللى بتظهر فى السيتينج لان فعلا لو اول مره فعلا مفيش ايميل يتعرض
      setArrayAllLinks(response.data.cards[0].card_links)
      setFirstCharInUserName(response.data.name.charAt(0))
      setLOADERforDetailsCard(false)
      const { domin_name, name, email ,id } = response.data;
      setUserData({  domin_name, user_name: name, email, id});


  localStorage.setItem('yourDomain',response.data.domin_name)

    } catch (error) {
      setTimeout(()=>{  setLOADERforDetailsCard(false)},0 )

      if (axios.isAxiosError(error) && error.response) {
        console.log('error ==>>', error.response.data.message);
      } else {
        console.error('Error>>>>>>>>>>:', error);
      }
    }
  };


  async function deleteAccount (deleteIdFromAllUsers?:number) {


    console.log('hello from delete account', userData.id);

    
    try {

      const response = await axios.delete(
        `https://card.lixir-interiors.com/api/delete-users/${ deleteIdFromAllUsers ?deleteIdFromAllUsers:userData.id }`,
        {
          headers: {
            Authorization: `Bearer ${f_L_token}`
          }
        }
      );
            console.log(response);

            !deleteIdFromAllUsers?signOut():""
      
      

    } catch (error) {
      console.log('error from delete account => ',error);
      
      
    }

  }

  function signOut() {
    console.log('you are not authenticated');
    localStorage.removeItem('f_L_token');

      setF_L_token(null);
      setUserData(null);
      setArrayOfCards(null);
      setArrayAllLinks(null);
      setFirstCharInUserName('');
      setProfileImage(null);
      setIsAdmin(false)
     
 
  }

  useEffect(() => {


    const fetchCards = async () => {

      if(localStorage.getItem('f_L_token'))
    
        await getAllCards();

        else return
 
  
    }
    fetchCards();
  

  }, []); 


  useEffect(()=> {


    console.log("context?.isAdmin => ",isAdmin);


  },[isAdmin])

  useEffect(() => {

      
    const storedToken = localStorage.getItem('f_L_token');
    if (storedToken) {
      setF_L_token(storedToken);
      console.log('you are authenticated ');
      console.log(`http://${window.location.host}/${localStorage.getItem('yourDomain')} `);
      
      console.log(storedToken);
      
      
    }
else {
  console.log('you are not authenticated ');
  console.log(storedToken);

}

  }, [choiesdIcon]);

  return (
    <cartContext.Provider value={{ f_L_token,setF_L_token,inpColorIcon,
                                 setInpColorIcon,inpColorInnerIcon,setInpColorInnerIcon,
                                 titleIcon,setTitleIcon,backgroundMobile,setBackgroundMobile,
                                 QRcodeBigScreen,setQRcodeBigScreen,QRcodeSmallScreen,
                                 setQRcodeSmallScreen,QRcodeMobileMode,setQRcodeMobileMode,
                                 choiesdIcon,setChoiesdIcon,profileImage,setProfileImage,
                                 arrayAllLinks,setArrayAllLinks,arrayOfCards,setArrayOfCards,
                                 userData,setUserData,isUthenticated,setIsUthenticated,getAllCards,
                                 setLOADERforDetailsCard,LOADERforDetailsCard,firstCharInUserName,
                                 setFirstCharInUserName,layOut,setLayOut,handleSaveChangesAddButton,
                                 setUpdateLayOut,updateLayOut,deleteAccount,signOut,isAdmin,setIsAdmin

                                 }}>
      {children}
    </cartContext.Provider>
  );
}
