import { Link } from "react-router-dom";
import Default from "../assets/profile-template.png";

export const Estrella = ({bg, wd, hg}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={wd || "800"}
      height={hg || "800"}
      version="1.1"
      viewBox="0 0 47.94 47.94"
      xmlSpace="preserve"
    >
      <path
        fill={bg || "#FFD700"}
        d="M26.285 2.486l5.407 10.956a2.58 2.58 0 001.944 1.412l12.091 1.757c2.118.308 2.963 2.91 1.431 4.403l-8.749 8.528a2.582 2.582 0 00-.742 2.285l2.065 12.042c.362 2.109-1.852 3.717-3.746 2.722l-10.814-5.685a2.585 2.585 0 00-2.403 0l-10.814 5.685c-1.894.996-4.108-.613-3.746-2.722l2.065-12.042a2.582 2.582 0 00-.742-2.285L.783 21.014c-1.532-1.494-.687-4.096 1.431-4.403l12.091-1.757a2.58 2.58 0 001.944-1.412l5.407-10.956c.946-1.919 3.682-1.919 4.629 0z"
      ></path>
    </svg>
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

export const TeacherMiniCard = ({name, imageRoute, rate, course}) =>{
  return (
      <div className="flex">
        <div className="h-20">
          <img src={imageRoute} alt="tchr"/>
        </div>
        <div className="h-20 flex items-center flex-col">
          <p>{name}</p>
          <Estrella bg="white" wd="10" hg="10"></Estrella>
        </div>
      </div>
  )
}

