import React from 'react'
import '../assets/components/Searchbar.css';
import {Button} from './Button';

function Mainbar() {

    return (
        <div>
            <form className="search-form" role="search" id="form">
                <input type="search" id="query" name="q"
                    placeholder="Search goods or any else information"
                    className="search-input"
                    aria-label="Search through site content"/>
                <Button buttonStyle="btn--primary" buttonSize="btn--medium"> 
                   search
                </Button>
            </form>
        </div>
    )
}

export default Mainbar
