import React from "react";
import "./Blog.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const blogs = [
  {
    id: 1,
    title: "Top 10 Bridal Trends for 2025",
    image: "https://images.pexels.com/photos/948185/pexels-photo-948185.jpeg?auto=compress&cs=tinysrgb&w=600",
    excerpt:
      "Discover the hottest bridal trends that are taking the wedding world by storm this year. From modern minimalism to vintage elegance, we've got you covered!",
    link: "/blog/bridal-trends-2025",
  },
  {
    id: 2,
    title: "How to Choose the Perfect Bridal Outfit",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=600",
    excerpt:
      "Struggling to pick the right dress? Here's a complete guide to finding the bridal outfit of your dreams.",
    link: "/blog/choose-perfect-outfit",
  },
  {
    id: 3,
    title: "5 Tips to Style Your Wedding Look",
    image: "https://images.pexels.com/photos/1730877/pexels-photo-1730877.jpeg?auto=compress&cs=tinysrgb&w=600",
    excerpt:
      "Get expert tips on accessorizing and styling your bridal attire for the ultimate wedding day glow.",
    link: "/blog/style-wedding-look",
  },
];

const BlogPage = () => {
  return (
    <>
    <Navbar/>
    <div className="blog-page">
      <h1 className="blog-header">Wedding Inspirations</h1>
      <p className="blog-subtext">Your go-to source for bridal fashion and wedding tips.</p>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <a href={blog.link} className="blog-read-more">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BlogPage;