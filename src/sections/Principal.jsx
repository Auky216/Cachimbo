import { NavLink } from "react-router-dom";
import { CardInfo, MiniCard } from "../components/Cards";
import ThemeButton from "../components/ThemeButton";

const Principal = () => {
  const getCursos = [
    {
      iconfile: "",
      title: "Calculo de una Variable",
      route: "calcvar",
    },
    {
      iconfile: "",
      title: "Matemáticas Discretas I",
      route: "matedisc1",
    },
    {
      iconfile: "",
      title: "Programación I",
      route: "progra1",
    },
    {
      iconfile: "",
      title: "Proyectos Interdisciplinarios I",
      route: "pi1",
    },
    // { ... }
  ];

  /**
   * Proximamente con el usuario de hara un useEffect donde se cargara en vivo los cursos que actualmente
   * esta llevando y almacenara alli ↑
   */

  return (
    <div className="h-full overflow-auto pr-8">
      {/* <ThemeButton /> */}
      <article className="pb-8">
        <div className="pb-3 pt-3 text-2xl font-extrabold text-cach-l3 dark:text-cach-l2">
          Tus Cursos
        </div>
        <div className="grid grid-cols-1 gap-4 pt-3 md:grid-cols-2">
          {getCursos.map((c) => (
            <NavLink key={c.route} to={`/dashboard/main/course/${c.route}`}>
              <MiniCard iconfile={c.iconfile} title={c.title} />
            </NavLink>
          ))}
        </div>
      </article>

      <article className="pb-8">
        <div className="pb-3 text-2xl font-extrabold text-cach-l3 dark:text-cach-l2">
          Ambiente Académico
        </div>
        <div className="space-y-4 pt-10">
          <CardInfo iconfile="" title="Profesores" info="sss" />
          <CardInfo iconfile="" title="Profesores" info="sss" />
          <CardInfo iconfile="" title="Sugerencias" info="sss" />
          <CardInfo iconfile="" title="Sugerencias" info="sss" />
          <CardInfo iconfile="" title="Sugerencias" info="sss" />
          <CardInfo iconfile="" title="Sugerencias" info="sss" />
          <CardInfo iconfile="" title="Sugerencias" info="sss" />
          <CardInfo iconfile="" title="Sugerencias" info="sss" />
        </div>
      </article>
    </div>
  );
};

export default Principal;
