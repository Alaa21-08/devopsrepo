import React from 'react';
import './App.css';
import mercedesImage from './car.jpg';    // Mercedes
import bentleyImage from './bentley.jpg'; // Bentley
import bmwImage from './bmw.jpg';          // BMW

function App() {
  const mercedesCars = [1, 2, 3];
  const bentleyCars = [1, 2, 3];
  const bmwCars = [1, 2, 3];

  return (
    <div className="container">
      <header className="header">
        <h1>Bienvenue sur la page de voiture 2025</h1>
      </header>

      <main className="main">
        {/* Ligne 1 - Mercedes */}
        <h2 className="author-name">Alaa Semmar</h2>
        <div className="car-row">
          {mercedesCars.map((car, index) => (
            <div key={index} className="car-block">
              <img src={mercedesImage} alt={`Mercedes ${index + 1}`} className="car-image" />
              <p>Mercedes-AMG C 63 S E PERFORMANCE.</p>
            </div>
          ))}
        </div>

        {/* Ligne 2 - Bentley */}
        <h2 className="author-name">Qejiou Salah eddine</h2>
        <div className="car-row">
          {bentleyCars.map((car, index) => (
            <div key={index} className="car-block">
              <img src={bentleyImage} alt={`Bentley ${index + 1}`} className="car-image" />
              <p>Bentley Continental GT.</p>
            </div>
          ))}
        </div>

        {/* Ligne 3 - BMW */}
        <h2 className="author-name">El Jadaoui Mohamed Mehdi</h2>
        <div className="car-row">
          {bmwCars.map((car, index) => (
            <div key={index} className="car-block">
              <img src={bmwImage} alt={`BMW ${index + 1}`} className="car-image" />
              <p>BMW M4 Competition.</p>
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
