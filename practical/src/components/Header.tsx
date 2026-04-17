import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="bg-sky-600 p-4 text-white">
            <nav className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-lg font-bold">
                    Fashion Shop
                </Link>
                <button className="block lg:hidden text-3xl" onClick={toggleMenu}>&#8801;</button>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-6">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-200" : "hover:text-sky-300"}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" className={({ isActive }) => isActive ? "text-yellow-200" : "hover:text-sky-300"}>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className={({ isActive }) => isActive ? "text-yellow-200" : "hover:text-sky-300"}>
                            Cart
                        </NavLink>
                    </li>
                </ul>

                {/* Mobile Menu */}
                <div className={`fixed inset-0 z-50 bg-sky-600/90 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        <Link to="/" className='text-3xl' onClick={toggleMenu}>
                            Home
                        </Link>
                        <Link to="/shop" className='text-3xl' onClick={toggleMenu}>
                            Shop
                        </Link>
                        <Link to="/cart" className='text-3xl' onClick={toggleMenu}>
                            Cart
                        </Link>
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Header