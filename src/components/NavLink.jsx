// react-scroll
import { Link } from "react-scroll";

// eslint-disable-next-line react/prop-types
const NavLink = ({ children, to, offset = -50, mobileMenu = false }) => {
    const className = mobileMenu
        ? "text-lg text-mainWhite hover:text-white cursor-pointer hover:text-mainYellow  w-full text-center"
        : "text-lg lg:text-xl text-mainDark cursor-pointer hover:bg-mainYellow  hover:bg-clip-text hover:text-transparent";

    return (
        <Link
            to={to}
            spy={true}
            smooth={true}
            offset={offset}
            duration={1000}
            className={className}
        >
            {children}
        </Link>
    );
};

export default NavLink;