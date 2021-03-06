import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import VideoSlider from './VideoSlider'
import '../scss/mainboard.scss'

export default function MainBoard() {
    return (
        <div className="mainboard">
            <div className="about">
                <div className="about__title">
                    <img src="../src/img/543449.jpg" alt="rocket blueprint" />
                    <div className="container">
                        <h1>Gravity's Rainbow</h1>
                        <h2>sources</h2>
                        <p><i>
                            Gravity's rainbow can be extreamly hard to understand.
                            I struggled myself and found a lot of interesting resources
                            that helped me out with it. So I thougth about sharing them.
                        </i></p>
                    </div>
                </div>

            </div>
            <div className="container">
                <h4>Links</h4>
                <div className="sources">
                    <Card imageSrc="https://images-na.ssl-images-amazon.com/images/I/A1dmzhFj+iL.jpg">
                        <Link to="/GR">
                            Some things that "happen" (more or less) in gravity's rainbow
                    </Link>
                    </Card>
                    <Card imageSrc="https://styles.redditmedia.com/t5_2skte/styles/communityIcon_jdnxkooykp351.jpg?width=256&format=pjpg&s=23b1c7b7bac94de2e3f7113b6eeebc5563192dd9">
                        <a href="https://www.reddit.com/r/ThomasPynchon/">
                            Thomas Pynchon Reddit
                    </a>
                    </Card>
                    <Card imageSrc="https://img.discogs.com/X9yx5YXWOGRBJf-OW6iBtFTXvvQ=/515x651/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-879893-1519473954-1980.jpeg.jpg">
                        <a href="https://gravitys-rainbow.pynchonwiki.com/wiki/index.php?title=Main_Page">
                            Pynchon Wiki: Gravity's Rainbow
                    </a>
                    </Card>
                    <Card imageSrc="https://m.media-amazon.com/images/M/MV5BMTU2MTkzOTI4OV5BMl5BanBnXkFtZTcwMjUyMDMzNA@@._V1_SY1000_CR0,0,710,1000_AL_.jpg">
                        <a href="https://www.imdb.com/title/tt1457742/">
                            Impolex (film)
                    </a>
                    </Card>
                    <Card imageSrc="https://images-na.ssl-images-amazon.com/images/I/41w118sV1vL.jpg">
                        <a href="https://www.amazon.com/Gravitys-Rainbow-Companion-Contexts-Pynchons-ebook/dp/B00400MR4I/ref=sr_1_2?dchild=1&keywords=gravity%27s+rainbow&qid=1593350491&rnid=2941120011&s=books&sr=1-2">
                            Buy the Companion Book
                    </a>
                    </Card>
                    <Card imageSrc="https://images-na.ssl-images-amazon.com/images/I/81cCnee+3SL.jpg">
                        <a href="https://www.amazon.com/s?k=gravity%27s+rainbow&rh=n%3A283155&dc&qid=1593350491&rnid=2941120011&ref=sr_nr_n_1">
                            Buy the Book
                    </a>
                    </Card>
                </div>
                <div className="reading-guide">
                    <h4>Reading Project with Bookchemist</h4>
                    <VideoSlider>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/exi6tuuUZ54" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/igdp6tFhTTI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zCiWUEy0Ngw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/VcG-UyHzJUQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/BLuecZVkXoo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/r-A7GeMtoUE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/St2XzUEM3ic" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4fAHXftWIYc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/eUFUZ_gHWqs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/rVaaTeQ1DDg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/u5yLrIYVbS4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </VideoSlider>
                </div>
                <div className="music">
                    <h4>Music</h4>
                    <VideoSlider>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/JUdvYOfaLAQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/lezoqO0d4g4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/_xse1QEhVmY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </VideoSlider>
                </div>
            </div>
        </div>
    )
}
