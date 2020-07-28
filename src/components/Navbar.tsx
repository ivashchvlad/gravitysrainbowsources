import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import ChaptersNavigation from './ChaptersNavigation'
import '../scss/navbar.scss'


export default function Navbar() {
    const [active, setActive] = React.useState(false)
    const [isNightMode, setIsNightMode] = React.useState(false);

    const handleClick = (e: any) => {
        e.preventDefault()
        active ? document.body.style.overflow = 'auto' : document.body.style.overflow = 'hidden'
        setActive(!active)
        if (e.target.href) {
            let el = document.getElementById(e.target.href.split('#')[1])
            if (el) window.scrollTo(0, el.offsetTop - 50)
            else window.scrollTo(0, 0);
        }
    }

    const handleNightMode = (e: any) => {
        setIsNightMode(!isNightMode)
        document.body.classList.toggle('dark')
    }

    return (
        <>
            <header>
                <div className="container">
                    <div className="header__icon">
                    <Link to="/">🚀</Link>
                    </div>
                        <div className="header__right">
                            <div className="nightmode" onClick={handleNightMode}>
                    <input type="checkbox" className="nightmode__checkbox" id="chk" 
                        checked={isNightMode}/>
                        <label className="nightmode__label">
                        <span className="nightmode__moon">☾</span>
                        <span>☼</span>     
                        <div className="nightmode__ball"></div>
                    </label>
                    </div>
                    <div className={"header__burger " + (active && 'active')} onClick={handleClick}>
                        <span></span>
                    </div>
                        </div>
                    
                </div>
            </header>
            <nav className={active ? 'active' : undefined}>
                <div className="container">
                    <h3>Navigation:</h3>
                    <h4 onClick={handleClick}>
                        <Link to="/">Main</Link>
                    </h4>
                    <h4 onClick={handleClick}>
                        <Link to="/GR">What Happened in GR?</Link>
                    </h4>
                    <Switch>
                        <Route
                            component={() => (
                                <ChaptersNavigation
                                    handleClick={handleClick}
                                />
                            )}
                            path="/GR" exact
                        />
                    </Switch>
                </div>
            </nav>
        </>
    )
}
