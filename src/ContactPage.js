import React from 'react';
function ContactPage() {
    return (
      <div className="container">
        <header>
          <nav>
            <a href="/" className="nav-button">Home</a>
            <a href="./contact" className="nav-button">Contacts</a>
            <a href="./project" className="nav-button">Projects</a>
          </nav>
        </header>
        <main>
          <h1>Contacts</h1>
          <a href="https://www.linkedin.com/in/dohyun-nam-855a16220/" className="contact-list">LinkedIn</a>
          <a href="https://github.com/dohyunnam" className="contact-list">GitHub</a>
        </main>
      </div>
    );
}
export default ContactPage;