import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getPdfs } from "../../constant/pdfs.js";

import PrintIcon from "../../components/icons/print.jsx";
import BookmarkIcon from "../../components/icons/bookmark.jsx";
import LikeIcon from "../../components/icons/like.jsx";
import ShareIcon from "../../components/icons/share.jsx";
import DislikeIcon from "../../components/icons/dislike.jsx";
import ZoomIcon from "../../components/icons/zoom.jsx";

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
      <div className="mx-auto max-w-3xl rounded-lg bg-white p-6">
        <h1 className="mb-4 text-3xl font-bold text-cach-l3">
          {pdfData.title}
        </h1>
        <p className="mb-6 text-cach-l5">Autor: {pdfData.autor}</p>

        <div className="mb-4">
          <div className="rounded-lg border bg-cach-l1 p-4">
            <p className="text-cach-l3">{pdfData.descripcion}</p>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between">
          <div className="flex space-x-4 text-cach-l2">
            <button className="flex items-center space-x-1 hover:text-cach-l3">
              <BookmarkIcon className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-1 hover:text-cach-l3">
              <LikeIcon className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-1 hover:text-cach-l3">
              <DislikeIcon className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-1 hover:text-cach-l3">
              <ShareIcon className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-1 hover:text-cach-l3">
              <PrintIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex justify-between space-x-2 p-4">
          <button className="flex items-center space-x-1 rounded bg-cach-l3 px-2 py-1 text-cach-l1 hover:bg-cach-l2">
            <span>Descargar</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="rounded bg-cach-l3 px-2 py-1 text-cach-l1 hover:bg-cach-l2 disabled:opacity-50"
            >
              {"<"}
            </button>
            <span className="rounded border bg-cach-l3 px-2 py-1 text-cach-l1">
              {page} - {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="rounded bg-cach-l3 px-2 py-1 text-cach-l1 hover:bg-cach-l2 disabled:opacity-50"
            >
              {">"}
            </button>
          </div>

          <button className="flex items-center space-x-1 rounded bg-cach-l3 px-2 py-1 text-cach-l1 hover:bg-cach-l2">
            <ZoomIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mb-4 rounded-lg border-2 border-cach-l2 bg-cach-l1 p-4">
          <p className="text-center text-cach-l2">
            Simulación del contenido del PDF
          </p>
          <p className="text-cach-l5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            voluptas, similique omnis cum dicta sint porro. Quod facilis, rerum
            odit quibusdam iste ratione non omnis quidem amet illo cumque
            eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio, recusandae.Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Quasi voluptas, similique omnis cum dicta sint porro. Quod
            facilis, rerum odit quibusdam iste ratione non omnis quidem amet
            illo cumque eveniet. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PdfLibrary;
