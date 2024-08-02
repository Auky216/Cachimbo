import { useParams } from "react-router-dom";
import { PiePercentage } from "../../components/Stats";
import { Star } from "../../components/icons/Star";
import { MAX_RATE, ratesLabels } from "../../constant/opinion";
import { CardOpinion } from "../../components/Cards";

// ALTAMENTE conectado con la seccion CourseMain ( import from ../constant/opinion.js )
const COpinion = ({ listOpinions }) => {
  const params = useParams();

  // count of rating of the course if the params.course is the same as the course in the opinion
  const listCourse = listOpinions.filter(
    opinion => params.course === opinion.course,
  );
  // array con numeros del 1 al MAX_RATE
  let c = 0;
  let enumer = [];
  while (c < MAX_RATE) enumer.push(++c);

  const percentage = enumer.map(rate => ({
    label: `Rate ${rate}`,
    value: listCourse.filter(opinion => opinion.rate === rate).length,
  }));

  // mostrar el rate mas popular con el percentage mas alto
  const ratePop = percentage
    .reduce((prev, current) => (prev.value > current.value ? prev : current))
    .label.split(" ")[1];
  const popularRate = ratesLabels[ratePop - 1];

  const colorss = [
    "#AAB7C0A0",
    "#CBBCF7A0",
    "#7F46FC40",
    "#7F4683A0",
    "#3A0C43",
  ];

  return (
    <div className="my-4 flex h-full w-full grow flex-col items-center">
      <section className="flex h-full w-full flex-col gap-3 pb-10">
        <div className="flex h-fit w-full flex-col items-center justify-center space-y-8 px-6 pt-3">
          <article className="flex w-full flex-row items-center justify-around">
            <div>
              <PiePercentage data={percentage} size={250} colors={colorss} />
            </div>
            <div className="flex h-full flex-col items-center justify-center">
              <div className="flex items-center gap-4 text-xl font-bold text-cach-l3 dark:text-cach-l1">
                <span>Curso catalogado : </span>
                <span className="text-3xl">{popularRate}</span>
              </div>
              <div className="my-4 flex gap-3">
                {Array(MAX_RATE)
                  .fill(0)
                  .map((_, index) => (
                    <Star key={index} bg={index < Math.round(ratePop)} l="30" />
                  ))}
              </div>
              <div className="text-xl font-extrabold text-cach-l3 dark:text-cach-l2">
                Con {listCourse.length} Estudiante
                {listCourse.length !== 1 ? "s" : ""}
              </div>
            </div>
          </article>
        </div>
      </section>
      <div className="pb-10 text-2xl font-extrabold text-cach-l3 dark:text-cach-l2">
        Comentarios recientes
      </div>
      <div className="flex w-[85%] flex-col items-center justify-center space-y-4 pb-3">
        {listCourse.map(opinion => (
          <CardOpinion key={listCourse.indexOf(opinion)} {...opinion} />
        ))}
      </div>
    </div>
  );
};

export default COpinion;
