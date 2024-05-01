import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Courses from '../Courses'

function PaidBook() {
    return (
        <>
            <Navbar />
            <div className="mt-0 min-h-screen dark:bg-slate-900 dark:text-white"> <Courses /></div>
            <Footer />
        </>
    )
}

export default PaidBook
