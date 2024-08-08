import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CDescrip from "./CDescrip";
import COpinion from "./COpinion";
// temporal files in local development
import { getCursos } from "../../constant/course";
import { teachers } from "../../constant/teachers";
import { CoursesOpinion } from "../../constant/opinion";
import { useUserStore } from "../../store/utils";
import {carrers} from "../../static/academic";
import BackButton from "../../components/buttons";
import {fetchDataCustom} from "../../components/fetchingData";
import Loader from "../../components/Loading";
import bannerImage from "../../assets/TeamPhoto/Antonio.jpg";
const CourseMain = () => {
  const params = useParams();
  const curso = params.course;
  //console.log(curso);
  const [info, setInfo] = useState(null);
  const [opinions, setOpinions] = useState([]);
  const [loading, setLoading] = useState(true);
  const {user} = useUserStore();
  const careerName = user.career

  const loadData = async ()=>{
    setLoading(true)
    const [response, body, status] = await fetchDataCustom({token:user.token, course:curso, university: user.university}, "test/api/course/about")
    setInfo(body[0])
    const [response2, body2, status2] = await fetchDataCustom({token:user.token, course:curso, university: user.university, career:careerName}, "test/api/course/prerequisites_nextcourses")
    //console.log(response2, body2, status2)
    setInfo(prev => ({...prev, 
      reqcourses: body2.prerequisites == null ? [] : Array.isArray(body2.prerequisites) ? body2.prerequisites : [body2.prerequisites], 
      nextCourses: body2.next_courses == null ? []:body2.next_courses}))
    //console.log(info)
    //console.log(body)
    //console.log(info)
    setLoading(status2)
    //const [res, bodyOp, state3] = await fetchDataCustom({course_name:curso, university: user.university, token:user.token}, "test/api/course/calification/get")
    //console.log(res, bodyOp, state3)
  }

  useEffect( () => {
    loadData()
  }, [curso]);


  const [section, setSection] = useState("desc");
  const handleDesc = () => {
    setSection("desc");
  };
  //////
  const handleOpin = () => {
    setSection("opinion");
  };

  return (
    <section className="max-h-full pr-8 pt-6">
      {loading ? <Loader/> : <div>
          <div className="flex h-[10vh] w-full flex-col">
            <div className="flex flex-row gap-10">
              <div className="flex w-full flex-col">
                <div className="text-md flex h-10 w-full items-center justify-around font-extrabold">
                  {/* tres botones: descripcion, contenido y opiniones */}
                  <a
                    onClick={handleDesc}
                    className={`cursor-pointer py-3 transition hover:text-cach-l3 ${section === "desc" ? "text-cach-l3 dark:text-cach-l2" : "text-cach-l5 dark:text-white"} dark:hover:text-cach-l2`}
                  >
                    Sobre el curso
                  </a>
                  <a
                    onClick={handleOpin}
                    className={`cursor-pointer py-3 transition hover:text-cach-l3 ${section === "opinion" ? "text-cach-l3 dark:text-cach-l2" : "text-cach-l5 dark:text-white"} dark:hover:text-cach-l2`}
                  >
                    Opiniones
                  </a>
                </div>
                <div className="mb-5 h-0.5 w-full bg-cach-l3 dark:bg-cach-l2"></div>
              </div>
              <BackButton message="Regresar" />
            </div>
          </div>
          <div
            className="flex h-24 w-full flex-col items-center justify-center rounded-2xl bg-slate-100"
            style={{ backgroundImage: `url(${curso.bannerImage || bannerImage})` }}
          >
            <div className="text-3xl font-extrabold text-white">{info.course_name}</div>
          </div>
          <div className="flex h-[70vh] flex-col overflow-scroll">
            {/* si marca descripcion ↓ */}
            {section === "desc" && (
              <CDescrip courseTeachers={info.teachers == null ? []: info.teachers} cursoObj={info} key={1}/>
            )}
            {/* si marca opinion ↓ */}
            {section === "opinion" && <COpinion listOpinions={CoursesOpinion}  key={2}/>}
          </div>
        </div>}
    </section>
  );
};

export default CourseMain;
