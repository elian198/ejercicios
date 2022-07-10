import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Products from '../components/Products/Products'

const Home = () => {

    return (

        <>
            <Navbar />
            <Hero />
            <AboutUs />
            <Products />
            <Footer />
        </>

    )

}

export default Home