import React from 'react'
import { BiSmile } from 'react-icons/bi'

function Thanks({isSubmit}) {
  console.log(isSubmit);
  return (
    <div className={`w-[300px] transition-all duration-300 ease-linear h-auto px-10 py-3 fixed bg-gradient-to-r from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#42A6E3] ${isSubmit?"right-0" : "-right-[100%]"}`}>
        <div className=''>
            <h1 className='text-white'>We are happiness with your visit !!  <BiSmile /> </h1>
        </div>
    </div>
  )
}

export default Thanks