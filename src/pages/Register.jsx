// import { CachimboLogo } from "../components/icons/CachimoLogo";
import ThemeButton from "../components/extras/ThemeButton";
import { useEffect, useState } from "react";

import University from "../sections/RegisterSlide/University";
import Career from "../sections/RegisterSlide/Carrer";
import Academic from "../sections/RegisterSlide/Academic";
// import OtherCourses from "../sections/RegisterSlide/OtherCourses";
import GetUser from "../sections/RegisterSlide/GetUser";
import Password from "../sections/RegisterSlide/Password";
import Verify from "../sections/RegisterSlide/Verify";
import LastRegister from "../sections/RegisterSlide/LastRegister";

import { useNavigate } from "react-router-dom";
import { useUserStore } from "../store/utils";

const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [dataRegister, setDataRegister] = useState(
    {"friends": [],
    "libraryFavorites": [],
    "studyGroups": [],
    "passedCourses": [],
    "insignia": [],
    "eventFavorites": [],
    "points": 0,
    "files": [],
    "userPhoto": ""
  });
  const userLocalToDataRegister = {"university":"university", "career":"term", };

  const user = useUserStore(state => state.user);
  const [setChangeUser, resetUser] = useUserStore(state => [
    state.setChange,
    state.resetUser,
  ]);
  const move = useNavigate();

  

  useEffect(() => {
    localStorage.setItem("currentSlide", currentSlide);
  }, [currentSlide]);

  const nextSlide = (data, atr) => {
    setChangeUser(data, atr);
    setDataRegister({ ...dataRegister, [userLocalToDataRegister[atr]]: data });
    setCurrentSlide(currentSlide + 1);
  };

  const nextAcademic = data => {
    setChangeUser(data.cycle, "cycle");
    setChangeUser(data.courses, "enrolledCourses");
    setDataRegister({ ...dataRegister, cycle: data.cycle, enrolledCourses: data.courses });
    setCurrentSlide(currentSlide + 1);
  };

  const nextUser = data => {
    setChangeUser(data.name, "name");
    setChangeUser(data.lastname, "lastname");
    setChangeUser(data.email, "email");
    setDataRegister({ ...dataRegister, name: data.name, lastname: data.lastname, email: data.email });
    setCurrentSlide(currentSlide + 1);
  };

  const exitRegister = () => {
    // si en el cuadro de dialogo se confirma la salida, resetear el usuario
    if (!window.confirm("¿Estás seguro de que deseas salir del registro?"))
      return;
    resetUser();
    // dirigir al dashboard
    move("/"); // redirigir a la página principal
  };

  const finalize = data => {
    
    //console.log(user);

    // se realizaria un POST a la API para registrar al usuario
    // fetch("https:// .....").then(res => { });
    // dirigir al dashboard
    // resetUser();
    // Propuesta: redirigir al dashboard con un mensaje de bienvenida antes
    move("/dashboard/main");
  };

  const nextProfile = data => {
    setChangeUser(data.nickname, "nickname");
    setChangeUser(data.description, "profileDescription");
  }

  const slides = [
    <University next={nextSlide} />,
    <Career next={nextSlide} />,
    <Academic next={nextAcademic} />,
    // <OtherCourses next={nextSlide} />,
    <GetUser next={nextUser} />,
    <Password next={nextSlide} />,
    <LastRegister next={nextProfile} />,
    <Verify next={finalize} />,
    
  ];

  return (
    <section className="m-auto mt-12 flex h-[92%] w-[78%] flex-col">
      <div className="mx-6 flex flex-row justify-between">
        <div className="mb-6">
          <ThemeButton />
        </div>
        <div className="mb-6">
          <button
            className="text-xl text-cach-l3 dark:text-cach-l2"
            onClick={exitRegister}
          >
            ← Volver
          </button>
        </div>
      </div>
      {slides[currentSlide]}
    </section>
  );
};

export default Register;
