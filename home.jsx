import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const navigate = useNavigate(); 

  return (
    <div>
      {/* Header */}
      <header>
        <h1>Health Trax Symptom Logger</h1>
        {/* TODO: Add a logo if needed */}
      </header>

      {/* Main Content */}
      <main>
        <div className="pageNav" id="pageTop">
          <button id="signUp" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
          <button id="logIn" onClick={() => navigate('/login')}>
            Log In
          </button>
        </div>
        <div>
          <h2>Health Tracking Simplified</h2>
          <p>
            Health Trax's Symptom Log is the ultimate way to track your health and
            create a symptom diary.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <div className="pageNav" id="pageBottom">
          <button className="reportBug">Report Bug</button>
          <button className="contact">Contact Developer</button>
        </div>
        <p id="disclaimer">This is an independently developed app.</p>
      </footer>
    </div>
  );
};

export default Home;
