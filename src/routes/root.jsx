import Login from "@/views/Login";
import Register from "@/views/Register";
import LandingPage from "@/views/Home";
import AboutUs from "@/views/AboutUs";

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
    path: "/home",
    element: <LandingPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
  },
];

export default router;
