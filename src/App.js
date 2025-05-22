import React from 'react';
import './App.css';
import carImage from './car.jpg'; // Assure-toi d'avoir l'image car.jpg dans le dossier src

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Bienvenue sur la page de voiture</h1>
      </header>

      <main className="main">
        <img src={carImage} alt="Voiture" className="car-image" />
        <p>Mercedes-AMG C 63 S E PERFORMANCE.</p>
      </main>

      <footer className="footer">
        <p>© 2025 Voitures Inc.</p>
      </footer>
    </div>
  );
}

export default App;
