import React from "react";
import "./App.css";
import "./index.css";


function App() {
  return (
    <div className="container">
      <header>
        <nav>
          <a href="/" className="nav-button">Home</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Hello, I'm Dohyun.</h1>
            <p>I'm a data science student at the University of Hong Kong.</p>
            <p>Scroll down for more info 👇👇👇</p>
          </div>
        </section>
        <section className="features">
          <div className="feature">
            <i className="fas fa-chart-line"></i>
            <h3>Data Analysis</h3>
            <p>
              I enjoy working with data and using statistical methods to gain
              insights.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-code"></i>
            <h3>Programming</h3>
            <p>
              I have experience with Python, R, and Java, among other
              languages.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-language"></i>
            <h3>Machine Learning</h3>
            <p>
              I'm passionate about machine learning, specifically NLP. 
            </p>
          </div>
        </section>

        <div className="container">
        <main>
          <h1>Contacts</h1>
          <a href="https://www.linkedin.com/in/dohyun-nam-855a16220/" className="contact-list">LinkedIn</a>
          <a href="https://github.com/dohyunnam" className="contact-list">GitHub</a>
        </main>
      </div>
      
      <div className="container">
        <main>
          <h1>Projects</h1>
          <p>empty</p>
        </main>
      </div>

      </main>
      <footer>
        <p>updated on May 11th, 2023</p>
      </footer>
    </div>
  );
}

export default App;