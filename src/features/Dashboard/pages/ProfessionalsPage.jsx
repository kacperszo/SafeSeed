import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'

const ProfessionalsPage = () => {
    return (
        <div className="bg-beige h-screen max-h-screen w-full flex flex-col font-mont">
            <Topbar/>
            <div className="p-4 text-deep-purple w-3/4 relative z-30">
            <h1 className="text-3xl font-quirky font-black mb-3">Contact <span className="text-haps" >Professionals
                </span></h1>
            <p className="text-katowice font-medium">Labore do in elit minim proident aliqua tempor cupidatat deserunt.</p>
        </div>
        <div className='p-4 flex-grow'>
            
        </div>
            <Navbar/>
        </div>
    )
}

export default ProfessionalsPage
