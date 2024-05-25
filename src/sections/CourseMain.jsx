import { useParams } from "react-router-dom";
// temporal files in local development
import { getCursos } from "../constant/course";
import { teachers } from "../constant/teachers";
import { useEffect } from "react";
import { MiniCard } from "../components/Cards";

const CourseMain = () => {
  const params = useParams();
  const curso = getCursos[params.course];
  const courseTeachers = teachers.filter((c) =>
    c.courses.includes(params.course),
  );

  return (
    <section className="h-full overflow-auto py-10 pr-8">
      <div
        className="flex h-40 w-full flex-col items-center justify-center rounded-2xl bg-slate-100"
        style={{ backgroundImage: `url(${curso.bannerImage})` }}
      >
        <div className="text-4xl font-extrabold text-white">{curso.title}</div>
      </div>
      <div className="my-4 flex h-20 w-full items-center justify-around">
        {/* tres botones: info, silabo y opiniones */}
        <button className="rounded-xl bg-cach-l3 p-3 dark:bg-cach-l2">
          Información
        </button>
        <button className="rounded-xl bg-cach-l3 p-3 dark:bg-cach-l2">
          Sílabo
        </button>
        <button className="rounded-xl bg-cach-l3 p-3 dark:bg-cach-l2">
          Opiniones
        </button>
      </div>

      {/* si marca información ↓ */}
      <article className="my-8 w-full rounded-2xl bg-transparent px-7 py-10 text-center text-2xl shadow-xl dark:bg-cach-l2/20">
        {curso.info}
      </article>
      <div className="flex w-full flex-col gap-3">
        <div className="text-center text-3xl font-bold text-cach-l3 dark:text-white ">
          Profesores
        </div>
        <div className="grid w-full grid-cols-1 gap-2 pt-3 md:grid-cols-2">
          {courseTeachers.map((c) => (
            /** aun por personalizar xD */
            <MiniCard iconfile={c.photo} title={c.name} />
          ))}
        </div>
      </div>

      {/* si marca silabo ↓ */}

      {/* si marca opiniones ↓ */}
    </section>
  );
};

export default CourseMain;
