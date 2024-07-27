import { UTECcourses } from "../../static/academic";
import { useUserStore } from "../../store/utils";
import { useState } from "react";

// tercer slide del registro: seleccion de ciclo de ingreso y cursos matriculados
const Academic = ({ next }) => {
  const loadCareer = useUserStore(state => state.user.career);
  /*
  const UTECcourses = {
  CS: [
    ["calcvar", "progra1", "matedisc1", "icc", "labcom1", "pi1"],
    ["calcvect", "progra2", "matedisc2", "optica", "labcom2", "alglin"],
  ], // etc
  DS: [
    ["calcvar", "progra1", "matedisc1", "icd", "labcom1", "pi1"],
    ["calcvect", "progra2", "matedisc2", "optica", "labcom2", "alglin"],
  ], // etc
  // etc, etc
};
  */
  const courses = UTECcourses[loadCareer];
  const resetCoursesLevel = {
    [Object.keys(courses.flat()).map(key => key.code)]: false,
  };
  const [clicked_per_Course, setClicked_per_Course] =
    useState(resetCoursesLevel);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [level, setLevel] = useState(0);
  const [numberCycle, setNumberCycle] = useState(1);

  const handleClick = e => {
    const sele = e.target.getAttribute("course");
    const current = clicked_per_Course[sele];
    setClicked_per_Course({ ...clicked_per_Course, [sele]: !current });
    if (current) {
      setSelectedCourses(selectedCourses.filter(course => course !== sele));
    } else {
      setSelectedCourses([...selectedCourses, sele]);
    }
  };

  const handleChangeLevel = ({ target }) => {
    setLevel(Number(target.value));
  };

  return (
    <section className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="flex h-[80%] w-full flex-col items-center">
        <div className="mt-2 flex px-1 text-center text-[1.6rem] font-bold text-cach-l4 dark:text-cach-l1">
          Cursos matriculados
        </div>
        <div className="flex h-full w-full items-center">
          <div className="flex h-full w-56 items-center justify-center">
            <input
              type="range"
              min={0}
              max={1}
              value={level}
              className="h-[22rem] w-10 cursor-pointer appearance-none overflow-hidden rounded-md bg-gray-200 duration-200 hover:bg-cach-l2 focus:outline-none dark:duration-200"
              onChange={handleChangeLevel}
              style={{
                writingMode: "vertical-lr",
                direction: "rtl",
              }}
              id="customRange1"
            />
          </div>
          <div className="flex h-full w-3/4 flex-col items-center justify-center space-y-5">
            {/* <div className="flex w-full justify-around"> */}
            <div className="flex w-full items-center justify-center gap-10">
              Número de ciclo:
              <select
                className="h-10 w-10 dark:text-white"
                value={numberCycle}
                onChange={({ target }) => setNumberCycle(Number(target.value))}
                required
              >
                {courses.map((_, i) => (
                  <option key={i} value={i}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="dark:text-white">Nivel {level + 1}</div>
            {/* </div> */}
            <div className="flex justify-around gap-5">
              {courses[level].map(course => (
                <button
                  key={course.code}
                  course={course.code} // custom attribute
                  className={`z-10 min-h-8 w-fit items-center justify-center rounded-xl ${clicked_per_Course[course.code] ? "bg-cach-l3/40" : "bg-cach-l3"}  p-2 text-cach-l1`}
                  onClick={handleClick}
                >
                  {course.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[22%] w-full items-center justify-center">
        <div className="flex w-full items-center justify-around">
          <button
            className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() =>
              next({ courses: selectedCourses, cycle: numberCycle })
            }
            disabled={selectedCourses.length === 0}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
};

export default Academic;
