import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import ChaptersNavigation from './ChaptersNavigation'
import '../scss/navbar.scss'


export default function Navbar() {
    const [active, setActive] = React.useState(false)

    const handleClick = (e: any) => {
        e.preventDefault()
        active ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
        setActive(!active)
        if (e.target.href) {
            let el = document.getElementById(e.target.href.split('#')[1])
            window.scrollTo(0, el.offsetTop - 50)
        }
    }

    return (
        <>
            <header>
                <div className="header__icon">
                    🚀
                </div>
                <div className={"header__burger " + (active && 'active')} onClick={handleClick}>
                    <span></span>
                </div>
            </header>
            <nav className={active ? 'active' : undefined}>
                <h3>Navigation:</h3>
                <h4 onClick={handleClick}>
                    <Link to="/main">Main</Link>
                </h4>
                <h4 onClick={handleClick}>
                    <Link to="/">What Happened in GR?</Link>
                </h4>
                <Switch>
                    <Route 
                        component={() => (
                            <ChaptersNavigation
                                handleClick={handleClick}
                            />
                        )} 
                        path="/" exact
                    />
                </Switch>
            </nav>
        </>
    )
}
