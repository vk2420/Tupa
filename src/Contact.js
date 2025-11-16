import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="Contact-section">
      <h2>Contact</h2>
      <div className="Contact-card">
        <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=100&q=80" alt="Contact" className="Contact-img" />
        <div>
          <p>Email: <a href="mailto: ashrakabir@gmail.com">ashrakabir@gmail.com</a></p>
          <p>Facebook: <a href="https://www.facebook.com/share/1D9S8B128k/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Liria BD on Facebook</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ashra-kabir-b047aa327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">linkedin.com/in/aarav-activist</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact; 