import * as React from 'react'
import '../scss/navbar.scss'


function Navbar() {
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

    const chapters = (chapter: number, length: number) => {
        let res = []
        for (let i = 1; i <= length; i++) {
            res.push(
                <a 
                    href={`#${chapter}-${i}`} 
                    key={i}
                    onClick={handleClick}
                >
                    [{i}]
                </a>
            )
        }
        return res
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
            <nav className={active ? 'active': undefined}>
                <h3>Navigation:</h3>
                <h4><a href="#chapter-1" onClick={handleClick}>I: Beyound the Zero</a></h4>
                <ul>
                    <li>{chapters(1, 21)}</li>
                </ul>
                <h4><a href="#chapter-2" onClick={handleClick}>II: UN PERM'AU CASINO HERMANN GOERING</a></h4>
                <ul>
                    <li>
                        {chapters(2, 8)}
                    </li>
                </ul>
                <h4><a href="#chapter-3" onClick={handleClick}>III: IN THE ZONE</a></h4>
                <ul>
                    <li>
                        {chapters(3, 32)}
                    </li>
                </ul>
                <h4><a href="#chapter-4" onClick={handleClick}>IV: The Counterforce</a></h4>
                <ul>
                    <li>
                        {chapters(4, 12)}
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
