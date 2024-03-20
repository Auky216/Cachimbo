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
      <header class="flex flex-col lg:flex-row lg:justify-between px-4 lg:px-12 py-8 text-center items-center">
  <CachimboLogo class="mb-4 lg:mb-0" />
  <div class="flex justify-center">
    <ThemeButton />
  </div>
</header>















      {/* CTA Section */}
      <section class="px-4 lg:px-0 py-16">
  <div class="mx-auto flex flex-col lg:flex-row max-w-5xl items-center justify-center lg:justify-between">
    <div class="flex-shrink-0 mb-8 lg:mb-0">
      <img class="h-64 lg:h-96" src={hatIcon} alt="Logo" />
    </div>
    <div class="flex flex-col items-center text-center">
      <h2 class="mb-10 text-2xl lg:text-3xl font-bold text-cach-l3 dark:text-cach-l2">
        ¡Facilitamos tu éxito académico y personal!
      </h2>
      <div class="flex flex-col lg:flex-row items-center">
        <Link
          to="/register"
          class="mb-4 lg:mb-0 mr-0 lg:mr-4 w-full lg:w-auto rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white duration-300 hover:bg-cach-l2"
        >
          Regístrate gratis
        </Link>
        <Link
          to="/login"
          class="w-full lg:w-auto rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white transition duration-300 hover:bg-cach-l2"
        >
          Iniciar Sesión
        </Link>
      </div>
    </div>
  </div>
</section>






























<section class="px-4 lg:px-0 py-16">
  <div class="mx-auto flex flex-col lg:flex-row max-w-5xl items-center justify-center lg:justify-between">
    <div class="flex-shrink-0 mb-8 lg:mb-0">
      <img class="h-64 lg:h-96" src={UTEC_Icon} alt="Logo" />
    </div>
    <div class="flex flex-col items-center text-center">
      <div class="flex flex-col items-center justify-center lg:items-start lg:text-left">
        <h1 class="mb-6 text-4xl font-bold dark:text-cach-l2">¿Quiénes Somos?</h1>
        <p class="mb-6 text-left dark:text-cach-l2">
          Cachimbo es una organización oficial de la UTEC que se dedica a facilitar
          la transición académica y profesional de los estudiantes universitarios.
          Nuestra plataforma utiliza herramientas basadas en inteligencia artificial
          para ofrecer orientación personalizada y recursos educativos que te
          ayudarán a alcanzar tus metas.
        </p>
        <Link
          to="/about"
          class="w-full lg:w-auto rounded-full bg-cach-l3 px-8 py-3 text-center text-lg font-semibold text-white duration-300 hover:bg-cach-l2"
        >
          Nuestro equipo
        </Link>
      </div>
    </div>
  </div>
</section>





<article className="flex flex-col items-center justify-center max-w-full py-8 px-4 md:px-0 text-cach-l3">
  <div className="mb-8 text-center text-3xl font-bold dark:text-cach-l2">
    Nuestros servicios
  </div>
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Primer servicio */}
    <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
      <img
        src={AI_icon}
        className="m-4 h-20 md:h-32 w-20 md:w-32"
        alt="feature"
        loading="lazy"
      />
      <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
        <h1 className="mb-2 text-lg font-bold ">Asistente Virtual</h1>
        <p className="text-pretty text-left">
          Obtén orientación académica específica para ti, basada en un chat-bot
          que integra inteligencia artificial para una experiencia más
          personalizada.
        </p>
      </div>
    </div>

    {/* Segundo servicio */}
    <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
      <img
        src={Comunity_icon}
        className="m-4 h-20 md:h-32 w-20 md:w-32"
        alt="feature"
        loading="lazy"
      />
      <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
        <h1 className="mb-2 text-lg font-bold ">Comunidad Colaborativa</h1>
        <p className="text-pretty text-left">
        Disfruta el contenido que la comunidad aporta con la
                    calificacion de profesores, calificacion de los cursos,
                    organizaciones de tu interes, grupos de estudios y mucho
                    mas.
        </p>
      </div>
    </div>

    {/* Tercer servicio */}
    <div className="flex flex-col items-center justify-center rounded-xl border border-solid border-cach-l3 px-6 py-3 dark:border-cach-l2">
      <img
        src={Event_Icon}
        className="m-4 h-20 md:h-32 w-20 md:w-32"
        alt="feature"
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
        className="m-4 h-20 md:h-32 w-20 md:w-32"
        alt="feature"
        loading="lazy"
      />
      <div className="p-4 text-center text-cach-l3 dark:text-cach-l2">
        <h1 className="mb-2 text-lg font-bold ">Recursos Educativos</h1>
        <p className="text-pretty text-left">
          Obtén orientación académica específica para ti, basada en un chat-bot
          que integra inteligencia artificial para una experiencia más
          personalizada.
        </p>
      </div>
    </div>
  </div>
</article>



      {/* Call to Action */}
      <section className="px-4 py-16 text-center">
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
