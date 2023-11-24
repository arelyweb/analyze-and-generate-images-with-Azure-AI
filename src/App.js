import React from 'react';
import axios from 'axios'; // Add import statement for axios
import config from './config'; // Add import statement for config


function App() {
  
  return (
    <div>
      <h1>AZURE</h1>
      <p>
        Inserta la URL
      </p>
      <input id='urlimage' type="text" placeholder="Enter URL" />
      <button onClick={handleGenerate}>Generate</button>
      <button onClick={() => handleAnalyze(document.getElementById('urlimage').value)}>Analyze</button>
      <img id='imgj' alt="Image" />
      <p id='descimg'></p>
    </div>
  );
}

function handleGenerate() {
  // Logic for generating
}

async function handleAnalyze(url) {
  try {
    await analyzeImage(url);
  } catch (error) {
    console.error(error);
  }
}

async function analyzeImage(imageUrl) {
  const url = 'https://imageazure.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=caption&language=en';
  const subscriptionKey = config.apiKey;

  const params = {
    visualFeatures: 'Categories,Description,Color',
    details: 'Landmarks',
    language: 'en',
  };

  const headers = {
    'Content-Type': 'application/json',
    'Ocp-Apim-Subscription-Key': subscriptionKey,
  };

  try {
    const response = await axios.post(url, { url: imageUrl }, { params, headers });
    console.log(response.data);
    document.getElementById('imgj').src =imageUrl;
    document.getElementById('descimg').innerHTML =response.data.captionResult.text;
  } catch (error) {
    console.error('Request failed with status code', error.response.status);
  }
}

export default App;

