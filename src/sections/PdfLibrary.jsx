import React from "react";
import { useParams } from "react-router-dom";

const PdfLibrary = () => {
  const { pdf } = useParams();

  return (
    <section id="library" className="py-10 pr-8">
      <h1>Visualizacion pdf</h1>
      <p>Mostrando el PDF con ID: {pdf}</p>
    </section>
  );
};

export default PdfLibrary;
