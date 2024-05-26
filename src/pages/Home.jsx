import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import { Suspense } from 'react'
import HomeContainer from './HomeContainer'
import Contact from './Contact'
import Services from './Services'


export default function Home() {

    return (
        <div className='overflow-y-auto'>
            <Header></Header>
            <main className="w-full">
                <Suspense fallback={"..."}>
                    <Routes>
                        <Route path="/" element={<HomeContainer />} />
                        <Route path="/contact" element={<Contact />} /> {/* Corrected path */}
                        <Route path="/services" element={<Services />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div >
    )
}
