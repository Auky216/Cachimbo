import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getPdfs } from "../../constant/pdfs.js";

import PrintIcon from "../../components/icons/print.jsx";
import BookmarkIcon from "../../components/icons/bookmark.jsx";
import LikeIcon from "../../components/icons/like.jsx";
import ShareIcon from "../../components/icons/share.jsx";
import DislikeIcon from "../../components/icons/dislike.jsx";
import ZoomIcon from "../../components/icons/zoom.jsx";

// import samplePdf from "/src/assets/PDF/cg-practise-for-final-exam.pdf";

const PdfLibrary = () => {
  const { pdf } = useParams();
  const pdfData = getPdfs[pdf];
  // const [page, setPage] = useState(1);
  // const totalPages = 11;

  // const handlePrev = () => setPage(page > 1 ? page - 1 : page);
  // const handleNext = () => setPage(page < totalPages ? page + 1 : page);

  if (!pdfData) {
    return <p>PDF no encontrado</p>;
  }

  // console.log(pdfData);
  // console.log(pdfData.pdf === samplePdf);
  // console.log(pdfData.pdf);
  // console.log(samplePdf);

  return (
    <section id="library" className="py-10 pr-8">
      <div className="mx-auto max-w-3xl rounded-lg p-6">
        <h1 className="mb-4 text-3xl font-bold text-cach-l3 dark:text-cach-l2">
          {pdfData.title}
        </h1>
        <p className="mb-6 text-cach-l5 dark:text-cach-l1 font-bold">Autor: {pdfData.autor}</p>

        <div className="mb-4">
          <div className="rounded-lg border border-cach-l2 p-4">
            <p className="text-cach-l5 dark:text-cach-l1">{pdfData.descripcion}</p>
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
            {/* <button className="flex items-center space-x-1 hover:text-cach-l3">
              <ShareIcon className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-1 hover:text-cach-l3">
              <PrintIcon className="h-5 w-5" />
            </button> */}
          </div>
        </div>

        {/* <div className="mt-4 flex justify-between space-x-2 p-4">
          <a
            href={pdfData.pdf}
            download
            className="flex items-center space-x-1 rounded bg-cach-l3 px-2 py-1 text-cach-l1 hover:bg-cach-l2"
          >
            <span>Descargar</span>
          </a>

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
        </div> */}

        <object data={pdfData.pdf} type="application/pdf" width="100%" height="500px" onError={() => console.error("Error loading PDF")}>
        <p>Alternative text - include a link <a href={pdfData.pdf}>to the PDF!</a></p>
        </object>


      
      </div>
    </section>
  );
};

export default PdfLibrary;
