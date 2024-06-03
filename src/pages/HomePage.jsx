import { Route, Routes } from "react-router-dom";
import Aside from "../sections/Aside";
import router from "../routes/root";

const HomePage = () => {
  return (
    <main className="flex flex-row justify-center">
      <Aside />
      <section className="h-screen w-[59%] px-8 dark:bg-transparent">
        <Routes>
          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            ></Route>
          ))}
        </Routes>
      </section>
      <aside className="h-screen min-w-[12%] px-4 py-7">
        <div className="text-cach-l1">Publicidad</div>
      </aside>
    </main>
  );
};

export default HomePage;
