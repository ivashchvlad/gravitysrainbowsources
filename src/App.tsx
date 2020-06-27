import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import MainSwitch from './components/MainSwitch'
import Navbar from './components/Navbar'

function App() {
    return (
        <>
            <div>
                Who's John Galt?
            </div>
            <Router>
                <Navbar />
                <MainSwitch />
            </Router>
        </>
    )
}

export default App
