import { useEffect, useState } from "react";
import { carrers } from "../../static/academic";
import { useUserStore } from "../../store/utils";
import StampCarrer from "../../components/StampCarrer";

// segunda vista de registro: seleccion de carrera
const Carrer = ({ next }) => {
  const loadUniv = useUserStore(state => state.user.university);
  const resetable = {
    [carrers[loadUniv].map(key => key.code)]: false,
  };
  const [clicked_per_carrer, setClicked_per_carrer] = useState(resetable);
  const [carrer, setCarrer] = useState("");
  const [carr_name, setCarr_name] = useState("");

  useEffect(() => {
    let find = "";
    if (carrer)
      find = carrers[loadUniv].find(carr => carr.code === carrer).name;
    setCarr_name(find);
  }, [carrer]);

  const handleClick = e => {
    const sele = e.target.getAttribute("carrer");
    if (clicked_per_carrer[sele]) {
      setCarrer("");
      setClicked_per_carrer({ [sele]: false });
    } else {
      setCarrer(sele);
      setClicked_per_carrer(resetable);
      setClicked_per_carrer({ [sele]: true });
    }
  };

  const carrersFirstHalf = carrers[loadUniv].slice(
    0,
    Math.ceil(carrers[loadUniv].length / 2),
  );
  const carrersSecondHalf = carrers[loadUniv].slice(
    Math.ceil(carrers[loadUniv].length / 2),
  );

  return (
    <div className="flex h-full w-full flex-col items-center rounded-[3.5rem]">
      <div className="flex h-[80%] w-full flex-col items-center">
        <div className="mt-2 flex px-1 text-center text-[1.6rem] font-bold text-cach-l4 dark:text-cach-l1">
          Elige tu carrera
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="flex w-full justify-around">
            {carrersFirstHalf.map(carr => (
              <button
                key={carr.code}
                carrer={carr.code} // custom attribute
                className={`z-10 min-h-8 w-[8em] items-center justify-center rounded-xl ${clicked_per_carrer[carr.code] ? "bg-cach-l3/40" : "bg-cach-l3"}  p-2 text-cach-l1`}
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
            {carrersSecondHalf.map(carr => (
              <button
                key={carr.code}
                carrer={carr.code} // custom attribute
                className={`z-10 min-h-8 w-[8em] items-center justify-center rounded-xl ${clicked_per_carrer[carr.code] ? "bg-cach-l3/40" : "bg-cach-l3"}  p-2 text-cach-l1`}
                onClick={handleClick}
              >
                {/* con web scraping obtendremos los iconos de las universidades */}
                {carr.name} {/* temporal */}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-[30%] w-full items-center justify-center">
        <div className="flex w-full items-center justify-around">
          <button
            className="mb-3 mt-2 flex h-10 min-h-8 w-[20%] items-center justify-center rounded-xl bg-cach-l3 text-cach-l1 disabled:cursor-not-allowed disabled:opacity-50"
            onClick={() => next(carrer, "carrer")}
            disabled={carrer === ""}
          >
            Siguiente
          </button>
        </div>
      </div>

      <StampCarrer codeCarrer={carrer} />
    </div>
  );
};

export default Carrer;
