import { useState, useEffect } from 'react';
import { fetchApodData } from './services/nasaService';
import PictureCard from './components/PictureCard';
import './App.css';

function App() {

  const [apodData, setApodData] = useState({
    data: []
  });

  async function getApodData() {
    const data = await fetchApodData();
    setApodData(data);
  };

  useEffect(() => {
    getApodData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>STAR GAZER</h1>
      </header>
      <main>
        <div>
          {apodData.data.map((picture, idx) =>
          <PictureCard 
          key={idx}
          picture={picture}
          />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
