import React, { useState } from "react";
import profileTemplate from "../assets/profile-template.png";
import pdflogo from "../assets/pdf-icon.png";
import universitylogo from "../assets/university-icon.png";
import HeartLogo from "../components/icons/HearLogo.jsx";

const Library = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setIsFavorite(!isFavorite);
    setLikeCount(likeCount + (isFavorite ? -1 : 1));
  };

  return (
    <section id="library" className="pr-8">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar libros, documentos y más"
          className="w-full rounded-full border border-cach-l3 bg-cach-l1 bg-transparent px-5 py-2 text-cach-l3 placeholder-cach-l3/70 focus:outline-none dark:border-cach-l2 dark:text-cach-l2 dark:placeholder-cach-l2/40"
        />
      </div>

      <div className="my-5 flex space-x-4">
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Todos
        </button>
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-cach-l1 focus:outline-none">
          Favoritos
        </button>
      </div>

      <div className="rounded-lg border border-cach-l3 px-4 py-2 dark:border-cach-l2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img src={pdflogo} alt="PDF" className="h-[4rem] w-[4rem]" />
            <div>
              <h3 className="text-10 text-lg font-bold text-cach-l3">
                Cálculo de una Variable 1 - PC1 2021-2
              </h3>
              <div className="flex items-center space-x-2">
                <img
                  src={profileTemplate}
                  alt="profile"
                  className="h-8 w-8 grayscale filter dark:invert"
                />
                <p className="pr-3 text-cach-l5 dark:text-cach-l3">@Jojiz</p>
                <img
                  src={universitylogo}
                  alt="Universidad"
                  className="h-8 w-8 grayscale filter"
                />
                <p className="text-cach-l5 dark:text-cach-l3">UTEC</p>
              </div>
            </div>
          </div>

          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 px-2 py-1 duration-100 ${isFavorite ? "text-red-500" : "text-cach-l3 dark:text-cach-l2"}`}
          >
            <div>
              <HeartLogo filled={isFavorite} />
              <p>{likeCount}</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Library;
