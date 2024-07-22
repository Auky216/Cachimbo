import { Link } from "react-router-dom";
import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/extras/ThemeButton";
import { useEffect, useState } from "react";

import University from "../sections/RegisterSlide/University";
import Career from "../sections/RegisterSlide/Carrer";
import Academic from "../sections/RegisterSlide/Academic";
import OtherCourses from "../sections/RegisterSlide/OtherCourses";
import GetUser from "../sections/RegisterSlide/GetUser";
import Password from "../sections/RegisterSlide/Password";
import Verify from "../sections/RegisterSlide/Verify";
import PhotoProfile from "../sections/RegisterSlide/PhotoProfile";
import DescFinal from "../sections/RegisterSlide/DescFinal";

import { useUserStore } from "../store/utils";

const Register = () => {
  // en este pages se hara una serie de vistas slides para el registro de un usuario
  // 1. seleccionar universidad
  // 2. seleccionar carrera
  // 3. seleccionar ciclo de ingreso y cursos matriculados (se rellenara automaticamente con los cursos de la carrera seleccionada
  //    en el ciclo de ingreso seleccionado por defecto y de puede modificar a los cursos que
  //    realmente se matriculo el usuario)
  // 4. seleccionar otros cursos de interes (se restringira el acceso a los comentarios de los cursos)
  // 5. ingresar nombre, apellidos para el perfil y un correo institucional (aqui se verifica si el usuario es de la universidad seleccionada)
  // 6. ingresar contraseña y confirmar contraseña
  // 7. confirmacion de la cuenta (se envia un correo a la cuenta institucional con un codigo de confirmacion)
  // 8. ingresar una foto de perfil (opcional)
  // 9. vista de felicitaciones por registrarse y alli mismo ingresar una descripcion de perfil (opcional)
  // 10. luego se redireccionara a la pagina principal

  // asumiremos que ya se importo las vistas de los slides en este archivo
  // y se hara uso de un useState para manejar el estado de la vista actual
  // y durante eso se guardar en un objeto los datos del usuario
  // debera haber un boton de siguiente y atras para cambiar de vista manteniedo los datos del usuario

  const [currentSlide, setCurrentSlide] = useState(
    /* parseInt(localStorage.getItem("currentSlide")) || */ 0,
  );

  const [setChangeUser, resetUser] = useUserStore(state => [
    state.setChange,
    state.resetUser,
  ]);

  useEffect(() => {
    localStorage.setItem("currentSlide", currentSlide);
  }, [currentSlide]);

  const nextSlide = (data, atr) => {
    setChangeUser(data, atr);
    setCurrentSlide(currentSlide + 1);
  };

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide - 1);
  // };

  const slides = [
    <University next={nextSlide} />,
    <Career next={nextSlide} />,
    // <Academic next={nextSlide} />,
    // <OtherCourses next={nextSlide} />,
    // <GetUser next={nextSlide} />,
    // <Password next={nextSlide} />,
    // <Verify next={nextSlide} />,
    // <PhotoProfile next={nextSlide} />,
    // <DescFinal next={nextSlide} />,
  ];

  /// -- CUANDO LLEGUE AL FINAL, ELIMINAR EL LOCALSTORAGE -- ///

  return (
    <section className="m-auto mt-12 flex h-[92%] w-[78%] flex-col">
      <div className="mx-6 flex flex-row justify-between">
        <div className="mb-6">
          <ThemeButton />
        </div>
        <div className="mb-6">
          <Link to="/">
            <button
              className="text-xl text-cach-l3 dark:text-cach-l2"
              onClick={resetUser}
            >
              ← Volver
            </button>
          </Link>
        </div>
      </div>
      {slides[currentSlide]}
    </section>
  );

  // return {
  /* <section className="m-auto mt-12 flex w-[500px] flex-col">
      <div className="mt-5 flex justify-center">
        <Link to="/">
          <CachimboLogo />
        </Link>
      </div>

      <div className="mt-5 flex justify-center">
        <ThemeButton />
      </div>

       <div className="mt-8 flex justify-center text-5xl font-bold text-cach-l3 dark:text-cach-l2">
        Registrarse
      </div>
      <div className="w-full">
        <form className="rounded px-8 py-12">
          <div className="mb-4">
            <label htmlFor="username">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="username"
                placeholder="Nombre de usuario"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="email">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="email"
                id="email"
                placeholder="Correo electrónico"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="password">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="password"
                id="password"
                placeholder="Contraseña"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="password"
                id="confirmPassword"
                placeholder="Confirmar contraseña"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="lastname">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="lastname"
                placeholder="Apellido"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="age">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="number"
                id="age"
                placeholder="Edad"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="degree">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="degree"
                placeholder="Grado"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="startYear">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="number"
                id="startYear"
                placeholder="Año de inicio"
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="term">
              <input
                className="focus:shadow-outline w-full rounded-xl border border-cach-l3 bg-transparent px-4 py-3 text-gray-700 placeholder:text-cach-l2 focus:outline-none dark:text-cach-l1"
                type="text"
                id="term"
                placeholder="Término"
              />
            </label>
          </div>
          <div className="mb-4 flex items-center justify-center">
            <button
              className="focus:shadow-outline w-full rounded-xl bg-cach-l3 px-4 py-4 font-bold text-white focus:outline-none"
              type="submit"
              value="Submit"
            >
              Registrarse
            </button>
          </div>
          <div className="flex justify-center font-light text-cach-l3 dark:text-cach-l2">
            ¿Ya tienes una cuenta? &nbsp;
            <Link to="/login">
              <strong>Iniciar sesión</strong>
            </Link>
          </div>
        </form>
        </div>
        </section>
        */
  // };
};

export default Register;
