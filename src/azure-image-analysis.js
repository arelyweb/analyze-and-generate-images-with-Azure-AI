
const axios = require('axios');
const config = require('./config');

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
      // Process the response according to your needs
    } catch (error) {
      console.error('Request failed with status code', error.response);
    }
  }
  

  
module.exports = analyzeImage;

