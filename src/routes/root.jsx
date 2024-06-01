/***
 * Agregar las rutas necesarias para las secciones para testear
 */

import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import Principal from "../sections/Principal";
import Library from "../sections/Library";
import InteractionGroups from "../sections/InteractionGroups";
import ChatAssistant from "../sections/ChatAssistant";
import CourseMain from "../sections/CourseMain";
import PdfLibrary from "../sections/PdfLibrary";

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
  }
];

export default router;
