import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import router from "./routes/root.jsx";
import HomePage from "./pages/HomePage.jsx";

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
    // setShowMainPage
  }, [theme]);

  const showMainPage = window.location.pathname.includes("dashboard");

  return (
    <div id="App" className="h-full w-full">
      {/* [Proximamente] Mostrar aside estático solo cuando el usuario ha sido logeado */}
      {!showMainPage || <HomePage />}

      {showMainPage || (
        <Routes>
          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            ></Route>
          ))}
        </Routes>
      )}
    </div>
  );
};

export default App;
