import ThemeButton from "@/components/ThemeButton";
import { Link } from "react-router-dom";
import { CachimboLogo } from "@/components/icons/CachimoLogo";

import discordIcon from "@/assets/discord.svg";
import linkedinIcon from "@/assets/linkedin.svg";
import instagramIcon from "@/assets/instagram.svg";

const Home = () => {
  return (
    <section className="flex flex-col w-full max-w-4xl m-auto">
      <CachimboLogo />
      <div className="mt-5 flex justify-center">
        <ThemeButton />
      </div>

      <div className="mt-8 flex justify-between">
        <div className="w-full mb-8">
          <h1 className="text-cach-l3 dark:text-cach-l2 font-bold text-2xl">Bienvenido a Cachimbo!</h1>
          <p className="text-cach-l3 dark:text-cach-l2 text-lg mb-4">Poner una descripcion al proyecto aqui...</p>
        </div>
        <div className="flex flex-col items-end">
          <Link
            to="/login"
            className="bg-cach-l3 text-white font-bold py-2 px-4 rounded-full inline-block mb-4 hover:bg-cach-l4"
          >
            Ya tengo cuenta
          </Link>
          <Link
            to="/register"
            className="bg-cach-l3 text-white font-bold py-2 px-4 rounded-full inline-block hover:bg-cach-l4"
          >
            Empieza ahora
          </Link>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-8">
        <a href="url_al_discord">
          <img src={discordIcon} alt="Discord" className="w-8 h-8" />
        </a>
        <a href="url_al_linkedin">
          <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
        </a>
        <a href="url_al_instagram">
          <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
        </a>
        {/* Agrega más iconos de redes sociales según sea necesario */}
      </div>
    </section>
  );
};

export default Home;
