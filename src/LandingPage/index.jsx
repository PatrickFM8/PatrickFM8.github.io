import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Welcome to Our Product</h1>
      <p>
        Learn more about our amazing product and its features. Experience the future of mapping solutions.
      </p>
      <Link to="/demo">Try the Demo</Link>
    </div>
  );
}

export default LandingPage;
