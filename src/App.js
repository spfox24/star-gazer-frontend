import { useState, useEffect } from 'react';
import { fetchApodData } from './services/nasaService';
import Header from './components/Header';
import Footer from './components/Footer';
import PictureCard from './components/PictureCard';
import styles from './App.css';
import Button from '@mui/material/Button';

function App() {

  function refreshPage() {
    window.location.reload(false);
  };

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
      <Header />
          <main className="main">
            <div className="buttonContainer">
              <Button variant="contained" onClick={refreshPage}>Image Reload</Button>
            </div>
            <div className="cardContainer">
              {apodData.data.map((picture, idx) =>
              <PictureCard 
              key={idx}
              picture={picture}
              />
              )}
            </div>
          </main>
      <Footer />
    </div>
  );
}

export default App;
