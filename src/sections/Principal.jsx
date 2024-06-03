import { CardInfo, MiniCard } from "../components/Cards";
import ThemeButton from "../components/ThemeButton";
import Events from "../assets/icons8-billete-con-estrella-96.png";
import Electivo from "../assets/icons8-electivo-96.png";
import Opinion from "../assets/icons8-opinión-opuesta-96.png";
import Profesores from "../assets/icons8-profesor-96.png";
import { getCursos } from "../constant/course";

const Principal = () => {
  return (
    <div className="h-full overflow-auto py-8 pr-8">
      {/* <ThemeButton /> */}
      <article className="pb-10">
        <div className="pb-4 pt-3 text-3xl font-extrabold text-cach-l3 dark:text-cach-l2">
          Tus Cursos
        </div>
        <div className="mx-6 grid grid-cols-1 gap-4 pt-3 md:grid-cols-2">
          {Object.keys(getCursos).map((c) => (
            <MiniCard
              key={c}
              classimg="size-[50px]"
              classcont="text-md w-64"
              link={`/dashboard/main/course/${c}`}
              image={getCursos[c].iconfile}
              title={getCursos[c].title}
            />
          ))}
        </div>
      </article>

      <article>
        <div className="text-3xl font-extrabold text-cach-l3 dark:text-cach-l2">
          Explorando
        </div>
        <div className="space-y-8 pt-10">
          <CardInfo
            iconfile={Profesores}
            title="Profesores"
            info="Escoge a tus profesores gracias a la opinión y calificación de la comunidad"
          />
          <CardInfo
            iconfile={Electivo}
            title="Próximos cursos"
            info="Visualiza todos los cursos de UTEC para tu próxima matrícula de tu interés en base a la comunidad"
          />
          <CardInfo
            iconfile={Events}
            title="Eventos"
            info="Participa de los eventos que las organizaciones y comunidades de UTEC realizan en este semetres académico"
          />
          <CardInfo
            iconfile={Opinion}
            title="Sugerencias"
            info="Visualiza tus sugerencias, propuestas u opiniones y de otros estudiantes para mejorar aspectos de la universidad"
          />
        </div>
      </article>
    </div>
  );
};

export default Principal;
