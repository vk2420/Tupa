import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="Contact-section">
      <h2>Contact</h2>
      <div className="Contact-card">
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80" alt="Contact" className="Contact-img" />
        <div>
          <p>Email: <a href="mailto:aarav.activist@email.com">aarav.activist@email.com</a></p>
          <p>Twitter: <a href="https://twitter.com/aarav_activist" target="_blank" rel="noopener noreferrer">@aarav_activist</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/aarav-activist" target="_blank" rel="noopener noreferrer">linkedin.com/in/aarav-activist</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact; 