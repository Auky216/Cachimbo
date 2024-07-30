import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import {routerNormal, routerProtected} from "./routes/root.jsx";
import HomePage from "./pages/HomePage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import { useThemeStore, stateLogged } from "./store/utils.js";
import { useEffect } from "react";
import ProtectedRoutes from "./routes/protectedRoutes.jsx";
import Cookies from "js-cookie";

const App = () => {
  const { isAuthenticated, checkAuth } = stateLogged();
  //console.log(lgState.state);
  const {setRoute, history} = useThemeStore();
  const location = useLocation();
  const newRoute = location.pathname;
  useEffect(() => {
    setRoute(newRoute);
    //console.log('history', history);
    checkAuth();
  }, [newRoute, checkAuth]);
  const showMainPage = isAuthenticated;

  return (
    <div id="App" className="h-screen w-full">
      {!showMainPage || <HomePage />}

      {showMainPage || (
        <Routes>
          <Route index element={<LandingPage/>}>
          </Route>
          {routerNormal.map(route => (
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
