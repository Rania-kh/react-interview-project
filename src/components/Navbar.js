import React from 'react'
import {Link} from 'react-router-dom'
import '../assets/styles/Navbar.css'
import { Button } from './Button';

function NavBar() {

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <ul className='nav-menu'>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            Products
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            Become a Seller
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                            Careers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/' className="nav-links">
                                Contact Us 
                        </Link>
                    </li>
                </ul>
                <Button buttonStyle="btn--outline" >Register </Button>
                <Button buttonStyle="btn--primary" >Login </Button>
            </div>
        </nav>
        </>
    )
}

export default NavBar
