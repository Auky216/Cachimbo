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
    path: "/dashboard",
    element: <Principal />,
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
    path: "/dashboard/InteractionGroups",
    element: <InteractionGroups />,
  },
  {
    path: "/dashboard/asistant",
    element: <ChatAssistant />,
  },
];

export default router;
