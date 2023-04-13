import React from 'react'
import { NavLink } from 'react-router-dom'

function Naavbaar() {
  return (
    <nav id="header" class="w-full z-30 top-5 py-1 bg-black shadow-lg">
      <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
         <label for="menu-toggle" class="cursor-pointer md:hidden block">
            <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
               <title>menu</title>
               <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
         </label>
         
         <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
            <nav>
               <ul class="md:flex items-center justify-between text-base text-green-600 pt-4 md:pt-0">
                    <li>
                        <NavLink
                            to="/"
                            className="inline-block no-underline text-white hover:text-green-600 font-medium text-lg py-2 px-4 lg:-ml-2">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contactUs"
                            className="inline-block no-underline text-white hover:text-green-600 font-medium text-lg py-2 px-4 lg:-ml-2">
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/reportBox"
                            className="inline-block no-underline text-white hover:text-green-600 font-medium text-lg py-2 px-4 lg:-ml-2">
                            Report Activity
                        </NavLink>
                    </li>
               </ul>
            </nav>
         </div>
         
         <div class="order-3 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
            <div class="auth flex items-center w-full md:w-full">
                <NavLink    to="/signup"
                            className="bg-pink-600 text-gray-200 p-2 rounded  hover:bg-pink-500 hover:text-gray-100 mr-4">
                            Sign in as a Company
                </NavLink>
                <NavLink    to="/signin"
                            className="bg-blue-600 text-gray-200 p-2 rounded  hover:bg-blue-500 hover:text-gray-100">
                            Sign in as a Freelancer
                </NavLink>
            </div>
         </div>
      </div>
   </nav>
  )
}

export default Naavbaar 