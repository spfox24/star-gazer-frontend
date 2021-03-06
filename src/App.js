import { useState, useEffect } from 'react';
import { fetchApodData } from './services/nasaService';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import PictureCard from './components/PictureCard';
// styles
import './App.css';
// material ui
import { createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const theme = createTheme({
  palette: {
      primary: {
          main: '#1d3e8c'
      },
      secondary: {
          main: '#f44336'
      },
  },
});

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

              <h1 className="buttonHeading">Shuffle Images</h1>

              <KeyboardArrowDownIcon 
                sx={{ color: "#ffffff", fontSize: 40, marginBottom: 1 }}
              />
              <Button theme={theme} 
                size="large" 
                color="primary" 
                sx={{ width: '70%' }}
                aria-label="Reload Pictures" 
                variant="contained" 
                onClick={refreshPage}>
                <PhotoCamera />
              </Button>
            </div>
              <div className="cardContainer">
                {apodData.data.map((picture, idx) =>
                <PictureCard 
                key={idx}
                picture={picture}
                />
                )}
              </div>
            <div className="socialIcon">
              <a href="https://github.com/spfox24" target="_blank" rel="noreferrer">
                <GitHubIcon 
                  sx={{ color: "#ffffff", fontSize: 45, margin: 3 }}
                  aria-label="GitHub" 
                />
              </a>
              <a href="https://www.linkedin.com/in/stevenpfox/" target="_blank" rel="noreferrer">
                <LinkedInIcon 
                  sx={{ color: "#ffffff", fontSize: 45, margin: 3 }}
                  aria-label="LinkedIn" 
                />
              </a>
            </div>
          </main>
      <Footer />
    </div>
  );
}

export default App;
