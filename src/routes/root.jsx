/***
 * Agregar las rutas necesarias para las secciones para testear
 */

import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import Principal from "../sections/Principal";
import Library from "../sections/Library/Library";
import InteractionGroups from "../sections/InteractionGroups";
import ChatAssistant from "../sections/ChatAssistant";
import CourseMain from "../sections/infoCourse/CourseMain";
import PdfLibrary from "../sections/Library/PdfLibrary";
import TeacherMain from "../sections/TeacherMain";
import Events from "../sections/Events/Events";
import EventInfo from "../sections/Events/Eventinfo";

const router = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/welcome",
    element: <LandingPage />,
  },
  {
    path: "/dashboard/main",
    element: <Principal />,
  },
  {
    path: "/dashboard/library",
    element: <Library />,
  },
  {
    path: "/dashboard/intergroups",
    element: <InteractionGroups />,
  },
  {
    path: "/dashboard/asistant",
    element: <ChatAssistant />,
  },
  {
    path: "/dashboard/main/course/:course",
    element: <CourseMain />,
  },
  {
    path: "/dashboard/library/pdf/:pdf",
    element: <PdfLibrary />,
  },
  {
    path: "/dashboard/main/teachers/",
    element: <TeacherMain />,
  },
  {
    path: "/dashboard/main/events",
    element: <Events />,
  },
  {
    path: "/dashboard/main/events/:event",
    element: <EventInfo />,
  }
];

export default router;
