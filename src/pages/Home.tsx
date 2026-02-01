import { useEffect, useState } from "react"
import type { TecnologiasType } from "../types"
import { tecnologiasData } from "../data";
import TecnologiaItem from "../components/TecnologiaItem";
import { Link } from "react-router-dom";

export default function Home() {

    const [tecnologias, setTecnologias] = useState<TecnologiasType[]>([]);

    useEffect(() => {
        setTecnologias(tecnologiasData)
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Foto del Developer - Izquierda */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                <div className="w-64 lg:w-80 aspect-[414/500] rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow">
                    <img
                        src={`/img/perfil.png`}
                        alt="Foto del developer"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Presentación - Derecha */}
            <div className="space-y-6 order-1 lg:order-2">
                <div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                        ¡Hola! Soy Sebastian
                    </h1>
                    <p className="text-xl text-blue-600 font-semibold">
                        Full Stack Developer
                    </p>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                    Soy un desarrollador apasionado por crear soluciones digitales
                    innovadoras. Con experiencia en tecnologías modernas, me especializo en
                    construir aplicaciones web escalables y user-friendly que resuelven
                    problemas reales.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                    Mi objetivo es transformar ideas en código funcional, trabajando siempre
                    con las mejores prácticas y manteniendo un enfoque centrado en el usuario.
                </p>
                <div className="flex flex-wrap gap-3 pt-4">
                    {tecnologias.map(item => (
                        <TecnologiaItem key={item.id} tecnologia={item} />
                    ))}
                </div>
                <div className="flex gap-4 pt-6">
                    <Link to={'proyectos'} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                        Ver Proyectos
                    </Link>
                    <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                        Descargar CV
                    </button>
                </div>
            </div>
        </div>

    )
}
