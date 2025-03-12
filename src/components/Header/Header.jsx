// src/components/Header/Header.jsx
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = ({ 
  title = "AI-Powered Job-Resume Matching: Upload your resume and job description now for an instant fit analysis!",
  linkText = "Learn More",
  linkTo = "/learn-more",
  backgroundColor = "rgba(0, 0, 0, 0.7)",
  textColor = "#ffffff",
  accentColor = "#00bcd4",
  animationSpeed = "30s"
}) => {
  return (
    <header 
      className={styles.header}
      style={{
        '--background': backgroundColor,
        '--text-color': textColor,
        '--accent-color': accentColor,
        '--animation-speed': animationSpeed
      }}
    >
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <span className={styles.marqueeText}>{title}</span>
        </div>
        <nav className={styles.nav}>
          <Link
            to={linkTo}
            className={styles.navLink}
          >
            {linkText}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;