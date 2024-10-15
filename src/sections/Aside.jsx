import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa"; // Icono del usuario
import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/extras/ThemeButton";
import profileTemplate from "../assets/profile-template.jpg";
import uploadIcon from "../assets/upload-icon.png";
import mainIcon from "../assets/main-icon.png";
import lbIcon from "../assets/library-icon.png";
import asistantIcon from "../assets/ia-icon.png";
import groupsIcon from "../assets/groups-icon.png";
import settingIcon from "../assets/setting-icon.png";
import logOutIcon from "../assets/logout-icon.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useUserStore } from "../store/utils";
import { useAuthStore } from "../store/session";
import Modal from "../components/Modal";

const Aside = () => {
  const location = useLocation();
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const user = useUserStore((state) => state.user);
  const [modal, setModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Control del menú desplegable
  const menuRef = useRef(null); // Referencia al menú desplegable

  // Manejo de clics fuera del menú para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Cerrar menú desplegable al cambiar el tamaño de la pantalla a md o mayor
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Cerrar el menú cuando la pantalla es mayor a "md"
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    navigate("/dashboard/upload", { state: { file } });
  };

  return (
    <aside className="md:h-screen min-w-[20%] bg-cach-l2/40 md:bg-cach-l2/20 px-7 py-10 shadow-xl dark:bg-cach-l3/30">
      {isMenuOpen && (<div className="absolute top-0 left-0 w-full h-full bg-black/60"> </div>)}
      <div className="relative h-full w-full">
        {/* Iconos visibles solo en pantallas pequeñas */}
        <div className="md:hidden flex justify-around mb-4">
          <NavLink to="/dashboard/main">
            <img src={mainIcon} alt="Inicio" className="w-7 dark:invert" />
          </NavLink>
          <NavLink to="/dashboard/library">
            <img src={lbIcon} alt="Biblioteca" className="w-7 dark:invert" />
          </NavLink>
          <NavLink to="/dashboard/asistant">
            <img src={asistantIcon} alt="Asistente IA" className="w-7 dark:invert" />
          </NavLink>
          <NavLink to="/dashboard/intergroups">
            <img src={groupsIcon} alt="Grupos" className="w-7 dark:invert" />
          </NavLink>
          <NavLink to="/dashboard/setting">
            <img src={settingIcon} alt="Configuración" className="w-7 dark:invert" />
          </NavLink>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FaUserCircle className="text-3xl text-cach-l3 dark:text-cach-l2" />
          </button>
        </div>

        {/* Menú desplegable de usuario */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="absolute bottom-0 left-0 w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 transform transition-transform duration-300"
          >
            <div className="flex flex-row justify-between">
              <div className="flex justify-center mb-4">
                <CachimboLogo className="w-16" />
              </div>
              {/* Cambiar tema */}
              <div className="flex justify-center mb-3">
                <ThemeButton />
              </div>
            </div>
            <div className="flex flex-row pb-3 items-center">
              <img
                src={profileTemplate}
                alt="profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-extrabold text-cach-l3 dark:text-cach-l2">{user.name}</p>
                <p className="text-sm text-cach-l5 dark:text-cach-l1">@{user.nickname}</p>
              </div>
            </div>

            {/* Estadísticas del usuario */}
            <div className="flex justify-between mb-4 text-center text-base text-cach-l5 dark:text-cach-l1">
              <div>
                <p className="font-extrabold">{user.numberFriends || 0}</p>
                <p className="font-semibold">Amigos</p>
              </div>
              <div>
                <p className="font-extrabold">{user.numberFilesUploaded || 0}</p>
                <p className="font-semibold">Subidos</p>
              </div>
              <div>
                <p className="font-extrabold">{user.score || 0}</p>
                <p className="font-semibold">Puntos</p>
              </div>
            </div>

            {/* Botón de subir archivo */}
            <div className="flex justify-center mb-3">
              <input
                type="file"
                id="submit-file"
                className="hidden"
                onChange={handleUpload}
                accept=".pdf, .jpg, .jpeg, .png"
              />
              <label
                htmlFor="submit-file"
                className="flex min-h-8 w-full cursor-pointer items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
              >
                <img src={uploadIcon} alt="icon" className="mr-1 w-4 invert" />
                Subir
              </label>
            </div>

            {/* Cerrar sesión */}
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="w-full flex items-center justify-center gap-3 py-2 font-bold text-cach-l5 dark:text-cach-l1 bg-cach-l4 dark:bg-cach-l2 rounded-lg"
            >
              <img src={logOutIcon} alt="Cerrar Sesión" className="w-6 invert" />
              <p className="text-white">Cerrar Sesión</p>
            </button>
          </div>
        )}

        {/* Iconos y secciones visibles en pantallas md o mayores */}
        <div className="hidden md:block">
          <div className="flex h-fit w-fit flex-row gap-5">
            <CachimboLogo className="mb-4 lg:mb-0" />
            <ThemeButton />
          </div>

          <div className="mt-5 w-full">
            <div className="flex flex-row pb-3 items-center">
              <NavLink to="/dashboard/profile" className="pr-2">
                <img
                  src={profileTemplate}
                  alt="profile"
                  className="w-16 mx-5 rounded-full"
                />
              </NavLink>
              <div className="items-left flex flex-col justify-center font-extrabold">
                <NavLink
                  to="/dashboard/profile"
                  className="text-base text-cach-l3 dark:text-cach-l2"
                >
                  {user.name}
                </NavLink>
                <NavLink
                  to="/dashboard/profile"
                  className="text-base text-cach-l3 dark:text-cach-l2"
                >
                  @{user.nickname}
                </NavLink>
              </div>
            </div>

            {/* Estadísticas del usuario en pantallas grandes */}
            <div className="ml-5 mr-5 flex items-center justify-between pb-5 text-base text-cach-l5 dark:text-cach-l1">
              <div className="flex cursor-pointer flex-col items-center justify-center">
                <p className="font-extrabold">{user.numberFriends || 0}</p>
                <p className="font-semibold">Amigos</p>
              </div>
              <div className="flex cursor-pointer flex-col items-center justify-center">
                <p className="font-extrabold">{user.numberFilesUploaded || 0}</p>
                <p className="font-semibold">Subidos</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="font-extrabold">{user.score || 0}</p>
                <p className="font-semibold">Puntos</p>
              </div>
            </div>

            {/* Botón de subir archivo en pantallas grandes */}
            <input
              type="file"
              id="submit-file-desktop"
              className="hidden"
              onChange={handleUpload}
              accept=".pdf, .jpg, .jpeg, .png, .docx, .xlsx, .pptx"
            />
            <label
              htmlFor="submit-file-desktop"
              className="mb-3 mt-2 flex min-h-8 w-full cursor-pointer items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
            >
              <img src={uploadIcon} alt="icon" className="mr-1 w-4 invert" />
              Subir
            </label>
          </div>

          <div className="mb-7 mt-7 flex flex-col space-y-1 text-lg">
            <NavLink
              to="/dashboard/main"
              className={`flex items-center gap-3 p-2 ${location.pathname.includes("main")
                ? "font-bold text-cach-l3"
                : "font-bold text-cach-l5 dark:text-cach-l1"
                }`}
            >
              <img src={mainIcon} alt="icon" className="mr-2 w-7 dark:invert" />
              Inicio
            </NavLink>
            <NavLink
              to="/dashboard/library"
              className={`flex items-center gap-3 p-2 ${location.pathname.includes("library")
                ? "font-bold text-cach-l3"
                : "font-bold text-cach-l5 dark:text-cach-l1"
                }`}
            >
              <img src={lbIcon} alt="icon" className="mr-2 w-7 dark:invert" />
              Biblioteca
            </NavLink>
            <NavLink
              to="/dashboard/asistant"
              className={`flex items-center gap-3 p-2 ${location.pathname.includes("asistant")
                ? "font-bold text-cach-l3"
                : "font-bold text-cach-l5 dark:text-cach-l1"
                }`}
            >
              <img
                src={asistantIcon}
                alt="icon"
                className="mr-2 w-7 dark:invert"
              />
              Asistente IA
            </NavLink>
            <NavLink
              to="/dashboard/intergroups"
              className={`flex items-center gap-3 p-2 ${location.pathname.includes("intergroups")
                ? "font-bold text-cach-l3"
                : "font-bold text-cach-l5 dark:text-cach-l1"
                }`}
            >
              <img src={groupsIcon} alt="icon" className="mr-2 w-7 dark:invert" />
              Grupos
            </NavLink>
          </div>

          <div className="space-y-3 text-lg">
            <NavLink
              to="/dashboard/setting"
              className={`flex items-center gap-3 p-1 ${location.pathname.includes("setting")
                ? "font-bold text-cach-l3"
                : "font-bold text-cach-l5 dark:text-cach-l1"
                }`}
            >
              <img src={settingIcon} alt="icon" className="mr-2 w-7 dark:invert" />
              Configuración
            </NavLink>
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className="flex items-center gap-3 p-1 font-bold text-cach-l5 dark:text-cach-l1"
            >
              <img src={logOutIcon} alt="icon" className="mr-2 w-7 dark:invert" />
              Cerrar Sesión
            </button>
          </div>
        </div>

        <input
          type="file"
          id="submit-file"
          className="hidden"
          onChange={handleUpload}
          accept=".pdf, .jpg, .jpeg, .png"
        />
      </div>
      {/* Modal para subir archivo */}
      <Modal isOpen={modal} onClose={() => setModal(false)} />
    </aside>
  );
};

export default Aside;
