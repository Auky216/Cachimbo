import { useState, useEffect } from "react";

// Primera vista de registro, se muestra al principio del registro
const University = ({ next }) => {
  const [universities, setUniversities] = useState([]);
  const [clickedPerUniv, setClickedPerUniv] = useState({});
  const [univ, setUniv] = useState("");

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const response = await fetch(`/api/test/api/university/get`);
        const data = await response.json();

        // Parsear el body de la respuesta
        const universityNames = JSON.parse(data.body);

        // Crear un objeto para el estado clickedPerUniv
        const resetable = {};
        universityNames.forEach((name) => {
          resetable[name] = false;
        });

        setClickedPerUniv(resetable);
        setUniversities(universityNames);
      } catch (error) {
        console.error("Error fetching universities:", error);
      }
    };

    fetchUniversities();
  }, []);

  const handleClick = (e) => {
    const sele = e.target.getAttribute("sigle");
    if (clickedPerUniv[sele]) {
      setUniv("");
      setClickedPerUniv({ ...clickedPerUniv, [sele]: false });
    } else {
      setUniv(sele);
      setClickedPerUniv({ ...clickedPerUniv, [sele]: true });
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
            {universities.map((uni) => (
              <button
                key={uni}
                sigle={uni} // custom attribute
                className={`min-h-8 w-[10rem] items-center justify-center rounded-xl ${
                  clickedPerUniv[uni] ? "bg-cach-l3/40" : "bg-cach-l3"
                }  p-2 text-cach-l1`}
                onClick={handleClick}
              >
                {uni} {/* temporal */}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex h-[22%] w-full items-center justify-center">
        <div className="flex w-full items-center justify-around">
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
