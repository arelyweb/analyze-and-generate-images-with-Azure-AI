import React from 'react';

function App() {
  const value = 'World';
  return (
    <div>
      <h1>AZURE</h1>
      <p>
        Inserta la URL
      </p>
      <input type="text" placeholder="Enter URL" />
      <button onClick={handleGenerate}>Generate</button>
      <button onClick={handleAnalyze}>Analyze</button>
    </div>
  );
}

function handleGenerate() {
  // Logic for generating
}

function handleAnalyze() {
  // Logic for analyzing
}

export default App;
