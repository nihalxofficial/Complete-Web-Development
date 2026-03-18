import React, { useState } from 'react';
import Links from '../Links/Links';
import { Menu, X } from 'lucide-react';
// import { Button } from "flowbite-react";

const navigationItems = [
  {
    id: 1,
    name: "Home",
    path: "/dashboard"
  },
  {
    id: 2,
    name: "About",
    path: "/profile"
  },
  {
    id: 3,
    name: "Services",
    path: "/settings"
  },
  {
    id: 4,
    name: "Blogs",
    path: "/messages/inbox"
  },
  {
    id: 5,
    name: "Contacts",
    path: "/analytics/overview"
  }
];

const MyNav = () => {
    const [open, setOpen] = useState(false)
    const links = navigationItems.map(route => <Links route={route}></Links>)
    
    return (
        <div className='flex justify-between mx-10 mt-4'>
            <span  className='flex justify-between gap-5'>
                {open ? <X className='md:hidden cursor-pointer duration-700' onClick={()=>setOpen(!open)}></X>:<Menu className='md:hidden cursor-pointer duration-700' onClick={()=>setOpen(!open)}></Menu>}
                <ul className={`md:hidden absolute ${open ? "top-7": "-top-70"} bg-blue-500 duration-500 text-white p-2 rounded-sm`}>{links}</ul>
                <h3>MyNav</h3>
            </span>
            <ul className='hidden md:flex justify-between gap-5'>
                {
                    links
                }
            </ul>
            <button className='btn btn-primary'>Sign in</button>
        </div>
        
    );
};

export default MyNav;