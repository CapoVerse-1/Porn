import React, { useState } from 'react';
import './App.css';
// Import components once they are created
import SearchBar from './components/SearchBar';
import ResultsGrid from './components/ResultsGrid';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]); // Placeholder for results

  // Placeholder function for handling search
  const handleSearch = (query) => {
    console.log("Searching for:", query);
    setSearchQuery(query);
    // TODO: Call backend API
    // For now, generate dummy results
    const dummyResults = Array.from({ length: 10 }, (_, i) => ({ id: i, title: `Generated Video ${i + 1}` }));
    setResults(dummyResults);
  };

  return (
    <div className="App">
      <h1>Generate Your Scene</h1>
      <SearchBar onSearch={handleSearch} />

      {results.length > 0 && (
        <div style={{ marginTop: '2rem', width: '100%', maxWidth: '1200px' }}>
          <h2 style={{ marginBottom: '1rem' }}>Results for: "{searchQuery}"</h2>
          <ResultsGrid results={results} />
        </div>
      )}

      {results.length === 0 && (
        <p style={{ marginTop: '2rem' }}>Enter a description above to generate videos.</p>
      )}
    </div>
  );
}

export default App;
