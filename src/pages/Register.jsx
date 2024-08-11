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
    /* parseInt(localStorage.getItem("currentSlide")) || */ 4,
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

  const nextAcademic = data => {
    setChangeUser(String(data.cycle), "cycle");
    setChangeUser(data.courses, "enrolledCourses");
    setCurrentSlide(currentSlide + 1);
  };

  const nextUser = data => {
    setChangeUser(data.name, "name");
    setChangeUser(data.lastname, "lastname");
    setChangeUser(data.email, "email");
    setCurrentSlide(currentSlide + 1);
  };

  const exitRegister = () => {
    resetUser();
    // dirigir al dashboard
    window.location.href = "/";
  };

  const finalize = () => {
    // se realizaria un POST a la API para registrar al usuario
    // fetch("https:// .....").then(res => { });
    exitRegister();
  };

  const slides = [
    <University next={nextSlide} />,
    <Career next={nextSlide} />,
    <Academic next={nextAcademic} />,
    // <OtherCourses next={nextSlide} />,
    <GetUser next={nextUser} />,
    <Verify next={() => setCurrentSlide(currentSlide + 1)} />,
    <Password next={nextSlide} />,
    <PhotoProfile next={nextSlide} />,
    // <DescFinal final={finalize} />,
  ];

  /// -- CUANDO LLEGUE AL FINAL, ELIMINAR EL LOCALSTORAGE -- ///

  return (
    <section className="m-auto mt-12 flex h-[92%] w-[78%] flex-col">
      <div className="mx-6 flex flex-row justify-between">
        <div className="mb-6">
          <ThemeButton />
        </div>
        <div className="mb-6">
          {/* <Link to="/"> */}
          <button
            className="text-xl text-cach-l3 dark:text-cach-l2"
            onClick={exitRegister}
          >
            ← Volver
          </button>
          {/* </Link> */}
        </div>
      </div>
      {slides[currentSlide]}
    </section>
  );
};

export default Register;
