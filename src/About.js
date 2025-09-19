import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import home from './assets/Home.jpg';

function About() {
  const navigate = useNavigate();
  
  return (
    <section className="About-section">
      <div className="About-container">
        <div className="About-image">
          <img src={home} alt="Liria BD" />
        </div>
        <div className="About-content">
          <h2>Welcome to Liria</h2>
          <div className="About-text">
            <p>
              Before we begin, I want to take a moment to express my heartfelt gratitude for visiting the site I've created with the help of a very dear friend — a brilliant coder who truly deserves all the love this world has to offer.
            </p>
            
            <p>
              Over the years, I have been incredibly fortunate to find people who share the same deep sense of compassion for fellow beings as I do. I am forever indebted to them for helping me bring this project to life and for offering invaluable insights along the way.
            </p>
            
            <p>
              The name <strong>Liria</strong> was suggested by my best friend during a brainstorming session when we were searching for something meaningful to capture the essence of our vision. The word, believed to have Albanian origins, means <em>"freedom."</em> The moment I heard it, it resonated deeply — it felt right. That was six years ago, and ever since, I have imagined this name growing into something significant, something that people would feel proud to be associated with.
            </p>
            
            <p>
              From my childhood, I have been deeply connected to social causes, and for the past six years, I have nurtured the dream of creating Liria. Today, even though we are just at the beginning of this journey, I feel immense gratitude for how far we've come.
            </p>
            
            <p>
              Liria was originally envisioned to focus solely on women and children, working to eliminate the social stigmas that often cause them distress. However, with time, our mission has expanded. While our primary commitment remains the well-being of women and children, we now aim to support and address any form of suffering — for any life on Earth. <strong>Compassion for all remains at the heart of what we do.</strong>
            </p>
            
            <div className="About-closing">
              <p>
                Before you leave, we would love to hear from you. Your thoughts, recommendations, and words of encouragement mean the world to us. Please take a moment to share your reflections about our work and vision.
              </p>
              
              <p>
                Thank you — from all of us at <strong>Team Liria</strong> — for your time, your attention, and your kindness.
              </p>
              
              <div className="About-signature">
                <p>With gratitude,</p>
                <p><strong>Team Liria</strong></p>
              </div>
            </div>
          </div>
          
          <div className="About-button-container">
            <button className="About-learn-more-btn" onClick={() => navigate('/contact')}>
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Meet Ashra Section */}
      <div className="Meet-ashra-section">
        <div className="Meet-ashra-container">
          <div className="Meet-ashra-image">
            <img src={home} alt="Ashra" />
          </div>
          <div className="Meet-ashra-content">
            <h3>Meet Ashra</h3>
            <div className="Meet-ashra-text">
              <p>
                Hello everyone — I'm Ashra. My name was given to me by my favorite person in the world, my grandfather. It quite literally means fortunate or felicitous — something I'm still discovering for myself, one day at a time.
              </p>
              
              <p>
                I've always been intrigued by the mysteries of life, often finding myself lost in thoughts that wander beyond the cosmic realm. There's something beautiful about having the time and space to wonder aimlessly, without always needing an answer.
              </p>
              
              <p>
                At the moment, I'm between jobs — and honestly, I think that's pretty cool. To me, comfort and luxury mean living without urgency, allowing thoughts to flow freely without the pressure of deadlines. That clarity is priceless.
              </p>
              
              <p>
                I've always been drawn to social service, and for the past six years, I've poured my heart into building this organization. It grew from countless hours of thinking, planning, and engaging in different forms of community work.
              </p>
              
              <p>
                I love art — even if I can't create it myself — and I have a deep appreciation for all forms of craft and creativity. I also cherish slow mornings, beautiful music, and, most importantly, the people I love.
              </p>
              
              <p>
                So, let's embark on this journey of wellness together. As they say, <em>"The best time to start was years ago. The second best time is now."</em> And now is exactly when we begin. It feels surreal to be stepping into something so meaningful, with the hope of making a genuine difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 