// const IntroOverlay = () => {
//   return (
//     <div
//       className={`fixed inset-0  z-50 flex  items-center  h-screen flex-col p-8 bg-blue-500`}
//     >
//       <div className="max-w-md px-12 mt-20 flex justify-between flex-col h-full">
//         <div className="prose ">
//           <h1 className="text-white">rudeCAPTCHA</h1>
//           <h2 className="text-gray-100">
//             Sick of proving to a robot you are human?
//           </h2>
//           <img src="/rudeCaptchaTitle.jpeg" alt="rudeCaptchaTitle"  />
//         </div>
//         <div className="flex items-center justify-center flex-col">
//           <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//             <div className="bg-blue-600 h-2.5 rounded-full animate-widthGrow"></div>
//           </div>

//           <div className="flex items-baseline">
//             <p className="text-gray-200 pt-2 ">
//               Loading{"  "}
//               <span className="material-icons text-sm animate-spin text-white">
//                 rotate_right
//               </span>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntroOverlay;
// import Image from "next/image";

const IntroOverlay = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center h-screen flex-col  bg-blue-500">
      <div className="max-w-md px-12 mt-4 flex justify-between flex-col h-full">
        <div className="prose">
          <h1 className="text-white text-center">rudeCAPTCHA</h1>

          <h2 className="text-gray-100 text-center">
            Tired of proving you're human to a robot?
          </h2>
          <p className="text-gray-200 pt-2 text-center ">
            Loading AI model...{"  "}
            <span className="material-icons text-sm animate-spin text-white">
              rotate_right
            </span>
          </p>
          <img
            src="/rudeCaptchaTitle.jpg"
            alt="make gesture"
            width="500"
            height="200"
            loading="lazy"
            className="w-full h-auto rounded-xl"
          />
        </div>
        <div className="flex items-center justify-center flex-col mb-4">
          <p className="text-gray-200">Loading</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full animate-widthGrow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;
