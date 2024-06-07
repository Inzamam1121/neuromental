// import React, { useRef, useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/zoom";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // import './styles.css';

// // import required modules
// import { Zoom, Navigation, Pagination } from "swiper/modules";

// export default function Slider() {
//   return (
//     <>
//     <div className="container mx-auto w-[90%]  my-16">
//       <Swiper
//         style={{
//           "--swiper-navigation-color": "black",
//           "--swiper-pagination-color": "black",
//         }}
//         zoom={true}
//         navigation={true}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Zoom, Navigation, Pagination]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             <div className="flex flex-col justify-center items-center">
//               <div>
//                 <img src="../Images/slider.png"/>
//               </div>

//               <p className="font-[Lato] text-[#525252] font-semibold">
//                 Hannah Schmitt
//               </p>
//               <p className="font-[Lato] text-[#525252] w-[50%]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
//                 nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
//                 magna eget nibh in turpis. Consequat duis diam lacus arcu.
//                 Faucibus venenatis felis id augue sit cursus pellentesque enim
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             <div className="flex flex-col justify-center items-center">
//               <div>
//                 <img src="../Images/sliderone.png" />
//               </div>

//               <p className="font-[Lato] text-[#525252] font-semibold">
//                 Hannah Schmitt
//               </p>
//               <p className="font-[Lato] text-[#525252] w-[50%]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
//                 nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
//                 magna eget nibh in turpis. Consequat duis diam lacus arcu.
//                 Faucibus venenatis felis id augue sit cursus pellentesque enim
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="swiper-zoom-container">
//             <div className="flex flex-col justify-center items-center">
//               <div>
//                 <img src="../Images/slidertwo.png" />
//               </div>

//               <p className="font-[Lato] text-[#525252] font-semibold">
//                 Hannah Schmitt
//               </p>
//               <p className="font-[Lato] text-[#525252] w-[60%]">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
//                 nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
//                 magna eget nibh in turpis. Consequat duis diam lacus arcu.
//                 Faucibus venenatis felis id augue sit cursus pellentesque enim
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
      
//       </Swiper>
//       </div>
//     </>
//   );
// }
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Rating from '@mui/material/Rating';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function Slider() {
    const [value, setValue] =useState(2);
  return (
    <>
    
    <div className='container mx-auto w-[90%] my-9'> 
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        className="flex justify-center items-center my-24"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            500:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
       
      >
        <SwiperSlide>
        <div className="swiper-zoom-container flex justify-center">
             <div className="flex flex-col  items-center justify-center">
               <div>
                 <img src="../Images/slider.png" className='w-[76px]'/>
               </div>

               <p className="font-[Lato] text-[#525252] font-semibold pt-3 text-center">
                 Hannah Schmitt
               </p>
               <Rating name="read-only" value={value} readOnly  className='py-3 m-auto' />
               <div className='flex justify-center'>
               <img src='../Images/image.png'/>
               <img src='../Images/image.png '/>
               </div>
             
               <p className="font-[Lato] text-[#525252] text-[Lato] pt-3">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                 nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                 magna eget nibh in turpis. Consequat duis diam lacus arcu.
                 Faucibus venenatis felis id augue sit cursus pellentesque enim
               </p>
              
             </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="swiper-zoom-container">
             <div className="flex flex-col justify-center items-center">
               <div>
                 <img src="../Images/sliderone.png"  className='w-[76px]' />
               </div>

               <p className="font-[Lato] text-[#525252] font-semibold pt-2">
                 Hannah Schmitt
               </p>
               <Rating name="read-only" value={value} readOnly className='py-3' />
               <div className='flex'>
               <img src='../Images/image.png'/>
               <img src='../Images/image.png'/>
               </div>
             
               <p className="font-[Lato] text-[#525252] text-[Lato] pt-1">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                 nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                 magna eget nibh in turpis. Consequat duis diam lacus arcu.
                 Faucibus venenatis felis id augue sit cursus pellentesque enim
               </p>
        
             </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="swiper-zoom-container flex justify-center">
             <div className="flex flex-col justify-center items-center">
             <div>
                 <img src="../Images/slidertwo.png" className='w-[76px]' />               </div>

               <p className="font-[Lato] text-[#525252] font-semibold pt-2">
                 Hannah Schmitt
               </p>
               <Rating name="read-only" value={value} readOnly  color='#F8C953' className='py-3' />
               <div className='flex'>
               <img src='../Images/image.png' className='w-[8.4]'/>
               <img src='../Images/image.png'/>
               </div>
             
               <p className="font-[Lato]  text-[Lato] text-[#525252] pt-1" >
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                 nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                 magna eget nibh in turpis. Consequat duis diam lacus arcu.
                 Faucibus venenatis felis id augue sit cursus pellentesque enim
              </p>            
            
               </div>
           </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}

