import { CachimboLogo } from "@/components/icons/CachimoLogo";
import { Link } from "react-router-dom";
import Antonio from "@/assets/TeamPhoto/Antonio.jpg";
import Yanelit from "@/assets/TeamPhoto/Yanelit.jpg";
import Brigit from "@/assets/TeamPhoto/Brigit.jpeg";
import Adrian from "@/assets/TeamPhoto/Adrian.jpeg";
import Noe from "@/assets/TeamPhoto/Noe.jpeg";
import Danilo from "@/assets/TeamPhoto/Danilo.jpeg";
import Javier from "@/assets/TeamPhoto/Javier.jpeg";

const AboutUs = () => {
  const Team = [
    {
      name: "Adrian",
      lastName: "Antonio Auqui Perez",
      email: "adrian.auqui@utec.edu.pe",
      role: "Presidente",
      image: Antonio,
    },
    {
      name: "Yanelit",
      lastName: "Picon Huaman",
      email: "yanelit.huaman@utec.edu.pe",
      role: "Secretaria",
      image: Yanelit,
    },
    {
      name: "Brigitte Dayane",
      lastName: "Rojas Leon",
      email: "brigitte.rojas@utec.edu.pe",
      role: "Coordinadora Recursos Educativos",
      image: Brigit,
    },
    {
      name: "Adrian",
      lastName: "Sandoval Huamani",
      email: "adrian.sandoval@utec.edu.pe",
      role: "Frontend/Backend Developerr",
      image: Adrian,
    },
    {
      name: "Noe",
      lastName: "Paredes Rauraico",
      email: "ananias.paredes@utec.edu.pe",
      role: "Web Designer",
      image: Noe,
    },
    {
      name: "Danilo Caleb",
      lastName: "Becerra Balvin",
      email: "danilo.becerra@utec.edu.pe",
      role: "Tesorero",
      image: Danilo,
    },
    {
      name: "Javier Omar",
      lastName: "Chavarria Humareda",
      email: "javier.chavarria@utec.edu.pe",
      role: "Frontend Developer",
      image: Javier,
    },
    // Más integrantes...
  ];

  return (
    <main className="m-auto flex min-h-screen flex-col items-center px-4">
      <div className="py-10 pt-20">
      <div className="mt-5 flex justify-center">
        <Link to="/">
          <CachimboLogo />
        </Link>
      </div>
      </div>
      <section className="grid w-full max-w-lg grid-cols-1 gap-6 md:grid-cols-2">
        {Team.map((member, index) => (
          <div
            key={index}
            className="rounded-xl border border-solid border-cach-l3 bg-cach-l3 p-2 dark:border-cach-l2 dark:bg-transparent"
          >
            <img
              className="h-64 w-full rounded-t-xl object-cover"
              src={member.image}
              alt={`${member.name} ${member.lastName}`}
            />
            <div className="p-4">
              <h1 className="text-xl font-semibold">
                {member.name} {member.lastName}
              </h1>
              <h2 className="text-sm text-gray-600">{member.email}</h2>
              <p className="text-pretty text-sm">{member.role}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="py-6">
        <Link
          to="/home"
          className="w-full rounded-full bg-cach-l3 px-8 py-3 text-center font-semibold text-white duration-300 hover:bg-cach-l2"
        >
          Ir atrás
        </Link>
      </div>
    </main>
  );
};

export default AboutUs;
