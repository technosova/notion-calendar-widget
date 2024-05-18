// Import React library
import React from 'react';

// Import ReactDOM for rendering the application
import ReactDOM from 'react-dom/client';

// Import the main CSS file for the application
import './index.css';

// Import the main App component
import App from './App';

// Import a function to report web vitals (performance metrics)
import reportWebVitals from './reportWebVitals';

// Create a React root at the element with the ID 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the React root
// Wrap the App component in React.StrictMode to enable additional checks and warnings
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Call the function to report web vitals
reportWebVitals();
