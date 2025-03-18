import React from 'react'
import img1 from "../Images/img.jfif";


const EstateImages = () => {
  return (
    <>
      <div className="images flex flex-wrap p-5 m-5 flex-col items-center justify-center md:flex-row relative md:justify-between">
            <div className="sideView1">
                <div className="relative ml-5 bg-white rounded-2xl pl-4 pr-4 ml-3 text-center font-semibold">
                    <p>Side View</p>
                    <p className="text-green-800 bg-white rounded-2xl pl-4 pr-4 ml-3 font-semibold mt-2 text-center">
                    Actual Image
                    </p>
                </div>
                <img src={img1} className="rounded-xl" />
            </div>
            <div className="frontView">
                <div className="relative ml-5">
                    <div className="absolute z-50 top-32 md:top-64 p-3 ">
                        <p className="text-green-800 bg-white rounded-2xl pl-4 pr-4 ml-3 text-center font-semibold">
                        Side View
                        </p>
                        <p className="text-green-800 bg-white rounded-2xl pl-4 pr-4 ml-3 font-semibold mt-2 text-center">
                        Actual Image
                        </p>
                    </div>
                    <img src={img1} className="rounded-xl" />
                </div>
            </div>
            <div className="sideView">
                <div className="relative ml-5">
                    <div className="absolute z-50 top-32 md:top-64 p-3 ">
                        <p className="text-green-800 bg-white rounded-2xl pl-4 pr-4 ml-3 text-center font-semibold">
                        Side View
                        </p>
                        <p className="text-green-800 bg-white rounded-2xl pl-4 pr-4 ml-3 font-semibold mt-2 text-center">
                        Actual Image
                        </p>
                    </div>
                    <img src={img1} className="rounded-xl" />
                </div>
              </div>
        <div?> aii                              u   </div>
    </>
  );
}

export default EstateImages