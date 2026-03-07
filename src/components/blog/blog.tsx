import "./blog.scss";

const blogPosts = [
  {
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    title: "Top Web Development Trends to Watch in 2026",
    desc: "Explore the latest trends in modern web development including React, serverless architecture, and scalable frontend frameworks.",
    date: "Feb 15, 2026",
    readTime: "6 min read",
  },
  {
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    title: "How Blockchain is Transforming Modern Businesses",
    desc: "Discover how blockchain technology, smart contracts, and decentralized applications are reshaping digital platforms.",
    date: "Feb 10, 2026",
    readTime: "7 min read",
  },
  {
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    title: "Key Features Every Successful Mobile App Needs",
    desc: "Learn the essential features and best practices for building scalable and user-friendly mobile applications.",
    date: "Feb 5, 2026",
    readTime: "5 min read",
  },
];

const Blog = () => (
  <section className="blog">
    <div className="blog__header">
      <span className="blog__badge">Insights</span>
      <h2 className="blog__title">Latest Tech Insights</h2>
      <p className="blog__subtitle">
        Industry insights on web development, blockchain technology, and mobile applications
      </p>
      <button className="blog__all-btn">
        View All Articles <span>→</span>
      </button>
    </div>

    <div className="blog__posts-grid">
      {blogPosts.map((post, idx) => (
        <div className="blog__post" key={idx}>
          <div className="blog__image-wrapper">
            <img src={post.image} alt={post.title} className="blog__image" />
            <span className="blog__category">{post.category}</span>
          </div>

          <div className="blog__content">
            <h3 className="blog__post-title">{post.title}</h3>
            <p className="blog__post-desc">{post.desc}</p>

            <div className="blog__meta">
              <span className="blog__date">{post.date}</span>
              <span className="blog__read-time">{post.readTime}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Blog;