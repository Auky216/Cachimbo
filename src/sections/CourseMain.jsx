import { useParams } from "react-router-dom";
// temporal files in local development
import { getCursos } from "../constant/course";
import { teachers } from "../constant/teachers";
import { MiniCard } from "../components/Cards";
import { useState } from "react";

const CourseMain = () => {
  const params = useParams();
  const curso = getCursos[params.course];
  const courseTeachers = teachers.filter((c) =>
    c.courses.includes(params.course),
  );

  const requiredCoursesInfo = curso.reqcourses.map((c) => getCursos[c]);

  const [section, setSection] = useState("info");
  const handleInfo = () => {
    setSection("info");
  };
  const handleCont = () => {
    setSection("content");
  };
  const handleOpin = () => {
    setSection("opinion");
  };

  return (
    <section className="h-full overflow-auto py-10 pr-8">
      <div
        className="flex h-32 w-full flex-col items-center justify-center rounded-2xl bg-slate-100"
        style={{ backgroundImage: `url(${curso.bannerImage})` }}
      >
        <div className="text-4xl font-extrabold text-white">{curso.title}</div>
      </div>
      <div className="my-4 flex h-20 w-full items-center justify-around">
        {/* tres botones: info, silabo y opiniones */}
        <button
          onClick={handleInfo}
          className="rounded-xl bg-cach-l3 p-3 dark:bg-cach-l2"
        >
          Información
        </button>
        <button
          onClick={handleCont}
          className="rounded-xl bg-cach-l3 p-3 dark:bg-cach-l2"
        >
          Contenido
        </button>
        <button
          onClick={handleOpin}
          className="rounded-xl bg-cach-l3 p-3 dark:bg-cach-l2"
        >
          Opiniones
        </button>
      </div>

      {/* si marca información ↓ */}
      {section == "info" && (
        <div className="my-2 w-full">
          <article className="my-4 w-full rounded-2xl bg-transparent px-7 py-10 text-center text-xl shadow-xl dark:bg-cach-l2/20 dark:text-white">
            {curso.info}
          </article>
          <div className="flex w-full flex-col gap-3">
            <div className="my-4 text-center text-3xl font-bold text-cach-l3 dark:text-white ">
              Profesores
            </div>
            <div className="mx-6 flex h-fit w-full items-center justify-center pt-3">
              <div className="h-fit min-w-[75%]">
                <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
                  {courseTeachers.map((c) => (
                    <MiniCard
                      key={c}
                      classimg="size-32"
                      classcont="text-md w-32"
                      link="#"
                      image={c.photo}
                      title={c.name}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* si marca silabo ↓ */}
      {section == "content" && (
        <div className="my2 w-full">
          <div className="flex w-full flex-col gap-3">
            <div className="my-4 text-center text-2xl font-bold text-cach-l3 dark:text-white ">
              Cursos requeridos
            </div>
            <div className="mx-6 flex h-fit w-full items-center justify-center pt-3">
              <div className="h-fit min-w-[75%]">
                {curso.reqcourses.length ? (
                  <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-2">
                    {requiredCoursesInfo.map((c) => (
                      <MiniCard
                        key={c}
                        classimg="size-[50px]"
                        classcont="text-md w-32"
                        link={`/dashboard/main/course/${c}`}
                        image={c.photo}
                        title={c.title}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="w-32 text-center text-cach-l3 dark:text-cach-l2">
                    No tiene cursos requeridos
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* si marca opiniones ↓ */}
    </section>
  );
};

export default CourseMain;
