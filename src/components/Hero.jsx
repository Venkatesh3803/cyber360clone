import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <div className=' main lg:flex block text-white w-full lg:h-[88vh] relative lg:top-16 top-40 '>
      <div className="flex-1 flex flex-col justify-center gap-8">
        <h1 className='text-4xl lg:text-[2.8rem] font-bold'>Who We Are</h1>
        <div className="text-base xl:text-[24px] leading-[25px] lg:leading-[30px] font-light">We are a cyber security firm headquartered in the Hyderabad, India. It is staffed by a team of tier one cyber security specialists with global experience, dedicated to providing secure, trusted, and integrated cyber protection services to government agencies and businesses alike. We offers a complete portfolio of cyber security solutions like, cyber security consulting, resource management, staffing, IT consulting, training with all our work being underpinned by industry leading intelligence, research and development.
        </div>
        <Link to="/aboutus">
        <button className='w-fit text-xl font-bold bg-[#46E6F8] text-black px-8 py-3 rounded-md'>Know More</button>
        </Link>
      </div>
      <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0 ">
        <img className='' src="https://cyber360technologies.com/images/cyber.png" alt="" />
      </div>
    </div>

  )
}

export default Hero