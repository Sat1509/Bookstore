import React from "react";
import { motion } from "framer-motion";
import "./css/WatchMeShowcase.css";
import watch from "../../assets/watch-me-cover.jpg";

/*const WatchMeShowcase = () => {
  return (
    <div className="showcase-container">
      <div className="text-content">
        <h1 className="glitch-title">Watch Me</h1>
        <p className="immersive-description">
          The world is in ruins. Shadows of what once was linger in the air, and power is a fragile illusion. Step into the breathtaking chaos of <strong>Watch Me</strong>, the latest installment in Tahereh Mafi's <em>Shatter Me</em> series—where love is dangerous, survival is uncertain, and control is an illusion.
        </p>
      </div>
      <motion.div
        className="image-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="book-card">
          <div className="book-image shattered-effect">
            <img src={watch} alt="Watch Me Book Cover" />
            <div className="overlay" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WatchMeShowcase;*/


const WatchMeShowcase = () => {
  return (
    <section className="watch-me-section">
      <div className="watch-me-text">
        <h2>Watch Me: Between Love and Ruin.</h2>
        <p>
          Dive into the captivating world of <strong>Watch Me</strong>—a tale of
          love, ambition, and resilience. Whether you're new to this enthralling
          story or a longtime fan of the <strong>Shatter Me</strong> series, this is your ultimate guide.
        </p>
        <a href="#" className="watch-me-btn">
          Take Me There
        </a>
      </div>
      <div className="watch-me-image">
        <img src={watch} alt="Watch Me Book Cover" />
      </div>
    </section>
  );
};

export default WatchMeShowcase;
