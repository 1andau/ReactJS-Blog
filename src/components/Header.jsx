import React from 'react';
import {Link} from 'react-router-dom'
import Button from './Button';



const Header = () => (
<header>
        <nav>
          <ul className="nav_links">
          <Link className='links' to='/home'>Home</Link>
            <Link className='links' to='/gallery'>Gallery</Link>
            <Link className='links' to='/account'>Account</Link>
          </ul>
        </nav>
        <Link to='/signin'><Button  ><span>sign in</span></Button></Link>
      </header>
);

export default Header;
