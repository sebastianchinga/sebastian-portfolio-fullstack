import type { TecnologiasType } from "../types"

type TecnologiaItemProp = {
    tecnologia: TecnologiasType
}

export default function TecnologiaItem({ tecnologia }: TecnologiaItemProp) {
    return (
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
            {tecnologia.nombre}
        </span>
    )
}
