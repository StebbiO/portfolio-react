import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hello, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Stefan Oddsson</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Full-stack web developer with a background working in the legal field with Google. Recently completed a full stack web development certificate program through the University of Texas where I developed skills in the MERN stack as well as CSS, JavaScript, SQL and responsive design.While I prefer to work on the back end and the structure of applications, I have been able to work effectively and write quality code on both the front and back end while working on various projects during my time in the program. I pride myself on attention to detail and leverage that skill to build robust features and routes to deliver a smooth user experience. I am excited to use my technical skills and collaborative nature to write cleaner code, identify errors, and help your team to continue to develop innovative and exciting work.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3' />
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home