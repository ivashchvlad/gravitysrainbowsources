import * as React from 'react'
import '../scss/card.scss'

interface MyProps {
    imageSrc: string;
}
export default function Card({imageSrc, children}: React.PropsWithChildren<MyProps>) {
    return (
        <div className="card">
            <div className="card__image">
                <img src={imageSrc} alt="card image"/>
            </div>
            <div className="card__content">
                {children}
            </div>
        </div>
    )
}
