import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/ThemeButton";
import profileTemplate from "../assets/profile-template.png";
import uploadIcon from "../assets/upload-icon.png"
import mainIcon from "../assets/main-icon.png"
import lbIcon from "../assets/library-icon.png"
import asistantIcon from "../assets/ia-icon.png"
import groupsIcon from "../assets/groups-icon.png"
import settingIcon from "../assets/setting-icon.png"
import logOutIcon from "../assets/logout-icon.png"
import { NavLink, useLocation } from 'react-router-dom';

const Aside = () => {
  const location = useLocation();
  return (
    <aside className="min-h-screen min-w-[20%] border border-black p-4">
      <div className="h-full w-full pt-2 relative">
        
        {/* logo cachimbo */}
        <CachimboLogo className="mb-4 lg:mb-0" />
        
        <div className="mt-5 items-center w-full">
          {/* componente cuadro de perfil */}
          {/* datos de perfil */}
          <div className="flex flex-row">
            <div>
              <img src={profileTemplate} alt="profile" className="w-20 dark:invert"/>
            </div>
            <div class="flex flex-col items-left justify-center font-bold">
              <p class="text-cach-l3 dark:text-cach-l2 text-xs">Juan Salvatierra</p>
              <h2 class="text-cach-l3 dark:text-cach-l2 text-base">@Jojiz</h2>
            </div>
          </div>

          <div class="flex justify-between ml-5 mr-5 items-center text-base text-cach-l2">
            <div class="flex justify-center items-center flex-col">
              <p className="font-extrabold">30</p>
              <p className="font-semibold">Amigos</p>
            </div>
            <div class="flex justify-center items-center flex-col">
              <p className="font-extrabold">12</p>
              <p className="font-semibold">Subidos</p>
            </div>
            <div class="flex justify-center items-center flex-col">
              <p className="font-extrabold">150</p>
              <p className="font-semibold">Puntos</p>
            </div>
          </div>

          <button class="bg-cach-l3 w-full min-h-8 flex items-center justify-center rounded-xl mt-2 mb-3 text-cach-l1">
            <img src={uploadIcon} alt="icon" className="w-4 mr-1 invert"/> Subir
          </button>
        </div>
        {/* componente de section buttons */}
        
        <div className="flex flex-col justify-start mt-7 mb-7 text-lg">
          <NavLink to="/dashboard/main" className={`p-2 flex items-center gap-3 ${location.pathname === "/dashboard/main" ? "text-cach-l3 font-semibold" : "text-cach-l2 font-semibold"}`}>
            <img src={mainIcon} alt="icon" className="w-7"/> Inicio
          </NavLink>
          <NavLink to="/dashboard/library" className={`p-2 flex items-center gap-3 ${location.pathname === "/dashboard/library" ? "text-cach-l3 font-semibold" : "text-cach-l2 font-semibold"}`}>
            <img src={lbIcon} alt="icon" className="w-7"/> Biblioteca
          </NavLink>
          <NavLink to="/dashboard/asistant" className={`p-2 flex items-center gap-3 ${location.pathname === "/dashboard/asistant" ? "text-cach-l3 font-semibold" : "text-cach-l2 font-semibold"}`}>
            <img src={asistantIcon} alt="icon" className="w-7"/> Asistente IA
          </NavLink>
          <NavLink to="/dashboard/groups" className={`p-2 flex items-center gap-3 ${location.pathname === "/dashboard/groups" ? "text-cach-l3 font-semibold" : "text-cach-l2 font-semibold"}`}>
            <img src={groupsIcon} alt="icon" className="w-7"/> Grupos
          </NavLink>
          <div className="flex justify-center">
            <ThemeButton />
        </div>
        </div>

        <div className="absolute bottom-0">
          <NavLink to="/dashboard/setting" className={`p-1 flex items-center gap-3 ${location.pathname === "/dashboard/setting" ? "text-cach-l3 font-semibold" : "text-cach-l2 font-semibold"}`}>
            <img src={settingIcon} alt="icon" className="w-7"/> Configuracion
          </NavLink>
          <NavLink to="/dashboard/logout" className={`p-1 flex items-center gap-3 ${location.pathname === "/dashboard/logout" ? "text-cach-l3 font-semibold" : "text-cach-l2 font-semibold"}`}>
            <img src={logOutIcon} alt="icon" className="w-7"/> Cerrar Secion
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
