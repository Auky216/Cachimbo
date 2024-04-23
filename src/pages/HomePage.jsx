import { Route, Routes } from "react-router-dom";
import Aside from "../sections/Aside";
import router from "../routes/root";

const HomePage = () => {
  return (
    <main className="flex flex-row justify-center gap-5">
      <Aside />
      <section className="min-h-screen min-w-[55%] border border-black p-4">
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
      <aside className="min-h-screen min-w-[15%] border border-black p-4">
        <div>{/* lado de publicidad */}Publicidad</div>
      </aside>
    </main>
  );
};

export default HomePage;
