import { useState } from "react";

const SubmitFile = ({ namefile }) => {
  return (
    <section className="m-auto flex h-full w-fit flex-col items-center justify-center">
      <div className="-lg mt-4 rounded bg-white p-4 text-center text-black shadow-lg">
        Subiendo archivo {namefile} ...
      </div>
      <div
        onClick={close}
        className="mt-4 rounded-full bg-cach-l3 px-5 text-sm text-cach-l1 focus:outline-none"
      >
        Toca afuera para salir
      </div>
    </section>
  );
};

export default SubmitFile;
