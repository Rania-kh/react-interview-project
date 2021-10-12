import React from 'react'
import '../assets/components/SectionHeader.css'
import '../assets/components/Title.css'

function Home({
    children,
    title,
    subTitle
}) {
    return (
            <div className="section-header">
                <p className="title">{title}</p>
                <p className="gray-text header-subtitle">{subTitle}</p>
            </div>
    )
}

export default Home
