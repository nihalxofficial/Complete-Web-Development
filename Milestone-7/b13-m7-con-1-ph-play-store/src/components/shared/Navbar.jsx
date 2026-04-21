import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/apps",
      text: "Apps",
    },
    {
      path: "/installedApps",
      text: "Installation",
    },
    {
      path: "/dashboard",
      text: "Dashboard",
    },
  ];

  return (
    <nav className=" shadow">
      <div className="flex justify-between gap-4 items-center  py-[8px] container mx-auto">
        <img src={logoImg} alt="" className="w-[50px]" />
        <ul className="flex justify-between gap-2 items-center">
          {navItems.map((item, index) => (
            <MyNavLink key={index} to={item.path}>
              {item.text}
            </MyNavLink>
          ))}

          {/* 
          <li>
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/apps"}>Apps</MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/installedApps"}>Installation</MyNavLink>
          </li> */}
        </ul>
        <button className="btn bg-purple-500 text-white">
          <FaGithub />
          Contribute
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
