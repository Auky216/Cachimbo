import { useState, useRef } from "react";
import LibraryItem from "../../components/LibraryItem";
import { getPdfs } from "../../constant/pdfs";
import Loader, { PageDefaultSearch } from "../../components/Loading";
import { findLibrary } from "../../store/services";

const Library = () => {
  const inputRef = useRef(null);
  const [page, setPage] = useState(1);
  const [last_page, setLastPage] = useState(20);
  const [outputPdfs, setOutputPdfs] = useState(Object.entries(getPdfs));
  const [inputValue, setInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(null);

  const handleOutputPdfs = async (pageDefault=page) => {
    if (!inputValue) {
      setIsSearching(null);
      return
    };
    setIsSearching(true);

    findLibrary(inputValue, pageDefault)
      .then((data) => {
        console.log(data)
        setPage(data.page);
        setLastPage(parseInt((data.total_items + data.items_per_page - 1)/data.items_per_page) );
        setOutputPdfs(data.items);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsSearching(false));

  };
  const changeInputValue = (e) => {
    setInputValue(e.target.value)
  }
  const changePage = (e) => {
    if (isNaN(parseInt(e.target.value))) setPage(0);

    if (parseInt(e.target.value) <= last_page){
      setPage(parseInt(e.target.value));
    }

    
  }

  const pageRef = useRef(null);
  return (
    <section id="library" className="py-10 pr-8 h-screen overflow-y-auto">
      <div className="mb-4">
        <input
          onChange={e => setInputValue(e.target.value)}
          type="text"
          ref={inputRef}
          value={inputValue}
          onKeyUp={e => {
            if (e.key === "Enter") handleOutputPdfs();
          }}
          placeholder="Buscar libros, documentos y más"
          className="w-full rounded-full border border-cach-l3 bg-cach-l1 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:text-cach-l2 dark:placeholder-cach-l2/40"
        />
      </div>

      {isSearching != true && isSearching != null ? <div className="w-full my-6">
        <div className="text-cach-l4 w-5/6 justify-between m-auto flex items-center gap-2">
          <button className="dark:text-cach-l1 border-2 p-1 rounded-lg" onClick={() => {
            if (page > 1) {
              setPage(parseInt(pageRef.current.value) - 1)
              handleOutputPdfs(page - 1);
            }
          }}> Página anterior</button>
          {page > 1 ? <span className="dark:text-cach-l2">{1}</span> : <span className="dark:text-cach-l2"></span>}
          {page <= 2 ? <span></span> : <span className="dark:text-cach-l2">....</span>}
          <input ref={pageRef} className="w-10 text-center bg-transparent border-cach-l3 border-2 rounded dark:text-cach-l1" value={page} onChange={e => changePage(e)} onKeyUp={e => {
            if (e.key === "Enter") {
              if (pageRef.current) {
                pageRef.current.blur();
              }
            }
          }} />
          {page >= last_page - 1 ? <span></span> : <span className="dark:text-cach-l2">....</span>}
          {page == last_page ? <span></span> : <span className="text-cach-l4 dark:text-cach-l2">{last_page}</span>}
          <button className="dark:text-cach-l1 border-2 p-1 rounded-lg" onClick={() => {
            if (page < last_page) {
              setPage(1 + parseInt(pageRef.current.value))
              handleOutputPdfs(page + 1);
            }
          }}> Página siguiente </button>
        </div>
      </div>: <div></div>}
      {/* Dinamico : sale cuando ya se hizo la busqueda */}
      {/* caso contrario se visualiza el material reciente respecto a la fecha */}
      {/* ( PROPUESTA ) */}

      {/* Colocar un filtro avanzado de claves de contenido: 
        EJ: Derivadas, Combinatoria, Jacobi, etc */}
      {/* Asi, se hará una busqueda y que ademas se agraga como query params para cargar desde otras secciones */}
      {/* ( OTRA POPUESTA XD ) */}
      {/* <div className="my-8 flex space-x-4">
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
      </div> */}

      {isSearching == null ? <PageDefaultSearch /> : isSearching == true ? <Loader></Loader> : outputPdfs.map((item, id) => (
        <LibraryItem
          key={id}
          item={item}
        />
      ))}
    </section>
  );
};

export default Library;
