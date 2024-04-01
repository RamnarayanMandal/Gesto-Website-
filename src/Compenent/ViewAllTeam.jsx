import React from 'react'
import {  FaLocationArrow } from "react-icons/fa";

const ViewAllTeam = () => {
  return (
    <>
      <button className="lg:px-6 lg:py-4 md:px-3 md:py-2 rounded-full border-red-600 border-2 p-2">
        VIEW ALL SERVICES
      </button>
      <div className="rounded-full bg-red-500 border-2 p-4 text-xl lg:text-2xl">
        <FaLocationArrow />
      </div>
      </>
  )
}

export default ViewAllTeam
