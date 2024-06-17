import { Link } from "react-router-dom";
import Default from "../assets/profile-template.png";
import { MAX_RATE } from "../constant/opinion";
import { Star } from "./icons/Star";

export const CardOpinion = ({ description, carrerUser, rate }) => {
  const stars = Array(MAX_RATE).fill(0);
  return (
    <div className="flex flex-col w-full h-full justify-between rounded-xl border-2 border-cach-l2 font-bold text-cach-l5 dark:text-cach-l1">
      <div className="flex w-full flex-row items-center justify-center px-2 py-1">
        <div className="flex w-[75%] flex-col space-y-1↑ px-4 py-2">
          <div className="text-sm font-bold text-cach-l3 dark:text-cach-l2/30">
            Un estudiante de {carrerUser} dijo:
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-cach-l5 dark:text-white">{description}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-1 justify-center w-[25%]">
          <div className="flex items-center space-x-2">
            {stars.map((_, index) => (
              <Star
                key={index} bg={index < Math.round(rate)} l="10"
              />
            ))}
          </div>
          <div className="text-cach-l5 text-sm dark:text-white">Calificación: {rate}</div>
        </div>
      </div>
    </div>
  );
};

export const CardInfo = ({ iconfile, title, info }) => {
  return (
    <div className="flex flex-row items-center gap-4 rounded-3xl border-2 border-cach-l3 px-10 py-2 dark:border-cach-l2">
      <img src={iconfile} className=" size-32" />
      <div className="flex flex-col space-y-4 py-2">
        <div className="text-2xl font-bold text-cach-l3 dark:text-cach-l2">
          {title}
        </div>
        <div className="text-pretty pr-10 text-cach-l5 dark:text-cach-l1">
          <strong>{info}</strong>
        </div>
      </div>
    </div>
  );
};

export const MiniCard = ({ classimg, classcont, link, image, title }) => {
  return (
    <Link to={link}>
      <button className="flex h-fit items-center justify-around rounded-xl border-2 border-cach-l2 px-2 py-1 font-bold text-cach-l5 dark:text-cach-l1">
        <img src={image || Default} className={classimg} />
        <span className={classcont}>{title}</span>
      </button>
    </Link>
  );
};

export const CardAcademic = ({ title, searchKey, preDescrip, imgRef }) => {
  return (
    <div className="flex h-fit w-full justify-between rounded-xl border-2 border-cach-l2 font-bold text-cach-l5 dark:text-cach-l1">
      <div className="flex w-[75%] flex-row items-center justify-center px-2 py-1">
        <div className="flex w-[55%] flex-col space-y-2 p-2">
          <div className="text-2xl font-bold text-cach-l3 dark:text-cach-l2">
            {title}
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-cach-l5 dark:text-white">{preDescrip}</p>
          </div>
        </div>

        <Link to={`/dashboard/library?key=${searchKey}`}>
          <button className="ml-4 rounded-full bg-cach-l3 px-4 py-2 text-cach-l1 focus:outline-none">
            Buscar material
          </button>
        </Link>
      </div>
      <div className="flex h-32 w-56 items-center justify-center overflow-hidden rounded-xl">
        <img src={imgRef} />
      </div>
    </div>
  );
};

export const TeacherMiniCard = ({ name, imageRoute, rate, course }) => {
  const stars = Array(MAX_RATE).fill(0);
  return (
    <div className="flex min-w-56 border-2 rounded-xl border-cach-l3 p-2">
      <div className="h-20 min-w-min p-2">
        <img src={imageRoute} alt="tchr"/>
      </div>
      <div className="flex max-w-max h-20 flex-col items-center">
        <span className="text-center">{name}</span>
        <span className="text-center">{course}</span>
        <span className="flex flex-row">
          {stars.map((_, index) => (
            <Star className="" key={index} bg={index < Math.round(rate)} l="10"
            ></Star>
          ))}
        </span>
      </div>
    </div>
  );
};
