import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ setMenuBar, menuBar }) => {
  return (
    // <!-- component -->
    <>
      <div className={menuBar ? "menu  h-screen flex flex-col gap-5 p-2 w-full fixed top-[0] left-[0] z-50 lg:hidden transition-all duration-500" : " menu  h-screen flex flex-col gap-5 p-2 w-full fixed top-[0] left-[-1120px] z-50 lg:hidden transition-all duration-500"}>
        <div className="flex items-center justify-between px-6 py-2">
          <div x-data="{ open: false }" className="flex gap-5 items-center">
            <img className="w-[60px] h-[60px] rounded-full "
              src="https://cyber360technologies.com/cyber360-logo.png" alt="profile picture" />
            <div>
              <h1 className='text-white text-2xl font-bold'>Cyber360 Technologies</h1>
            </div>
          </div>
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full font-bold text-xl cursor-pointer" onClick={() => setMenuBar(false)}>x</div>
        </div>
        <hr />
        <div className="flex flex-col gap-2">
          <Link to="/aboutus"
            className="text-white flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
            About US
          </Link>
          <Link to="/#solutions"
            className="text-white flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
            Solutions
          </Link>
          <Link to="/careers"
            className="text-white flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
            Careers
          </Link>
          <Link to="/#services"
            className="text-white flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
            Services
          </Link>
          <Link to="/contactus"
            className="text-white flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250">
            Conact Us
          </Link>

        </div>
      </div>

    </>
  )
}

export default Menu