import React from 'react';
import './Work.css';

const workItems = [
  {
    title: 'Community Outreach',
    description: 'Education and healthcare initiatives in underserved areas.',
    image: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Environmental Campaigns',
    description: 'Organizing clean-up drives and awareness events.',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Gender Equality Workshops',
    description: 'Empowering women and promoting inclusion.',
    image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80',
  },
  {
    title: 'Policy Advocacy',
    description: 'Collaborating with local governments for policy change.',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
];

function Work() {
  return (
    <section className="Work-section">
      <h2>My Work</h2>
      <div className="Work-cards">
        {workItems.map((item, idx) => (
          <div className="Work-card" key={idx}>
            <img src={item.image} alt={item.title} className="Work-card-img" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Work; 