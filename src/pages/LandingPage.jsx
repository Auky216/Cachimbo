import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CachimboLogo } from "../components/icons/CachimoLogo";
import discordIcon from "../assets/discord.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import whatsAppIcon from "../assets/whatsapp.svg";
import hatIcon from "../assets/hat2.png";
import ThemeButton from "../components/extras/ThemeButton";
import { stateLogged } from "../store/utils";
import AI_icon from "../assets/AI_icon.png";
import Comunity_icon from "../assets/Comunity_Icon.png";
import Event_Icon from "../assets/Event_Icon.png";
import Resources_Icon from "../assets/Resources_Icon.png";
import AboutUs from "../components/extras/AboutUs";
import Modal from "../components/Modal";

const LandingPage = () => {
  const [showAbout, setShowAbout] = useState(false);
  const activeAbout = () => setShowAbout(true);
  const deactiveAbout = () => setShowAbout(false);
  const {setLogged} = stateLogged();

  return (
    <main className="max-h-screen overflow-auto">
      {/* Header */}
      <header className="flex flex-col items-center px-4 py-8 text-center lg:flex-row lg:justify-between lg:px-12">
        <CachimboLogo className="mb-4 lg:mb-0" />
        <div className="flex justify-center">
          <ThemeButton />
        </div>
      </header>

      {/* CTA Section */}
      <section className="px-4 py-16 lg:px-0">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center lg:flex-row lg:justify-between">
          <div className="mb-8 flex-shrink-0 lg:mb-0">
            <img className="h-64 lg:h-96" src={hatIcon} alt="Logo" />
          </div>
          <div className="flex flex-col items-center text-center">
            <h2 className="mb-10 text-2xl font-bold text-cach-l3 lg:text-3xl dark:text-cach-l2">
              ¡Facilitamos tu éxito académico y personal!
            </h2>
            <div className="flex flex-col items-center gap-8 lg:flex-row">
              <Link
                to="/register"
                className="mb-4 mr-0 w-full rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white duration-300 hover:bg-cach-l2/50 lg:mb-0 lg:w-auto"
              >
                Regístrate
              </Link>
              <Link
                to="/login"
                className="w-full rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white transition duration-300 hover:bg-cach-l2/50 lg:w-auto"
              >
                Iniciar Sesión
              </Link>
              <Link to="/dashboard/main"
                onClick={() => {
                  setLogged(true);
                }}
                className="w-full rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white transition duration-300 hover:bg-cach-l2/50 lg:w-auto"
              >
                Ir a dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 lg:px-0">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center lg:flex-row lg:justify-center">
          {/* <div className="mb-8 flex-shrink-0 lg:mb-0">
            <img className="h-64 lg:h-96" src={UTEC_Icon} alt="Logo" />
          </div> */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <h1 className="mb-6 text-center text-4xl font-bold text-cach-l3 dark:text-cach-l2">
                ¿Quiénes Somos?
              </h1>
              <div className="mb-6 text-center text-xl italic leading-9 dark:text-cach-l2">
                Cachimbo es una organización oficial de la UTEC que se dedica a
                facilitar la transición académica y profesional de los
                estudiantes universitarios. Nuestra plataforma utiliza
                herramientas basadas en inteligencia artificial para ofrecer
                orientación personalizada y recursos educativos que te ayudarán
                a alcanzar tus metas.
              </div>

              <button
                className="w-full rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white duration-300 hover:bg-cach-l2/50 lg:w-auto"
                onClick={activeAbout}
              >
                Nuestro equipo
              </button>
            </div>
          </div>
        </div>
      </section>

      <article className="flex max-w-full flex-col items-center justify-center px-4 py-8 text-cach-l3 md:px-0">
        <div className="mb-8 text-center text-3xl font-bold dark:text-cach-l2">
          Nuestros servicios
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {/* Primer servicio */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
            <img
              src={AI_icon}
              className="m-4 h-20 w-20 md:h-32 md:w-32"
              alt="fig asistente"
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

          {/* Segundo servicio */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
            <img
              src={Comunity_icon}
              className="m-4 h-20 w-20 md:h-32 md:w-32"
              alt="fig comunidad"
              loading="lazy"
            />
            <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
              <h1 className="mb-2 text-lg font-bold ">
                Comunidad Colaborativa
              </h1>
              <p className="text-pretty text-left">
                Disfruta el contenido que la comunidad aporta con la
                calificacion de profesores, calificacion de los cursos,
                organizaciones de tu interes, grupos de estudios y mucho mas.
              </p>
            </div>
          </div>

          {/* Tercer servicio */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
            <img
              src={Event_Icon}
              className="m-4 h-20 w-20 md:h-32 md:w-32"
              alt="fig eventos"
              loading="lazy"
            />
            <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
              <h1 className="mb-2 text-lg font-bold ">Eventos</h1>
              <p className="text-pretty text-left">
                Se parte de eventos sociales con el fin de escuchar a
                estudiastes experimentados y crear nuevas amistades.
              </p>
            </div>
          </div>

          {/* Cuarto servicio */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
            <img
              src={Resources_Icon}
              className="m-4 h-20 w-20 md:h-32 md:w-32"
              alt="fig recursos"
              loading="lazy"
            />
            <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
              <h1 className="mb-2 text-lg font-bold ">Recursos Educativos</h1>
              <p className="text-pretty text-left">
                Obtén orientación académica específica para ti, basada en un
                chat-bot que integra inteligencia artificial para una
                experiencia más personalizada.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Call to Action */}
      {/* <section className="px-4 py-16 text-center">
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
      </section> */}

      <footer className="mt-4 bg-cach-l3 px-4 py-8 text-center text-cach-l1">
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

      <Modal isOpen={showAbout} onClose={deactiveAbout}>
        <AboutUs />
      </Modal>
    </main>
  );
};

export default LandingPage;
