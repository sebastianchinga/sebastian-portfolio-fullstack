import type { ProyectosType, TecnologiasType } from "../types";

export const tecnologiasData: TecnologiasType[] = [
    { id: 1, nombre: 'React' },
    { id: 2, nombre: 'JavaScript' },
    { id: 3, nombre: 'TailwindCSS' },
    { id: 4, nombre: 'PHP' },
    { id: 5, nombre: 'Laravel' },
    { id: 6, nombre: 'Node.js' },
    { id: 7, nombre: 'TypeScript' }
]

export const proyectosData: ProyectosType[] = [
    {
        id: 1,
        titulo: 'Administrador de tareas',
        descripcion: 'Aplicación para crear, organizar y filtrar tareas por estado, ayudando a mantener el control del trabajo diario.',
        imagen: 'admin-tareas',
        repositorio: 'https://github.com/sebastianchinga/task-manager-ts-',
        url: 'https://task-zend.netlify.app/'
    },
    {
        id: 2,
        titulo: 'Facturacion de ventas',
        descripcion: 'Sistema de facturación que registra ventas, clientes y totales, con generación de comprobantes y control básico.',
        imagen: 'facturacion-ventas',
        repositorio: 'https://github.com/sebastianchinga/inventario-ventas',
        url: 'https://facturacion-venta.netlify.app/'
    },
    {
        id: 3,
        titulo: 'Página de bienes raíces',
        descripcion: 'Sitio web inmobiliario para mostrar casas y departamentos, con diseño moderno y enfoque en propiedades de lujo.',
        imagen: 'bienes-raices',
        repositorio: 'https://github.com/sebastianchinga/proyecto-bienes',
        url: 'https://bienes-raices-chinga.netlify.app/'
    },
    {
        id: 3,
        titulo: 'Consejos Randoms',
        descripcion: 'Aplicación que muestra consejos aleatorios en tiempo real con una interfaz simple, oscura y agradable al usuario.',
        imagen: 'consejos-randoms',
        repositorio: 'https://github.com/sebastianchinga/generador-consejos/tree/master',
        url: 'https://frolicking-bombolone-69f525.netlify.app/'
    },
]