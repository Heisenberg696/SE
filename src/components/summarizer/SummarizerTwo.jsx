import React, { useState } from 'react';
import styles from './playground.module.css';
import { pdfjs } from 'react-pdf';
import JsPDF from 'jspdf';
import axios from "axios"

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const SummarizerTwo = () => {
  const [inputText, setInputText] = useState('');

  const handleFileInputChange = async (event) => {
    const fileInput = event.target;
    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];

      const reader = new FileReader();
      reader.onload = async (e) => {
        const fileContent = e.target.result;

        // Use pdfjs to convert PDF content to text
        const pdfData = new Uint8Array(fileContent);
        convertPdfToText(pdfData).then((pdfText) => {
          setInputText(pdfText);
        });
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const convertPdfToText = (pdfData) => {
    return new Promise((resolve, reject) => {
      pdfjs.getDocument({ data: pdfData }).promise.then((pdf) => {
        const numPages = pdf.numPages;
        let text = '';

        const processPageText = (pageNumber) => {
          pdf.getPage(pageNumber).then((page) => {
            page.getTextContent().then((textContent) => {
              const pageText = textContent.items.map((item) => item.str).join(' ');
              text += pageText;
              if (pageNumber < numPages) {
                processPageText(pageNumber + 1);
              } else {
                resolve(text);
              }
            });
          });
        };

        processPageText(1);
      }).catch((error) => {
        console.error('Error converting PDF to text:', error);
        reject('Error converting PDF to text');
      });
    });
  };

  const handleSummarizeClick = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          temperature: 0.3, // Adjust the creativity of the model (0.0 to 1.0)
          model: "gpt-3.5-turbo",
          messages: [

            {
              role: "system",
              content: "Summarize any text given to you"
            },
            {
              role: "user", content: inputText
            }
          ]
        },
        {
          headers: {
            Authorization: 'Bearer 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', // Replace with your API key
          },
        }
      );
  
      const summarizedText = response.data.choices[0].message.content;
      console.log('Summarized Text:', summarizedText);
  
      // Update the summarized text area with the summarized content
      const summarizedTextArea = document.getElementById('summarizedTextArea');
      if (summarizedTextArea) {
        summarizedTextArea.value = summarizedText;
      }
    } catch (error) {
      console.error('Error summarizing text:', error);
    }
  };


  const generatePDF = () => {
    try {
      const summarizedTextArea = document.getElementById('summarizedTextArea');
      if (summarizedTextArea) {
        const summarizedText = summarizedTextArea.value;
  
        const report = new JsPDF('portrait', 'pt', 'a4');
        const margin = 20;
        const pageWidth = report.internal.pageSize.getWidth() - 2 * margin;
        const splitText = report.splitTextToSize(summarizedText, pageWidth);
  
        report.text(margin, margin, splitText);
        report.save('report.pdf');
      }
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };
  

  return (
    <>
      <div className={styles.playground}>
        <div className={styles.wrapper}>
          <div className={styles.textareaWrapper}>
            <textarea
              className={styles.textarea}
              placeholder="Enter text here"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>
          </div>
          <div className={styles.bottomArea}>
            <form action="#" method="post" encType="multipart/form-data">
              <input
                type="file"
                id="fileInput"
                name="fileInput"
                className={styles.customFileInput}
                onChange={handleFileInputChange}
              />
            </form>
            <button className={styles.button} onClick={handleSummarizeClick}>
              Summarize
            </button>
          </div>
        </div>
        <div className={styles.summarize}>
          <div className={styles.textareaWrapper}>
            <textarea
              id="summarizedTextArea"
              className={styles.textarea}
              placeholder="Summarised  text  here"
            ></textarea>
          </div>
          <div className={styles.bottomArea}>
            <button className={styles.button} onClick={generatePDF} type="button">Export</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummarizerTwo;
