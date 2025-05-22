import React from 'react';
import './App.css';
import carImage from './car.jpg'; // La même image pour les deux

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Bienvenue sur la page de voiture 2025</h1>
      </header>

      <main className="main">
        <img src={carImage} alt="Voiture 1" className="car-image" />
        <img src={carImage} alt="Voiture 2" className="car-image" />
        <p>Mercedes-AMG C 63 S E PERFORMANCE.</p>
      </main>

      <footer className="footer">
        <p>© 2025 Voitures Inc.</p>
      </footer>
    </div>
  );
}

export default App;