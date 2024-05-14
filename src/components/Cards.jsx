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

export const MiniCard = ({ iconfile, title }) => {
  return (
    <div className="flex h-fit items-center gap-4 py-1 font-bold text-cach-l5 dark:text-cach-l1">
      <img src={iconfile || Default} className="size-12" />
      <span className="text-md">{title}</span>
    </div>
  );
};
