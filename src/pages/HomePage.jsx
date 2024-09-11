import { Route, Routes, Navigate } from "react-router-dom";
import Aside from "../sections/Aside";
import { routerProtected } from "../routes/root";
import ProtectedRoutes from "../routes/protectedRoutes";
import TeachersIndividualPage from "../sections/infoTeachers/teachersIndividualPage";

const HomePage = () => {
  return (
    <main className="flex flex-col-reverse h-screen md:flex-row md:justify-center min-w-[400px]">
      <Aside />
      <section className="w-full md:w-[59%] px-8 dark:bg-transparent overflow-scroll">
        <Routes>
          {/*Routes protected*/}
          <Route element={<ProtectedRoutes />}>
            {routerProtected.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              ></Route>
            ))
            }
          </Route>
        </Routes>
      </section>
      {
        //<aside className="h-screen min-w-[12%] px-4 py-7">
        //<div className="text-cach-l1"></div>
        //</aside>
      }
    </main>
  );
};

export default HomePage;
