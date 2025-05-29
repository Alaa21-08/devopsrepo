import React from 'react';
import './App.css';
import mercedesImage from './car.jpg';    // Mercedes image
import bentleyImage from './bentley.jpg'; // Bentley image

function App() {
  const mercedesCars = [1, 2, 3];
  const bentleyCars = [1, 2, 3];

  return (
    <div className="container">
      <header className="header">
        <h1>Bienvenue sur la page de voiture 2025</h1>
      </header>

      <main className="main">
        {/* Première ligne - Mercedes */}
        <h2 className="author-name">Alaa Semmar</h2>
        <div className="car-row">
          {mercedesCars.map((car, index) => (
            <div key={index} className="car-block">
              <img src={mercedesImage} alt={`Mercedes ${index + 1}`} className="car-image" />
              <p>Mercedes-AMG C 63 S E PERFORMANCE.</p>
            </div>
          ))}
        </div>

        {/* Deuxième ligne - Bentley */}
        <h2 className="author-name">Qejiou Salah eddine</h2>
        <div className="car-row">
          {bentleyCars.map((car, index) => (
            <div key={index} className="car-block">
              <img src={bentleyImage} alt={`Bentley ${index + 1}`} className="car-image" />
              <p>Bentley Continental GT.</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <p>© 2025 Voitures Inc.</p>
      </footer>
    </div>
  );
}

export default App;
