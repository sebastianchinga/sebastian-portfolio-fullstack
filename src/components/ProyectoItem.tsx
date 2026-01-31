import { Link } from "react-router-dom";
import type { ProyectosType } from "../types";

type ProyectoItemProp = {
    proyecto: ProyectosType
}

export default function ProyectoItem({proyecto}: ProyectoItemProp) {
    return (
        <div className="project-card bg-white rounded-lg overflow-hidden shadow-md border border-gray-200">
            {/* Imagen */}
            <img
                src={`/img/${proyecto.imagen}.png`}
                alt="Dashboard Analytics"
                className="w-full project-image"
            />

            {/* Contenido */}
            <div className="p-6">
                {/* Título */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {proyecto.titulo}
                </h3>
                {/* Descripcion */}
                <p className="text-gray-600 text-sm mb-4 project-description">
                    Plataforma de análisis de datos en tiempo real con visualización de
                    métricas personalizadas y reportes automáticos.
                </p>
                {/* Grupo de botones */}
                <div className="flex gap-3">
                    <Link to={'/'} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg text-center transition-colors">
                        Ver Repo
                    </Link>
                    <Link to={'/'} className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-4 rounded-lg text-center transition-colors">
                        Ver Proyecto
                    </Link>
                </div>
            </div>
        </div>
    )
}
