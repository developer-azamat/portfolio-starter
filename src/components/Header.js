import React from 'react';
import Logo from '../assets/logo.svg'

const Header = () => {
  return <header className=' py-8'>
    <div className="container mx-auto">
      <div className='flex items-center justify-between'>
        <a href="#" className='text-gradient text-2xl uppercase'>
          aaa_dev
          {/* <img src={Logo} alt="" /> */}
        </a>
        <button className="btn btn-sm">Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
