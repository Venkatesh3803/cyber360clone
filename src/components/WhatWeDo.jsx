import React from 'react'
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
    return (
        <div className=' main lg:flex block text-white w-full lg:h-[88vh] relative top-24 lg:top-0'>
            <div className="flex-1 flex flex-col justify-center gap-8">
                <h1 className='text-4xl lg:text-[2.8rem] font-bold'>What DO We Do</h1>
                <div className="text-xl lg:text-[24px] leading-[30px] font-extralight">Our DNA embodies "Cyber Security," and our strength lies in "Advisory Consulting." Amidst the dynamic landscape of cyber threats, we exist to answer the multitude of questions businesses confront. We comprehend your business needs, securing your data and asset integrity. Our proficiency involves pinpointing vulnerabilities, suggesting effective solutions, and curtailing exposure to cyber-attacks. This empowers your business to operate with confidence, addressing demands with resilience and expertise.
                </div>
                <Link to="/#solutions">
                    <button className='w-fit text-xl font-bold bg-[#46E6F8] text-black px-8 py-3 rounded-md'>Our Solutions</button>
                </Link>
            </div>
            <div className="fflex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
                <video width="430" height="300" autoPlay muted loop>
                    <source src="https://cyber360technologies.com/home_page_video.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default WhatWeDo