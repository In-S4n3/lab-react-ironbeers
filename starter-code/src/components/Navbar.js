import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav
        style={{
          backgroundColor: '#03f0fc',
          textAlign: 'center',
          height: '50px',
          margin: '0px 0px 25px 0px',
        }}
      >
        <Link to="/">
          <img src="/images/home-icon.png" alt="" width="5%" />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
