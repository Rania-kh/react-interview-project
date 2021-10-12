import React from 'react'
import '../assets/components/Button.css'
import {Link} from 'react-router-dom'

const STYLES=['btn--primary','btn--outline','btn--blue']
const SIZES = ['btn--large','btn--medium']
export const Button = ({
    children,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle=STYLES.includes(buttonStyle)?buttonStyle : STYLES[0]
    const checkButtonSize=SIZES.includes(buttonSize)?buttonSize:SIZES[0]
    return (
        <Link to='/' className="btn-mobile">
            <button 
            className={`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick={onClick}>
                {children}
            </button>
        </Link>
    )
}
