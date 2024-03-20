import React from "react";
import { Link } from "react-router-dom";
import { CachimboLogo } from "@/components/icons/CachimoLogo";
import discordIcon from "@/assets/discord.svg";
import linkedinIcon from "@/assets/linkedin.svg";
import instagramIcon from "@/assets/instagram.svg";
import whatsAppIcon from "@/assets/whatsapp.svg";
import hatIcon from "@/assets/hat2.png";
import ThemeButton from "@/components/ThemeButton";

import UTEC_Icon from "@/assets/Utec_Icon.png";
import AI_icon from "@/assets/AI_icon.png";
import Comunity_icon from "@/assets/Comunity_Icon.png";
import Event_Icon from "@/assets/Event_Icon.png";
import Resources_Icon from "@/assets/Resources_Icon.png";
const LandingPage = () => {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="flex justify-between px-6 sm:px-12 py-4 sm:py-8 text-center">
        <CachimboLogo />
        <div className="flex justify-center">
          <ThemeButton />
        </div>
      </header>

      {/* CTA Section */}
      <section className="px-4 sm:px-12 py-12 sm:py-16">

        <div className="mx-auto flex max-w-5xl items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img className="mr-20 h-96" src={hatIcon} alt="Logo"></img>
          </div>
          {/* CTA Buttons Section */}
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-10 text-3xl font-bold text-cach-l3 dark:text-cach-l2">
              ¡Facilitamos tu éxito académico y personal!
            </h2>

            <Link
              to="/register"
              className="mb-4 w-60 rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white duration-300 hover:bg-cach-l2"
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

      {/* ¿Quienes somos? */}
      <section className="flex flex-col sm:flex-row h-auto max-h-fit items-center justify-center">

        <article className="my-4 flex h-full w-3/4 max-w-4xl items-center">
          <div className="flex h-full w-4/5 flex-col items-center justify-center p-10 text-cach-l3">
            <h1 className="mb-12 text-center text-4xl font-bold dark:text-cach-l2">
              ¿Quiénes Somos?
            </h1>
            <p className="text-left dark:text-cach-l2">
              Cachimbo es una organización oficial de la UTEC que se dedica a
              facilitar la transición académica y profesional de los estudiantes
              universitarios. Nuestra plataforma utiliza herramientas basadas en
              inteligencia artificial para ofrecer orientación personalizada y
              recursos educativos que te ayudarán a alcanzar tus metas.
            </p>
            <br />
            <Link
              to="/about"
              className="w-30 mb-4 rounded-full bg-cach-l3 px-8 py-3 text-center font-semibold text-white duration-300 hover:bg-cach-l2"
            >
              Nuestro equipo
            </Link>
          </div>
          <div className="flex w-1/2 justify-center">
            <img
              src={UTEC_Icon}
              className="size-[250px]"
              alt="feature"
              loading="lazy"
            />
          </div>
        </article>

        {/* Contenedor principal */}
        <article className="flex justify-center">
          {/* Nuestros Servicios */}
          <div className="mx-4 max-w-[900px] py-20 text-cach-l3">
            <div className="mb-8 text-center text-3xl font-bold dark:text-cach-l2">
              Nuestros servicios
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
              <div className="flex flex-row items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
                <img
                  src={AI_icon}
                  className="m-4 h-[100px] w-[100px]"
                  alt="feature"
                  loading="lazy"
                />
                <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
                  <h1 className="mb-2 text-lg font-bold ">Asistente Virtual</h1>
                  <p className="text-pretty text-left">
                    Obtén orientación académica específica para ti, basada en un
                    chat-bot que integra inteligencia artificial para una
                    experiencia más personalizada.
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
                <img
                  src={Comunity_icon}
                  className="m-4 h-[100px] w-[100px]"
                  alt="feature"
                  loading="lazy"
                />
                <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
                  <h1 className="mb-2 text-lg font-bold">
                    Comunidad Colaborativa
                  </h1>
                  <p className="text-pretty text-left dark:text-cach-l2">
                    Disfruta el contenido que la comunidad aporta con la
                    calificacion de profesores, calificacion de los cursos,
                    organizaciones de tu interes, grupos de estudios y mucho
                    mas.,
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
                <img
                  src={Event_Icon}
                  className="m-4 h-fit max-h-[100px] w-fit max-w-[100px]"
                  alt="feature"
                  loading="lazy"
                />
                <div className="p-2 text-center text-cach-l3">
                  <h1 className="mb-2 text-lg font-bold dark:text-cach-l2">
                    Eventos
                  </h1>
                  <p className="text-pretty text-left dark:text-cach-l2">
                    Se parte de eventos sociales con el fin de escuchar a
                    estudiastes experimentados y crear nuevas amistades
                  </p>
                </div>
              </div>

              <div className="flex flex-row items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
                <img
                  src={Resources_Icon}
                  className="m-4 h-[100px] w-[100px]"
                  alt="feature"
                  loading="lazy"
                />
                <div className="p-2 text-center text-cach-l3">
                  <h1 className="mb-2 text-lg font-bold dark:text-cach-l2">
                    Recursos Educativos
                  </h1>
                  <p className="text-pretty text-left dark:text-cach-l2">
                    Accede a una amplia variedad de recursos educativos para
                    complementar tu rendimiento academico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* <article className="flex h-full w-3/4 items-center justify-evenly">
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
        </article> */}
      </section>

      {/* Testimonials Section */}
      {/* <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-3xl font-bold text-cach-l3 dark:text-cach-l2">
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
      </section> */}

      {/* Call to Action */}
      <section className="px-4 sm:px-12 py-12 text-center">

        <h2 className="mb-4 text-3xl font-bold text-cach-l3 dark:text-cach-l2">
          ¿Listo para comenzar?
        </h2>
        <p className="mb-8 text-lg text-cach-l3 dark:text-cach-l2">
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
    </main>
  );
};

export default LandingPage;
