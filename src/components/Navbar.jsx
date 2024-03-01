import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavLinks from "./NavLinks";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);
  return (
    <div className="flex container justify-between w-full items-center px-4 max-w-[25rem]  md:max-w-[38rem] mx-auto h-28 py-4 lg:max-w-[71rem] overflow-hidden   ">
      {/* logo */}
      <div className="">
        <Link className="" to="/">
          <img src="logo.svg" alt="" />
        </Link>
      </div>
      {/* navLinks */}
      <ul className="hidden md:flex justify-between items-center space-x-6 text-mediumGrey ">
        <NavLinks />
      </ul>
      {/* hamburger menu */}
      <div
        className="block md:hidden hover:scale-125 duration-300"
        onClick={handleNav}
      >
        {nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-24 right-0 py-4 z-50 pl-8 bg-white w-[80%]  ease-in-out duration-500"
            : "right-[-100%] fixed"
        }
      >
        <ul className="flex flex-col items-start justify-center text-left space-y-3 ">
          <NavLinks />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
