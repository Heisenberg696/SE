import React, { useState } from 'react';
import "./Summarizer.scss";

const Summarizer = () => {
  const [document, setDocument] = useState(null);
  const [convertedText, setConvertedText] = useState("");

  const handleDocumentUpload = (event) => {
    const uploadedDocument = event.target.files[0];
    setDocument(uploadedDocument);
  };

  const handleConvertDocument = () => {
    // Implement your logic to convert the document to text here
    setConvertedText("Document  summarised  ");
  };

  const handleSummarize = () => {
    // Implement logic to navigate to the summarizer page
    // You can use the react-router-dom's 'useNavigate' hook for navigation
    // Example: const navigate = useNavigate();
    // navigate('/summarizer');
  };

  const handleExport = () => {
    // Implement logic to export the converted text
    // You can use browser APIs or external libraries for exporting
  };

  return (
    <div className='text2'>
      <div className='card2'>
        <div className='left2'>
          <div className="upload2">
            <div className='textarea_wrapper'>
            <textarea></textarea>

            </div>
            <input type="file" accept=".pdf, .doc, .docx" onChange={handleDocumentUpload} />
          </div>
          <button onClick={handleConvertDocument}>Summarize</button>
        </div>
        <div className="right2">
          <p className='summarised'>{convertedText}</p>
          <button onClick={handleExport}>Export</button>
        </div>
      </div>
    </div>
  );
};

export default Summarizer;
