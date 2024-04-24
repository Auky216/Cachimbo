import { NavLink } from "react-router-dom";
import { CardInfo, MiniCard } from "../components/Cards";

const Principal = () => {
  const getCursos = [
    {
      iconfile: "",
      title: "Calculo de una Variable",
      route: "calcvar",
    },
    // { ... }
  ];

  /**
   * Proximamente con el usuario de hara un useEffect donde se cargara en vivo los cursos que actualmente
   * esta llevando y almacenara alli ↑
   */

  return (
    <div className="h-full overflow-y-scroll">
      <article>
        <div className="text-2xl font-extrabold text-cach-l3 dark:text-cach-l2">
          Tus Cursos
        </div>
        <div>
          {getCursos.map((c) => (
            <NavLink key={c.route} to={`/dashboard/course/${c.route}`}>
              <MiniCard iconfile={c.iconfile} title={c.title} />
            </NavLink>
          ))}
        </div>
      </article>

      <article>
        <div className="text-2xl font-extrabold text-cach-l3 dark:text-cach-l2">
          Ambiente Académico
        </div>
        <div>
          <CardInfo iconfile="" title="Profesores" info="sss" />
        </div>
      </article>
    </div>
  );
};

export default Principal;
