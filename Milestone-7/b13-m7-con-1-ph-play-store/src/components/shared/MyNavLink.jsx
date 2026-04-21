import { NavLink } from "react-router";

const MyNavLink = ({ to, className, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `font-semibold pb-2  ${className} ${isActive && "text-purple-500 border-b border-purple-500"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
