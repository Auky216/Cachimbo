import { CachimboLogo } from "@/components/icons/CachimoLogo";
import { Link } from "react-router-dom";
import Antonio from "@/assets/TeamPhoto/Antonio.jpg";
import Yanelit from "@/assets/TeamPhoto/Yanelit.jpg";
import Brigit from "@/assets/TeamPhoto/Brigit.jpeg";
import Adrian from "@/assets/TeamPhoto/Adrian.jpeg";
import Noe from "@/assets/TeamPhoto/Noe.jpeg";
import Danilo from "@/assets/TeamPhoto/Danilo.jpeg";


const AboutUs = () => {
  const Team = [
    {
      name: "Adrian",
      lastName: "Antonio Auqui Perez",
      email: "adrian.auqui@utec.edu.pe",
      rol: "Presidente",
      image: Antonio,
    },
    {
      name: "Yanelit",
      lastName: "Picon Huaman",
      email: "yanelit.huaman@utec.edu.pe",
      rol: "Secretaria",
      image: Yanelit,
    },
    {
      name: "Brigitte Dayane",
      lastName: "Rojas Leon",
      email: "brigitte.rojas@utec.edu.pe",
      rol: "Coordinadora Recursos Educativos",
      image: Brigit,
    },
    {
      name: "Adrian",
      lastName: "Sandoval Huamani",
      email: "adrian.sandoval@utec.edu.pe",
      rol: "Backend Developerr",
      image: Adrian,
    },
    {
      name: "Noe",
      lastName: "Paredes Rauraico",
      email: "ananias.paredes@utec.edu.pe",
      rol: "Web Designer",
      image: Noe,
    },
    {
      name: "Danilo Caleb",
      lastName: "Becerra Balvin",
      email: "danilo.becerra@utec.edu.pe",
      rol: "Tesorero",
      image: Danilo,
    },
    // Más integrantes...
  ];

  return (
    <main className="m-auto flex flex-col items-center min-h-screen px-4">
      <div className="py-10 pt-20">
        <CachimboLogo />
      </div>
      <section className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-6">
        {Team.map((member, index) => (
          <div key={index} className="bg-cach-l3 rounded-xl border border-solid border-cach-l3 dark:border-cach-l2 dark:bg-transparent p-2">
            <img
              className="w-full h-64 object-cover rounded-t-xl"
              src={member.image}
              alt={`${member.name} ${member.lastName}`}
            />
            <div className="p-4">
              <h1 className="text-xl font-semibold">{member.name} {member.lastName}</h1>
              <h2 className="text-sm text-gray-600">{member.email}</h2>
              <p className="text-sm text-pretty">{member.rol}</p>
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
