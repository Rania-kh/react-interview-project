import React from 'react'
import '../assets/components/CardWithImageSmall.css'
function Home({
    children,
    image,
    title,
    subTitle
}) {
    return (
        <div className="small-card-container border-card">
            <div className="small-card-content">
                <div className="row m-top">
                    <img src={image} alt="small card" className="m-right"/>
                    <p className="small-title">
                        {title}
                    </p>
                </div>
                <p className="gray-text">
                    {subTitle}
                </p>
            </div>
        </div>
    )
}

export default Home
