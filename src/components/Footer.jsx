import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import ButtonLg from "./ButtonLg";

function Footer() {
  return (
    <div className="bg-veryLightGrey">
      <div className="flex flex-col items-center py-4 justify-around w-full mx-auto space-y-2 max-w-4xl  md:flex-row md:space-y-0 md:space-x-2 lg:max-w-[85rem]">
        {/* logo */}
        <Link
          hrefLang="/"
          className="text-lg hover:scale-110 duration-300"
          to="/"
        >
          <img src="logo-white.png" alt="" className="-mt-14 md:mt-0 md:h-20" />
        </Link>
        {/* menu items */}
        <ul className="flex flex-col items-center justify-center py-12 space-y-6 md:flex-row md:space-y-0 md:space-x-6 text-mediumGrey">
          <NavLinks />
        </ul>
        {/* bigger button */}
        <ButtonLg>See Our Portfolio</ButtonLg>
      </div>
    </div>
  );
}

export default Footer;
