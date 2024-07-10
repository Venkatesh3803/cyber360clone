import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Menu from './Menu'



const Navber = () => {

  const [menuBar, setMenuBar] = useState(false)

  const location = useLocation();


  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // If scroll down, hide the navbar
      setShow(false);
    } else {
      // If scroll up, show the navbar
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);



  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    // <!-- component -->
    <>
      <nav className={`main menu  border-gray-200 dark:border-gray-700 px-1 sm:px-14 py-2.5 rounded-xl dark:bg-gray-800 fixed top-8 left-[10%] z-40 transition-all duration-200 ${show ? "visible" : "hidden"}`}>
        <div className="flex items-center gap-4 md:gap-10 justify-between">

          <Link to={"/"} className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white flex items-center gap-5 ">
              <div className="w-[80%]">
                <img className='w-full h-12  object-contain' src="https://cyber360technologies.com/cyber360-logo.png" alt="" />
              </div>
              <h1 className='text-white text-base text-wrap sm:text-nowrap md:text-2xl font-bold'>Cyber360 Technologies</h1>
            </span>
          </Link>

          <div className="flex items-center">
            <button
              id="menu-toggle"
              type="button"
              onClick={() => setMenuBar(true)}
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
            >

              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                  color='White'
                />
              </svg>
            </button>
          </div>


          <div
            className="w-full lg:block md:w-auto hidden"
            id="mobile-menu"
          >
            <ul className="flex items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link to="/#services" className="block py-2 pr-4 pl-3 text-white text-sm xl:text-xl font-bold bg-blue-700 rounded md:bg-transparent  md:p-0 dark:text-white "
                  aria-current="page">
                  Services
                </Link>


              </li>
              <li>
                <Link to="/#solutions"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-sm xl:text-xl md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link to={"/careers"}
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-sm xl:text-xl font-bold md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link to={"/aboutus"}
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent text-sm xl:text-xl font-bold md:border-0  md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About Us
                </Link>
              </li>
              <Link to={"/contactus"}>
                <button className="px-7 py-2 bg-white rounded-md text-sm xl:text-xl text-black font-bold">Contact Us</button>
              </Link>

              <ul className=" flex justify-end">
              </ul>
            </ul>
          </div>
        </div>
      </nav>
      <Menu setMenuBar={setMenuBar} menuBar={menuBar} />
    </>
  )
}

export default Navber