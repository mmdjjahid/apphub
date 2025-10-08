import logo from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router";


const Header = () => {
    
    const navActive = 'bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text  border-b-2 border-[#632EE3]'
    const navInactive = 'text-black opacity-90'
    const links = 
    <>
    <NavLink  to="/" className={({isActive})=>`${isActive?navActive:navInactive} px-2 font-medium`} >Home</NavLink>
    <NavLink to="/apps" className={({isActive})=>`${isActive?navActive:navInactive} px-2 font-medium`}>Apps</NavLink>
    <NavLink to="/installation" className={({isActive})=>`${isActive?navActive:navInactive} px-2 font-medium`}>Installation</NavLink>
    </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}

            </ul>
          </div>
          {/* bg-gradient-to-r from-[#632EE3] to-[#9F62F2] */}
          <NavLink to="/" className="btn btn-ghost text-xl">
            <img className="w-8" src={logo} alt="" />
            <p className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">AppHub</p>
            </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-3 menu menu-horizontal px-1">
            {links}

          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2]  text-white"><FaGithub /> Contribute</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
