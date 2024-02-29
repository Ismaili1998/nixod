import React from 'react'
import landing_img from '../img/landing_img.png'
import { FaPlayCircle } from "react-icons/fa";
import { Link } from 'react-scroll';
import ContactContainer from './ContactContainer'; 


export default function HomeContainer() {
    return (
        <div>
            <section class="bg-slate-50">
                <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                    <div class="lg:col-span-7">
                        <div class="mr-auto place-self-center">
                            <h1 class="leading-none max-w-2xl mb-4 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                                Get your All-in-One Solution with Nixod
                            </h1>
                            <p class="max-w-2xl mb-2 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Empower your business with our comprehensive solutions designed to meet the unique needs of our clients.
                            </p>
                        </div>
                        <div className='flex items-center gap-4'>
                        <Link to="containerContact" smooth duration={500}>
                            <button className=" text-white text-lg bg-teal-500 hover:bg-teal-600 focus:ring-2
                                    focus:ring-teal-400 font-medium rounded-full px-4 lg:px-5 py-2 lg:py-2
                                    sm:mr-2 lg:mr-0 dark:bg-teal-600 dark:hover:bg-teal-700
                                    focus:outline-none dark:focus:ring-teal-800 flex items-center gap-2">
                                <span>Contact us</span>
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                            </Link>
                            <div className='flex items-center gap-2'>
                                <FaPlayCircle className='text-4xl text-red-400' />
                                <a className='text-lg underline cursor-pointer'> See How it works </a>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-5 flex justify-end">
                        <img src={landing_img} alt="landing image" loading='lazy' class="lg:w-full" />
                    </div>
                </div>
            </section >
            <section class="bg-white dark:bg-gray-900">
                <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
                    <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                        <a href="#" class="flex items-center lg:justify-center">

                        </a>
                    </div>
                </div>
            </section>
        </div >
    )
};