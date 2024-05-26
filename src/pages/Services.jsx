import React from 'react'
import service1 from '../img/landing_img.png'
import anpr from '../img/anpr.jpg'
import parking from '../img/parking.jpeg'
import dashboard from '../img/dashoard.png'
import erp from '../img/erp.jpg'
import cloud from '../img/cloud.jpg'
import industry from '../img/industry.jpg'


const Services = () => {
    return (
        <section className="relative max-w-full sm:mx-4 my-20 py-16 bg-white">
            <div className="relative max-w-screen-xl px-4 sm:px-2 mx-auto grid grid-cols-12 gap-x-6">
                <div data-aos="fade-right" className="col-span-12 lg:col-span-6 space-y-8 sm:space-y-6 px-4 sm:px-6 mt-8">
                    <h2 className="text-4xl font-semibold">Nixod core <span className="text-teal-800">Services</span></h2>
                    <div className="space-y-2">
                        <h4 className="text-3xl font-medium">Digitizing Industries, Transforming Futures</h4>
                        <p className="text-lg text-left">
                            Nixod leads the way in digitizing industries with innovative solutions tailored for success. From seamless integration to
                            unparalleled efficiency, our services redefine the digital landscape.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-3xl font-medium">Powerful Software Solutions</h4>
                        <p className="text-lg">
                            Mediate your Enterprise resource planning (ERP). With our high-performance
                            software, your operations reach new heights of efficiency and effectiveness.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h4 className="text-3xl font-medium">AI Integration for Enhanced Performance</h4>
                        <p className="text-lg">
                            Experience the future of industry with Nixod's AI integration services. From predictive analytics to intelligent decision-making,
                            our AI solutions optimize performance and drive innovation.
                        </p>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-6 sm::hidden">
                    <div className="xl:mt-0">
                        <img loading="lazy" src={service1} className="w-full" alt="" />
                    </div>
                </div>
            </div>
            <div className='mt-28 bg-white'>
                <h1 className='text-center text-5xl'> Explore Services </h1>
                <div class="flex justify-start flex-wrap mt-14">
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
                        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img class="w-full h-64 object-cover object-center" src={erp} alt="ms" />
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2">Management softwares</h3>
                                <p class="text-sm text-gray-700">Mediate your Enterprise resource planning (ERP) with our comprehensive management softwares.
                                    Seamlessly oversee every aspect of your organization with intuitive tools designed for efficiency.</p>
                                <div className='mt-4'>
                                    <button className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border
                                     border-teal-500 hover:border-transparent rounded">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
                        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img class="w-full h-64 object-cover object-center" src={dashboard} alt="dashboard" />
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2">Data Solution</h3>
                                <p class="text-sm text-gray-700">Empower your business with our cloud-driven solutions for seamless data migration,
                                    customizable dashboards, and comprehensive analytics. Streamline operations and unlock valuable insights with expert guidance
                                    tailored to your needs.</p>
                                <div className='mt-4'>
                                    <button className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border
                                     border-teal-500 hover:border-transparent rounded">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
                        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img class="w-full h-64 object-cover object-center" src={cloud} alt="Product 4" />
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2">Cloud solutions</h3>
                                <p class="text-sm text-gray-700">
                                    Elevate your business with our cloud solutions offering secure data management and advanced analytics,
                                    ensuring compliance and unlocking actionable insights. Seamlessly migrate to the cloud,
                                    and streamline operations.</p>
                                <div className='mt-4'>
                                    <button className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border
                                     border-teal-500 hover:border-transparent rounded">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
                        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img class="w-full h-64 object-cover object-center" src={industry} alt="industry" />
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2">Line management</h3>
                                <p class="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, quod repellendus?
                                    Nam aliquam suscipit non eos ducimus ea pariatur voluptatibus doloremque recusandae reiciendis assumenda cumque,
                                    dolorem necessitatibus vel accusamus officia?</p>
                                <div className='mt-4'>
                                    <button className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border
                                     border-teal-500 hover:border-transparent rounded">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
                        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img class="w-full h-64 object-cover object-center" src={anpr} alt="anpr" />
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2">ANPR System</h3>
                                <p class="text-sm text-gray-700">Unlock the power of precision with our Automatic Number Plate Recognition (ANPR) system.
                                    Effortlessly identify and track vehicles.Enhance security,
                                    streamline operations, and elevate efficiency with our ANPR solution.  </p>
                                <div className='mt-4'>
                                    <button className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border
                                     border-teal-500 hover:border-transparent rounded">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-4">
                        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img class="w-full h-64 object-cover object-center" src={parking} alt="sparking" />
                            <div class="p-4">
                                <h3 class="text-lg font-semibold mb-2"> SMART PARKING SYSTEM </h3>
                                <p class="text-sm text-gray-700">Get complete control over the way you experience parking.
                                    WHAT IS A SMART PARKING SYSTEM?
                                    Thanks to digitalization, smart parking systems are starting to offer solutions for urban mobility.
                                </p>
                                <div className='mt-4'>
                                    <button className="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border
                                     border-teal-500 hover:border-transparent rounded">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-16'>
                <h1 className='text-center text-3xl'> Explore Some of our products  </h1>
                <div class="flex justify-between flex-wrap">
                    <div class="w-full md:w-1/2 p-4 mt-10">
                        <h1 className='text-2xl'>Get complete control over the way you experience parking</h1>
                        <h3 className="text-2xl font-semibold mb-4">SMART PARKING SYSTEM</h3>
                        <p className="text-xl text-gray-700 mb-4">
                            <span className='underline'>  WHAT IS A SMART PARKING SYSTEM ?</span> Thanks to digitalization, smart parking systems are starting to offer solutions for urban mobility.
                            This is a system which, thanks to the Internet of Things and sensor technology,
                            allows real-time data to be obtained about parking availability, both outside and inside, and regarding traffic and road conditions.
                        </p>
                    </div>
                    <div class="w-full md:w-1/2 p-4 mt-10">
                        <img loading="lazy" src={parking} className="rounded-full" alt="Parking" />
                    </div>

                </div>
                <div class="flex justify-between flex-wrap">
                    <div class="w-full md:w-1/2 p-4 mt-10">
                        <img loading="lazy" src={parking} className="rounded-full" alt="Parking" />
                    </div>
                    <div class="w-full md:w-1/2 p-4 mt-10">
                        <h1 className='text-2xl'>Get complete control over the way you experience parking</h1>
                        <h3 className="text-2xl font-semibold mb-4">SMART PARKING SYSTEM</h3>
                        <p className="text-xl text-gray-700 mb-4">
                            <span className='underline'>  WHAT IS A SMART PARKING SYSTEM ?</span> Thanks to digitalization, smart parking systems are starting to offer solutions for urban mobility.
                            This is a system which, thanks to the Internet of Things and sensor technology,
                            allows real-time data to be obtained about parking availability, both outside and inside, and regarding traffic and road conditions.
                        </p>
                    </div>
                </div>
            </div>

        </section >
    )
}

export default Services;
