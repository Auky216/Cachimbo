/***
 * Agregar las rutas necesarias para las secciones para testear
 */

import Login from "../pages/Login";
import Register from "../pages/Register";
import LandingPage from "../pages/LandingPage";
import Principal from "../sections/Principal";
import Library from "../sections/Library";

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
  }
];

export default router;
