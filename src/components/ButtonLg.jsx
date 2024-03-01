import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function ButtonLg({ children }) {
  return (
    <Link
      to="/portfolio"
      className="flex items-center justify-center max-w-[311px] space-x-4 w-full py-6 bg-gray-800  mx-auto  text-sm  text-white -mt-[20%] hover:scale-105 duration-500 hover:bg-darkGray"
    >
      <p className="tracking-wider">{children}</p>
      <BsArrowRight size={20} />
    </Link>
  );
}

export default ButtonLg;
