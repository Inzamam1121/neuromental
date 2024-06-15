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
  const [value, setValue] = useState(2);

  const TestimonialData = [
    {
      name: "Hannah Schmitt",
      rating: "5",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim ",
      img: "../TestimonialData/image1.png"
    }
  ]

  return (
    <div className='my-20 flex flex-col gap-10'>

      <h3 className='font-pop font-bold text-4xl text-center'>Testimonials of our <span className='text-mainpurple'>graduate students</span></h3>

      <div className='mx-auto my-20 w-[90%] lg:w-[85%] flex flex-col gap-28 lg:flex-row justify-between'>

        <div className="rounded-2xl basis-[33.33%] bg-transparent relative">
          <div className="bg-mainpurple absolute -z-10 skew-y-6 top-[10%] -left-[5%] rounded-[50px] w-full h-full">
          </div>
          <div className="bg-white px-6 pb-10 shadow-shadowtest skew-y-6 flex flex-col rounded-[50px] relative z-30 gap-6 items-center justify-center font-pop">
            <div className="w-20 h-20 rounded-full">
              <img src="../TestimonialData/image1.png" alt="" className='rounded-full object-cover w-full h-full' />
            </div>
            <h3 className='text-xl font-semibold'>Hannah Schmitt</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
          </div>
        </div>

        <div className="rounded-2xl basis-[33.33%] bg-transparent relative">
          <div className="bg-mainpurple absolute -z-10 skew-y-6 -top-[3%] rounded-[50px] w-full h-[110%]">
          </div>
          <div className="bg-white px-6 pb-10 shadow-shadowtest  flex flex-col rounded-[50px] relative z-30 gap-6 items-center justify-center font-pop">
            <div className="w-20 h-20 rounded-full">
              <img src="../TestimonialData/image1.png" alt="" className='rounded-full object-cover w-full h-full' />
            </div>
            <h3 className='text-xl font-semibold'>Hannah Schmitt</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
          </div>
        </div>

        <div className="rounded-2xl basis-[33.33%] bg-transparent relative">
          <div className="bg-mainpurple absolute -z-10 -skew-y-6 top-[10%] -right-[5%] rounded-[50px] w-full h-full">
          </div>
          <div className="bg-white px-6 pb-10 shadow-shadowtest -skew-y-6 flex flex-col rounded-[50px] relative z-30 gap-6 items-center justify-center font-pop">
            <div className="w-20 h-20 rounded-full">
              <img src="../TestimonialData/image1.png" alt="" className='rounded-full object-cover w-full h-full' />
            </div>
            <h3 className='text-xl font-semibold'>Hannah Schmitt</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim </p>
          </div>
        </div>

      </div>
    </div>
  );
}

