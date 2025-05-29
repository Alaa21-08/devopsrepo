import React from 'react';
import './App.css';
import carImage from './car.jpg'; // Assure-toi que cette image est bien dans /src

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Bienvenue sur la page de voiture 2025</h1>
      </header>

      <main className="main">
        <h2 className="author-name">Alaa Semmar</h2>

        <div className="car-row">
          {[1, 2, 3].map((car, index) => (
            <div key={index} className="car-block">
              <img src={carImage} alt={`Voiture ${index + 1}`} className="car-image" />
              <p>Mercedes-AMG C 63 S E PERFORMANCE.</p>
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
