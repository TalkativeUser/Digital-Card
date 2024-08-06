import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = () => {
  return (
    <div className='flex justify-center' >
      <QRCodeCanvas
// ال value  دى قيمتها هتتغير لما نرفع الكلام ده على سيرفر او على الجيت الكلام ده فى ال QRCodeComponent

        value={`http://${window.location.host}/${localStorage.getItem('yourDomain') as string }`}
        size={90}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin={false}
        imageSettings={{
          src: "https://static.zpao.com/favicon.png",
          x: undefined,
          y: undefined,
          height: 24,
          width: 24,
          excavate: true,
        }}
      />

    </div>
  );
};

export default QRCodeComponent;
