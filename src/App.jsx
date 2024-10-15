import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { routerNormal, routerProtected } from "./routes/root.jsx";
import HomePage from "./pages/HomePage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { useThemeStore, stateLogged } from "./store/utils.js";
import { useEffect } from "react";
import ProtectedRoutes from "./routes/protectedRoutes.jsx";
import Cookies from "js-cookie";
import { Analytics } from "@vercel/analytics/react"; 

const App = () => {
  const { isAuthenticated, checkAuth } = stateLogged();
  const { setRoute, history } = useThemeStore();
  const location = useLocation();
  const newRoute = location.pathname;
  
  useEffect(() => {
    setRoute(newRoute);
    checkAuth();
  }, [newRoute, checkAuth]);
  
  const showMainPage = isAuthenticated;

  return (
    <div id="App" className="h-screen w-full">
      {!showMainPage || <HomePage />}

      {showMainPage || (
        <>
          <Routes>
            <Route index element={<LandingPage />} />
            {routerNormal.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
            <Route element={<ProtectedRoutes />}>
              {routerProtected.map(route => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.element}
                />
              ))}
            </Route>
          </Routes>
          <Analytics /> 
        </>
      )}
    </div>
  );
};

export default App;
