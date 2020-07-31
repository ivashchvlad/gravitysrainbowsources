import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainSwitch from './components/MainSwitch'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App() {
    return (
        <>
            <Router basename="/gravitysrainbowsources">
                <Navbar />
                <MainSwitch />
                <Footer />
            </Router>
        </>
    )
}
