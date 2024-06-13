import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getPdfs } from "../constant/pdfs";

import PrintIcon from "../components/icons/print.jsx";
import BookmarkIcon from "../components/icons/bookmark.jsx";
import LikeIcon from "../components/icons/like.jsx";
import ShareIcon from "../components/icons/share.jsx";
import DislikeIcon from "../components/icons/dislike.jsx";
import ZoomIcon from "../components/icons/zoom.jsx";

const PdfLibrary = () => {
  const { pdf } = useParams();
  const pdfData = getPdfs[pdf];
  const [page, setPage] = useState(1);
  const totalPages = 11;

  const handlePrev = () => setPage(page > 1 ? page - 1 : page);
  const handleNext = () => setPage(page < totalPages ? page + 1 : page);

  if (!pdfData) {
    return <p>PDF no encontrado</p>;
  }

  return (
    <section id="library" className="py-10 pr-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4 text-cach-l3">{pdfData.title}</h1>
        <p className="text-cach-l5 mb-6">Autor: {pdfData.autor}</p>

        <div className="mb-4">
          <div className="border p-4 rounded-lg bg-cach-l1">
            <p className="text-cach-l3">{pdfData.descripcion}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4 text-cach-l2">
            <button className="hover:text-cach-l3 flex items-center space-x-1">
              <BookmarkIcon className="w-5 h-5" />
            </button>
            <button className="hover:text-cach-l3 flex items-center space-x-1">
              <LikeIcon className="w-5 h-5" />
            </button>
            <button className="hover:text-cach-l3 flex items-center space-x-1">
              <DislikeIcon className="w-5 h-5" />
            </button>
            <button className="hover:text-cach-l3 flex items-center space-x-1">
              <ShareIcon className="w-5 h-5" />
            </button>
            <button className="hover:text-cach-l3 flex items-center space-x-1">
              <PrintIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-between mt-4 space-x-2 p-4">
          <button className="bg-cach-l3 text-cach-l1 px-2 py-1 rounded hover:bg-cach-l2 flex items-center space-x-1">
            <span>Descargar</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="bg-cach-l3 text-cach-l1 px-2 py-1 rounded hover:bg-cach-l2 disabled:opacity-50"
            >
              {"<"}
            </button>
            <span className="text-cach-l1 border px-2 py-1 rounded bg-cach-l3">
              {page} - {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="bg-cach-l3 text-cach-l1 px-2 py-1 rounded hover:bg-cach-l2 disabled:opacity-50"
            >
              {">"}
            </button>
          </div>

          <button className="bg-cach-l3 text-cach-l1 px-2 py-1 rounded hover:bg-cach-l2 flex items-center space-x-1">
            <ZoomIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="border-2 border-cach-l2 p-4 rounded-lg bg-cach-l1 mb-4">
          <p className="text-cach-l2 text-center">Simulación del contenido del PDF</p>
          <p className="text-cach-l5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas, similique omnis cum dicta sint porro. Quod facilis, rerum odit quibusdam iste ratione non omnis quidem amet illo cumque eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, recusandae.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptas, similique omnis cum dicta sint porro. Quod facilis, rerum odit quibusdam iste ratione non omnis quidem amet illo cumque eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>
        </div>
      </div>
    </section>
  );
};

export default PdfLibrary;
