export default function Contactame() {
    return (
        <>
            {/* Título */}
            <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                    Contáctame
                </h1>
                <p className="text-lg text-gray-600">
                    Envíame un mensaje y me pondré en contacto lo antes posible
                </p>
            </div>
            {/* Tarjetas de contacto */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {/* Tarjeta de Email */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            ></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-600 mb-4">Respondo en 24 horas</p>
                    <a
                        href="mailto:tu@email.com"
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        jchingapalacios05@gmail.com
                    </a>
                </div>
                {/* Tarjeta de Teléfono */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            ></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
                    <p className="text-gray-600 mb-4">Llamadas de lunes a viernes</p>
                    <a
                        href="tel:+1234567890"
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                        +51 948988737
                    </a>
                </div>
                {/* Tarjeta de Ubicación */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 text-center hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                            className="w-6 h-6 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ubicación</h3>
                    <p className="text-gray-600 mb-4">Disponible para trabajo remoto</p>
                    <p className="text-blue-600 font-semibold">Piura - Talara, Perú</p>
                </div>
            </div>
            {/* Formulario de Contacto */}
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Envíame un mensaje
                </h2>
                <form id="contactForm" className="space-y-6">
                    {/* Nombre */}
                    <div>
                        <label
                            htmlFor="nombre"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre completo"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all"
                        />
                    </div>
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tu@email.com"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all"
                        />
                    </div>
                    {/* Teléfono */}
                    <div>
                        <label
                            htmlFor="telefono"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="telefono"
                            name="telefono"
                            placeholder="+1 (234) 567-890"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all"
                        />
                    </div>
                    {/* Asunto */}
                    <div>
                        <label
                            htmlFor="asunto"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Asunto
                        </label>
                        <input
                            type="text"
                            id="asunto"
                            name="asunto"
                            placeholder="¿De qué se trata?"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all"
                        />
                    </div>
                    {/* Mensaje */}
                    <div>
                        <label
                            htmlFor="mensaje"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Mensaje
                        </label>
                        <textarea
                            id="mensaje"
                            name="mensaje"
                            placeholder="Cuéntame más sobre tu proyecto..."
                            rows={6}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg transition-all resize-none"
                            defaultValue={""}
                        />
                    </div>
                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6">
                        <button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Enviar Mensaje
                        </button>
                        <button
                            type="reset"
                            className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Limpiar
                        </button>
                    </div>
                </form>
                {/* Mensaje de éxito (oculto por defecto) */}
                <div id="successMessage" className="hidden bg-green-50 border-2 border-green-200 text-green-800 px-6 py-4 rounded-lg mt-6">
                    <p className="font-semibold">¡Mensaje enviado con éxito!</p>
                    <p className="text-sm">
                        Gracias por ponerte en contacto. Me pondré en contacto pronto.
                    </p>
                </div>
            </div>
            {/* Redes Sociales */}
            <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Sígueme en redes sociales
                </h3>
                <div className="flex justify-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/juan-sebastian-chinga-palacios/"
                        target="_blank"
                        className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                        </svg>
                    </a>
                    <a
                        href="https://github.com/sebastianchinga"
                        target="_blank"
                        className="w-12 h-12 bg-gray-700 hover:bg-gray-800 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                        </svg>
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        className="w-12 h-12 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 5.2-5.2 8.3A15.7 15.7 0 010 19.94"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
