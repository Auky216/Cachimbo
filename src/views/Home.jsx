import React from "react";
import { Link } from "react-router-dom";

import discordIcon from "@/assets/discord.svg";
import linkedinIcon from "@/assets/linkedin.svg";
import instagramIcon from "@/assets/instagram.svg";
import whatsAppIcon from "@/assets/whatsapp.svg";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-cach-l4">
      {/* Header */}
      <header className="py-8 px-4 text-center">
        <h1 className="text-4xl font-bold text-cach-l1">Aprende un nuevo idioma con nosotros</h1>
        <p className="text-xl text-cach-l2 mt-4">¡Descubre una forma divertida de aprender!</p>
      </header>

      {/* CTA Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comienza tu viaje lingüístico hoy mismo</h2>
          <p className="text-lg text-gray-700 mb-8">Únete a millones de estudiantes que ya están aprendiendo con nosotros.</p>
          <Link to="/register" className="bg-cach-l3 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-cach-l2 transition duration-300">
            Regístrate gratis
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-cach-l1 mb-8">Por qué elegirnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src="https://via.placeholder.com/150" alt="Feature" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Lecciones divertidas</h3>
              <p className="text-gray-700">Aprende con juegos, ejercicios interactivos y desafíos.</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Feature" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalizado para ti</h3>
              <p className="text-gray-700">Adapta tu aprendizaje a tu nivel y tus objetivos.</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/150" alt="Feature" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Seguimiento de progreso</h3>
              <p className="text-gray-700">Mantén un registro de tus avances y logros.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-cach-l1 mb-8">Lo que dicen nuestros estudiantes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800 mb-4">"¡Increíble! Gracias a esta plataforma, finalmente puedo hablar francés con confianza."</p>
              <p className="text-gray-600">- María, estudiante de francés</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800 mb-4">"Nunca pensé que aprender un idioma pudiera ser tan divertido. ¡Gracias, equipo de Duolingo!"</p>
              <p className="text-gray-600">- Juan, estudiante de alemán</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800 mb-4">"¡He probado muchas aplicaciones de idiomas y esta es, con diferencia, la mejor!"</p>
              <p className="text-gray-600">- Ana, estudiante de italiano</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
        <p className="text-lg text-white mb-8">Únete a millones de estudiantes satisfechos y comienza tu viaje lingüístico hoy mismo.</p>
        <Link to="/register" className="bg-cach-l3 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-cach-l2 transition duration-300">
          Regístrate gratis
        </Link>
      </section>

      <footer className="bg-cach-l3 py-8 px-4 text-center text-cach-l1">
        <p>&copy; 2024 Todos los derechos reservados - Cachimbo</p>
        <div className="flex justify-center mt-4">
          <a href="https://discord.gg/B6TcBnvs" className="mx-2">
            <img src={discordIcon} alt="Discord" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/company/102821332" className="mx-2">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/cachimbo.utec/" className="mx-2">
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://chat.whatsapp.com/HHaCYwpnXZD4NmQT3xZnyS" className="mx-2">
            <img src={whatsAppIcon} alt="WhatsApp" className="w-8 h-8" />
          </a>
        </div>
      </footer>
</div>
  );
};

export default LandingPage;
