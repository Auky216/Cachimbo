import Aside from "../sections/Aside";

const HomePage = () => {
  return (
    <main>
      <Aside />
      <section>{/* section principal dinámica */}</section>
      <aside>
        <div>{/* lado de publicidad */}</div>
      </aside>
    </main>
  );
};

export default HomePage;
