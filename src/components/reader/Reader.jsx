import React,{useState} from 'react';
import "./Reader.scss"
import Navbar from '../navbar/navbar';
const Reader = () => {

    const [image, setImage] = useState(null);
    const [convertedText, setConvertedText] = useState("");
  
    const handleImageUpload = (event) => {
      const uploadedImage = event.target.files[0];
      setImage(uploadedImage);
    };
  
    const handleConvertImage = () => {
      // Implement your logic to convert the image to text here
      setConvertedText("Sample converted text");
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
      <><div className='text'>
      <div className='card'>
        <div className='left'>
          <div className="upload">
            <input type="file" accept="image/*" onChange={handleImageUpload} />

          </div>
          <button onClick={handleConvertImage}>Convert Image</button>
        </div>
        <div className="right">
          <p>{convertedText}</p>
          <button onClick={handleSummarize}>Summarize</button>
          <button onClick={handleExport}>Export</button>

        </div>

      </div>

    </div></>


    

  )
}

export default Reader;