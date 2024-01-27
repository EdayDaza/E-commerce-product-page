import { navbarMenu } from "../data/navbarMenu";
import PropTypes from "prop-types";

export const Navbar = ({ isActive }) => {
  return (
    <nav
      className={`${
        isActive ? "block" : "hidden"
      } absolute left-0 top-0 min-h-screen w-9/12 bg-clr-white pt-16 md:static md:mr-auto md:block md:min-h-[initial] md:w-auto md:bg-transparent md:p-0`}
    >
      <ul className="flex flex-col gap-4 p-6 md:flex-row md:p-0">
        {navbarMenu.map((item, index) => (
          <li key={index}>
            <a href="#" className="group relative inline-block py-1 md:py-12">
              {item}
              <span className="absolute bottom-0 left-0 h-[3px] w-full group-hover:bg-clr-orange"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  isActive: PropTypes.bool,
};
