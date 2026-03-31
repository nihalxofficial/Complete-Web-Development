import logo from "../../assets/logo.png"
import { IoCartOutline } from "react-icons/io5";


const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <img className="w-10" src={logo} /> Ai Hub
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="flex gap-10 px-1 text-lg font-semibold">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="p-2 text-red-600 bg-gray-100 text-2xl cursor-pointer rounded-full"><IoCartOutline /></div>
        <button className="btn bg-red-500 rounded-full text-white">Get in Touch</button>
      </div>
    </div>
  );
};

export default NavBar;