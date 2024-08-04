import { Link } from "react-router-dom";
import Default from "../assets/profile-template.png";
import { MAX_RATE } from "../constant/opinion";
import { Star } from "./icons/Star";
import universitylogo from "../assets/university-icon.png";

export const CardOpinion = ({ description, carrerUser, rate }) => {
  const stars = Array(MAX_RATE).fill(0);
  return (
    <div className="flex h-full w-full flex-col justify-between rounded-xl border-2 border-cach-l2 font-bold text-cach-l5 dark:text-cach-l1">
      <div className="flex w-full flex-row items-center justify-center px-2 py-1">
        <div className="space-y-1↑ flex w-[75%] flex-col px-4 py-2">
          <div className="pb-3 text-sm font-bold text-cach-l3 dark:text-cach-l2/30">
            Un estudiante de {carrerUser} dijo:
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-xl text-cach-l5 dark:text-white">
              {description}
            </p>
          </div>
        </div>
        <div className="flex w-[25%] flex-col items-center justify-center gap-1">
          <div className="flex items-center space-x-2">
            {stars.map((_, index) => (
              <Star key={index} bg={index < Math.round(rate)} l="10" />
            ))}
          </div>
          <div className="text-sm text-cach-l5 dark:text-white">
            Calificación: {rate}
          </div>
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

export const MiniCard = ({classimg, classcont, link, image, title }) => {
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
export const CardNumberStat = ({ title, number, imgsrc }) => {
  return (
    <div className="flex cursor-pointer items-center rounded-xl border-2 border-cach-l2 px-3 py-1 font-bold text-cach-l5 dark:text-cach-l1">
      <div className="w-2/6">
        <img src={imgsrc} className="w-5/6" />
      </div>
      <div className="flex w-4/6 items-center justify-center gap-1 text-center">
        <h3 className="text-xl font-bold">{number}</h3>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export const TeacherMiniCard = ({ name, imageRoute, rate }) => {
  //const stars = Array(MAX_RATE).fill(0);
  //console.log(course);
  //console.log(getCursos[course[0]]);
  return (
    <div className="flex min-w-56 items-center rounded-xl border-2 border-cach-l3 p-2">
      <div className="flex h-24 w-24 items-center justify-center p-1">
        <img
          src={imageRoute || Default}
          alt="tchr"
          className="h-20 rounded-full"
        />
      </div>
      <div className="flex flex-1 flex-col items-center justify-center">
        <span className="text-center">{name}</span>
        {/* <span className="flex flex-row">
          {stars.map((_, index) => (
            <Star
              className=""
              key={index}
              bg={index < Math.round(rate)}
              l="10"
            ></Star>
          ))}
        </span> */}
      </div>
    </div>
  );
};
export const EventMiniCard = ({ title, date, hour, link, image, information }) => {
  //console.log(info);
  return (
    <div className="flex h-[250px] w-[200px] flex-col items-center justify-between rounded-2xl border border-cach-l3 text-gray-800 shadow-lg dark:border-cach-l2 dark:text-gray-200">
      <div className="h-[50%] w-full">
        <img src={image} alt={title} className="h-full w-full overflow-hidden object-cover rounded-t-2xl" />
      </div>
      <div className="w-full border-t border-cach-l3 dark:border-cach-l2"></div>
      <div className="flex h-[40%] w-full flex-col items-center justify-center p-4 text-center">
        <h3 className="text-lg font-bold">
          <Link to={link} state={information} className="text-cach-l3 hover:underline dark:text-cach-l2" unstable_viewTransition>
            {title}
          </Link>
        </h3>
        <p className="text-sm">{date}</p>
        <p className="text-sm">{hour}</p>
      </div>
      <div className="flex h-[10%] items-center justify-center">
        <img
          src={universitylogo}
          alt="Universidad"
          className="h-4 w-4 grayscale filter"
        />
        <p className="text-xs text-gray-500 dark:text-gray-400 ml-1">UTEC</p>
      </div>
    </div>
  );
};