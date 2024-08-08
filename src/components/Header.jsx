function Header() {
    return (
        <>
            <header className="w-full bg-slate-300">
                <div className="container flex m-auto items-center px-3 py-6">
                    <div className="logo w-1/3">
                        <a href="#" className="font-bold text-2xl">Mahdi's Blogs</a>
                    </div>
                    <div className="navigation w-1/3 items-center">
                        <nav className="nav-bar">
                            <ul className="main-menu flex flex-nowrap gap-5 justify-center">
                                <li className="menu-item"><a href="#" className="menu-link text-slate-900 hover:text-slate-500">Home</a></li>
                                <li className="menu-item"><a href="#" className="menu-link text-slate-900 hover:text-slate-500">About</a></li>
                                <li className="menu-item"><a href="#" className="menu-link text-slate-900 hover:text-slate-500">Blogs</a></li>
                                <li className="menu-item"><a href="#" className="menu-link text-slate-900 hover:text-slate-500">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="search-box w-1/3">
                        <div className="search-box-wrapper flex relative justify-end">
                            <div className="search-box-inner relative">
                                <input className="pl-9 pr-5 py-2 bg-slate-100 rounded-md" type="text" name="search" id="search" placeholder="Search here" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 absolute left-2 text-slate-800 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header