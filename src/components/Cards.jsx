import Default from "../assets/profile-template.png";

export const CardInfo = ({ iconfile, title, info }) => {
  return (
    <div className="flex flex-row items-center gap-4 rounded-md border border-cach-l3 px-4 py-2 dark:border-cach-l2">
      <img src={iconfile || Default} className="size-10" />
      <div className="flex flex-col py-2">
        <div className="text-lg font-bold text-cach-l3 dark:text-cach-l2">
          {title}
        </div>
        <div className="text-pretty text-cach-l5 dark:text-cach-l1">{info}</div>
      </div>
    </div>
  );
};

export const MiniCard = ({ iconfile, title }) => {
  return (
    <div className="spacing-x-2 flex h-fit items-center gap-2 rounded-3xl border border-cach-l3 px-3 py-1 font-bold text-cach-l5 dark:border-cach-l2 dark:text-cach-l1">
      <img src={iconfile || Default} className="size-10" />
      <span className="text-sm">{title}</span>
    </div>
  );
};
