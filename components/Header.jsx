import React from 'react'

function Header() {
  return (
    <div className=" flex w-full h-[50px] bg-white shadow-sm">
        <div className="flex flex-col w-full px-5">
          <div className="h-[70%] flex justify-center items-center mt-2">
            <p className="text-black font-bold text-xl">SPAK Dashboard</p>
          </div>
          <div className=" h-[30%] mt-[-20px]">
              <p className=" text-sm  text-right text-green-500">Devlope By: Segmentation Fault</p>
          </div>
        </div>
      </div>
  )
}

export default Header