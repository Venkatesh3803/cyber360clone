import React from 'react'

const About = () => {
    return (
        <div className='w-[80%] m-auto my-16 bg-[rgb(226,229,255)] lg:flex gap-10 items-center justify-center rounded-xl px-10 py-10'>
            <div className="lg:flex items-center gap-10 text-center">
                <img className='lg:w-28 w-16 ' src="https://cyber360technologies.com/cyber360-logo.png" alt="" />
                <div className="flex gap-3 flex-col my-10">
                    <div className="text-3xl font-bold">Cyber360 Technologies</div>
                    <hr className='border-b-[0px] border-black'/>
                    <p className='text-[18px] font-[300]'>Based in Hyderabad, India, our premier Cyber Security firm boasts a team of top-tier specialists with a global footprint. We deliver comprehensive cyber protection services, blending industry-leading intelligence, research, and development to safeguard government agencies and businesses worldwide.</p>
                </div>
            </div>
            <img className='w-96 object-cover h-52' src="https://cyber360technologies.com/cyber%20footer%20png%202.avif" alt="" />
        </div>
    )
}

export default About