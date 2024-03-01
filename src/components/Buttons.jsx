import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

function Buttons({ children, data }) {
  return (
    <Link
      to={data}
      className="flex space-x-4 px-10 py-6 bg-veryDarkBlue  hover:scale-105 duration-500 hover:bg-darkGray"
    >
      <p className="tracking-wider ">{children}</p>
      <BsArrowRight size={20} />
    </Link>
  );
}

export default Buttons;
