import React from 'react'
import '../assets/components/CardWithImage.css'
import '../assets/components/Title.css'

function Home({
    children,
    image,
    title,
    subTitle
}) {
    return (
        <div className="card-container">
            <div className="card-content">
                <div className="card-left-container">
                    <p className="title">
                        {title}
                    </p>
                    <p className="gray-text card-subTitle">
                        {subTitle}
                    </p>
                    <div>
                      {children}
                    </div>
                </div>
            </div>
            <div>
                <img src={image} alt="about us"/>
            </div>
        </div>
    )
}

export default Home
