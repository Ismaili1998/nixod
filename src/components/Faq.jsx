import React from 'react'
import { motion } from "framer-motion";

const Faq = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }} // Initial state before scrolling
            animate={{ opacity: 1, y: 0 }} // Animation when scrolling
            transition={{ duration: 0.7 }} // Animation duration
            class="container flex flex-col justify-center p-4 mx-auto md:p-8"
        >
            <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Frequently Asked Questions</h2>
            <div class="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700 gap-8">
                <details>
                    <summary class="text-3xl py-2 outline-none cursor-pointer focus:text-teal-500">What are your core services?</summary>
                    <div class="px-4 pb-4 text-xl">
                        <p>
                            We specialize in providing digitalization solutions tailored to businesses of all sizes. Our services include building software
                            and apps to accelerate business operations. Additionally, we excel in integrating artificial intelligence and software with
                            line management systems to optimize efficiency and performance.</p>
                    </div>
                </details>
                <details>
                    <summary class="text-3xl py-2 outline-none cursor-pointer focus:text-teal-500">How can I explore the most suitable solution for my business needs?</summary>
                    <div class="px-4 pb-4 text-xl">
                        <p>
                            Navigating the diverse range of solutions can be complex. If you require assistance in determining the best fit for your business,
                            please don't hesitate to reach out. We're here to provide professional guidance and support tailored to your specific requirements.</p>
                    </div>
                </details>
                <details>
                    <summary class="text-3xl py-2 outline-none cursor-pointer focus:text-teal-500">Do we wok with startup & Small Businesses?</summary>
                    <div class="px-4 pb-4 text-xl">
                        <p>Yes, we work with clients of all sizes, from enterprise-level organizations to startups. We are passionate
                            about helping startups bring their ideas to life and achieve their goals through the power of design and technology.</p>
                    </div>
                </details>
                <details>
                    <summary class="text-3xl py-2 outline-none cursor-pointer focus:text-teal-500">How can I contact you?</summary>
                    <div class="px-4 pb-4 text-xl">
                        <p>Feel free to contact us via our email at <a href="mailto:contact@nixod.com" className='underline'>contact@nixod.com</a>. Alternatively,
                            you can visit our contact page and fill out the form,
                            providing a brief description of your needs. We'll ensure to respond to you in less than 24 hours.</p>
                    </div>
                </details>
                <details>
                    <summary class="text-3xl py-2 outline-none cursor-pointer focus:text-teal-500"> Why choose Nixod?</summary>
                    <div class="px-4 pb-4 text-xl">
                        <p>Choosing Nixod means selecting a partner dedicated to your success. With our commitment to excellence, personalized service,
                            and innovative solutions, we stand out as your trusted ally in achieving your business goals.
                            our dedicated team is always here to assist you and answer any questions you may have. With our unwavering commitment to customer support
                            and expertise, you can trust that you'll receive the assistance you need, precisely when you need it. We're not just a service provider,
                            we're your reliable partners in success.</p>
                    </div>
                </details>
            </div>
        </motion.div>
    )
}

export default Faq;
