import { Link } from "react-router-dom";
import React from "react";
import "./css/Thriller.css";
import gonegirl from "../../assets/gonegirl.jpg";
import goodgirl from "../../assets/goodgirl's.jpg"
import thriller from "../../assets/thrillertitle.jpg"

const Thriller = () => {
  return (
    <div className="thriller-page">
      {/* Header Section */}
      <header className="thriller-header">
  <div className="thriller-header-content">
    <div className="thriller-text-content">
      <h1 className="thriller-title">Shadows Whisper, Secrets Scream</h1>
      <p className="thriller-subtitle">
        Footsteps echo in empty halls,<br />
        A breath too close, a name that calls.<br />
        Truth is a knife, sharp and thin—<br />
        Will you chase, or be chased within?
      </p>
      <button className="thriller-unravel-button">Unravel Now</button>
    </div>
    <img src={thriller} alt="Thriller Image" className="thriller-header-image" />
  </div>
</header>



      {/* Book Showcase Section */}
      <section className="thriller-books">
  <div className="thriller-book-card">
    <img src={gonegirl} alt="Gone Girl Cover" className="thriller-book-cover" />
    <div className="thriller-book-info">
      <h2 className="thriller-book-title">Gone Girl</h2>
      <p className="thriller-book-description">
        A marriage full of secrets unravels when Amy Dunne disappears. A twisted psychological thriller that keeps you questioning reality.
      </p>
      <button className="thriller-read-more">Read More</button>
    </div>
  </div>

  <div className="thriller-book-card">
    <img src={goodgirl} alt="A Good Girl’s Guide to Murder Cover" className="thriller-book-cover" />
    <div className="thriller-book-info">
      <h2 className="thriller-book-title">A Good Girl’s Guide to Murder</h2>
      <p className="thriller-book-description">
        A high school student reopens a closed murder case for her project, uncovering dark truths that no one wanted exposed.
      </p>
      <button className="thriller-read-more">Read More</button>
    </div>
  </div>
</section>


      {/* Quote Section */}
      <section className="thriller-quote">
        <blockquote>
          "The truth is rarely pure and never simple."  
          <span>- Oscar Wilde</span>
        </blockquote>
      </section>

      {/* Back to Home Button */}
      <div className="thriller-back-home">
        <Link to="/" className="thriller-back-button">Go Back</Link>
      </div>
    </div>
  );
};

export default Thriller;
