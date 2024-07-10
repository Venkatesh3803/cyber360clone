import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className='main text-white py-5'>
                <div className="lg:flex items-center">
                    <div className="flex-[2] flex-col sm:flex-row flex sm:items-center gap-5 justify-around">
                        <div className="flex flex-col gap-5">
                            <h3 className='text-2xl font-bold'>Useful Links</h3>
                            <ul>
                                <Link to={"/"}>
                                    <li className='cursor-pointer'>Home</li>
                                </Link>
                                <Link to={"/aboutus"}>
                                    <li className='cursor-pointer'>About Us</li>
                                </Link>
                                <Link to={"/careers"}>
                                    <li className='cursor-pointer'>Careers</li>
                                </Link>
                                <Link to={"/contactus"}>
                                    <li className='cursor-pointer'>Contact Us</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className='text-2xl font-bold'>Legal</h3>
                            <ul>
                                <li className='cursor-pointer'>Privacy</li>
                                <li className='cursor-pointer'>Term & Conditions</li>
                                <li className='cursor-pointer'>Return Policy</li>

                            </ul>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h3 className='text-2xl font-bold'>Contact Info</h3>
                            <ul>
                                <li className='cursor-pointer'>4th Floor, Aparna Astute, Block-A, SY No.</li>
                                <li className='cursor-pointer'>75/A & 76, Film Nagar Road,</li>
                                <li className='cursor-pointer'>  Hyderabad, Telangana, India, 500008.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-[1] mt-5">
                        <div className="flex flex-col gap-5">
                            <h3 className='text-2xl font-bold'>Stay Connected</h3>
                            <ul className='flex  gap-4'>
                                <li className='cursor-pointer'><FaTwitter  size={30}/></li>
                                <li className='cursor-pointer'><FaFacebookSquare size={30}/></li>
                                <li className='cursor-pointer'><FaInstagramSquare size={30}/></li>
                             
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='w-screen border-white border' />
            <div className="text-center text-white py-5">
                <p>Copyright © 2023 Cyber360 Technologies</p>
            </div>
        </>
    )
}

export default Footer
