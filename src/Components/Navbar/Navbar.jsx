import {   NavLink } from "react-router-dom";
import './Navbar.css'
 

const Navbar = () => {
    return (
<nav className="navbar  md:w-11/12 md:mx-auto flex-col  md:flex-row md:justify-between md:bg-base-100 ">
  <div className="navbar-start">
    <img className="w-[220px]" src="/public/Logo.png" alt="" />
  </div>
  <div className="navbar-center    ">
    <ul className=" flex gap-6 menu-horizontal px-1 pt-5">
       
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/donation" >Donation</NavLink></li>
      <li><NavLink to="/stat" >Statistics</NavLink></li>
       
       
    </ul>
  </div>
</nav>
    );
};

export default Navbar;