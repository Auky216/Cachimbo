/***
 * Agregar las rutas necesarias para las secciones para testear
 */

import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import Principal from "../sections/Principal";

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
];

export default router;
