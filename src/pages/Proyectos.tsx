import { useEffect, useState } from "react";
import ProyectoItem from "../components/ProyectoItem";
import type { ProyectosType } from "../types";
import { proyectosData } from "../data";

export default function Proyectos() {
    const [proyectos, setProyectos] = useState<ProyectosType[]>([]);

    useEffect(() => {
        setProyectos(proyectosData)
    }, [])

    return (
        <>
            <div className="mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                    Mis Proyectos
                </h1>
                <p className="text-lg text-gray-600">
                    Explora mis trabajos recientes y destacados
                </p>
            </div>
            {/* Grid de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Proyecto */}
                {proyectos.map(item => (
                    <ProyectoItem key={item.id} proyecto={item} />
                ))}
            </div>
        </>

    )
}
