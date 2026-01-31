import { Outlet } from "react-router-dom";
import Navegacion from "../components/Navegacion";

export default function HomeLayout() {

    const getYear = () => new Date().getFullYear()
    
    return (
        <>
            {/* Navgacion */}
            <Navegacion />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <Outlet />
            </main>


            {/* Footer */}
            <footer className="bg-gray-950 text-gray-400 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>© {getYear()} Mi Portafolio. Todos los derechos reservados.</p>
                </div>
            </footer>

        </>
    )
}
