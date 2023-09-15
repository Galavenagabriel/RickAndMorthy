import React from 'react';
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

import './nav.css'

export default function Nav(props) {
    const { onSearch } = props;

    return (
        <div className='nav-container-z1'>

            <div className='nav-container-z2'>
                

                <Link to='/about'>
                    <span>About</span>
                </Link>

                <Link to='/home'>
                    <span>Home</span>
                </Link>
                <Link to='/favorite'>
                <p>FAV</p>
                </Link>
            </div>

            <SearchBar onSearch={onSearch}/>
        </div>

        
    )
}

