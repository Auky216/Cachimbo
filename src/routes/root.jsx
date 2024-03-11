import Login from "@/views/Login";
import Register from "@/views/Register";
import Home from "@/views/Home";

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
    element: <Home />,
  }
];

export default router;
