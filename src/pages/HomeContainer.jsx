import React, { useEffect, useRef } from 'react'
import landing_img from '../img/landing_img.png'
import { FaPlayCircle } from "react-icons/fa";
import { Link } from 'react-scroll';
import { scaleInOut } from '../animations';
import { motion } from "framer-motion";
import LandingVideo from '../components/LandingVideo';
import PartnerImage from '../components/PartnerImage';
import Faq from '../components/Faq';
import Contact from './Contact';

export default function HomeContainer() {
    return (
        <div>
            <section className="bg-white">
                <div className="pt-20 pb-8 lg:pt-28 ml-10 md:ml-14 xl:ml-20 flex flex-wrap items-center justify-start">
                    <div class="place-self-center">
                        <h1 className="leading-none max-w-2xl mb-4 
                        text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                            Get your All-in-One Solution with Nixod
                        </h1>
                        <p class="max-w-2xl mb-2 font-light text-gray-700 lg:mb-8 md:text-2xl  dark:text-gray-400">
                            Empower your business with our comprehensive solutions designed to meet the unique needs of our clients.
                        </p>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <LandingVideo />
                    </div>
                </div>
            </section >
            <section className="bg-gray-700 text-white py-20 tracking-wider">
                <div className='mb-10'>
                    <h1 className='text-5xl text-center mb-4'>How it works at Nixod</h1>
                    <h1 className='text-2xl text-center'>Get your tailored solution in 4 steps</h1>
                </div>
                <div className='flex flex-wrap space-x-0 justify-center'>
                    <motion.div className='w-96 sm:border-l-0 border-l-2 md:border-t-2 border-teal-400 border-dashed p-10 rounded-full'
                        {...scaleInOut(0)}>
                        <div className="flex flex-col items-center gap-4">
                            <svg className="w-14 h-14" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
                            </svg>
                            <div className="text-3xl text-center font-extrabold">
                                <h1>Free Consultation</h1>
                            </div>
                            <div>
                                <p className='text-center text-xl'>
                                    Chat us to begin with a complimentary meeting to understand your needs, goals, and specific challenges.
                                </p>
                            </div>
                            <div>
                                <button className="bg-red-400 hover:bg-red-500 px-2.5 py-1.5 rounded-md">Chat us</button>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='w-96 sm:border-r-0 border-r-2 md:border-b-2 border-teal-400 border-dashed p-10 rounded-full'
                        {...scaleInOut(1)}
                    >
                        <div class="flex flex-col  items-center gap-4">
                            <svg class="w-14 h-14" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z" />
                                <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z" />
                            </svg>
                            <div class="text-3xl text-center font-extrabold">
                                <h1> Project Briefing </h1>
                            </div>
                            <div>
                                <p className='text-center text-xl'>
                                    Following the consultation, we move into the project briefing phase. This involves
                                    a clear definition of project goals,and the development of a strategy tailored to your needs.
                                </p>
                            </div>
                            <div>
                                <button class="bg-red-400 hover:bg-red-500 px-2.5 py-1.5 rounded-md">Call us</button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='w-96 border-l-2 sm:border-l-0 md:border-t-2 border-teal-400 border-dashed p-10 rounded-full'

                        {...scaleInOut(2)}>
                        <div class="flex flex-col  items-center gap-4">
                            <svg class="w-14 h-14" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                            </svg>
                            <div class="text-3xl text-center font-extrabold">
                                <h1> Package Selection </h1>
                            </div>
                            <div>
                                <p className='text-center text-xl'>
                                    With the project brief established, we present a range of packages to chose from.
                                    You can choose the package
                                    that best suits your requirements & meet your specific expectations.
                                </p>
                            </div>
                            <div>
                                <button class="bg-red-400 hover:bg-red-500 px-2.5 py-1.5 rounded-md">Choose package</button>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div className='w-96 border-r-2 sm:border-r-0 md:border-b-2 border-teal-400 border-dashed p-10 rounded-full'

                        {...scaleInOut(3)}>
                        <div class="flex flex-col items-center gap-4">
                            <svg class="w-14 h-14" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                <path d="M17 0h-5.768a1 1 0 1 0 0 2h3.354L8.4 8.182A1.003 1.003 0 1 0 9.818 9.6L16 3.414v3.354a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1Z" />
                                <path d="m14.258 7.985-3.025 3.025A3 3 0 1 1 6.99 6.768l3.026-3.026A3.01 3.01 0 0 1 8.411 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V9.589a3.011 3.011 0 0 1-1.742-1.604Z" />
                            </svg>
                            <div class="text-3xl text-center font-extrabold">
                                <h1>  Package Delivery </h1>
                            </div>
                            <div>
                                <p className='text-center text-xl'>
                                    After choosing the suitable package, our team efficiently brings your project to life,
                                    The Package delivery includes ongoing communication with regular updates.
                                </p>
                            </div>
                            <div>
                                <button class="bg-red-400 hover:bg-red-500 px-2.5 py-1.5 rounded-md">Learn more</button>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section >
            <section className="max-w-full sm:mx-6 my-20 shadow sm:rounded-2xl overflow-hidden">
                <h3 className="text-4xl text-neutral-800 font-semibold text-center mt-4">Clients who trust our products</h3>
                <p data-aos="flip-down" className="text-xl text-center mb-16 mt-4">Have a look at our main clients </p>
                <PartnerImage />
            </section>
            <section class="bg-slate-900 text-gray-100 py-20 min-h-screen">
                <Faq />
            </section>
            <Contact />
        </div >
    )
};