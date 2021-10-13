import React from 'react'
import Logo from '../assets/images/Logo.png';
import MAP from '../assets/icons/map.png';
import PHONE from '../assets/icons/phone.png';
import { Link } from 'react-router-dom';
import '../assets/components/Footer.css'

function Footer() {

    return (
        <div className="row h1 m-top footer-container">
            <div className="w1 m-right">
                <img src={Logo} alt="Company Logo"/>
                <p className="gray-text">
                Sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
            </div>
            <div className="footer-info-wrapper">
                <p className="small-title">
                    Information
                </p>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <Link to='/'>Products</Link>
                        <Link to='/'>Become a Seller</Link>
                        <Link to='/'>Careers</Link>
                    </div>
                    <div className="footer-link-items">
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Privacy Policy</Link>
                        <Link to='/'>Terms and Conditions</Link>
                </div>
                </div>
            </div>
            <div className="w1">
                <p className="small-title">
                    Our contacts
                </p>
                <div className="row center-items mt-1">
                    <img src={PHONE} alt="small card" className="m-right footer-icon"/>
                    <p className="gray-text">
                        +4 (509) 120 6705
                    </p>
                </div>
                <div className="row center-items mt-0">
                    <img src={MAP} alt="small card" className="m-right footer-icon"/>
                    <p className="gray-text">
                        1418 Riverwood Drive, Suite 3245 Cottonwood, CA 96052, US
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
