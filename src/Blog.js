import React from 'react';
import './Blog.css';

const blogPosts = [
  {
    title: 'Empowering Rural Women: My Recent Experience',
    excerpt: 'Last month, I led a workshop in rural Rajasthan focused on empowering women through education and skill development...',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Why Climate Action Needs Grassroots Voices',
    excerpt: "Climate change is not just a global issue—it's a local one. Here's how grassroots activism is making a difference...",
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
  {
    title: 'Youth for Change: Mobilizing the Next Generation',
    excerpt: 'Engaging youth in activism is key to sustainable change. Here are my thoughts from a recent youth summit...',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    link: '#',
  },
];

function Blog() {
  return (
    <section className="Blog-section">
      <h2>Blog</h2>
      <div className="Blog-cards">
        {blogPosts.map((post, idx) => (
          <div className="Blog-card" key={idx}>
            <img src={post.image} alt={post.title} className="Blog-card-img" />
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={post.link} className="Blog-card-link">Read more</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog; 