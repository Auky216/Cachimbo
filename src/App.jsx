import { Routes, Route } from "react-router-dom";
import router from "./routes/root.jsx";
import HomePage from "./pages/HomePage.jsx";
import { useThemeStore } from "./store/utils.js";
import { useEffect } from "react";

const App = () => {
  const route = useThemeStore(state => state.route);
  useEffect(() => {
    useThemeStore.setState({ route: window.location.pathname });
  }, [route]);
  const showMainPage = route.includes("dashboard");

  return (
    <div id="App" className="h-screen w-full">
      {!showMainPage || <HomePage />}

      {showMainPage || (
        <Routes>
          {router.map(route => (
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
