import { MiniCard } from "./Cards";
import { useState, useRef } from "react";

const CourseContent = ({ keys }) => {
  const [inputKeyword, setInputKeyword] = useState("");
  const inputRef = useRef(null);

  return (
    <div className="my-2 flex h-full w-full grow flex-col">
      <div className="flex h-full w-full flex-col gap-3 pb-10">
        {/* <div className="my-4 text-center text-3xl font-bold text-cach-l3 dark:text-white ">
          Conceptos importantes
        </div> */}
        <div className="flex h-fit w-full items-center justify-center px-6 pt-3">
          <div className="h-fit min-w-[75%]">
            <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
              {keys.map((c) => (
                <MiniCard
                  key={c}
                  classimg="size-12"
                  classcont="text-md w-32 pr-3"
                  link="#"
                  image={c.photo}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-transparent p-2.5">
        <input
          type="text"
          placeholder="Ingresa un tema interesante ..."
          value={inputKeyword}
          onChange={(e) => setInputKeyword(e.target.value)}
          className="mr-4 w-full rounded-2xl border border-cach-l3 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:bg-transparent dark:text-cach-l2 dark:placeholder-cach-l2/40"
          ref={inputRef}
        />
        {/* <button
            onClick={handleSendMessage}
            className="ml-2 rounded-2xl bg-cach-l3 px-5 py-1 text-sm text-cach-l1 focus:outline-none"
          >
            Enviar
          </button> */}
      </div>
    </div>
  );
};

export default CourseContent;
