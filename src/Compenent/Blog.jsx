import React from 'react'
import { FaHandPointRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className='lg:my-14 lg:flex justify-around md:flex block md:justify-center'>
        <div className='lg:w-1/3 p-10 w-full my-4  '>
           <div className='pl-5 my-4 text-xl text-orange-600 flex gap-2'>
           <FaHandPointRight />
           <p > OUOUR BLOG & NEWS</p>
           </div>
            <h1 className='text-5xl font-bold my-4'>Get More Update For News</h1>
            <p className='text-xl'>We are 100+ professional software engineers with mor the 10 years of experience in delivering super products it because you've seen it.</p>

        </div>
        <div className='lg:w-1/5 w-full p-10'> 
           <div className='my-4'> <img className='rounded-lg object-cover' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/08/blog3.jpg" alt="" /></div>
           <div className='my-4'> <img className='rounded-lg object-cover' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/08/blog2.jpg" alt="" /></div>
           <div className='my-4'> <img className='rounded-lg object-cover' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/08/blog3.jpg" alt="" /></div>
           <div className='my-4'> <img className='rounded-lg object-cover' src="https://themexriver.com/wp/gesto/wp-content/uploads/2023/10/gto-bp2-img-1.jpg" alt="" /></div>
           
        </div>
        <div className='lg:w-1/3 w-full p-10'>
            <div className='border-2 border-solid  rounded px-10 py-2 my-4'>
                <div className="flex justify-between content-center items-center my-4">
                    <div>
                        <button className='bg-pink-500 px-4 py-1 rounded-lg text-white'>Design</button>
                    </div>
                    <div>
                        <p className='texl-xl'>Aplril,2024</p>
                    </div>
                   
                </div>
                <div>
                        <h1 className='text-2xl font-semibold my-4'>Agency Needs To Embrace Social Media..</h1>
                </div>
                <div>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla</p>
                </div>
            </div>
            <div className='border-2 border-solid  rounded px-10 py-2 my-4'>
                <div className="flex justify-between content-center items-center my-4">
                    <div>
                        <button className='bg-pink-500 px-4 py-1 rounded-lg text-white'>Design</button>
                    </div>
                    <div>
                        <p className='texl-xl'>Aplril,2024</p>
                    </div>
                   
                </div>
                <div>
                        <h1 className='text-2xl font-semibold my-4'>Agency Needs To Embrace Social Media..</h1>
                </div>
                <div>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla</p>
                </div>
            </div>
            <div className='border-2 border-solid  rounded px-10 py-2 my-4'>
                <div className="flex justify-between content-center items-center my-4">
                    <div>
                        <button className='bg-pink-500 px-4 py-1 rounded-lg text-white'>Design</button>
                    </div>
                    <div>
                        <p className='texl-xl'>Aplril,2024</p>
                    </div>
                   
                </div>
                <div>
                        <h1 className='text-2xl font-semibold my-4'>Agency Needs To Embrace Social Media..</h1>
                </div>
                <div>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur. Sed risus lectus ac semper id proin mi nulla</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
