import axios from "axios";
import React, { useState } from "react";
import Header from "../Components/Header";
import SendButton from "../Components/SendButton";
import Upload from "../Components/Upload";

function Volume() {
  const [file, setFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName] = useState(""); // Store file name
  const [error, setError] = useState(null); // Store error message
  const [response, setResponse] = useState(null); // Store API response

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : "");
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    setIsLoading(true);
    setError(null); // Reset any previous error
    setResponse(null); // Reset the previous response

    try {
      const response = await axios.post(
        "http://localhost:8000/getvolume", // Replace with your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Request headers
          },
        }
      );

      if (response.status === 200) {
        setPdfUrl(response.data.report_url);
        setResponse(response.data);
      } else {
        setError("File upload failed.");
      }
    } catch (error) {
      setError("Error uploading file. Please try again.");
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-t from-[#00c6fb] to-[#005bea] h-[100vh]">
      <Header />
      <main className="flex flex-col justify-center items-center align-middle gap-10 mt-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <h1 className="text-3xl font-bold text-white">Upload the File Here</h1>
          <Upload onFileSelect={handleFileChange} />
          <SendButton onClick={handleUpload} />
        </div>

        {/* File Information */}
        {fileName && <p className="text-white">Selected File: {fileName}</p>}

        {/* Loading Indicator */}
        {isLoading && <p className="text-white">Uploading...</p>}

        {/* Error Handling */}
        {error && <p className="text-red-500">{error}</p>}

        {/* Response Display */}
        {response && (
          <div className="bg-white text-black p-5 rounded-lg shadow-lg w-96 text-center mt-5">
            <h2 className="text-xl font-bold">Response</h2>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}

      </main>
    </div>
  );
}

export default Volume;
