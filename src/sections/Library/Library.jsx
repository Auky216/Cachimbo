import { useState, useRef } from "react";
import LibraryItem from "../../components/LibraryItem";
import { getPdfs } from "../../constant/pdfs";
import { PageDefaultSearch } from "../../components/Loading";
import { fetchDataCustom } from "../../components/fetchingData";
import { useUserStore } from "../../store/utils";

const Library = () => {
  const inputRef = useRef(null);
  const { user } = useUserStore();
  const [outputPdfs, setOutputPdfs] = useState(Object.entries(getPdfs));
  const [inputValue, setInputValue] = useState("");
  const [isSearching, setIsSearching] = useState(null);

  const handleOutputPdfs = async() => {
    if (!inputValue) {
      setIsSearching(null);
      return
    };

    const [res, data, state, err] = await fetchDataCustom({
      title: inputValue,
      token: user.token,
      page: 1,
    }, "test/api/library/find");
    console.log(res, data, state, err);
    setIsSearching(true);
    // const filteredPdfs = Object.entries(getPdfs).filter(([_, item]) => {
    //   // quitando tildes o caracteres encima de las letras
    //   const itemTitle = item.title
    //     .toLowerCase()
    //     .normalize("NFD")
    //     .replace(/[\u0300-\u036f]/g, "");
    //   return itemTitle.includes(inputValue.toLowerCase());
    // });
    setOutputPdfs(data.items);
    setIsSearching(false);
  };
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

      {/* Dinamico : sale cuando ya se hizo la busqueda */}
      {/* caso contrario se visualiza el material reciente respecto a la fecha */}
      {/* ( PROPUESTA ) */}

      {/* Colocar un filtro avanzado de claves de contenido: 
        EJ: Derivadas, Combinatoria, Jacobi, etc */}
      {/* Asi, se hará una busqueda y que ademas se agraga como query params para cargar desde otras secciones */}
      {/* ( OTRA POPUESTA XD ) */}
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

      {isSearching == null ? <PageDefaultSearch/> : outputPdfs.map((item, id) => (
        <LibraryItem
          key={id}
          item={item}
        />
      ))}
    </section>
  );
};

export default Library;
