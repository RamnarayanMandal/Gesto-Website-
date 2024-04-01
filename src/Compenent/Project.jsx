import React from 'react'
import { FaHandPointRight } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const project = () => {
  return (
    <div className='mt-40 p-10 lg:flex lg:justify-evenly  justify-center '>
      <div className='lg:w-1/2 w-full px-10'>
        <div className='flex lg:justify-start justify-center content-center items-center gap-2 text-xl text-orange-700 my-4 lg:pl-4 p-1'>
          <FaHandPointRight />
          <p >OUR BEST PROJECTS</p>
        </div>
        <h1 className='lg:text-6xl md:text-3xl text-2xl my-4 font-bold'>Take A Look Our Work Gallery Recent Projects</h1>
      </div>
      <div className='lg:w-2/5 w-full px-10'>

        <p className='text-xl lg:pt-10 md:pt-5 p-1 my-4'>
          We Are 100+ Professional Software Engineers With More Than 10 Years Of
          Experience In Delivering Superior
        </p>
        <div className='flex justify-center content-center items-center my-4'>
          <button className="lg:px-6 lg:py-4 md:px-3 md:py-2 rounded-full border-red-600 border-2 p-2 text-orange-700">
            VIEW ALL PROJECT
          </button>
          <div className="rounded-full bg-orange-700 border-2 p-4 text-xl lg:text-2xl">
            <FaLocationArrow />
          </div>
        </div>
      </div>
    </div>
  )
}

export default project

