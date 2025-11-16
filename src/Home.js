import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import home from './assets/Home.jpg';

function Home() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Home-main">
      <div className="Home-hero-simple" style={{ backgroundImage: `url(${home})` }}>
        <div className="Home-hero-content">
          <h1 className="Home-title">Liria BD</h1>
          <p className="Home-tagline">Empowering Communities, Inspiring Change</p>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-ellipse">
          <div 
            className="scroll-fill" 
            style={{ height: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>

      <section className="Home-about-simple">
        <div className="Home-about-container">
          <div className="Home-about-image">
            <img src={home} alt="Liria BD" />
          </div>
          <div className="Home-about-content">
            <h2>Welcome to Liria</h2>
            <div className="Home-about-text">
              <p>
                Before we begin, I want to take a moment to express my heartfelt gratitude for visiting the site I've created with the help of a very dear friend — a brilliant coder who truly deserves all the love this world has to offer.
              </p>
              <p>
                The name <strong>Liria</strong> was suggested by my best friend during a brainstorming session when we were searching for something meaningful to capture the essence of our vision. The word, believed to have Albanian origins, means <em>"freedom."</em> The moment I heard it, it resonated deeply — it felt right.
              </p>
              <p>
                Liria was originally envisioned to focus solely on women and children, working to eliminate the social stigmas that often cause them distress. However, with time, our mission has expanded. While our primary commitment remains the well-being of women and children, we now aim to support and address any form of suffering — for any life on Earth.
              </p>
            </div>
            <div className="Home-about-button-container">
              <button className="Home-about-btn" onClick={() => navigate('/about')}>Read Our Full Story</button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Ashra Section */}
      <section className="Home-meet-ashra-simple">
        <div className="Home-meet-ashra-container">
          <div className="Home-meet-ashra-image">
            <img src="/Ashra.jpg" alt="Ashra" />
          </div>
          <div className="Home-meet-ashra-content">
            <h3>Meet Ashra</h3>
            <div className="Home-meet-ashra-text">
              <p>
                Hello everyone — I'm Ashra. My name was given to me by my favorite person in the world, my grandfather. It quite literally means fortunate or felicitous — something I'm still discovering for myself, one day at a time.
              </p>
              <p>
                I've always been drawn to social service, and for the past six years, I've poured my heart into building this organization. It grew from countless hours of thinking, planning, and engaging in different forms of community work.
              </p>
              <p>
                So, let's embark on this journey of wellness together. As they say, <em>"The best time to start was years ago. The second best time is now."</em> And now is exactly when we begin.
              </p>
            </div>
            <div className="Home-meet-ashra-button-container">
              <button className="Home-meet-ashra-btn" onClick={() => navigate('/about')}>Read Full Story</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 