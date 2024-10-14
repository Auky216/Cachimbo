import { UTECcourses } from "../../static/academic";
import { useUserStore } from "../../store/utils";
import { useState, useEffect } from "react";
import Modal from "../../components/Modal";

//const LIMIT_CREDITS = 24;

// tercer slide del registro: seleccion de ciclo de ingreso y cursos matriculados
const Academic = ({ next }) => {
  const loadCareer = useUserStore(state => state.user.career);
  const loadUni = useUserStore(state => state.user.university);
  const [courses, setCourses] = useState([]);
  const [resetCoursesLevel, setReset] = useState({});

  // curso si es seleccionado o no
  const [clicked_per_Course, setClicked_per_Course] = useState(resetCoursesLevel);
  // acumulador de cursos seleccionados
  const [selectedCourses, setSelectedCourses] = useState([]);
  // nivel de cursos
  const [level, setLevel] = useState(0);
  // ciclo de ingreso
  const [numberCycle, setNumberCycle] = useState(1);
  // creditos acumulados
  const [creditsAcum, setCreditsAcum] = useState(0);
  // modal de limite de creditos si se excede
  const [activateLimitModal, setActivateLimitModal] = useState(false);
  const [currentCycle, setCurrentCycle] = useState('2024-II')
  //cilos
  const cycles = ["2024-II", "2024-I", "2023-II", "2023-I", "2022-II", "2022-I", "2021-II", "2021-I", "2020-II", "2020-I"]
  const handleClick = e => {
    const sele = e.target.getAttribute("course");
    //const credits = Number(e.target.getAttribute("credits"));

    // bool para saber si el curso ya fue seleccionado
    const current = clicked_per_Course[sele];
    //console.log(current);
    if (current) {
      setSelectedCourses(selectedCourses.filter(course => course !== sele));
      //setCreditsAcum(creditsAcum - credits);
    } else {
      //if (creditsAcum + credits <= LIMIT_CREDITS) {
      setSelectedCourses([...selectedCourses, sele]);
      //  //setCreditsAcum(creditsAcum + credits);
      //} else {
      //  //setActivateLimitModal(true);
      //}
    }
    setClicked_per_Course({ ...clicked_per_Course, [sele]: !current });
  };

  const filtredCourseByLevel = (term) => {
    return courses.filter(course => course.term === term);
  }

  const handleChangeLevel = ({ target }) => {
    setLevel(Number(target.value));
  };

  useEffect(() => {
    const url_api = import.meta.env.VITE_API_URL;

    fetch(`${url_api}/test/api/course/getcoursebycareer/`, {
      method: "POST",
      body: JSON.stringify({
        career: loadCareer,
        university: loadUni
      }),
    })
      .then(res => res.json())
      .then(data => JSON.parse(data.body))
      .then(coursesData => {
        setCourses(coursesData);
        setReset(coursesData.reduce((acc, current) => {
          acc[current.course] = false;
          return acc;
        }, {}))
        setClicked_per_Course(coursesData.reduce((acc, current) => {
          acc[current.course] = false;
          return acc;
        }, {}));
        //console.log(coursesData.flat());
      });
  }, [])

  return (
    <section className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="flex h-[80%] w-full flex-col items-center">
        <div className="mt-2 flex px-1 text-center text-[1.6rem] font-bold text-cach-l4 dark:text-cach-l1">
          Cursos matriculados
        </div>
        <div className="flex h-full w-full">
          <div className="flex h-full flex-col items-center">
            <div className="dark:text-white">Nivel {level}</div>
            <div className="flex h-full w-56 items-center justify-center">
              <input
                type="range"
                min={0}
                max={10}
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
          </div>
          <div className="flex h-full w-3/4 flex-col items-center space-y-5">
            <div className="flex w-full items-center justify-center gap-10 pt-14 dark:text-white">
              Número de ciclo:
              <select
                className="h-10 w-10 text-black"
                value={numberCycle}
                onChange={({ target }) => setNumberCycle(Number(target.value))}
                required
              >
                {
                  /* experimental, in the future this will be changed by the data provided in the api */
                  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
                    <option className="text-black" key={i} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex w-full items-center justify-center gap-10 pt-1 dark:text-white">
              Ciclo:
              <select
                className=" p-1 text-black"
                value={currentCycle}
                onChange={({ target }) => setCurrentCycle(target.value)}
                required
              >
                {
                  cycles.map((strC, i) => (
                    <option className="text-black" key={i} value={strC}>
                      {strC}
                    </option>
                  ))}
              </select>
            </div>
            <div className="py-2 text-xl dark:text-white">
              Selecciona tus cursos matriculados:
            </div>

            {/* </div> */}
            <div className="flex justify-around gap-5">
              {filtredCourseByLevel(level).map(course => (
                <button
                  key={courses.indexOf(course)}
                  course={course.course} // custom attribute
                  //credits={course.credits}
                  className={`z-10 min-h-8 w-fit items-center justify-center rounded-xl ${clicked_per_Course[course.course] ? "bg-cach-l3/40" : "bg-cach-l3"}  p-2 text-cach-l1`}
                  onClick={handleClick}
                >
                  {course.course}
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
              next({ courses: selectedCourses, cycle: numberCycle, startYear: currentCycle })
            }
            disabled={selectedCourses.length === 0}
          >
            Siguiente
          </button>
        </div>
      </div>

      {/* Modal de limite de creditos */}
      {/*Deprecated by the api */}
      {/* <Modal isOpen={activateLimitModal} onClose={setActivateLimitModal}>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">
            Has excedido el límite de créditos permitidos para su ciclo.
          </p>
          <button
            className="mt-5 h-10 w-20 rounded-xl bg-cach-l3 text-cach-l1"
            onClick={() => setActivateLimitModal(false)}
          >
            Aceptar
          </button>
        </div>
      </Modal> */}
    </section>
  );
};

export default Academic;
