import Login from "@/views/Login";
import Register from "@/views/Register";
import LandingPage from "@/views/Home";

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
];

export default router;
