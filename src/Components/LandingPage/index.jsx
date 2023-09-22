import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center lg:ml-72 mt-10 text-slate-600">

      <h1 className="text-4xl font-bold mb-4">Welcome to Our Product</h1>
      <p className="text-xl mb-6 text-center">
        Learn more about our amazing product and its features. Experience the future of charging infrastructure mapping solutions.
      </p>
      <Link to="/demo" className="text-green-500 underline">Try the Demo</Link>
    </div>
  
  );
}

export default LandingPage;
