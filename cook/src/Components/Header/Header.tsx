import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import profile from '../../Assets/profile.png';
import chefHat from '../../Assets/chef.png';

const CookEaseHeader: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header-container bg-gray-200 shadow-xl">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex items-center">
                    <Link to="/" className="mr-4">
                        <img className="h-12 sm:h-16 transform -rotate-6" src={chefHat} alt="Chef Hat" />
                    </Link>
                    <h1 className="text-2xl sm:text-3xl font-bold  sm:block font-lobster">CookEase</h1>
                </div>

                {/* Dropdown Menu */}
                <div className="relative inline-block text-left">
                    <button
                        className="block sm:hidden text-gray-800 focus:outline-none"
                        onClick={handleMenuToggle}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4 6h16V5H4v1zm0 7h16v-1H4v1zm0 7h16v-1H4v1z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                            <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <Link
                                    to="/Search"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    onClick={handleMenuToggle}
                                >
                                    Search
                                </Link>
                                <Link
                                    to="/News"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    onClick={handleMenuToggle}
                                >
                                    Article
                                </Link>
                                <Link
                                    to="/Dash"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    onClick={handleMenuToggle}
                                >
                                    Dash
                                </Link>
                                <Link
                                    to="/RecipeBook"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                    role="menuitem"
                                    onClick={handleMenuToggle}
                                >
                                    Create Recipe
                                </Link>
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation Links */}
                <nav className="hidden sm:block text-lg font font-semibold">
                    <ul className="flex gap-3">
                        <li className='mt-3'>
                            <Link to="/Search" className="nav-link">
                                Search
                            </Link>
                        </li>
                        <li  className='mt-3'>
                            <Link to="/News" className="nav-link">
                               Create Article
                            </Link>
                        </li>
                        <li  className='mt-3'>
                            <Link to="/RecipeBook" className="nav-link">
                                Create Recipe
                            </Link>
                        </li>
                        <li>
                        <Link to="/Dash" className="nav-link">
                    <button className="profile-button hidden sm:block pr-4">
                        <img className="h-10 sm:h-12" src={profile} alt="Profile" />
                    </button>
                </Link>
                        </li>
                    </ul>
                </nav>



            </div>
        </div>
    );
};

export default CookEaseHeader;
