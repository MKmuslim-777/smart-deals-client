import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <footer className="footer sm:footer-horizontal bg-secondary text-base-content p-10">
        <aside>
         <h3 className="text-5xl text-white font-bold">Smart<span className="text-primary">Deals</span></h3>
          <p className="text-white">
            Your trusted marketplace for <br /> authentic local products. Discover the <br /> best deals from across Bangladesh.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-white">Quick links</h6>
          <NavLink className="link link-hover text-white">All Products</NavLink>
          <NavLink className="link link-hover text-white">My Products</NavLink>
          <NavLink className="link link-hover text-white">Login</NavLink>
          <NavLink className="link link-hover text-white">Register</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Contact & Support</h6>
          <NavLink className="link link-hover text-white"><MdOutlineMail /> support@SmartDeals.com</NavLink>
          <NavLink className="link link-hover text-white">My Products</NavLink>
          <NavLink className="link link-hover text-white">Login</NavLink>
          <NavLink className="link link-hover text-white">Register</NavLink>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
