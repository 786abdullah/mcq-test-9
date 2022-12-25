import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Link className='nav-btn' to='/'>Home</Link>
            <Link className='nav-btn' to='/quiz'>Quiz</Link>
            <Link className='nav-btn' to='/result'>result</Link>
            <Link className='nav-btn' to='/blog'>Blog</Link>
            <Link className='nav-btn' to='/about'>about</Link>
            <Link className='nav-btn' to='/contact'>Contact</Link>
        </div>
    );
};

export default Header;