
import { QRCodeCanvas } from 'qrcode.react';
import {useContext, useRef } from 'react';
import { cartContext } from '../../context/ForProvided';
import { useParams } from 'react-router-dom';


const QRCodeComponent = () => {
  const qrRef = useRef<HTMLDivElement>(null);
  const context=useContext(cartContext)
  let {userId}=useParams()

  const downloadQRCode = () => {
    const canvas = qrRef.current?.querySelector('canvas');
    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = url;
      a.download = 'qrcode.png';
      a.click();
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <div ref={qrRef}>
        <QRCodeCanvas
          value={`http://${window.location.host}/Digital-Card/#/digitalCard/${userId?userId: context?.userData&& context?.userData.id? context?.userData.id:""}`}
          size={130}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin={false}
        />
      </div>
      <button
        onClick={downloadQRCode}
        className='mt-1 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-700'
      >
        Download
      </button>
    </div>
  );
};

export default QRCodeComponent;
