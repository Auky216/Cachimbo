import { CachimboLogo } from "@/components/icons/CachimoLogo";

const AboutUs = () => {
  const Team = [
    {
      name: "Adrian Antonio",
      lastName: "Auqui Perez",
      email: "adrian.auqui@utec.edu.pe",
      description: "Bla bla",
      image: "./assets/auqui.png",
    },
    // mas integrantes
    // ...
    // ...
  ];

  return (
    <main className="m-auto flex min-h-screen w-[500px] flex-col">
      <div className="flex justify-center pb-10 pt-32">
        <CachimboLogo />
      </div>
      <section className="flex flex-col items-center px-4">
        <div className="pb-20 text-3xl font-bold text-cach-l2">
          Nuestro equipo
        </div>
        <div className="flex flex-row items-center justify-center rounded-xl border border-solid border-cach-l3 bg-cach-l3 px-6 py-7 dark:border-cach-l2 dark:bg-transparent">
          <ul className="text-cach-l2">
            {Team.map((member) => (
              <li key={member.name}>
                <article className="flex flex-row items-center justify-between gap-4">
                  <div className="h-full w-full">
                    <img
                      className="m-4 size-[150px] object-fill"
                      src={member.image}
                    ></img>
                  </div>
                  <div className="h-full w-3/4 space-y-4 px-8 py-6">
                    <h1 className="text-2xl">
                      {member.name} {member.lastName}
                    </h1>
                    <h2>{member.email}</h2>
                    <p className="text-pretty">{member.description}</p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
