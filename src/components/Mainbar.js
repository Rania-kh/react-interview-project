import React from 'react'
import '../assets/components/Mainbar.css';
import Searchbar from './Searchbar';
import Logo from '../assets/images/logotype.png';
import Logo2 from '../assets/images/image.png'

function Mainbar() {

    return (
        <>
        <nav className="mainbar">
            <img src={Logo} alt="Company Logo"/>
            <Searchbar/>
            <img src={Logo2} alt="Company Logo"/>
        </nav>
        </>
    )
}

export default Mainbar
