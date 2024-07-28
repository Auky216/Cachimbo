import { useState } from "react";
import { universities } from "../../static/academic";
import { useUserStore } from "../../store/utils";

// primera vista de registro, se muestra al principio del registro
const University = ({ next }) => {
  const loadUniv = useUserStore(state => state.user.university);
  const resetable = {
    [Object.keys(universities).map(key => universities[key].sigle)]: false,
  };
  const [clicked_per_univ, setClicked_per_univ] = useState(resetable);
  const [univ, setUniv] = useState(loadUniv);

  const handleClick = e => {
    const sele = e.target.getAttribute("sigle");
    if (clicked_per_univ[sele]) {
      setUniv("");
      setClicked_per_univ({ [sele]: false });
    } else {
      setUniv(sele);
      setClicked_per_univ(resetable);
      setClicked_per_univ({ [sele]: true });
    }
  };

  return (
    <section className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="flex h-[80%] flex-col items-center">
        <div className="mt-2 flex px-1 text-center text-[1.6rem] font-bold text-cach-l4 dark:text-cach-l1">
          Elige tu universidad
        </div>
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-row justify-between gap-8">
            {universities.map(uni => (
              <button
                key={uni.sigle}
                sigle={uni.sigle} // custom attribute
                className={`min-h-8 w-[10rem] items-center justify-center rounded-xl ${clicked_per_univ[uni.sigle] ? "bg-cach-l3/40" : "bg-cach-l3"}  p-2 text-cach-l1`}
                onClick={handleClick}
              >
                {/* con web scraping obtendremos los iconos de las universidades */}
                {uni.name} {/* temporal */}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-[22%] w-full items-center justify-center">
        <div className="flex w-full items-center justify-around">
          {/* <button
            className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1"
            onClick={prev}
          >
            Atras
          </button> */}
          <button
            className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => next(univ, "university")}
            disabled={univ === ""}
          >
            Siguiente
          </button>
        </div>
      </div>
    </section>
  );
};

export default University;
