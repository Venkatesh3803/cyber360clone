import React from 'react'
import Cards from '../components/Cards'

const Careers = () => {
  return (
    <div className='w-full '>
      {/* banner */}
      <div className="-top-0 relative h-[70vh] bg-white ">
        <img className='w-full h-full object-cover' src="https://cyber360technologies.com/cybersecurity-banner-desktop.jpg" alt="banner" />
        <div className="flex flex-col gap-5 items-center justify-center absolute top-0 left-0 w-full h-full">
          <h1 className='text-white font-semibold text-6xl'>Let's <span className='text-[#00ABF4]'>#Grow</span> together</h1>
          <p className='text-white text-xl'>Boost your Careers with Cyber360 Technologies</p>
        </div>
      </div>

      <div className="bg-black relative -top-32">
        <h1 className='text-7xl text-center pt-20 text-white font-normal'>Work Enviroment</h1>
        {/* Security Consciousness */}
        <div className=' main lg:flex block text-white w-full lg:h-[88vh]'>
          <div className="flex-1 flex flex-col justify-center gap-12">
            <h1 className='text-[3rem] font-bold'>Security Consciousness</h1>
            <div className="text-[24px] leading-[38px] font-light">We prioritize security in every aspect of our work, ensuring a resilient and secure environment for both our clients and our team. whether online or offline, can impact security underscores the importance of responsible behavior From choosing strong passwords to handling sensitive information, every individual plays a role in maintaining a secure ecosystem.
            </div>
          </div>
          <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
            <video width="430" height="300" autoPlay muted loop>
              <source src="https://cyber360technologies.com/lock.mp4" type="video/mp4" />
            </video>
          </div>
        </div>


        {/* Customer Trust */}
        <div className=' main lg:flex block text-white w-full lg:h-[88vh]'>
          <div className="flex-1 flex flex-col justify-center gap-12">
            <h1 className='text-[3rem] font-bold'>Customer Trust</h1>
            <div className="text-[24px] leading-[36px] font-light">Our commitment to client trust extends through transparent communication. We proactively communicate about our security practices, ensuring clients are informed about the measures taken to uphold confidentiality and ethical standards. Open and honest dialogue builds a foundation of trust that goes beyond expectations.
            </div>
          </div>
          <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
            <video width="430" height="300" autoPlay muted loop>
              <source src="https://cyber360technologies.com/smart-phone-security-of-animation-free-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Regulatory Compliance */}
        <div className=' main lg:flex block text-white w-full lg:h-[88vh]'>
          <div className="flex-1 flex flex-col justify-center gap-8">
            <h1 className='text-[3rem] font-bold'>Regulatory Compliance</h1>
            <div className="text-[24px] leading-[36px] font-light"> Adhering to regulatory standards is the cornerstone of our commitment to ethical business practices and legal compliance. By rigorously following established regulations, we not only ensure the integrity of our operations but also underscore our dedication to maintaining the highest ethical standards.
            </div>
          </div>
          <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
            <video width="430" height="300" autoPlay muted loop>
              <source src="https://cyber360technologies.com/checklist-clipboard-document-tick-checkmarks-4k-animation-free-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>



        {/* Why Join Cyber360 ? */}
        <h1 className='text-7xl text-center pt-20 text-white font-normal'>Why Join <span className='text-purple-600'>Cyber360</span> ?</h1>


        {/* Cross - Collaboration */}
        <div className=' main lg:flex block text-white w-full lg:h-[88vh]'>
          <div className="flex-1 flex flex-col justify-center gap-12">
            <h1 className='text-[3rem] font-bold'>Cross - Collaboration</h1>
            <div className="text-[24px] leading-[38px] font-light">Fostering a culture of collaboration across functions is pivotal in effectively addressing the interdisciplinary challenges posed by the cybersecurity landscape.
              <br />
              Our emphasis on teamwork ensures that diverse expertise from various departments converges, creating a collective force to tackle the ever-evolving threats and complexities of cybersecurity.
            </div>
          </div>
          <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
            <video width="430" height="300" autoPlay muted loop>
              <source src="https://cyber360technologies.com/particle-effect-with-planet-earth-rotating-animation-future-technology-business-concept-in-4k-free-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>


        {/* Zero Trust Security Model*/}
        <div className=' main lg:flex block text-white w-full lg:h-[88vh]'>
          <div className="flex-1 flex flex-col justify-center gap-12">
            <h1 className='text-[3rem] font-bold'>Zero Trust Security Model</h1>
            <div className="text-[24px] leading-[36px] font-light">Joining our company means becoming a vital part of an organization that embraces
              a zero-trust security model. <br /> We prioritize the utmost security by emphasizing the significance of verifying and authenticating all users and devices, irrespective of their location or perceived trustworthiness.
            </div>
          </div>
          <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
            <video width="430" height="300" autoPlay muted loop>
              <source src="https://cyber360technologies.com/animated-identity-card-icon-with-neon-saber-effect-free-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Swift Decision - Making*/}
        <div className=' main lg:flex block text-white w-full lg:h-[88vh]'>
          <div className="flex-1 flex flex-col justify-center gap-8">
            <h1 className='text-[3rem] font-bold'>Swift Decision - Making</h1>
            <div className="text-[24px] leading-[36px] font-light"> Become a contributor to our culture, where quick and informed decision-making is a core value, particularly in response to emerging cybersecurity threats. We place a high premium on agility and knowledge-driven actions, recognizing the dynamic nature of the cybersecurity landscape.
            </div>
          </div>
          <div className="flex-1 flex items-center lg:justify-end justify-center my-20 lg:my-0">
            <video width="430" height="300" autoPlay muted loop>
              <source src="https://cyber360technologies.com/animation-of-check-mark-icon-white-and-green-check-mark-on-transparent-background-free-video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="">
        <h1 className='text-white relative -top-14 text-[2.2rem] text-center font-semibold'>Join the Frontline of Digital Defense at Cyber360</h1>
        {/* cards container */}
        <div className="w-[90%] m-auto my-20 flex justify-between items-center flex-wrap gap-24">
          {/* cards */}
         <Cards title = "Security Architect" desc = "Designs and builds secure systems and networks, ensuring that they meet the organization's security requirements."/>
         <Cards title ="Security analyst" desc ="Responsibilities include monitoring security alerts, analyzing vulnerabilities, and responding to security incidents."/>
         <Cards title = "Network Engineer" desc ="Specializes in designing, implementing, and managing security measures for networks to protect against cyber threats."/>
         <Cards title = "Security Consultant" desc = "Offers expert advice on security best practices, assesses risks, and provides recommendations for improving overall security"/>
         <Cards title = "Incident Responder" desc = "Deals with security incidents, investigates breaches, and develops response plans to mitigate the impact of cyber threats."/>
         <Cards title = "Penetration Tester" desc = "Conducts controlled cyber attacks to identify vulnerabilities in systems, networks, and applications to help strengthen security."/>
        </div>
      </div>
    </div>

  )
}

export default Careers