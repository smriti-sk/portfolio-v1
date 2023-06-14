import React, { useState } from "react";
import "./CV.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const CV = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = "application/pdf";
  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDefault(selectedFile);
        reader.onload = (e) => {
          setPdfFile(e.target.result);
        };
      } else {
        setPdfFile(null);
      }
    } else {
      console.log("please select");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };
  const newplugin = defaultLayoutPlugin()
  return (
    <div className="pdfContainer">
      <form  onSubmit={handleSubmit}>
        <input type="file" className="form-control" onChange={handleChange} />
        <button
          type="submit"
          className="btn btn-success"
          
        >
          View pdf
        </button>
      </form>

      <h2>View PDF</h2>
      <div className="pdf-container">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
          {viewPdf && (
            <>
              <Viewer fileUrl={viewPdf} plugins={[newplugin]} />
            </>
          )}
          {!viewPdf && <>No PDF</>}
        </Worker>
      </div>
    </div>
  );
};

export default CV;
