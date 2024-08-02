import { MiniCard } from "../../components/Cards";
import { getCursos } from "../../constant/course";

const CDescrip = ({ courseTeachers, cursoObj }) => {
  return (
    <div className="my-2 w-full">
      <article className="my-4 w-full rounded-3xl bg-transparent px-7 py-6 text-center shadow-xl dark:bg-cach-l2/20 dark:text-white">
        {cursoObj.description}
      </article>
      <div className="flex w-full flex-col gap-3 pb-10">
        <div className="my-4 text-center text-3xl font-bold text-cach-l3 dark:text-white ">
          Profesores
        </div>
        <div className="flex h-fit w-full items-center justify-center px-6 pt-3">
          <div className="h-fit min-w-[75%]">
            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
              {courseTeachers.map(c => (
                <MiniCard
                  key={courseTeachers.indexOf(c)}
                  classimg="size-24"
                  classcont="text-md w-32 pr-3"
                  link={`/dashboard/main/teachers/${c}`}
                  image={c.photo}
                  title={c}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-fit w-full justify-around pt-3">
        <section className="flex w-80 flex-col items-center">
          <div className="mb-8 mt-2 text-center text-2xl font-bold text-cach-l5 dark:text-white ">
            Cursos requeridos
          </div>
          {cursoObj.reqcourses.length ? (
            <div className="flex flex-col gap-3">
              {cursoObj.reqcourses.map(c => (
                <MiniCard
                  key={cursoObj.indexOf(c)}
                  classimg="size-[50px]"
                  classcont="text-sm w-32"
                  link={`/dashboard/main/course/${c}`}
                  image={(getCursos[c] || {}).photo}
                  title={c}
                />
              ))}
            </div>
          ) : (
            <div className="w-32 text-center text-xl text-cach-l3 dark:text-cach-l2">
              Sin cursos
            </div>
          )}
        </section>
        <section className="flex w-80 flex-col items-center">
          <div className="mb-8 mt-2 text-center text-2xl font-bold text-cach-l5 dark:text-white ">
            Cursos siguientes
          </div>
          {cursoObj.nextCourses.length ? (
            <div className="flex flex-col gap-3">
              {cursoObj.nextCourses.map(c => (
                <MiniCard
                  key={c}
                  classimg="size-[20px]"
                  classcont="text-[13px] w-32"
                  link={`/dashboard/main/course/${c}`}
                  image=""
                  title={c}
                />
              ))}
            </div>
          ) : (
            <div className="w-32 text-center text-xl text-cach-l3 dark:text-cach-l2">
              Sin cursos, ahí termina !
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default CDescrip;
