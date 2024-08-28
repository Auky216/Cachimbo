import { useEffect, useState } from "react";
import { carrers } from "../../static/academic";
import { useUserStore } from "../../store/utils";
import StampCarrer from "../../components/StampCarrer";

// segunda vista de registro: seleccion de careera
const Career = ({ next }) => {
  const loadUniv = useUserStore(state => state.user.university);
  const resetable = {
    [carrers[loadUniv].map(key => key.code)]: false,
  };
  const [clicked_per_career, setClicked_per_career] = useState(resetable);
  const [career, setCareer] = useState("");
  const [carr_name, setCarr_name] = useState("");

  useEffect(() => {
    /* fetch(`/api/test/api/career/get/`, {
      method: "POST",
      body: JSON.stringify({ university: loadUniv }),
    })
    .then(res => res.json())
    .then(data => JSON.parse(data.body))
    .then(careers => console.log(careers)); */
    let find = "";
    if (career)
      find = carrers[loadUniv].find(carr => carr.code === career).name;
    setCarr_name(find);
  }, [career]);

  const handleClick = e => {
    const sele = e.target.getAttribute("career");
    if (clicked_per_career[sele]) {
      setCareer("");
      setClicked_per_career({ [sele]: false });
    } else {
      setCareer(sele);
      setClicked_per_career(resetable);
      setClicked_per_career({ [sele]: true });
    }
  };

  const careersFirstHalf = carrers[loadUniv].slice(
    0,
    Math.ceil(carrers[loadUniv].length / 2),
  );
  const careersSecondHalf = carrers[loadUniv].slice(
    Math.ceil(carrers[loadUniv].length / 2),
  );

  return (
    <section className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="flex h-[80%] w-full flex-col items-center">
        <div className="mt-2 flex px-1 text-center text-[1.6rem] font-bold text-cach-l4 dark:text-cach-l1">
          Elige tu careera
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex w-full justify-around">
            {careersFirstHalf.map(carr => (
              <button
                key={carr.code}
                career={carr.code} // custom attribute
                className={`z-10 min-h-8 w-[8em] items-center justify-center rounded-xl ${clicked_per_career[carr.code] ? "bg-cach-l3/40" : "bg-cach-l3"}  p-2 text-cach-l1`}
                onClick={handleClick}
              >
                {/* con web scraping obtendremos los iconos de las universidades */}
                {carr.name} {/* temporal */}
              </button>
            ))}
          </div>
          <div
            className={`flex justify-center ${carr_name ? "py-10" : "py-14"} text-2xl text-cach-l2 opacity-70 dark:text-cach-l2 dark:opacity-30`}
          >
            <em>{carr_name}</em>
          </div>
          <div className="flex w-full justify-around">
            {careersSecondHalf.map(carr => (
              <button
                key={carr.code}
                career={carr.code} // custom attribute
                className={`z-10 min-h-8 w-[8em] items-center justify-center rounded-xl ${clicked_per_career[carr.code] ? "bg-cach-l3/40" : "bg-cach-l3"}  p-2 text-cach-l1`}
                onClick={handleClick}
              >
                {/* con web scraping obtendremos los iconos de las universidades */}
                {carr.name} {/* temporal */}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-[22%] w-full items-center justify-center">
        <div className="flex w-full items-center justify-around">
          <button
            className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => next(career, "career")}
            disabled={career === ""}
          >
            Siguiente
          </button>
        </div>
      </div>

      <StampCarrer codeCarrer={career} />
    </section>
  );
};

export default Career;
