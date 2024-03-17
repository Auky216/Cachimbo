import React from "react";
import { Link } from "react-router-dom";
import { CachimboLogo } from "@/components/icons/CachimoLogo";
import discordIcon from "@/assets/discord.svg";
import linkedinIcon from "@/assets/linkedin.svg";
import instagramIcon from "@/assets/instagram.svg";
import whatsAppIcon from "@/assets/whatsapp.svg";
import hatIcon from "@/assets/hat.png";
import ThemeButton from "@/components/ThemeButton";

const LandingPage = () => {
  return (
    <div className="min-h-screen dark:bg-cach-l4">
      {/* Header */}
      <header className="flex justify-between px-12 py-8 text-center">
        <CachimboLogo />
        <div className="flex justify-center">
          <ThemeButton />
        </div>
      </header>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img className="mr-20 h-80" src={hatIcon} alt="Logo"></img>
          </div>
          {/* CTA Buttons Section */}
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-10 text-3xl font-bold text-cach-l3">
              ¡Facilitamos tu éxito académico y personal!
            </h2>

            <Link
              to="/register"
              className="mb-4 w-60 rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white transition duration-300 hover:bg-cach-l2"
            >
              Regístrate gratis
            </Link>
            <Link
              to="/login"
              className="w-60 rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white transition duration-300 hover:bg-cach-l2"
            >
              Iniciar Sesión
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex h-[90rem] flex-col items-center justify-between">
        <article className="my-4 flex h-full w-3/4 items-center justify-evenly">
          <div className="flex h-full flex-col items-center justify-center p-2 text-cach-l3">
            <h1 className="mb-12 text-center text-4xl font-bold">Title</h1>
            <p className="text-left">Text</p>
          </div>
          <div>
            <img
              src="https://www.picsum.photos/200/200"
              className="size-[250px]"
              alt="feature"
              loading="lazy"
            />
          </div>
        </article>

        <article className="text-cach-l3">
          <div className="mb-12 text-center text-4xl font-bold">
            Nuestros servicios
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-10">
            <div className="flex h-[100px] w-[200px] items-center justify-evenly rounded-xl border border-solid border-cach-l3">
              <div>
                <img
                  src="https://www.picsum.photos/200/200"
                  className="size-[50px]"
                  alt="feature"
                  loading="lazy"
                />
              </div>
              <div className="flex h-full flex-col items-center justify-center p-2 text-cach-l3">
                <h1 className="mb-3 text-center text-xl font-bold">Title</h1>
                <p className="text-left">Text</p>
              </div>
            </div>
            <div className="col-start-1 row-start-2 flex items-center justify-evenly rounded-xl border border-solid border-cach-l3">
              <div>
                <img
                  src="https://www.picsum.photos/200/200"
                  className="size-[50px]"
                  alt="feature"
                  loading="lazy"
                />
              </div>
              <div className="flex h-full flex-col items-center justify-center p-2 text-cach-l3">
                <h1 className="mb-3 text-center text-xl font-bold">Title</h1>
                <p className="text-left">Text</p>
              </div>
            </div>
            <div className="col-start-2 row-start-1 flex items-center justify-evenly rounded-xl border border-solid border-cach-l3">
              <div>
                <img
                  src="https://www.picsum.photos/200/200"
                  className="size-[50px]"
                  alt="feature"
                  loading="lazy"
                />
              </div>
              <div className="flex h-full flex-col items-center justify-center p-2 text-cach-l3">
                <h1 className="mb-3 text-center text-xl font-bold">Title</h1>
                <p className="text-left">Text</p>
              </div>
            </div>
            <div className="row-start-2 flex items-center justify-evenly rounded-xl border border-solid border-cach-l3">
              <div>
                <img
                  src="https://www.picsum.photos/200/200"
                  className="size-[50px]"
                  alt="feature"
                  loading="lazy"
                />
              </div>
              <div className="flex h-full flex-col items-center justify-center p-2 text-cach-l3">
                <h1 className="mb-3 text-center text-xl font-bold">Title</h1>
                <p className="text-left">Text</p>
              </div>
            </div>
          </div>
        </article>

        <article className="flex h-full w-3/4 items-center justify-evenly">
          <div>
            <img
              src="https://www.picsum.photos/200/200"
              className="size-[250px]"
              alt="feature"
              loading="lazy"
            />
          </div>
          <div className="flex h-full flex-col items-center justify-center p-2 text-cach-l3">
            <h1 className="mb-12 text-center text-4xl font-bold">Title</h1>
            <p className="text-left">Text</p>
          </div>
        </article>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-cach-l1">
            Lo que dicen nuestros estudiantes
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <aeticle className="rounded-lg bg-white p-6 shadow-md">
              <p className="mb-4 text-gray-800">
                "¡Increíble! Gracias a esta plataforma, finalmente puedo hablar
                francés con confianza."
              </p>
              <p className="text-gray-600">- María, estudiante de francés</p>
            </aeticle>
            <article className="rounded-lg bg-white p-6 shadow-md">
              <p className="mb-4 text-gray-800">
                "Nunca pensé que aprender un idioma pudiera ser tan divertido.
                ¡Gracias, equipo de Duolingo!"
              </p>
              <p className="text-gray-600">- Juan, estudiante de alemán</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-md">
              <p className="mb-4 text-gray-800">
                "¡He probado muchas aplicaciones de idiomas y esta es, con
                diferencia, la mejor!"
              </p>
              <p className="text-gray-600">- Ana, estudiante de italiano</p>
            </article>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          ¿Listo para comenzar?
        </h2>
        <p className="mb-8 text-lg text-white">
          Únete a nuestra comunidad y refuerza tus conocimientos hoy mismo.
        </p>
        <Link
          to="/register"
          className="rounded-full bg-cach-l3 px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-cach-l2"
        >
          Regístrate gratis
        </Link>
      </section>

      <footer className="bg-cach-l3 px-4 py-8 text-center text-cach-l1">
        <p>&copy; 2024 Todos los derechos reservados - Cachimbo</p>
        <div className="mt-4 flex justify-center">
          <a href="https://discord.gg/B6TcBnvs" className="mx-2">
            <img src={discordIcon} alt="Discord" className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/company/102821332" className="mx-2">
            <img src={linkedinIcon} alt="LinkedIn" className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/cachimbo.utec/" className="mx-2">
            <img src={instagramIcon} alt="Instagram" className="h-8 w-8" />
          </a>
          <a
            href="https://chat.whatsapp.com/HHaCYwpnXZD4NmQT3xZnyS"
            className="mx-2"
          >
            <img src={whatsAppIcon} alt="WhatsApp" className="h-8 w-8" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
