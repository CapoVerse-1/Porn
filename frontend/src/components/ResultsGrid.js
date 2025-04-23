import React from 'react';
import VideoCard from './VideoCard'; // Import the VideoCard component
import './ResultsGrid.css'; // We will create this CSS file next

function ResultsGrid({ results }) {
  if (!results || results.length === 0) {
    // Optionally, render nothing or a message if there are no results
    // We handle the initial message in App.js for now
    return null;
  }

  return (
    <div className="results-grid">
      {results.map((result) => (
        <VideoCard key={result.id} title={result.title} />
        // Pass other necessary props to VideoCard in the future
      ))}
    </div>
  );
}

export default ResultsGrid; 