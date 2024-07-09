import React, { useState } from 'react'


const Services = () => {

    const [showAnswer, setShowAnswer] = useState(false)
    const [count, setCount] = useState(Infinity)

    const serviceList = [
        {
            id: 1,
            icon: "https://cyber360technologies.com/icons8-consultation-50.png",
            text: "Trusted Advisors",
            answers: [
                "Mission: To be the trusted advisor in securing information and assets crucial for business performance",
                "Approach: Integrate into the client's team, delivering best-in-class technologies, practices, and personnel.",
                "Focus: Prioritize supporting the client's security vision to ensure comprehensive protection"
            ]
        },
        {
            id: 2,
            icon: "https://cyber360technologies.com/icons8-product-knowledge-50.png",
            text: "Domain Expertise",
            answers: [
                "Mission: To be the trusted advisor in securing information and assets crucial for business performance",
                "Approach: Integrate into the client's team, delivering best-in-class technologies, practices, and personnel.",
                "Focus: Prioritize supporting the client's security vision to ensure comprehensive protection"
            ]
        },
        {
            id: 3,
            icon: "https://cyber360technologies.com/icons8-critical-thinking-50.png",
            text: "Strategic Alliance",
            answers: [
                "Mission: To be the trusted advisor in securing information and assets crucial for business performance",
                "Approach: Integrate into the client's team, delivering best-in-class technologies, practices, and personnel.",
                "Focus: Prioritize supporting the client's security vision to ensure comprehensive protection"
            ]
        },
        {
            id: 4,
            icon: "https://cyber360technologies.com/icons8-cost-50.png",
            text: "Const Effective Delivery",
            answers: [
                "Mission: To be the trusted advisor in securing information and assets crucial for business performance",
                "Approach: Integrate into the client's team, delivering best-in-class technologies, practices, and personnel.",
                "Focus: Prioritize supporting the client's security vision to ensure comprehensive protection"
            ]
        },
        {
            id: 5,
            icon: "https://cyber360technologies.com/icons8-laptop-50.png",
            text: "Custom Made Delivery",
            answers: [
                "Mission: To be the trusted advisor in securing information and assets crucial for business performance",
                "Approach: Integrate into the client's team, delivering best-in-class technologies, practices, and personnel.",
                "Focus: Prioritize supporting the client's security vision to ensure comprehensive protection"
            ]
        },
        {
            id: 6,
            icon: "https://cyber360technologies.com/icons8-360-degrees-50.png",
            text: "360 Degree Support",
            answers: [
                "Mission: To be the trusted advisor in securing information and assets crucial for business performance",
                "Approach: Integrate into the client's team, delivering best-in-class technologies, practices, and personnel.",
                "Focus: Prioritize supporting the client's security vision to ensure comprehensive protection"
            ]
        },
    ]


    const handleOpenAns = (index) => {
        if (count == index) {
            setShowAnswer((prev) => !prev)
            setCount(Infinity)
        } else {
            setCount(index)
            setShowAnswer(index)
        }
    }

    return (
        <div id='services' className="relative w-full bg-[#070739] lg:min-h-[150vh] h-[150vh]">
            <video width={1500} height={240} style={{ zIndex: "-1" }} autoPlay loop muted>
                <source src="https://cyber360technologies.com/media/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="absolute top-0 left-0 w-full h-full  z-10 text-white">
                {/* Add any content you want to overlay on the video */}
                <img className='absolute bottom-[33%] left-0' src="https://cyber360technologies.com/images/left_top_curriculum.png" alt="" />
                <img className='absolute bottom-0 right-0' src="https://cyber360technologies.com/images/bottom-right_currriculum.png" alt="" />
                <img className='absolute bottom-0 left-[20%]' src="https://cyber360technologies.com/images/bottom_left_curriculum.png" alt="" />
                <h1 className='text-4xl lg:text-8xl text-center mt-20 font-bold '>Services</h1>
                <div className="md:w-[78%] w-[80%] md:py-64 py-40  m-auto flex items-center justify-center  ">
                    <div className="block w-full flex-wrap gap-5 md:flex">

                        {serviceList.map((item, i) => {
                            return (
                                <div className="md:max-w-[48%] w-full relative">
                                    <div className=' mb-5 border px-5 py-3 lg:px-10 lg:py-5 rounded-full border-b-0 border-blue-500 cursor-pointer' key={item.id} onClick={() => handleOpenAns(i)}>
                                        <div className="flex items-center gap-3">
                                            <img src={item.icon} alt="" />
                                            <h1 className='text-xl lg:text-2xl font-bold'>{item.text}</h1>
                                        </div>
                                    </div>
                                    <div className={`flex flex-col gap-5 absolute top-0 bg-gray-700 rounded-2xl z-10 opacity-0 transition-all duration-500   ${showAnswer === i ? "p-5 opacity-100 top-28 w-full" : "p-0 top-0 w-full"} `}>
                                        {showAnswer === i && item.answers.map((ans) => {
                                            return (
                                                <p className='text-xl font-semibold transition-all duration-500'>* {ans}</p>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services