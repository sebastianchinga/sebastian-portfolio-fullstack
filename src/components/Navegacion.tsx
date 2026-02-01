import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navegacion() {
    const [menu, setMenu] = useState(false);

    const openMenu = () => setMenu(!menu)

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-600">Portfolio</div>
                    {/* Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link to='/' className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Inicio
                        </Link>
                        <Link to='/proyectos' className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Proyectos
                        </Link>
                        <Link to='/contactame' className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                            Contactame
                        </Link>
                    </div>
                    {/* Menu Mobile (hamburguesa) */}
                    <button onClick={openMenu} className="md:hidden text-gray-700 hover:text-blue-600">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                {/* Menu Mobile Expandido */}
                <div id="mobileMenu" className={`${!menu && 'hidden'} md:hidden pb-4 space-y-2`}>
                    <Link to={'/'} className="block text-center text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                        Inicio
                    </Link>
                    <Link to={'/proyectos'} className="block text-center text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                        Proyectos
                    </Link>
                    <Link to={'/contactame'} className="block text-center text-gray-700 hover:text-blue-600 transition-colors font-medium py-2">
                        Contáctame
                    </Link>
                </div>
            </div>
        </nav>
    )
}
