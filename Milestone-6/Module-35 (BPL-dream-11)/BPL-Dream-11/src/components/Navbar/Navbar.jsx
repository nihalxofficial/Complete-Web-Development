import React from 'react';
import dollarImg from "../../assets/Currency.png"
import logo from "../../assets/logo.png"

const Navbar = ({coin}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between items-center space-y-3">
            <div className="ml-10">
                <img src={logo} alt="" />
            </div>
            <div className="mr-10 flex justify-between gap-6 items-center">
                <ul className='flex justify-between font-semibold gap-6'>
                    <li>Home</li>
                    <li>Fixtures</li>
                    <li>Teams</li>
                    <li>Schedules</li>
                </ul>
                <button className="btn flex justify-between items-center gap-2 font-bold text-lg">
                    {coin} Coins
                    <img src={dollarImg} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Navbar;