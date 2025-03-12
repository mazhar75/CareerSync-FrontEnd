// src/components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = ({ 
  copyrightText = "© 2025 CareerSync. All rights reserved.",
  socialLinks = [
    { label: "GitHub", href: "https://github.com/mazhar75" },
    { label: "LinkedIn", href: "https://linkedin.com/in/md-mazharul-islamam-7994a5212" },
    { label: "Portfolio", href: "https://mazharul.vercel.app" }
  ],
  backgroundColor = "rgba(0, 0, 0, 0.7)",
  textColor = "#ffffff",
  accentColor = "#00bcd4"
}) => {
  return (
    <footer 
      className={styles.footer}
      style={{
        '--background': backgroundColor,
        '--text-color': textColor,
        '--accent-color': accentColor
      }}
    >
      <div className={styles.container}>
        <p className={styles.copyright}>{copyrightText}</p>
        <nav className={styles.socialLinks}>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;