// //  الكود ده بيقص الصوره عادى لكن الاحداثيات بتاعة الصوره بتكون بايظه خالص 

// import { useState } from "react";
// import Cropper, { Area, Point } from "react-easy-crop";

// const CoverCroppedImage = () => {
//   const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
//   const [croppedImage, setCroppedImage] = useState<string | null>(null);
//   const [cropSize, setCropSize] = useState({ width: 240, height: 240 });

//   const imageSrc =
//     "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";

//   const onCropComplete = (croppedAreaPixels: Area) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   };

//   const showCroppedImage = async () => {
//     if (croppedAreaPixels) {
//       try {
//         const croppedImageTest = await getCroppedImg(
//           imageSrc,
//           croppedAreaPixels
//         );
//         console.log("Cropped Image:", croppedImageTest);
//         setCroppedImage(croppedImageTest);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//   };

//   const onClose = () => {
//     setCroppedImage(null);
//   };

//   // Function to create an image from a URL
//   const createImage = (url: string): Promise<HTMLImageElement> =>
//     new Promise((resolve, reject) => {
//       const image = new Image();
//       image.addEventListener("load", () => resolve(image));
//       image.addEventListener("error", (error) => reject(error));
//       image.setAttribute("crossOrigin", "anonymous"); // To avoid cross-origin issues
//       image.src = url;
//     });

//   // Function to convert degrees to radians
//   const getRadianAngle = (degreeValue: number): number => {
//     return (degreeValue * Math.PI) / 180;
//   };

//   // Function to calculate rotated image size
//   const rotateSize = (
//     width: number,
//     height: number,
//     rotation: number
//   ): { width: number; height: number } => {
//     const rotRad = getRadianAngle(rotation);

//     return {
//       width:
//         Math.abs(Math.cos(rotRad) * width) +
//         Math.abs(Math.sin(rotRad) * height),
//       height:
//         Math.abs(Math.sin(rotRad) * width) +
//         Math.abs(Math.cos(rotRad) * height),
//     };
//   };

//   // Function to get the cropped image
//   const getCroppedImg = async (
//     imageSrc: string,
//     pixelCrop: Area,
//     rotation = 0,
//     flip = { horizontal: false, vertical: false }
//   ): Promise<string | null> => {
//     const image = await createImage(imageSrc);
//     const canvas = document.createElement("canvas");
//     const ctx = canvas.getContext("2d");

//     if (!ctx) {
//       return null;
//     }

//     const rotRad = getRadianAngle(rotation);

//     // Calculate bounding box of the rotated image
//     const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
//       image.width,
//       image.height,
//       rotation
//     );

//     // Set canvas size to match the bounding box
//     canvas.width = bBoxWidth;
//     canvas.height = bBoxHeight;

//     // Translate canvas context to a central location to allow rotating and flipping around the center
//     ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
//     ctx.rotate(rotRad);
//     ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
//     ctx.translate(-image.width / 2, -image.height / 2);

//     // Draw rotated image
//     ctx.drawImage(image, 0, 0);

//     const croppedCanvas = document.createElement("canvas");
//     const croppedCtx = croppedCanvas.getContext("2d");

//     if (!croppedCtx) {
//       return null;
//     }

//     // Set the size of the cropped canvas
//     croppedCanvas.width = pixelCrop.width;
//     croppedCanvas.height = pixelCrop.height;

//     // Draw the cropped image onto the new canvas
//     croppedCtx.drawImage(
//       canvas,
//       pixelCrop.x,
//       pixelCrop.y,
//       pixelCrop.width,
//       pixelCrop.height,
//       0,
//       0,
//       pixelCrop.width,
//       pixelCrop.height
//     );

//     // Return the cropped image as a blob
//     return new Promise((resolve) => {
//       croppedCanvas.toBlob((file) => {
//         if (file) {
//           resolve(URL.createObjectURL(file));
//         }
//       }, "image/jpeg");
//     });
//   };

//   const increaseCropSize = () => {
//     setCropSize((prev) => ({
//       width: prev.width + 20,
//       height: prev.height + 20,
//     }));
//   };

//   const decreaseCropSize = () => {
//     setCropSize((prev) => ({
//       width: Math.max(100, prev.width - 20),
//       height: Math.max(100, prev.height - 20),
//     }));
//   };
//   return (
//     <div>
//       <div
//         style={{
//           width: "300px",
//           height: "300px",
//           position: "relative",
//           backgroundColor: "#333",
       
//         }}
//       >
//         <Cropper
//           image={imageSrc}
//           crop={crop}
//           cropSize={cropSize}
//           zoom={zoom}
//           aspect={4 / 3}
//           onCropChange={setCrop}
//           onCropComplete={onCropComplete}
//           onZoomChange={setZoom}
//         />


//       </div>
//       <div
//         style={{
//           background: "gray",
//           width: "50%",
//           display: "flex",
//           justifyContent: "space-between",
//         }}
//       >
//         <span
//           onClick={decreaseCropSize}
//           className={``}
//           style={{ backgroundColor: "blue", color: "white", fontSize: "30px" }}
//         >
//           -
//         </span>
//         <span
//           onClick={increaseCropSize}
//           className={` `}
//           style={{ backgroundColor: "red", color: "whith", fontSize: "30px" }}
//         >
//           +
//         </span>
//       </div>
//       <button className="px-4 py-2 bg-indigo-500 mt-3 ms-3 rounded-lg "  onClick={showCroppedImage}>Show Cropped Image</button>

//       {croppedImage && (
//         <div>
//           <button className="px-4 py-2 bg-indigo-500"  onClick={onClose}>Close</button>
//           <img style={{ width: "300px", height:"300px" }} src={croppedImage} alt="Cropped" />
//         </div>
//       )}
  
//     </div>
//   );
// };

// export default CoverCroppedImage;



import { useState } from "react";
import Cropper, { Area, Point } from "react-easy-crop";

const CoverCroppedImage = () => {
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [cropSize, setCropSize] = useState({ width: 240, height: 240 });

  const imageSrc =
    "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000";


  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };


  
  const showCroppedImage = async () => {
    if (croppedAreaPixels) {
      try {
        const croppedImageTest = await getCroppedImg(
          imageSrc,
          croppedAreaPixels
        );
        console.log("Cropped Image:", croppedImageTest);
        setCroppedImage(croppedImageTest);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const onClose = () => {
    setCroppedImage(null);
  };

  // Function to create an image from a URL
  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener("load", () => resolve(image));
      image.addEventListener("error", (error) => reject(error));
      image.setAttribute("crossOrigin", "anonymous"); // To avoid cross-origin issues
      image.src = url;
    });

  // Function to convert degrees to radians
  const getRadianAngle = (degreeValue: number): number => {
    return (degreeValue * Math.PI) / 180;
  };

  // Function to calculate rotated image size
  const rotateSize = (
    width: number,
    height: number,
    rotation: number
  ): { width: number; height: number } => {
    const rotRad = getRadianAngle(rotation);

    return {
      width:
        Math.abs(Math.cos(rotRad) * width) +
        Math.abs(Math.sin(rotRad) * height),
      height:
        Math.abs(Math.sin(rotRad) * width) +
        Math.abs(Math.cos(rotRad) * height),
    };
  };

  // Function to get the cropped image
  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: Area,
    rotation = 0,
    flip = { horizontal: false, vertical: false }
  ): Promise<string | null> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      return null;
    }

    const rotRad = getRadianAngle(rotation);

    // Calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
      image.width,
      image.height,
      rotation
    );

    // Set canvas size to match the bounding box
    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;

    // Translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
    ctx.translate(-image.width / 2, -image.height / 2);

    // Draw rotated image
    ctx.drawImage(image, 0, 0);

    const croppedCanvas = document.createElement("canvas");
    const croppedCtx = croppedCanvas.getContext("2d");

    if (!croppedCtx) {
      return null;
    }

    // Set the size of the cropped canvas
    croppedCanvas.width = pixelCrop.width;
    croppedCanvas.height = pixelCrop.height;

    // Draw the cropped image onto the new canvas
    croppedCtx.drawImage(
      canvas,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height
    );

    // Return the cropped image as a blob
    return new Promise((resolve) => {
      croppedCanvas.toBlob((file) => {
        if (file) {
          resolve(URL.createObjectURL(file));
        }
      }, "image/jpeg");
    });
  };

  const increaseCropSize = () => {
    setCropSize((prev) => ({
      width: prev.width + 20,
      height: prev.height + 20,
    }));
  };

  const decreaseCropSize = () => {
    setCropSize((prev) => ({
      width: Math.max(100, prev.width - 20),
      height: Math.max(100, prev.height - 20),
    }));
  };
  return (
    <div>
      <div
        style={{
          width: "300px",
          height: "300px",
          position: "relative",
          backgroundColor: "#333",
        }}
      >
        <Cropper
          image={imageSrc}
          crop={crop}
          cropSize={cropSize}
          zoom={zoom}
          aspect={4 / 3}
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <div
        style={{
          background: "gray",
          width: "50%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span
          onClick={decreaseCropSize}
          className={``}
          style={{ backgroundColor: "blue", color: "white", fontSize: "30px" }}
        >
          -
        </span>
        <span
          onClick={increaseCropSize}
          className={` `}
          style={{ backgroundColor: "red", color: "whith", fontSize: "30px" }}
        >
          +
        </span>
      </div>
      <button onClick={showCroppedImage}>Show Cropped Image</button>
      {croppedImage && (
        <div>
          <button onClick={onClose}>Close</button>
          <img style={{ width: "300px" }} src={croppedImage} alt="Cropped" />
        </div>
      )}
    </div>
  );
};

export default CoverCroppedImage;
