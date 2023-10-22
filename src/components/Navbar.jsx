import NavLink from "./NavLink"
import Logo from "/assets/Fox.svg";
import CartIcon from "/assets/cartIcon.svg";
import ArrowDown from "/assets/arrow-drop-down.svg";
// react icons
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <div className="bg-mainWhite relative w-full  flex 
        items-center justify-between py-4 px-10 border-b-2 shadow-xl">
            <ul className="text-mainDark hidden md:flex items-center justify-between gap-10 font-semibold">
                <NavLink to="services">Home</NavLink>
                <NavLink to="products"> Our Stores</NavLink>
                <NavLink to="reference">Contact Us</NavLink>
            </ul>
            <img src={Logo} alt="logo" className="lg:mr-24 cursor-pointer" />
            <div className="relative flex gap-8">
                <div >
                    <img src={CartIcon} alt="cart-icon" className="w-8 cursor-pointer" />
                    <span className="w-5 h-5 rounded-full text-center bg-mainBlue absolute top-0 -left-2 text-white text-sm hover:bg-mainYellow cursor-pointer">1</span>
                </div>
                <div className="lg:flex cursor-pointer py-1  hidden md:block">
                    <span className="font-semibold text-lg">En</span>
                    <img src={ArrowDown} alt="ArrowDown" className="w-8" />
                </div>
            </div>
            <HiMenuAlt3
                size={30}
                className="block md:hidden cursor-pointer text-mainBlue"
                onClick={() => setShowMobileMenu((prev) => !prev)}
            />
            <div
                className={`block md:hidden w-full fixed ${!showMobileMenu ? "-top-[410px]" : "top-0"
                    } left-0 bg-mainBlue h-[410px] transition-all duration-[800ms] shadow-xl z-10 py-8 px-12 rounded-b-xl`}
            >
                <AiOutlineClose
                    size={25}
                    className="absolute top-5 right-5  text-white cursor-pointer"
                    onClick={() => setShowMobileMenu(false)}
                />
                <ul className="pt-[60px] items-center flex flex-col gap-8 text-mainWhite">
                    <NavLink to="services" mobileMenu>
                        Home
                    </NavLink>
                    <NavLink to="products" mobileMenu>
                        Our Stores
                    </NavLink>
                    <NavLink to="reference" mobileMenu>
                        Contact Us
                    </NavLink>

                </ul>
            </div>
        </div>
    )
}

export default Navbar