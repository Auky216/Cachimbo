import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/extras/ThemeButton";
import profileTemplate from "../assets/profile-template.png";
import uploadIcon from "../assets/upload-icon.png";
import mainIcon from "../assets/main-icon.png";
import lbIcon from "../assets/library-icon.png";
import asistantIcon from "../assets/ia-icon.png";
import groupsIcon from "../assets/groups-icon.png";
import settingIcon from "../assets/setting-icon.png";
import logOutIcon from "../assets/logout-icon.png";
import { NavLink, useLocation } from "react-router-dom";
import { useUserStore } from "../store/utils";

const Aside = () => {
  const location = useLocation();
  const user = useUserStore(state => state.user);
  return (
    <aside className="h-screen min-w-[20%] bg-cach-l2/20 px-7 py-10 shadow-xl dark:bg-transparent">
      <div className="relative h-full w-full">
        {/* logo cachimbo */}
        <div className="flex h-fit w-fit flex-row gap-5">
          <CachimboLogo className="mb-4 lg:mb-0" />
          <ThemeButton />
        </div>

        {/* componente cuadro de perfil */}
        <div className="mt-5 w-full items-center">
          {/* datos de perfil */}
          <div className="flex flex-row pb-3">
            <NavLink to="/dashboard/profile" className="pr-2">
              <img src={profileTemplate} alt="profile" className="w-20 dark:invert"/>
            </NavLink>
            <div className="items-left flex flex-col justify-center font-extrabold">
              <NavLink to="/dashboard/profile" className="text-base text-cach-l3 dark:text-cach-l2">
                {user.name}
              </NavLink>
              <NavLink to="/dashboard/profile" className="text-base text-cach-l3 dark:text-cach-l2">
                {user.nickname}
              </NavLink>
            </div>
          </div>

          {/* Caracteristicas */}
          <div className="ml-5 mr-5 flex items-center justify-between pb-5 text-base text-cach-l5 dark:text-cach-l1 ">
            <div className="flex cursor-pointer flex-col items-center justify-center">
              <p className="font-extrabold">30</p>
              <p className="font-semibold">Amigos</p>
            </div>
            <div className="flex cursor-pointer flex-col items-center justify-center">
              <p className="font-extrabold">12</p>
              <p className="font-semibold">Subidos</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="font-extrabold">150</p>
              <p className="font-semibold">Puntos</p>
            </div>
          </div>

          <button className="mb-3 mt-2 flex min-h-8 w-full items-center justify-center rounded-xl bg-cach-l3 text-cach-l1">
            <img src={uploadIcon} alt="icon" className="mr-1 w-4 invert" />{" "}
            Subir
          </button>
        </div>

        {/* componente de section buttons */}
        <div className="mb-7 mt-7 flex flex-col justify-start space-y-1 text-lg">
          <NavLink
            to="/dashboard/main"
            className={`flex items-center gap-3 p-2 ${location.pathname.includes("main") ? "font-bold text-cach-l3" : "font-bold text-cach-l5 dark:text-cach-l1"}`}
          >
            <img src={mainIcon} alt="icon" className="mr-2 w-7 dark:invert" />{" "}
            Inicio
          </NavLink>
          <NavLink
            to="/dashboard/library"
            className={`flex items-center gap-3 p-2 ${location.pathname.includes("library") ? "font-bold text-cach-l3" : "font-bold text-cach-l5 dark:text-cach-l1"}`}
          >
            <img src={lbIcon} alt="icon" className="mr-2 w-7 dark:invert" />{" "}
            Biblioteca
          </NavLink>
          <NavLink
            to="/dashboard/asistant"
            className={`flex items-center gap-3 p-2 ${location.pathname.includes("asistant") ? "font-bold text-cach-l3" : "font-bold text-cach-l5 dark:text-cach-l1"}`}
          >
            <img
              src={asistantIcon}
              alt="icon"
              className="mr-2 w-7 dark:invert"
            />{" "}
            Asistente IA
          </NavLink>
          <NavLink
            to="/dashboard/intergroups"
            className={`flex items-center gap-3 p-2 ${location.pathname.includes("intergroups") ? "font-bold text-cach-l3" : "font-bold text-cach-l5 dark:text-cach-l1"}`}
          >
            <img
              src={groupsIcon}
              alt="icon"
              className="mr-2 w-7 dark:invert "
            />{" "}
            Grupos
          </NavLink>
        </div>

        {/* componente de config y logout */}
        <div className="absolute bottom-0 space-y-3 text-lg">
          <NavLink
            to="/dashboard/setting"
            className={`flex items-center gap-3 p-1 ${location.pathname.includes("setting") ? "font-bold text-cach-l3" : "font-bold text-cach-l5 dark:text-cach-l1"}`}
          >
            <img
              src={settingIcon}
              alt="icon"
              className="mr-2 w-7 dark:invert"
            />
            Configuracion
          </NavLink>
          <button
            onClick={() => {
              window.location.href = "/";
            }}
            className="flex items-center gap-3 p-1 font-bold text-cach-l5 dark:text-cach-l1"
          >
            <img src={logOutIcon} alt="icon" className="mr-2 w-7 dark:invert" />
            Cerrar Sesión
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
