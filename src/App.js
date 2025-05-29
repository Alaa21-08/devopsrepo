import React from 'react';
import './App.css';
import carImage from './car.jpg'; // La même image

function App() {
  // On crée un tableau de 3 éléments identiques pour répéter l'affichage
  const cars = [1, 2, 3];

  return (
    <div className="container">
      <header className="header">
        <h1>Bienvenue sur la page de voiture 2025</h1>
      </header>

      <main className="main">
        {cars.map((car, index) => (
          <div key={index} className="car-block">
            <img src={carImage} alt={`Voiture ${index + 1}`} className="car-image" />
            <p>Mercedes-AMG C 63 S E PERFORMANCE.</p>
          </div>
        ))}
      </main>

      <footer className="footer">
        <p>© 2025 Voitures Inc.</p>
      </footer>
    </div>
  );
}

export default App;
