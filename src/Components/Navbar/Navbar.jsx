import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
//   console.log(user);

    const handleSignOut = () => {
        logOut()
        .then(res => {
            console.log(res);
        })
        .catch(error => {
            console.log(error);
        })
    }




  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/allProducts"}>All Products</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to={"/myProducts"}>My Products</NavLink>
          </li>
          <li>
            <NavLink to={"/myBids"}>My Bids</NavLink>
          </li>
          <li>
            <NavLink to={"/createProducts"}>Create Product</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-white shadow-sm">
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
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost font-bold text-xl">
            Smart<span className="text-primary">Deals</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <img
            src={user ? `${user.photoURL}` : 'https://img.icons8.com/officel/80/user.png'}
            className="w-[40px] mr-5.5 rounded-full p-1 border border-gray-200"
            alt=""
          />
          {user ? (
            <Link
              className="btn btn-outline btn-primary text-primary"
              onClick={handleSignOut}
            >
              Log Out
            </Link>
          ) : (
            <Link
              className="btn btn-outline btn-primary text-primary"
              to={"/auth/login"}

            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
