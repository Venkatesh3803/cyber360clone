import React from 'react'


const Solutions = () => {

  const solutionItems = [
    {
      id: 1,
      image: "https://cyber360technologies.com/indentity%20aceess%20management3.png",
      name: "Identity and Access Management"
    },
    {
      id: 2,
      image: "https://cyber360technologies.com/network-security3.png",
      name: "Network Security"
    },
    {
      id: 3,
      image: "https://cyber360technologies.com/data-security-1024x687.jpg",
      name: "Data Security"
    },
    {
      id: 4,
      image: "https://cyber360technologies.com/risk.jpg",
      name: "Compliance Risk Management"
    },
    {
      id: 5,
      image: "https://cyber360technologies.com/Cloud-Security4.jpg",
      name: "Cloud Security"
    },
    {
      id: 6,
      image: "https://cyber360technologies.com/iot-security3.png",
      name: "IOT Security"
    },
    {
      id: 7,
      image: "https://cyber360technologies.com/policy6.jpg",
      name: "Cybersecurity Policy and Governance"
    },
    {
      id: 8,
      image: "https://cyber360technologies.com/SOC.png",
      name: "Security Operations Center(SOC) services"
    },
  ]


  return (
    <div id='solutions' className='main text-white'>
      <div className="flex flex-col gap-10 my-10 ">
        
        <h1 className='text-4xl font-bold'>Solutions</h1>
     
        <p className='text-xl'>
          We're here to safeguard your online world. Our cybersecurity solutions, like antivirus, firewalls, and encryption, shield your data from online threats. With us, your digital security is our top priority.
        </p>

       
        <div className="flex flex-col gap-6 overflow-hidden overflow-x-scroll">
          <div className="md:flex gap-5 w-full md:flex-wrap ">
            <div className="w-full lg:w-[60%] h-72 rounded-lg overflow-hidden relative ">
              <img className='w-full h-full object-cover' src={solutionItems[0].image} alt="" />
              <h3 className='absolute w-full text-center top-8 left-0 text-2xl font-bold'>{solutionItems[0].name}</h3>
            </div>
            
            {solutionItems.slice(1,9).map((item) => {
              return (
                <div key={item.id} className="lg:w-[30%] md:w-[48%] flex-grow-1 h-72 rounded-lg overflow-hidden relative w-[100%] mt-5">
                  <img className='w-full h-full object-cover' src={item.image} alt="" />
                  <h3 className='absolute w-full text-center top-0 py-5 left-0 text-2xl font-bold bg-[#2d2b2b61]'>{item.name}</h3>
                </div>
              )
            })}
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions