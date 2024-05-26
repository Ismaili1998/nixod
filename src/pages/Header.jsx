import { React, useState } from 'react'
import { GoArrowUpRight } from "react-icons/go";
import logo from "../img/logo.png"
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className="fixed w-full shadow-sm z-10">
      <nav className="bg-white border-gray-200 py-3 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
          </Link>

          <div className="flex items-center lg:order-2">
            <a href="#"
              className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-1
             rounded-full text-sm px-4 lg:px-5 py-2 lg:py-2 sm:mr-2 lg:mr-0 
            dark:bg-teal-600 dark:hover:bg-teal-700 focus:outline-none flex items-center">
              <span className='font-extrabold'>Free Consultation</span>
              <GoArrowUpRight className='ml-1 text-2xl' />
            </a>
            <a href="#"
              className="font-medium rounded-lg text-md px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2
             dark:hover:bg-gray-700 focus:outline-none"> Sign in </a>
          </div>

          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to={"/services"}
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100
                   hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                   lg:hover:text-teal-700 lg:p-0 dark:text-gray-400
                    lg:dark:hover:text-white dark:hover:bg-gray-700 
                    dark:hover:text-white lg:dark:hover:bg-transparent 
                    dark:border-gray-700">
                  Explore services </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 
                  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0
                   dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700
                    dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                  What we offer </a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100
                 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-teal-700 lg:p-0
                  dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700
                   dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
              </li>
              <li>
                <Link to="/contact" className="block py-2 pl-3 pr-4 text-gray-700 border-b
                 border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0
                  lg:hover:text-teal-700 lg:p-0 dark:text-gray-400
                   lg:dark:hover:text-white dark:hover:bg-gray-700
                    dark:hover:text-white lg:dark:hover:bg-transparent
                     dark:border-gray-700">
                  Contact</Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </header>
  )
}
