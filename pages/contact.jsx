import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const contact = () => {
    return (
        <div>
            <Hero heading="Contact"
            message="Submit the form below"
            />
            <Contact/>
            <Footer/>
        </div>
    )
}

export default contact
