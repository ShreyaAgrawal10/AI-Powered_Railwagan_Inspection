import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import DownloadButton from "../Components/DownloadButton";
import SendButton from "../Components/SendButton";

const FileUploader = () => {
  const [file, setFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Added loading state
  const [fileName, setFileName] = useState(""); // State to store the file name

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile ? selectedFile.name : ""); // Set file name
    console.log("Selected file:", selectedFile);
  };


  const handleUpload = async () => {
    console.log("upload");
    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    setIsLoading(true); // Show loader

    try {
      const response = await axios.post(
        "http://localhost:8000/detect", // Replace with your API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        alert("File uploaded successfully");
        // Save the report URL from the response
        setPdfUrl(response.data.report_url);
        
        console.log(response)
      } else {
        alert("File upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Error uploading file");
    } finally {
      setIsLoading(false); // Hide loader after upload completes
    }
  };

  const handleDownload = async () => {
    console.log("download");
    try {
      const response = await axios.get(`http://localhost:8000${pdfUrl}`, {
        responseType: "blob",
      });
  
      const blob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "report.docx"; // Set the correct file extension
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading DOCX:", error);
      alert("Error downloading DOCX");
    }
  };
  
  return (
    <StyledWrapper>
      <div className="flex flex-col gap-10 justify-center align-middle items-center border p-[5vw] pt-[10vh] pb-[6vh] bg-[#e8e8e8] rounded-lg shadow-lg transition-all duration-500 ease-out">
        <div className="container">
          <div className="folder">
            <div className="front-side">
              <div className="tip" />
              <div className="cover" />
            </div>
            <div className="back-side cover" />
          </div>
          <label className="custom-file-upload">
            <input
              className="title"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
            />
            Choose a file
          </label>
          {/* Display selected file name */}
          {fileName && <p>Selected File: {fileName}</p>}
        </div>
        <SendButton onClick={handleUpload} />
        {isLoading && <Loader />} {/* Show loader when uploading */}
        {pdfUrl && <DownloadButton download={handleDownload} />}
        {/* {<DownloadButton download={handleDownload} />} */}
      </div>
    </StyledWrapper>
  );
};

// 🔹 Loader Component
const Loader = () => (
  <LoaderWrapper>
    <div className="spinner"></div>
    <p>Uploading...</p>
  </LoaderWrapper>
);

const StyledWrapper = styled.div`
  .container {
    --transition: 350ms;
    --folder-W: 120px;
    --folder-H: 80px;
    display: flex;
    width: auto;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    background: linear-gradient(135deg, #6dd5ed, #2193b0);
    border-radius: 15px;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    height: calc(var(--folder-H) * 1.7);
    position: relative;
  }

  .folder {
    position: absolute;
    top: -20px;
    left: calc(50% - 60px);
    animation: float 2.5s infinite ease-in-out;
    transition: transform var(--transition) ease;
  }

  .folder:hover {
    transform: scale(1.05);
  }

  .folder .front-side,
  .folder .back-side {
    position: absolute;
    transition: transform var(--transition);
    transform-origin: bottom center;
  }

  .folder .back-side::before,
  .folder .back-side::after {
    content: "";
    display: block;
    background-color: white;
    opacity: 0.5;
    z-index: 0;
    width: var(--folder-W);
    height: var(--folder-H);
    position: absolute;
    transform-origin: bottom center;
    border-radius: 15px;
    transition: transform 350ms;
    z-index: 0;
  }

  .container:hover .back-side::before {
    transform: rotateX(-5deg) skewX(5deg);
  }
  .container:hover .back-side::after {
    transform: rotateX(-15deg) skewX(12deg);
  }

  .folder .front-side {
    z-index: 1;
  }

  .container:hover .front-side {
    transform: rotateX(-40deg) skewX(15deg);
  }

  .folder .tip {
    background: linear-gradient(135deg, #ff9a56, #ff6f56);
    width: 80px;
    height: 20px;
    border-radius: 12px 12px 0 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: -10px;
    z-index: 2;
  }

  .folder .cover {
    background: linear-gradient(135deg, #ffe563, #ffc663);
    width: var(--folder-W);
    height: var(--folder-H);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  .custom-file-upload {
    font-size: 1.1em;
    color: #ffffff;
    text-align: center;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: background var(--transition) ease;
    display: inline-block;
    width: 100%;
    padding: 10px 35px;
    position: relative;
  }

  .custom-file-upload:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  .custom-file-upload input[type="file"] {
    display: none;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }

    50% {
      transform: translateY(-20px);
    }

    100% {
      transform: translateY(0px);
    }
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  .spinner {
    width: 40px;
    height: 40px;
    border: 5px solid #3498db;
    border-top: 5px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default FileUploader;
