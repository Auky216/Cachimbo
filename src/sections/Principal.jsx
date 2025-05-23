import { CardInfo, MiniCard } from "../components/Cards";
import Events from "../assets/icons8-billete-con-estrella-96.png";
import Electivo from "../assets/icons8-electivo-96.png";
import Opinion from "../assets/icons8-opinión-opuesta-96.png";
import Profesores from "../assets/icons8-profesor-96.png";
import { getCursos } from "../constant/course";
import { NavLink } from "react-router-dom";
import Curso from "../assets/icons8-cursos-96.png";
import { useUserStore } from "../store/utils";
import { useState, useEffect } from "react";

const Principal = () => {
  const { user } = useUserStore();
  const [cursos_user, setCursos_user] = useState(user.enrolledCourses);
  // por ahora los existennte en getcursos

  useEffect(() => {
    setCursos_user(user.enrolledCourses);
  }, [user, user.enrolledCourses]);
  return (
    <div className="h-full overflow-auto py-8 pr-8">
      <article className="pb-10">
        <div className="pb-4 pt-3 text-3xl font-extrabold text-cach-l3 dark:text-cach-l2">
          Tus Cursos
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-3">
          {cursos_user.map(c => (
            <MiniCard
              key={c.toString()}
              classimg="size-[50px]"
              classcont="text-md w-full sm:w-64" // Ancho completo en pantallas pequeñas, fijo en pantallas medianas
              link={`/dashboard/main/course/${c}`}
              image={Curso}
              title={c}
            />
          ))}
        </div>

      </article>
      <article>
        <div className="text-3xl font-extrabold text-cach-l3 dark:text-cach-l2">
          Explorando
        </div>
        <div className="flex flex-col space-y-8 pt-10">
          <NavLink to="/dashboard/main/teachers">
            <CardInfo
              iconfile={Profesores}
              title="Profesores"
              info="Escoge a tus profesores gracias a la opinión y calificación de la comunidad"
            />
          </NavLink>
          <NavLink to="/dashboard/main/nextcourses">
            <CardInfo
              iconfile={Electivo}
              title="Próximos cursos"
              info="Visualiza todos los cursos de UTEC para tu próxima matrícula de tu interés en base a la comunidad"
            />
          </NavLink>
          <NavLink to="/dashboard/main/events">
            <CardInfo
              iconfile={Events}
              title="Eventos"
              info="Participa de los eventos que las organizaciones y comunidades de UTEC realizan en este semetres académico"
            />
          </NavLink>
          <NavLink to="/dashboard/main/sugerencias">
            <CardInfo
              iconfile={Opinion}
              title="Sugerencias"
              info="Visualiza tus sugerencias, propuestas u opiniones y de otros estudiantes para mejorar aspectos de la universidad"
            />
          </NavLink>
        </div>
      </article>
    </div>
  );
};

export default Principal;
