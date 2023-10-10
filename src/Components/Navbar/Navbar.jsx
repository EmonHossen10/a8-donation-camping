 

const Navbar = () => {
    return (
<nav className="navbar  md:w-11/12 md:mx-auto flex-col  md:flex-row md:justify-between md:bg-base-100 ">
  <div className="navbar-start">
    <img className="w-[220px]" src="/public/Logo.png" alt="" />
  </div>
  <div className="navbar-center    ">
    <ul className="menu menu-horizontal px-1 pt-5">
      <li><a>Home</a></li> 
      <li><a>Donation</a></li>
      <li><a>Statistics</a></li>
       
       
    </ul>
  </div>
</nav>
    );
};

export default Navbar;