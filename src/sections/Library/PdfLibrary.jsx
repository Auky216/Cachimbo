import React, { useState, useEffect } from "react";
import { useParams, Navigate, useLocation } from "react-router-dom";
import { getPdfs } from "../../constant/pdfs.js";
import Loader from "../../components/Loading.jsx";
/* import PrintIcon from "../../components/icons/print.jsx";
import BookmarkIcon from "../../components/icons/bookmark.jsx";
import LikeIcon from "../../components/icons/like.jsx";
import ShareIcon from "../../components/icons/share.jsx";
import DislikeIcon from "../../components/icons/dislike.jsx";
import ZoomIcon from "../../components/icons/zoom.jsx"; */
import BackButton from "../../components/buttons";
import { getLibrary } from "../../store/services.js";

// import samplePdf from "/src/assets/PDF/cg-practise-for-final-exam.pdf";

const PdfLibrary = () => {
  const { uni, course, id, extension } = useParams();
  const [url, setUrl] = useState("");
  const location = useLocation();
  const [pdfData, setPdfData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [page, setPage] = useState(1);
  const totalPages = 11;

  const handlePrev = () => setPage(page > 1 ? page - 1 : page);
  const handleNext = () => setPage(page < totalPages ? page + 1 : page);

  useEffect(() => {
    if (location.state == null) {
      window.open("/dashboard/library", "_self");
    } else { setPdfData(location.state) };

    const fetchUrl = () => {
      setIsLoaded(true);
      getLibrary(uni, course, id, extension)
      .then((data) => {setUrl(data.url)})
      .catch((error) => console.log(error))
      .finally(() => setIsLoaded(false));
    }

    fetchUrl();
  }, []);

  const renderDocument = () => {
    const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${url}`;
    const googleViewerUrl = `https://drive.google.com/viewerng/viewer?embedded=true&url=${url}`;
    if (extension === "pdf") {
      return (
        <iframe
          src={googleViewerUrl}
          width="100%"
          height="600px"
          frameBorder="0"
          onError={() => console.error("Error loading PDF")}
          title="PDF Viewer"
        >
          <p>Alternative text - include a link <a href={url}>to the document!</a></p>
        </iframe>
      );
    } else if (["docx", "pptx", "xlsx","pdf"].includes(extension)) {
      return (
        <iframe
          src={officeViewerUrl}
          width="100%"
          height="500px"
          frameBorder="0"
          onError={() => console.error("Error loading document")}
          title="Office Document Viewer"
        >
          <p>Alternative text - include a link <a href={url}>to the document!</a></p>
        </iframe>
      );
    } else {
      return <img src={url} alt="File Preview" className="w-full" style={{ pointerEvents: 'none' }} />;
    }
  };

  return (
    <div>
      {isLoaded ? <Loader /> : <section id="library" className="py-10 pr-8 h-screen overflow-y-auto">
        <div className="mx-auto max-w-3xl rounded-lg p-6">
          <h1 className="mb-4 text-3xl font-bold text-cach-l3 dark:text-cach-l2">
            {pdfData.title}
          </h1>
          <BackButton></BackButton>
          <p className="mb-6 text-cach-l5 dark:text-cach-l1 font-bold">Autor:  @{pdfData.nickname}</p>

          <div className="mb-4">
            <div className="rounded-lg border border-cach-l2 p-4">
              <p className="text-cach-l5 dark:text-cach-l1">{pdfData.description || "No hay descripción"}</p>
            </div>
          </div>

          {/* <div className="mb-4 flex items-center justify-between">
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
          </div> */}

          <div className="mt-4 flex justify-between space-x-2 p-4">
             {/* <button
                onClick={handleDownload}
                className="flex items-center space-x-1 rounded bg-cach-l3 px-2 py-1 text-cach-l1 hover:bg-cach-l2"
             >
               <span>Descargar</span>
             </button> */}

             {/* <div className="flex items-center space-x-2">
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
             </div> */}

             {/* <button className="flex items-center space-x-1 rounded bg-cach-l3 px-2 py-1 text-cach-l1 hover:bg-cach-l2">
              {isMaximaxed ? <ZoomOutIcon className="h-5 w-5" onClick={minWindow}/> : <ZoomIcon className="h-5 w-5" onClick={maxWindow}/>}
             </button> */}
           </div>

          {renderDocument()}
        </div>
      </section>}
    </div>
  );
};

export default PdfLibrary;
