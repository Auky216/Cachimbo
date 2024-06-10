import { CachimboLogo } from "../components/icons/CachimoLogo";
import React, { useState } from "react";
import { Team } from "../constant/team";

const AboutUs = () => {
  const [mPos, setMPos] = useState(0);
  const last = Team.length - 1;

  const nextRightMember = () => {
    setMPos(mPos !== last ? mPos + 1 : 0);
  };

  const nextLeftMember = () => {
    setMPos(mPos !== 0 ? mPos - 1 : last);
  };

  return (
    <section className="m-auto flex h-full w-fit flex-col items-center justify-center">
      <div className="flex h-[36rem] w-full items-center justify-center rounded-3xl bg-white p-6 max-md:h-[41rem] dark:bg-cach-l4">
        <article className="aboutgrid grid w-full duration-200 max-md:justify-center max-md:gap-3 max-md:duration-200">
          <div className="m-auto pb-6 text-3xl font-bold text-black [grid-area:title] dark:text-cach-l2">
            <CachimboLogo />
          </div>
          <div className="mr-6 flex items-center justify-center [grid-area:bleft] max-md:m-0">
            <button
              className="size-3 w-fit text-5xl duration-200 hover:text-cach-l3 hover:duration-200"
              onClick={nextLeftMember}
            >
              &#10094;
            </button>
          </div>
          <div className="flex flex-col items-center rounded-xl border border-solid border-cach-l3 bg-cach-l3 p-2 [grid-area:cont] max-md:max-w-[20rem] dark:border-cach-l2 dark:bg-transparent">
            <img
              className="aspect-[16/11] h-64 w-64 rounded-t-xl duration-200"
              src={Team[mPos].image}
              alt={`${Team[mPos].name} ${Team[mPos].lastName}`}
              loading="lazy"
            />
            <div className="space-y-2 p-4">
              <h1 className="text-2xl font-bold text-cach-l1">
                {Team[mPos].name} {Team[mPos].lastName}
              </h1>
              <h2 className="text-sm text-gray-800 dark:text-cach-l2">
                {Team[mPos].email}
              </h2>
              <p className="text-sm text-cach-l1">{Team[mPos].role}</p>
            </div>
          </div>
          <div className="ml-6 flex items-center justify-center [grid-area:bright] max-md:m-0">
            <button
              className="size-3 w-fit text-5xl duration-200 hover:text-cach-l3 hover:duration-200"
              onClick={nextRightMember}
            >
              &#10095;
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default React.forwardRef((props, ref) => (
  <AboutUs {...props} forwardedRef={ref} />
));
