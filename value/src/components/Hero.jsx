import React from 'react'
import Navbar from './Navbar'
function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-4'>
      <Navbar/>
      <h2><b>Imagine, Create, Build.</b></h2>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-8xl'>BRICK<span className='text-pink-400'>TOPIA</span></h1>
      <h1 className='text-sm md:text-base font-light'>
      Diving into <span className="text-pink-400 font-medium">LEGO</span> is diving into a world without bounds. Every piece clicks to open endless creative paths.
       With every snap, colors 
       and designs blend to build cities, creatures, and more. LEGO invites everyone to <span className='font-medium text-pink-400'>explore </span> and <span className='font-medium text-pink-400'>create </span>, turning ideas into vibrant realities, one brick at a time.
      </h1>
      <button className='px-8 py-4 rounded-md border border-black-400 border-solid blueShadow duration-200'><p>START BUILDING</p></button> 
      </div>
  )
  
}

export default Hero