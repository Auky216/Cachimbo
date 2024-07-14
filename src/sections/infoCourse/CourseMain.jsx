import { useParams } from "react-router-dom";
import { useState } from "react";
import CDescrip from "./CDescrip";
import CContent from "./CContent";
import COpinion from "./COpinion";
// temporal files in local development
import { getCursos } from "../../constant/course";
import { teachers } from "../../constant/teachers";
import { CoursesOpinion } from "../../constant/opinion";

const CourseMain = () => {
  const params = useParams();
  const curso = getCursos[params.course];
  const courseTeachers = teachers.filter(c =>
    c.courses.includes(params.course),
  );

  const [section, setSection] = useState("desc");
  const handleDesc = () => {
    setSection("desc");
  };
  const handleCont = () => {
    setSection("content");
  };
  const handleOpin = () => {
    setSection("opinion");
  };

  return (
    <section className="max-h-full pt-6 pr-8">
      <div className="flex h-[25vh] w-full flex-col">
        <div className="text-md flex h-10 w-full items-center justify-around font-extrabold">
          {/* tres botones: descripcion, contenido y opiniones */}
          <a
            onClick={handleDesc}
            className={`cursor-pointer py-3 transition hover:text-cach-l3 ${section === "desc" ? "text-cach-l3 dark:text-cach-l2" : "text-cach-l5 dark:text-white"} dark:hover:text-cach-l2`}
          >
            Sobre el curso
          </a>
          <a
            onClick={handleCont}
            className={`cursor-pointer py-3 transition hover:text-cach-l3 ${section === "content" ? "text-cach-l3 dark:text-cach-l2" : "text-cach-l5 dark:text-white"} dark:hover:text-cach-l2`}
          >
            Contenido
          </a>
          <a
            onClick={handleOpin}
            className={`cursor-pointer py-3 transition hover:text-cach-l3 ${section === "opinion" ? "text-cach-l3 dark:text-cach-l2" : "text-cach-l5 dark:text-white"} dark:hover:text-cach-l2`}
          >
            Opiniones
          </a>
        </div>
        <div className="mb-5 h-0.5 w-full bg-cach-l3 dark:bg-cach-l2"></div>

        <div
          className="flex h-24 w-full flex-col items-center justify-center rounded-2xl bg-slate-100"
          style={{ backgroundImage: `url(${curso.bannerImage})` }}
        >
          <div className="text-4xl font-extrabold text-white">
            {curso.title}
          </div>
        </div>
      </div>
      <div className="flex h-[70vh] flex-col overflow-scroll">
        {/* si marca descripcion ↓ */}
        {section === "desc" && (
          <CDescrip courseTeachers={courseTeachers} cursoObj={curso} />
        )}
        {/* si marca contenido ↓ */}
        {section === "content" && <CContent keys={curso.keyKnowledges} />}
        {/* si marca opinion ↓ */}
        {section === "opinion" && <COpinion listOpinions={CoursesOpinion} />}
      </div>
    </section>
  );
};

export default CourseMain;
