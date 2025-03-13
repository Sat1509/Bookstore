
// FantasyPage.js

import React from "react";
import './css/FantasyPage.css';
import { Link } from "react-router-dom";
import sixofcrows from "../../assets/sixofcrows.jpeg"
import poppywar from "../../assets/poppywar.jpg"

function FantasyPage() {
  return (
    <div className="fantasy-page">
      <section className="hero-section">
        <h1 className="hero-title">Worlds Beyond the Veil</h1>
        <p className="hero-subtitle">Escape into the realms of magic, mystery, and adventure.</p>
        <button className="cta-btn">Explore Our Fantasy Collection</button>
      </section>

      <section className="intro">
        <p>
          In these worlds of magic and wonder, characters navigate realms of danger, romance, and deep mystery. Immerse yourself in tales that evoke both dreams and reality.
        </p>
      </section>

      <section className="featured-books">
        <div className="book-card">
          <img src={poppywar} alt="The Poppy War" className="book-cover" />
          <h3>The Poppy War</h3>
          <p>"An epic tale of war, magic, and tragedy, set against the backdrop of ancient China." - <i>Book Review</i></p>
          <button className="learn-more-btn">Learn More</button>
        </div>
        
        <div className="book-card">
          <img src={sixofcrows} alt="Six of Crows" className="book-cover" />
          <h3>Six of Crows</h3>
          <p>"A gripping tale of heists, criminals, and unlikely heroes." - <i>Book Review</i></p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </section>

      <section className="related-books">
        <h3>Explore More</h3>
        <div className="related-books-carousel">
          {/* More book covers here */}
        </div>
      </section>

      <Link to="/">Go Back</Link>

      <footer className="footer-fantasy">
      <p>&copy; 2025 Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default FantasyPage;
