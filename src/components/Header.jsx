import React from 'react';
import {Link} from 'react-router-dom'
import Button from './Button';



const Header = () => (
<header>
        <nav>
          <ul className="nav_links">
          <Link className='links' to='/'>Home</Link>
            <Link className='links' to='/favorites'>Favorites</Link>
            <Link className='links' to='/write'>Write</Link>
          </ul>
        </nav>
        <Link to='/account'><Button className="btn_go" >go to profile</Button></Link>
      </header>
);

export default Header;
