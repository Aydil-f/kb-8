import React from 'react';


function Navbar () {
    return (

<div className="navbar bg-info-content text-white shadow-sm">

     <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li>
          <a>Contact Me</a>
          <ul className="p-2">
            <li><a>Instagram</a></li>
            <li><a>GitHub</a></li>
          </ul>
        </li>
        <li><a>About</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Kelompok 8</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details>
          <summary>Contact Me</summary>
          <ul className="p-2 text-white">
            <li><a>Instagram</a></li>
            <li><a>GitHub</a></li>
          </ul>
        </details>
      </li>
      <li><a>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-neutral-content text-black">Profile</a>
  </div>
</div>
     
    );
};

export default Navbar;