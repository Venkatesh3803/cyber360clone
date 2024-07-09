import React, { useState } from 'react'

const Cards = ({ title, desc }) => {
    const [item, setItem] = useState(false)

    return (
        <div className="card bg-[#4B4B68] min-w-[350px] h-[48vh] max-w-[350px] relative rounded-lg cursor-pointer" onMouseEnter={() => setItem(true)} onMouseLeave={() => setItem(false)}>
            <img className='absolute -top-10 left-[15%] w-[70%] h-[20vh] rounded-lg drop-shadow-2xl' src="https://cyber360technologies.com/job%20img%202.png" alt="" />
            <div className={`text-white flex flex-col items-center relative opacity-0 -top-20 gap-3 transition-all duration-500 ${item && "translate-y-52 opacity-100"}`}>
                <h1 className='text-2xl font-semibold'>{title}</h1>
                <p className='w-[75%] text-center text-base text-orange-100'>{desc}</p>
            </div>


        </div>
    )
}

export default Cards