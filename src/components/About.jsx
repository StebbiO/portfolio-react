import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Stefan, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>Recently completed a full stack web development certificate program through the University of Texas where I developed skills in the MERN stack as well as CSS, JavaScript, SQL and responsive design. While I prefer to work on the back end and the structure of applications, I have been able to work effectively and write quality code on both the front and back end while working on various projects during my time in the program. I pride myself on attention to detail and leverage that skill to build robust features and routes to deliver a smooth user experience. I am excited to use my technical skills and collaborative nature to write cleaner code, identify errors, and help your team to continue to develop innovative and exciting work.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;