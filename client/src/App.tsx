import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [backendResponse, setBackendResponse] = useState({ success: false, message: '' });
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setBackendResponse(data)})
  }, [])
  return (
    <div className="App">
      {backendResponse.message}
    </div>
  );
}

export default App;
