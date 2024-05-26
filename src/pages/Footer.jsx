import React from 'react';
import logo from '../img/logo.png'
const Footer = () => (
    <footer className="max-w-screen-xl px-8 mx-auto mt-10">
        <div className="w-full border-y border-[#DDDDDD]">
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                <div className="md:w-full lg:w-full w-full sm:w-1/2 xl:w-fit flex flex-col sm:flex-row sm:px-6 py-6 sm:py-12 sm:space-x-10 sm:border-r-0 border-[#DDDDDD]">
                    <div className="sm:hidden xl:block mb-6 sm:mb-0">
                        <a href="#">
                            <img src={logo} className="w-24 -mt-2" alt="Nefa Logo" />
                        </a>
                    </div>
                    <ul className="space-y-4">
                        <NavLink name="Cryptocurrency" url="#" />
                        <NavLink name="Exchanges" url="#" />
                        <NavLink name="Watchlist" url="#" />
                    </ul>
                </div>
                <div className="md:w-full lg:w-full lg:border-r w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t xl:border-r border-[#DDDDDD]">
                    <ul className="space-y-4">
                        <NavLink name="Products" url="#" />
                        <NavLink name="About Us" url="#" />
                        <NavLink name="Careers" url="#" />
                    </ul>
                </div>
                <div className="md:w-full md:border-t lg:w-full w-full sm:w-1/2 xl:w-fit sm:px-16 py-6 sm:py-12 border-t sm:border-t-0 sm:border-r-0 border-[#DDDDDD]">
                    <ul className="space-y-4">
                        <NavLink name="Help Center" url="#" />
                        <NavLink name="Contact Us" url="#" />
                    </ul>
                </div>
                <div className="md:w-full md:border-t lg:w-full sm:px-10 py-6 sm:py-12 w-full sm:w-1/2 xl:w-[22rem] space-y-4 sm:border-t border-[#DDDDDD]">
                    <h5 className="text-sm font-medium text-[#666666] focus:outline-none focus:shadow-outline">Newsletter</h5>
                    <p className="text-sm text-[#666666] focus:outline-none focus:shadow-outline">
                        Never miss anything crypto when <br className="sm:hidden" />you're on the go
                    </p>
                    <div className="flex items-center space-x-2">
                        <p className='text-xl'> Email:</p>
                        <a href="mailto:contact@nixod.com">
                            <h1 className='text-xl w-fit border-b-2 my-2'> contact@nixod.com </h1>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-8 sm:py-4 text-center text-md text-[#666666] hover:text-gray-900">
            &copy; Copyright {new Date().getFullYear()} Nixod. All rights reserved
        </div>
    </footer>
);

export default Footer;

const NavLink = ({ name, url }) => (
    <li>
        <a href={url} className="text-[#666666] hover:text-teal-500 focus:outline-none focus:shadow-outline">
            {name}
        </a>
    </li>
);

