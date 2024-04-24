export const CardInfo = ({ iconfile, title, info }) => {
  return (
    <div className="flex flex-row rounded-md border border-cach-l3 px-4 py-2 dark:border-cach-l2">
      <img src={iconfile} />
      <div className="flex flex-col py-2">
        <div className="text-lg font-bold text-cach-l3 dark:text-cach-l2">
          {title}
        </div>
        <div className="text-cach-l5 dark:text-cach-l1">{info}</div>
      </div>
    </div>
  );
};

export const MiniCard = ({ iconfile, title }) => {
  return (
    <div className="spcing-x-2 h-fit p-2 font-bold text-cach-l5 dark:text-cach-l1">
      <img src={iconfile} />
      {title}
    </div>
  );
};
