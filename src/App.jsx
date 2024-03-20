import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import router from "@/routes/root.jsx";
import NavBar from "@/components/Navbar.jsx";

const App = () => {
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "light");

  useEffect(() => {
    if (localStorage.getItem("initCachimboPlatform")) {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } else {
      localStorage.setItem("initCachimboPlatform", true);
    }
  }, [theme]);

  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div id="App" className="h-full w-full">
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
