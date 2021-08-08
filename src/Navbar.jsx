import React from 'react';
import {NavLink} from 'react-router-dom';




const Navbar = () =>{
    return (
        <>
  <div id="navbar-media" className="navbar">   
   <img src="/images/raftaar-logo-png.png" alt="logo" style={{height:"10vh", width:"25vh"}}  className="d-inline-block align-text-top"/>
    <NavLink style={{textDecoration:"none", color:"white"}} exact activeClassName="active_class" to='/'>Home</NavLink>
    <NavLink style={{textDecoration:"none", color:"white"}} exact activeClassName="active_class" to='/about'>About</NavLink>
    <NavLink style={{textDecoration:"none", color:"white"}} exact activeClassName="active_class" to='/menu'>OurMenu</NavLink>
    <NavLink style={{textDecoration:"none", color:"white"}} exact activeClassName="active_class" to='/booking'>Booking</NavLink>
    <NavLink  to='/contact'><button id="nav-text" className="rainbow-text">👉 Contact Us 👈</button></NavLink>
   
  </div>   
    </>
    )
}

export default Navbar;