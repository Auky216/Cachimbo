"use client";  // Para que sea un Client Component

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LandingPage = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <main className="max-h-screen overflow-auto bg-gray-900 text-white">
      {/* Header con animación */}
      <motion.header
        className="flex flex-col items-center px-4 py-8 text-center lg:flex-row lg:justify-between lg:px-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl font-bold mb-4 lg:mb-0">Cachimbo</h1>
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-full transition duration-300">
            Cambiar Tema
          </button>
        </motion.div>
      </motion.header>

      {/* Sección CTA con animación */}
      <section className="px-4 py-16 lg:px-0">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center justify-center lg:flex-row lg:justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div className="mb-8 flex-shrink-0 lg:mb-0">
            {/* Imagen de ejemplo */}
            <img
              src="https://via.placeholder.com/300"
              alt="Logo Placeholder"
              className="h-64 lg:h-96"
            />
          </div>
          <motion.div
            className="flex flex-col items-center text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="mb-10 text-2xl font-bold text-cach-l3 lg:text-3xl dark:text-cach-l2">
              ¡Facilitamos tu éxito académico y personal!
            </h2>
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              {/* Corrigiendo el uso de <Link> con animaciones */}
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/register" legacyBehavior>
                  <a className="mb-4 mr-0 w-full rounded-full bg-purple-600 px-8 py-3 text-center text-lg font-semibold text-white duration-300 hover:bg-purple-700 lg:mb-0 lg:w-auto">
                    Regístrate
                  </a>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/login" legacyBehavior>
                  <a className="w-full rounded-full bg-purple-600 px-8 py-3 text-center text-lg font-semibold text-white transition duration-300 hover:bg-purple-700 lg:w-auto">
                    Iniciar Sesión
                  </a>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Sección de Servicios */}
      <article className="flex max-w-full flex-col items-center justify-center px-4 py-8 text-cach-l3 md:px-0">
        <div className="mb-8 text-center text-3xl font-bold dark:text-cach-l2">
          Nuestros servicios
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Primer servicio */}
          <motion.div
            className="flex flex-col items-center justify-center rounded-xl border border-solid border-purple-600 px-6 py-3 dark:border-cach-l2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/100"
              alt="Asistente Virtual"
              className="m-4 h-20 w-20 md:h-32 md:w-32"
            />
            <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
              <h1 className="mb-2 text-lg font-bold ">Asistente Virtual</h1>
              <p className="text-pretty text-left">
                Obtén orientación académica personalizada basada en inteligencia
                artificial para ayudarte a alcanzar tus metas.
              </p>
            </div>
          </motion.div>

          {/* Segundo servicio */}
          <motion.div
            className="flex flex-col items-center justify-center rounded-xl border border-solid border-purple-600 px-6 py-3 dark:border-cach-l2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/100"
              alt="Comunidad Colaborativa"
              className="m-4 h-20 w-20 md:h-32 md:w-32"
            />
            <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
              <h1 className="mb-2 text-lg font-bold ">
                Comunidad Colaborativa
              </h1>
              <p className="text-pretty text-left">
                Disfruta del contenido que la comunidad aporta, como calificación
                de profesores, cursos y grupos de estudios.
              </p>
            </div>
          </motion.div>

          {/* Tercer servicio */}
          <motion.div
            className="flex flex-col items-center justify-center rounded-xl border border-solid border-purple-600 px-6 py-3 dark:border-cach-l2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/100"
              alt="Eventos"
              className="m-4 h-20 w-20 md:h-32 md:w-32"
            />
            <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
              <h1 className="mb-2 text-lg font-bold ">Eventos</h1>
              <p className="text-pretty text-left">
                Participa en eventos sociales y académicos para conocer a otros
                estudiantes y expertos.
              </p>
            </div>
          </motion.div>

          {/* Cuarto servicio */}
          <motion.div
            className="flex flex-col items-center justify-center rounded-xl border border-solid border-purple-600 px-6 py-3 dark:border-cach-l2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/100"
              alt="Recursos Educativos"
              className="m-4 h-20 w-20 md:h-32 md:w-32"
            />
            <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
              <h1 className="mb-2 text-lg font-bold ">Recursos Educativos</h1>
              <p className="text-pretty text-left">
                Accede a una amplia gama de recursos educativos para mejorar tu
                aprendizaje.
              </p>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Footer */}
      <footer className="mt-4 bg-purple-600 px-4 py-8 text-center text-cach-l1">
        <p>&copy; 2024 Todos los derechos reservados - Cachimbo</p>
        <div className="mt-4 flex justify-center">
          <a href="#" className="mx-2">
            <img
              src="https://via.placeholder.com/32"
              alt="Discord"
            />
          </a>
          <a href="#" className="mx-2">
            <img
              src="https://via.placeholder.com/32"
              alt="LinkedIn"
            />
          </a>
          <a href="#" className="mx-2">
            <img
              src="https://via.placeholder.com/32"
              alt="Instagram"
            />
          </a>
          <a href="#" className="mx-2">
            <img
              src="https://via.placeholder.com/32"
              alt="WhatsApp"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
