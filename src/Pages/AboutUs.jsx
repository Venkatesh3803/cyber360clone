import React from 'react'

const AboutUs = () => {
  return (
    <>
      <div className="h-[50vh]">
        <div className="flex flex-col gap-5 items-center text-center justify-center relative top-16 left-0 w-[80%] h-full lg:w-full m-auto">
          <h1 className='text-white font-semibold lg:text-6xl text-4xl '>Who we are</h1>
          <p className='text-white lg:text-xl text-lg'>We're certified I am experts, guiding clients to achive thier identity and access management goals.</p>
        </div>
      </div>


      <div className="bg-black py-20 flex flex-col gap-40">
        {/* Headquartered in the vibrant city of Hyderabad, India. section */}
        <div className=' main md:flex block text-white w-full lg:h-[88vh]'>
          <div className="flex-1 flex flex-col justify-center gap-12">
            <h1 className='text-4xl lg:text-[3rem] font-bold leading-[50px] lg:leading-[60px]'>Headquartered in the vibrant city of Hyderabad, India.</h1>
            <p className="text-xl lg:text-[24px] leading-[38px] font-light">"At Cyber360 Technologies, excellence defines our consulting services in Identity and Access Management (IAM) solutions. Leveraging vast experience, we adeptly identify and tackle the nuances and challenges of IAM, aligning seamlessly with business objectives."
            </p>
            <p className="text-xl lg:text-[24px] leading-[38px] font-light"> "Our global experience, industry-leading intelligence, and commitment to innovation redefine the standards of secure, trusted, and integrated cyber protection services for government agencies and businesses."
            </p>
          </div>
          <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
            <img src="https://cyber360technologies.com/images/cybernew9.avif" alt="" />
          </div>
        </div>

        {/* Our mission is to empower // section */}
        <div className=' main md:flex block text-white w-full lg:h-[88vh]'>
          <div className="flex-1 flex flex-col justify-center gap-12">
            <h1 className='text-4xl lg:text-[3rem] font-bold leading-[50px] lg:leading-[60px]'>Our mission is to empower organizations by seamlessly implementing and executing robust Identity and Access Management strategies. </h1>
            <p className="text-xl lg:text-[24px] leading-[38px] font-light">We specialize in mitigating security risks, ensuring administrative consistency, enhancing customer networks, and maximizing ROI for our clients, driving excellence in the realm of cybersecurity.
            </p>

          </div>
          <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
            <img src="https://cyber360technologies.com/images/cybernew12.jpg" alt="" />
          </div>
        </div>

        {/* We highly value the robust collaborations // section */}
        <div className=' main md:flex block text-white w-full lg:h-[88vh]'>
          <div className="flex-1 flex flex-col justify-center gap-12">
            <h1 className='text-4xl lg:text-[3rem] font-bold leading-[50px] lg:leading-[60px]'>We highly value the robust collaborations and enduring partnerships cultivated with our clients, </h1>
            <p className="text-xl lg:text-[24px] leading-[38px] font-light">prioritizing the development of a sense of community and trust. Our belief in fostering strong relationships is integral to achieving mutual goals and ensuring lasting success.
            </p>

          </div>
          <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
            <img src="https://cyber360technologies.com/images/cyber-security-650.webp" alt="" />
          </div>
        </div>

        {/* Cyber360 section */}
        <div className=" text-white text-center flex flex-col gap-10 w-[80%] lg:w-full m-auto">
          <h1 className='text-4xl lg:text-5xl xl:text-6xl font-bold text-[#46E6F8]'>Cyber360 Technologies <span className='text-white'>is Poised and </span> <br className='hidden'/><span className='font-normal'>Prepared</span></h1>
          <p className='text-xl lg:text-[1.8rem]'>Discover seamless solutions for managing identity-related access risks in your business with <br /> Cyber360 Technologies."</p>
        </div>
        <img src="https://cyber360technologies.com/images/earth_about.png" className='w-full h-[70vh] object-contain lg:h-screen' alt="" />
      </div>
    </>
  )
}

export default AboutUs