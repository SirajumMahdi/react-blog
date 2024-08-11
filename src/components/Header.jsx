import React from 'react';

function Header() {
    return (
        <header className="w-full bg-slate-300">
            <div className="container flex flex-wrap items-center px-3 py-6 mx-auto">

                {/* Logo Section */}
                <div className="logo w-full sm:w-1/3 text-center sm:text-left mb-4 sm:mb-0">
                    <a href="#" className="font-bold text-2xl">Mahdi's Blogs</a>
                </div>

                {/* Navigation Section */}
                <div className="navigation w-full sm:w-1/3">
                    <nav className="nav-bar">
                        <ul className="main-menu flex flex-wrap gap-5 justify-center">
                            <li className="menu-item">
                                <a href="#" className="menu-link text-slate-900 hover:text-slate-500">Home</a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link text-slate-900 hover:text-slate-500">About</a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link text-slate-900 hover:text-slate-500">Blogs</a>
                            </li>
                            <li className="menu-item">
                                <a href="#" className="menu-link text-slate-900 hover:text-slate-500">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Search Box Section */}
                <div className="search-box w-full sm:w-1/3 mt-4 sm:mt-0">
                    <div className="search-box-wrapper flex relative justify-center lg:justify-end">
                        <div className="search-box-inner relative">
                            <input
                                className="pl-9 pr-5 py-2 bg-slate-100 rounded-md"
                                type="text"
                                name="search"
                                id="search"
                                placeholder="Search here"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-5 absolute left-2 top-1/2 transform -translate-y-1/2 text-slate-800"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
}

export default Header;
