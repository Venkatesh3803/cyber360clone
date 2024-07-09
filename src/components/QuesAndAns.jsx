import React, { useState } from 'react'

const QuesAndAns = () => {

    const [showAnswer, setShowAnswer] = useState(true)

    const questionAndAnswers = [
        {
            id: 1,
            question: "What specific cyber security services does your firm provide?",
            answer: "Our firm offers a comprehensive range of cyber security services, including consulting, resource management, staffing, IT consulting, and training. We specialize in providing secure and integrated cyber protection solutions to government agencies and businesses, leveraging the expertise of our tier one cyber security specialists with global experience."
        },
        {
            id: 2,
            question: "How is your cyber security consulting different from other providers?",
            answer: "Our firm offers a comprehensive range of cyber security services, including consulting, resource management, staffing, IT consulting, and training. We specialize in providing secure and integrated cyber protection solutions to government agencies and businesses, leveraging the expertise of our tier one cyber security specialists with global experience."
        },
        {
            id: 3,
            question: "Can you elaborate on the resource management solutions your firm offers?",
            answer: "Our firm offers a comprehensive range of cyber security services, including consulting, resource management, staffing, IT consulting, and training. We specialize in providing secure and integrated cyber protection solutions to government agencies and businesses, leveraging the expertise of our tier one cyber security specialists with global experience."
        },
        {
            id: 4,
            question: "How does your staffing service contribute to enhancing cyber security for clients?",
            answer: "Our firm offers a comprehensive range of cyber security services, including consulting, resource management, staffing, IT consulting, and training. We specialize in providing secure and integrated cyber protection solutions to government agencies and businesses, leveraging the expertise of our tier one cyber security specialists with global experience."
        },
        {
            id: 5,
            question: "What sets your IT consulting apart, and how does it contribute to cyber protection?",
            answer: "Our firm offers a comprehensive range of cyber security services, including consulting, resource management, staffing, IT consulting, and training. We specialize in providing secure and integrated cyber protection solutions to government agencies and businesses, leveraging the expertise of our tier one cyber security specialists with global experience."
        },
        {
            id: 6,
            question: "How does your firm stay informed about the latest cyber threats and technologies?",
            answer: "Our firm offers a comprehensive range of cyber security services, including consulting, resource management, staffing, IT consulting, and training. We specialize in providing secure and integrated cyber protection solutions to government agencies and businesses, leveraging the expertise of our tier one cyber security specialists with global experience."
        },

    ]

    return (

        <div className="main w-full py-10 text-white">
            <div className="lg:flex relative ">
                <div className="flex-1 md:flex  items-center">
                    <h1 className='w-[100%] lg:w-[50%] md:text-5xl lg:text-7xl text-3xl font-bold '>Frequently Asked Questions.</h1>
                    <img className='hidden md:block lg:absolute left-[30%] w-[42%] top-[15%] spin-infinite ' src="https://cyber360technologies.com/images/frequently.png" alt="" />
                </div>
                <div className="flex-1 flex items-center justify-center bg-black w-full z-10 rounded-lg p-10">
                    <div className="flex flex-col gap-5">
                        {questionAndAnswers.map((qa, i) => {
                            return (
                                <>
                                    <div key={qa.id} className="text-xl font-semibold flex gap-5 cursor-pointer" onClick={() => setShowAnswer(i)}>
                                        <p>{qa.question}</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                        </svg>
                                    </div>
                                    {showAnswer === i && (
                                        <p className=''>{questionAndAnswers[i].answer}</p>
                                    )}
                                    <hr />
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>


    )
}

export default QuesAndAns
