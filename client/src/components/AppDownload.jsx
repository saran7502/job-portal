import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 mx-auto my-20">
      <div className="relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-12">
          <div className="xl:w-1/2">
            <h1 className="text 2xl sm:text-4xl font-bold mb-8 max-w-md">
              Download Mobile App For Better Experience
            </h1>
            <div className="flex gap-4">
              <a href="#" className="inline-block">
                <img className="h-12" src={assets.play_store} alt="" />
              </a>
              <a href="#" className="inline-block">
                <img className="h-12" src={assets.app_store} alt="" />
              </a>
            </div>
          </div>
          <div className="xl:w-1/2 xl:pl-12 mt-8 xl:mt-0">
            <img
              className="w-full max-w-xs xl:max-w-md mx-auto"
              src={assets.app_main_img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownload;

// import React from "react";
// import { assets } from "../assets/assets";

// const AppDownload = () => {
//   return (
//     <div className="container mx-auto px-4 py-24">
//       <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 rounded-3xl shadow-lg">
//         {/* Background Decorations */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
//         </div>

//         <div className="relative flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-24 gap-12 lg:gap-8">
//           {/* Content Section */}
//           <div className="flex-1 max-w-2xl">
//             <div className="space-y-6">
//               <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
//                 <p className="text-sm font-medium text-purple-600">
//                   📱 Available on iOS & Android
//                 </p>
//               </div>

//               <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
//                 Experience Our App On Mobile
//               </h2>

//               <p className="text-lg md:text-xl text-gray-600">
//                 Download our app and enjoy a seamless mobile experience with
//                 exclusive features, faster navigation, and real-time updates.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 {/* Play Store Button */}
//                 <a href="#" className="group relative inline-flex items-center">
//                   <div className="absolute inset-0 bg-black/5 rounded-xl blur-lg transform group-hover:scale-110 transition-transform" />
//                   <div className="relative flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
//                     <div className="mr-4">
//                       <svg
//                         className="w-8 h-8"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         {/* <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" /> */}
//                       </svg>
//                     </div>
//                     <div>
//                       <div className="text-xs">GET IT ON</div>
//                       <div className="text-xl font-semibold">Play Store</div>
//                     </div>
//                   </div>
//                 </a>

//                 {/* App Store Button */}
//                 <a href="#" className="group relative inline-flex items-center">
//                   <div className="absolute inset-0 bg-black/5 rounded-xl blur-lg transform group-hover:scale-110 transition-transform" />
//                   <div className="relative flex items-center bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition-colors">
//                     <div className="mr-4">
//                       <svg
//                         className="w-8 h-8"
//                         viewBox="0 0 24 24"
//                         fill="currentColor"
//                       >
//                         <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <div className="text-xs">Download on the</div>
//                       <div className="text-xl font-semibold">App Store</div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Social Proof */}
//               <div className="pt-8">
//                 <div className="flex items-center gap-4">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3, 4].map((i) => (
//                       <div
//                         key={i}
//                         className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"
//                       />
//                     ))}
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">
//                       Join 10k+ happy users
//                     </div>
//                     <div className="text-sm text-gray-500">
//                       ⭐️ 4.8/5 average rating
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* App Preview Image */}
//           <div className="relative flex-1 flex justify-center lg:justify-end">
//             <div className="relative w-72 md:w-80 lg:w-96 aspect-[320/650]">
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 to-transparent rounded-[3rem]" />
//               <img
//                 className="w-full h-full object-contain relative z-10"
//                 src={assets.app_main_img}
//                 alt="Mobile app preview"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppDownload;

// import React from "react";
// import { assets } from "../assets/assets";

// const AppDownload = () => {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg">
//         {/* Background Decorations */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100/30 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3" />
//           <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-100/30 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />
//         </div>

//         <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 lg:p-16 gap-8">
//           {/* Content Section */}
//           <div className="flex-1 max-w-xl">
//             <div className="space-y-4">
//               <div className="inline-flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
//                 <span className="animate-pulse mr-2">📱</span>
//                 <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                   Available on iOS & Android
//                 </p>
//               </div>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
//                 Experience Our App On Mobile
//               </h2>

//               <p className="text-base md:text-lg text-gray-600">
//                 Download our app and enjoy a seamless mobile experience with
//                 exclusive features, faster navigation, and real-time updates.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 pt-3">
//                 {/* Store Buttons */}
//                 <a
//                   href="#"
//                   className="group relative inline-flex items-center transform hover:scale-105 transition-all duration-200"
//                 >
//                   <div className="absolute inset-0 bg-black/5 rounded-xl blur" />
//                   <div className="relative flex items-center bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
//                     <img
//                       src={assets.play_store}
//                       alt="Play Store"
//                       className="w-8 h-8 mr-3"
//                     />
//                     <div>
//                       <div className="text-[10px] opacity-80">GET IT ON</div>
//                       <div className="text-lg font-semibold">Play Store</div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
//                   href="#"
//                   className="group relative inline-flex items-center transform hover:scale-105 transition-all duration-200"
//                 >
//                   <div className="absolute inset-0 bg-black/5 rounded-xl blur" />
//                   <div className="relative flex items-center bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
//                     <img
//                       src={assets.app_store}
//                       alt="App Store"
//                       className="w-8 h-8 mr-3"
//                     />
//                     <div>
//                       <div className="text-[10px] opacity-80">
//                         DOWNLOAD ON THE
//                       </div>
//                       <div className="text-lg font-semibold">App Store</div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Social Proof */}
//               <div className="pt-6">
//                 <div className="flex items-center gap-3">
//                   <div className="flex -space-x-3">
//                     {[1, 2, 3].map((i) => (
//                       <div
//                         key={i}
//                         className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 border-2 border-white"
//                       />
//                     ))}
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900 text-sm">
//                       10k+ Happy Users
//                     </div>
//                     <div className="flex items-center text-xs text-gray-500">
//                       <span className="text-yellow-400">★★★★★</span>
//                       <span className="ml-1">4.8/5 rating</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* App Preview Image */}
//           <div className="relative flex-1 flex justify-center lg:justify-end">
//             <div className="relative w-64 md:w-72 lg:w-80 aspect-[320/650]">
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 to-transparent rounded-[2rem]" />
//               <img
//                 className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
//                 src={assets.app_main_img}
//                 alt="Mobile app preview"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppDownload;

// import React from "react";
// import { assets } from "../assets/assets";

// const AppDownload = () => {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 rounded-2xl shadow-lg">
//         {/* Background Decorations */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 w-72 h-72 bg-purple-100/30 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3" />
//           <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-100/30 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />
//         </div>

//         <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 md:p-10 lg:p-16 gap-8">
//           {/* Content Section */}
//           <div className="flex-1 max-w-xl">
//             <div className="space-y-4">
//               <div className="inline-flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
//                 <span className="animate-pulse mr-2">📱</span>
//                 <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                   Available on iOS & Android
//                 </p>
//               </div>

//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
//                 Experience Our App On Mobile
//               </h2>

//               <p className="text-base md:text-lg text-gray-600">
//                 Download our app and enjoy a seamless mobile experience with
//                 exclusive features, faster navigation, and real-time updates.
//               </p>

//               <div className="flex flex-col sm:flex-row gap-3 pt-3">
//                 {/* Store Buttons */}
//                 <a
//                   href="#"
//                   className="group relative inline-flex items-center transform hover:scale-105 transition-all duration-200"
//                 >
//                   <div className="absolute inset-0 bg-black/5 rounded-xl blur" />
//                   <div className="relative flex items-center bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
//                     <img
//                       src={assets.play_store}
//                       alt="Play Store"
//                       className="w-8 h-8 mr-3"
//                     />
//                     <div>
//                       <div className="text-[10px] opacity-80">GET IT ON</div>
//                       <div className="text-lg font-semibold">Play Store</div>
//                     </div>
//                   </div>
//                 </a>

//                 <a
//                   href="#"
//                   className="group relative inline-flex items-center transform hover:scale-105 transition-all duration-200"
//                 >
//                   <div className="absolute inset-0 bg-black/5 rounded-xl blur" />
//                   <div className="relative flex items-center bg-black text-white px-4 py-2.5 rounded-xl hover:bg-gray-800 transition-colors">
//                     <img
//                       src={assets.app_store}
//                       alt="App Store"
//                       className="w-8 h-8 mr-3"
//                     />
//                     <div>
//                       <div className="text-[10px] opacity-80">
//                         DOWNLOAD ON THE
//                       </div>
//                       <div className="text-lg font-semibold">App Store</div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Social Proof */}
//               <div className="pt-6">
//                 <div className="flex items-center gap-3">
//                   <div className="flex -space-x-3">
//                     {[1, 2, 3].map((i) => (
//                       <div
//                         key={i}
//                         className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 border-2 border-white"
//                       />
//                     ))}
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900 text-sm">
//                       10k+ Happy Users
//                     </div>
//                     <div className="flex items-center text-xs text-gray-500">
//                       <span className="text-yellow-400">★★★★★</span>
//                       <span className="ml-1">4.8/5 rating</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* App Preview Image */}
//           <div className="relative flex-1 flex justify-center lg:justify-end">
//             <div className="relative w-64 md:w-72 lg:w-80 aspect-[320/650]">
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 to-transparent rounded-[2rem]" />
//               <img
//                 className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
//                 src={assets.app_main_img}
//                 alt="Mobile app preview"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppDownload;

// import React from "react";
// import { assets } from "../assets/assets";

// const AppDownload = () => {
//   return (
//     <div className="container mx-auto px-3 py-8 sm:py-10">
//       <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 rounded-xl shadow-lg">
//         {/* Background Decorations */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 right-0 w-60 h-60 bg-purple-100/30 rounded-full blur-2xl transform translate-x-1/3 -translate-y-1/3" />
//           <div className="absolute bottom-0 left-0 w-60 h-60 bg-violet-100/30 rounded-full blur-2xl transform -translate-x-1/3 translate-y-1/3" />
//         </div>

//         <div className="relative flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 lg:p-12 gap-6">
//           {/* Content Section */}
//           <div className="flex-1 max-w-lg">
//             <div className="space-y-4">
//               {/* Badge */}
//               <div className="inline-flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
//                 <span className="animate-pulse mr-2">📱</span>
//                 <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//                   iOS & Android App
//                 </p>
//               </div>

//               {/* Heading */}
//               <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-tight">
//                 Experience Our App On Mobile
//               </h2>

//               {/* Description */}
//               <p className="text-sm sm:text-base text-gray-600 max-w-md">
//                 Download our app and enjoy a seamless mobile experience with
//                 exclusive features, faster navigation, and real-time updates.
//               </p>

//               {/* Download Buttons */}
//               <div className="flex flex-col sm:flex-row gap-2 pt-2">
//                 {/* Play Store Button */}
//                 <a
//                   href="#"
//                   className="group relative inline-flex items-center transform hover:scale-105 transition-all duration-200"
//                 >
//                   <div className="absolute inset-0 bg-black/5 rounded-lg blur" />
//                   <div className="relative flex items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
//                     <img
//                       src={assets.play_store}
//                       alt="Play Store"
//                       className="w-6 sm:w-7 h-6 sm:h-7 mr-2"
//                     />
//                     <div>
//                       <div className="text-[10px] opacity-80">GET IT ON</div>
//                       <div className="text-base font-semibold">Play Store</div>
//                     </div>
//                   </div>
//                 </a>

//                 {/* App Store Button */}
//                 <a
//                   href="#"
//                   className="group relative inline-flex items-center transform hover:scale-105 transition-all duration-200"
//                 >
//                   <div className="absolute inset-0 bg-black/5 rounded-lg blur" />
//                   <div className="relative flex items-center bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors">
//                     <img
//                       src={assets.app_store}
//                       alt="App Store"
//                       className="w-6 sm:w-7 h-6 sm:h-7 mr-2"
//                     />
//                     <div>
//                       <div className="text-[10px] opacity-80">
//                         DOWNLOAD ON THE
//                       </div>
//                       <div className="text-base font-semibold">App Store</div>
//                     </div>
//                   </div>
//                 </a>
//               </div>

//               {/* Social Proof */}
//               <div className="pt-4">
//                 <div className="flex items-center gap-3">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3].map((i) => (
//                       <div
//                         key={i}
//                         className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-200 to-pink-200 border-2 border-white"
//                       />
//                     ))}
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900 text-xs sm:text-sm">
//                       10k+ Happy Users
//                     </div>
//                     <div className="flex items-center text-[10px] sm:text-xs text-gray-500">
//                       <span className="text-yellow-400">★★★★★</span>
//                       <span className="ml-1">4.8/5 rating</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* App Preview Image */}
//           <div className="relative flex-1 flex justify-center lg:justify-center mt-6 lg:mt-0">
//             <div className="relative w-48 sm:w-56 lg:w-64 xl:w-72">
//               <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 to-transparent rounded-[2rem]" />
//               <img
//                 className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
//                 src={assets.app_main_img}
//                 alt="Mobile app preview"
//                 style={{
//                   maxHeight: "580px",
//                   minHeight: "320px",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppDownload;

// import React from "react";
// import { assets } from "../assets/assets";

// const AppDownload = () => {
//   return (
//     <div className="container mx-auto px-4 py-16 sm:py-20">
//       <div className="relative bg-gradient-to-r from-purple-50/50 to-pink-50/50 rounded-2xl">
//         <div className="relative flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 lg:p-12">
//           {/* Content Section */}
//           <div className="flex-1 max-w-xl">
//             <div className="space-y-6">
//               {/* Badge */}
//               <div className="inline-flex items-center gap-2">
//                 <span className="text-lg">📱</span>
//                 <p className="text-sm font-medium text-purple-600">
//                   iOS & Android App
//                 </p>
//               </div>

//               {/* Heading */}
//               <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                 Experience Our App On Mobile
//               </h2>

//               {/* Description */}
//               <p className="text-base sm:text-lg text-gray-600 max-w-md">
//                 Download our app and enjoy a seamless mobile experience with
//                 exclusive features, faster navigation, and real-time updates.
//               </p>

//               {/* Download Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 pt-2">
//                 <a
//                   href="#"
//                   className="inline-block transition-transform hover:scale-105"
//                 >
//                   <img
//                     src={assets.play_store}
//                     alt="Get it on Play Store"
//                     className="h-14 w-auto"
//                   />
//                 </a>
//                 <a
//                   href="#"
//                   className="inline-block transition-transform hover:scale-105"
//                 >
//                   <img
//                     src={assets.app_store}
//                     alt="Download on App Store"
//                     className="h-14 w-auto"
//                   />
//                 </a>
//               </div>

//               {/* Social Proof */}
//               <div className="pt-6">
//                 <div className="flex items-center gap-4">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3].map((i) => (
//                       <div
//                         key={i}
//                         className="w-10 h-10 rounded-full bg-pink-200/60 border-2 border-white"
//                       />
//                     ))}
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">
//                       10k+ Happy Users
//                     </div>
//                     <div className="flex items-center text-sm text-gray-600">
//                       <span className="text-yellow-400 mr-1">
//                         ⭐️⭐️⭐️⭐️⭐️
//                       </span>
//                       4.8/5 rating
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* App Preview Image */}
//           <div className="relative flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0">
//             <img
//               className="w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
//               src={assets.app_main_img}
//               alt="Happy woman pointing"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppDownload;

// import React from "react";
// import { assets } from "../assets/assets";

// const AppDownload = () => {
//   return (
//     <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
//       <div className="relative bg-gradient-to-r from-purple-50/50 via-pink-50/30 to-pink-50/50 rounded-3xl overflow-hidden">
//         <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between p-6 md:p-10 lg:p-16 gap-8 lg:gap-12">
//           {/* Content Section */}
//           <div className="flex-1 max-w-xl pt-4">
//             <div className="space-y-5 md:space-y-6">
//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/50 backdrop-blur-sm rounded-full">
//                 <span className="text-lg">📱</span>
//                 <p className="text-sm font-medium text-purple-600">
//                   iOS & Android App
//                 </p>
//               </div>

//               {/* Heading */}
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
//                 Experience Our App
//                 <br className="hidden sm:block" /> On Mobile
//               </h2>

//               {/* Description */}
//               <p className="text-base md:text-lg text-gray-600 max-w-md leading-relaxed">
//                 Download our app and enjoy a seamless mobile experience with
//                 exclusive features, faster navigation, and real-time updates.
//               </p>

//               {/* Download Buttons */}
//               <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-2">
//                 <a
//                   href="#"
//                   className="inline-block transition-all duration-200 hover:scale-105 hover:shadow-lg"
//                 >
//                   <img
//                     src={assets.play_store}
//                     alt="Get it on Play Store"
//                     className="h-[52px] w-auto object-contain"
//                   />
//                 </a>
//                 <a
//                   href="#"
//                   className="inline-block transition-all duration-200 hover:scale-105 hover:shadow-lg"
//                 >
//                   <img
//                     src={assets.app_store}
//                     alt="Download on App Store"
//                     className="h-[52px] w-auto object-contain"
//                   />
//                 </a>
//               </div>

//               {/* Social Proof */}
//               <div className="pt-6 md:pt-8">
//                 <div className="flex items-center gap-4">
//                   <div className="flex -space-x-3">
//                     {[1, 2, 3].map((i) => (
//                       <div
//                         key={i}
//                         className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-200/80 to-purple-200/80 border-2 border-white ring-2 ring-pink-100"
//                       />
//                     ))}
//                   </div>
//                   <div>
//                     <div className="font-semibold text-gray-900">
//                       10k+ Happy Users
//                     </div>
//                     <div className="flex items-center text-sm text-gray-600 gap-1.5">
//                       <div className="flex text-yellow-400">
//                         {Array(5)
//                           .fill("⭐️")
//                           .map((star, i) => (
//                             <span key={i} className="text-sm">
//                               {star}
//                             </span>
//                           ))}
//                       </div>
//                       <span>4.8/5 rating</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* App Preview Image */}
//           <div className="relative flex-1 flex justify-center lg:justify-end w-full lg:w-auto">
//             <img
//               className="w-full max-w-md xl:max-w-xl h-auto object-contain transform lg:scale-110 lg:translate-x-4"
//               src={assets.app_main_img}
//               alt="Happy woman pointing"
//               style={{
//                 filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.1))",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AppDownload;
