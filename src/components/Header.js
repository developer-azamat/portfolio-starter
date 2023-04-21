import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className=' py-8'>
    <div className="container mx-auto">
      <div className='flex items-center justify-between'>
        <Link to="/" className='text-gradient text-2xl'>
          A3DEV
          {/* <img src={Logo} alt="" /> */}
        </Link>
        <Link className="btn btn-sm py-4" to='/contact'>Work with me</Link>
      </div>
    </div>
  </header>;
};

export default Header;
