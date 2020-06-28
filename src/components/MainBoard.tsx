import * as React from 'react'
import Card from './Card'
import '../scss/mainboard.scss'

function MainBoard() {
    return (
        <div className="mainboard">
            <div className="about">
                <h1>Gravity's Rainbow</h1>
                <h2>sources</h2>
                <p>
                    Gravity's rainbow can be extreamly hard to understand.
                    I struggled myself and found a lot of interesting resources
                    that helped me out with it. So I thougth about sharing them.
                </p>
                <ul>
                    <li>
                        <a href="https://www.amazon.com/s?k=gravity%27s+rainbow&rh=n%3A283155&dc&qid=1593350491&rnid=2941120011&ref=sr_nr_n_1">
                            Buy the Book
                        </a>
                    </li>
                    <li>
                        <a href="https://www.amazon.com/Gravitys-Rainbow-Companion-Contexts-Pynchons-ebook/dp/B00400MR4I/ref=sr_1_2?dchild=1&keywords=gravity%27s+rainbow&qid=1593350491&rnid=2941120011&s=books&sr=1-2">
                            Buy the Companion Book
                        </a>
                    </li>
                    <li>
                        <a href="https://www.reddit.com/r/ThomasPynchon/">Reddit</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/watch?v=exi6tuuUZ54&list=PL1imCIzhbzfNDyixDgZT7D4HEWt8cXF1H">
                            Bookchemist Reading GR
                        </a>
                    </li>
                </ul>
            </div>
            <div className="sources">
                <Card />
            </div>
            <div className="videos"></div>
            <div className="music">
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JUdvYOfaLAQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lezoqO0d4g4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/_xse1QEhVmY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
    )
}

export default MainBoard
