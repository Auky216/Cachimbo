import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import CDescrip from "./CDescrip";
import COpinion from "./COpinion";
import { CoursesOpinion } from "../../constant/opinion";
import { useUserStore } from "../../store/utils";
import {carrers} from "../../static/academic";
import BackButton from "../../components/buttons";
import Loader from "../../components/Loading";
import bannerImage from "../../assets/TeamPhoto/Antonio.jpg";
import { getCourseInformation, getPreRequisities_NextCourses } from "../../store/services";
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
    
    Promise.all([getCourseInformation(curso), getPreRequisities_NextCourses(curso)])
    .then(([info, req_next]) => {
      setInfo(info[0])
      setInfo(prev => ({...prev, 
        reqcourses: req_next.prerequisites == null ? [] : Array.isArray(req_next.prerequisites) ? req_next.prerequisites : [req_next.prerequisites], 
        nextCourses: req_next.next_courses == null ? []:req_next.next_courses}))
    }
    )
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false));
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
