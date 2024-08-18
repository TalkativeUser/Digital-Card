

import MobileCard from '../Dashboard/MobileCard';
import { useMediaQuery } from 'react-responsive';

export default function BusinessCard() {
  // تحديد عرض الشاشة أقل من 300 بكسل
  const isSmallScreen = useMediaQuery({ maxWidth: 299 });

  // تحديد القيم بناءً على عرض الشاشة
  const width = isSmallScreen ? 210 : 265;
  const height = isSmallScreen ? 430 : 520;

  

  return (
    <div className='flex justify-center items-center vh-100'>
      <MobileCard width={width} height={height} caseProp={'BusinessCard'}   />
    </div>
  );
}