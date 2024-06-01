import React from "react";
import LibraryItem from "../components/LibraryItem";
import { getPdfs } from "../constant/pdfs";

const Library = () => {
  return (
    <section id="library" className="py-10 pr-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar libros, documentos y más"
          className="w-full rounded-full border border-cach-l3 bg-cach-l1 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:text-cach-l2 dark:placeholder-cach-l2/40"
        />
      </div>

      {/* Dinamico : sale cuando ya se hizo la busqueda */}
      {/* caso contrario se visualiza el material reciente respecto a la fecha */}
      {/* ( PROPUESTA ) */}
      <div className="my-8 flex space-x-4">
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Todos
        </button>
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Favoritos
        </button>
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Tus me gusta
        </button>
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Recientes
        </button>
      </div>

      {Object.entries(getPdfs).map(([id, item]) => (
        <LibraryItem 
          key={id} 
          item={item}
          link = {`/dashboard/library/pdf/${id}`}
        />
      ))}
    </section>
  );
};

export default Library;
