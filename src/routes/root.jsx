import Login from "@/views/Login";
import Register from "@/views/Register";

const router = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default router;
