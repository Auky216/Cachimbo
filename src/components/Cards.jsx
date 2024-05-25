import { Link } from "react-router-dom";
import Default from "../assets/profile-template.png";

export const CardInfo = ({ iconfile, title, info }) => {
  return (
    <div className="flex flex-row items-center gap-4 rounded-3xl border border-cach-l3 px-2 py-1 dark:border-cach-l2">
      <img src={iconfile || Default} className=" size-32" />
      <div className="flex flex-col space-y-4 py-2">
        <div className="text-2xl font-bold text-cach-l3 dark:text-cach-l2">
          {title}
        </div>
        <div className="text-pretty pr-10 text-cach-l5 dark:text-cach-l1">
          {info}
        </div>
      </div>
    </div>
  );
};

export const MiniCard = ({ classimg, classcont, link, image, title }) => {
  return (
    <Link to={link}>
      <button className="flex h-fit items-center justify-around rounded-xl border border-cach-l2 px-2 py-1 font-bold text-cach-l5 dark:text-cach-l1">
        <img src={image || Default} className={classimg} />
        <span className={classcont}>{title}</span>
      </button>
    </Link>
  );
};

// export const CardTeacher = ({ image, title, link }) => {
//   return (
//     <Link to={link}>
//       <button className="flex h-fit items-center justify-around rounded-xl border border-cach-l2 py-1 pl-4 pr-8 font-bold text-cach-l5 dark:text-cach-l1">
//         <img src={image || Default} className="size-32" />
//         <span className="text-md  w-32">{title}</span>
//       </button>
//     </Link>
//   );
// };
