import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { IoCartOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-pink-400 fixed z-50 top-0 right-0 left-0">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">

                    {/* Mobile Menu Button */}
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? 'true' : 'false'}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <IoMdClose className="block h-6 w-6" /> : <IoMdMenu className="block h-6 w-6" />}
                        </button>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img className="block lg:hidden h-8 w-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFVPcHGroySXhQpz_2eB-C9pmYwLtDQ4e6lQ&s" alt="Logo" />
                        <img className="hidden lg:block h-12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFVPcHGroySXhQpz_2eB-C9pmYwLtDQ4e6lQ&s" alt="Logo" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden sm:block sm:ml-6">
                        <div className="flex">
                            <Link
                                to="/"
                                className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-gray-500 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
                            >
                                HOME
                            </Link>
                            <Link
                                to="/cart"
                                className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-gray-500 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
                            >
                                <IoCartOutline size={20} />
                            </Link>
                            <Link
                                to = '/catalogue'
                                className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-gray-500 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
                            >
                                SHOP
                            </Link>
                            <Link
                                to="/login"
                                className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-gray-500 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
                            >
                                LOGIN
                            </Link>
                            <Link
                                to="/admin"
                                className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-gray-500 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
                            >
                                ADMIN
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3">
                    <Link
                        to = "/"
                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
                    >
                        Home
                    </Link>
                    <a
                        href="#"
                        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
                    >
                        About
                    </a>
                    <Link
                        to = '/catalogue'
                        className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 transition duration-150 ease-in-out"
                    >
                        SHOP
                    </Link>
                    
                </div>
            </div>
        </nav>
    );
};

export default Navbar;