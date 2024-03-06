import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import router from "@/routes/root.jsx";
import NavBar from "@/components/Navbar.jsx";

const App = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div id="App" className="w-full h-full">
      {/* [Proximamente] Mostrar navbar solo cuando el usuario ha sido logeado */}
      {showNavBar || <NavBar />}

      <Routes>
        {router.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          ></Route>
        ))}
      </Routes>
    </div>
  );
};

export default App;
