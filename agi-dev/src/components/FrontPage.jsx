import React from 'react';
import './styling/FrontPage.css'; // Assuming you have a CSS file for styles

const FrontPage = () => {
  return (
    <div className="wiki-container">
      {/* Header */}
      <header className="wiki-header">
        <div className="frontpage-logo">
          <img src={`${process.env.PUBLIC_URL}/agidevlogo.png`} alt="AGI Logo" />
        </div>
        <h1>Artificial General Intelligence Wiki</h1>
        <p className="intro-text">
          Welcome to ArtificialGeneralIntelligence.dev, a dedicated platform for exploring, researching, and discussing the future of Artificial General Intelligence (AGI).
        </p>
      </header>

      {/* Main Content with Sidebar */}
      <div className="wiki-main-content">
        <section className="main-content">
          {/* About Section */}
          <h2>About Artificial General Intelligence</h2>
          <p>
            Artificial General Intelligence (AGI) refers to machines capable of performing intellectual tasks that humans can do, generalizing across tasks, learning, and reasoning with human-like abilities.
          </p>
          <p>
            AGI research aims to revolutionize industries like healthcare, engineering, and environmental science, with profound implications for society. Our mission is to foster collaboration, share research, and ensure ethical AGI development.
          </p>

          {/* Featured Topics Section */}
          <h2>Featured Topics</h2>
          <ul className="featured-list">
            <li><a href="#code-repo">Code Repository</a></li>
            <li><a href="#research-papers">Research Papers</a></li>
            <li><a href="#experimental-tools">Experimental Tools</a></li>
            <li><a href="#agi-ethics">AGI Ethics</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>

          {/* Featured Content Section */}
          <h2>Featured Content</h2>
          <div className="featured-content">
            <p><strong>Code Repository:</strong> A collection of open-source code to accelerate AGI research and development.</p>
            <p><strong>Research Papers:</strong> Explore academic research that shapes the future of AGI across disciplines.</p>
            <p><strong>AGI Ethics:</strong> Understand the ethical frameworks necessary for the responsible advancement of AGI.</p>
            <p><strong>Projects:</strong> Discover the latest AGI projects, from experimental designs to large-scale implementations.</p>
          </div>

          {/* Featured Articles - New Section */}
          <h2>Random Featured Article</h2>
          <div className="featured-article">
            <h3>Machine Ethics</h3>
            <p>
              Machine ethics is the study of ethical principles applied to artificial agents. As AGI evolves, machine ethics becomes increasingly crucial in ensuring these agents act in alignment with human values and societal norms.
            </p>
          </div>

          <h2>Participate in AGI Development</h2>
          <ul className="participate-list">
            <li><a href="/forums">Join the Community Discussion</a></li>
            <li><a href="/contribute">Contribute to Code and Research</a></li>
            <li><a href="/support">Support AGI Research</a></li>
          </ul>
        </section>

        {/* Sidebar with Links */}
        <aside className="wiki-sidebar">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/about">About AGI</a></li>
            <li><a href="/papers">Latest Research Papers</a></li>
            <li><a href="/code">Code Repositories</a></li>
            <li><a href="/tools">Experimental Tools</a></li>
            <li><a href="/team">Team Members</a></li>
          </ul>

          <h2>Resources</h2>
          <ul>
            <li><a href="/community">Community</a></li>
            <li><a href="/forums">Discussion Forums</a></li>
            <li><a href="/support">Support AGI Development</a></li>
            <li><a href="/news">News & Updates</a></li>
          </ul>
        </aside>
      </div>

    </div>
  );
};

export default FrontPage;
