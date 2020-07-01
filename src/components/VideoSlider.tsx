import React from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import '../scss/videoslider.scss'


interface MyProps {}

export default function VideoSlider({ children }: React.PropsWithChildren<MyProps>) {
    const musicSlider = React.useRef(null);
    const video_el = React.useRef(null);
    const handleSlide = (e: any) => {
        smoothscroll.polyfill()
        let _left = musicSlider.current.scrollLeft;
        _left += (e.target.className == "button-left") ?
        - video_el.current.clientWidth : video_el.current.clientWidth

        musicSlider.current.scroll({
            top: 0,
            left: _left,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div className="videoslider">
                <div className="videoslider__content" ref={musicSlider}>
                    {
                        React.Children.map(children, child =>
                            <div className="video" ref={video_el}>
                                {child}
                            </div>
                        )
                    }
                </div>
                <button onClick={handleSlide} className="button-left">&#5176;</button>
                <button onClick={handleSlide} className="button-right">&#5171;</button>
            </div>
        </>
    )
}
