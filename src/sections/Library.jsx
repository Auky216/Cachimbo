import React, { useState } from "react";
import corazonlogo from "../assets/like-icon.png";
import profileTemplate from "../assets/profile-template.png";
import pdflogo from "../assets/pdf-icon.png";
import universitylogo from "../assets/university-icon.png";

const Library = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setIsFavorite(!isFavorite);
    setLikeCount(likeCount + (isFavorite ? -1 : 1));
  };

  return (
    <section id="library">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar libros, documentos y más"
          className="w-full rounded-full border border-cach-l3 bg-cach-l1 p-2 text-cach-l3 placeholder-cach-l3 focus:outline-none dark:border-cach-l2 dark:bg-[#2B2C41] dark:text-cach-l2 dark:placeholder-cach-l2"
        />
      </div>

      <div className="mb-4 flex space-x-4">
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-sm text-cach-l1 focus:outline-none">
          Todos
        </button>
        <button className="rounded-full bg-cach-l3 px-5 py-1 text-sm text-cach-l1 focus:outline-none">
          Favoritos
        </button>
      </div>

      <div className="rounded-lg border border-cach-l3 p-2 dark:border-cach-l2">
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
                <p className="text-cach-l5 dark:text-cach-l3">@Jojiz</p>
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
            className={`flex items-center space-x-1 px-2 py-1 text-cach-l3 ${isFavorite ? "text-red-500" : ""}`}
          >
            <div>
              <img src={corazonlogo} alt="Like" className="w-13 h-13" />
              <p>{likeCount}</p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Library;
