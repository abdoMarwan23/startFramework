import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="fixed w-full lg:px-16 px-4 bg-[#2c3e50] text-white flex flex-wrap items-center py-4 shadow-md z-10">
            <div className="flex-1 flex justify-between items-center">
                <Link to="/" className="text-4xl font-bold">
                    Start Framework
                </Link>
            </div>
            <button
                onClick={toggleMenu}
                className="md:hidden block focus:outline-none"
            >
                <svg
                    className="fill-current text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 20 20"
                >
                    <title>menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
            <div
                className={`${menuOpen ? "block" : "hidden"
                    } md:flex md:items-center md:w-auto w-full transition-all duration-1000 ease-in-out`}
            >
                <nav>
                    <ul className="md:flex items-center justify-between pt-4 md:pt-0">
                        <li>
                            <NavLink
                                to="/about"
                                className="md:p-4 py-3 px-0 font-bold text-xl block"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/portofolio"
                                className="md:p-4 py-3 px-0 font-bold text-xl block"
                            >
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="md:p-4 py-3 px-0 font-bold text-xl block md:mb-0 mb-2"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;

