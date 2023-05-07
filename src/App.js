import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const toggleContactPopup = () => {
    setIsContactPopupOpen(!isContactPopupOpen);
  };

  return (
    <div className="container">
      <header>
        <nav>
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <button className="nav-button" onClick={toggleContactPopup}>
            Contact
          </button>
          {isContactPopupOpen && <ContactPopup />}
        </nav>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>Hello, I'm Dohyun</h1>
            <p>I'm a data science student at the University of Hong Kong.</p>
            <p>I'm particularly interested in natural language processing.</p>
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
              I have experience with Python, Java, and JavaScript, among other
              languages.
            </p>
          </div>
          <div className="feature">
            <i className="fas fa-language"></i>
            <h3>Natural Language Processing</h3>
            <p>
              I'm passionate about using computers to understand and generate
              human language.
            </p>
          </div>
        </section>
        <section className="counter">
          <h2>Click the button to increment the counter:</h2>
          <p>Counter: {count}</p>
          <button onClick={incrementCount}>Increment</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 Dohyun Nam. All rights reserved.</p>
      </footer>
    </div>
  );
}

function ContactPopup() {
  return (
    <div className="contact-popup">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/dohyun-nam-855a16220/" className="contact-list">LinkedIn</a>
        </li>
        <li>
          <a href="https://github.com/dohyunnam" className="contact-list">GitHub</a>
        </li>
      </ul>
    </div>
  );
}

export default App;