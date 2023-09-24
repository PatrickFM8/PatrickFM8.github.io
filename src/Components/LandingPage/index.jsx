import React, { useState,useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  const fullText = "Mapping the Future of Charging Infrastructure. All Data. One Intuitive Platform!";
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (currentText.length < fullText.length) {
      setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
      }, 50); // 100ms delay between each character
    }
  }, [currentText]);

  const nextSectionRef = useRef(null);

  const handleScroll = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div className="flex flex-col items-center lg:ml-72 mr-1 mt-10 text-slate-600 w-full border-0">
        {/* Header Section with 100vh */}
        <div className="flex flex-col items-center justify-center h-screen mb-4 mt-[calc(-10vh)] md:mt-[calc(0vh)]">
        <img src="logo.png" width="120" height="120" alt="Eneport Logo" />
        <h1 className="text-4xl font-bold mb-4">E N E P O R T</h1>
        <p className="text-xl mb-6 text-center typing-effect">
          {currentText}<span className="cursor"></span>
        </p>
        <button onClick={handleScroll} className="mt-4 px-6 py-2 border rounded bg-green-500 text-white hover:bg-green-600 transition">
              Explore
            </button>
      </div>


      {/* Second Section - Text on Right, Image on Left */}
      <div ref={nextSectionRef} className="max-w-4xl flex flex-col-reverse md:flex-row-reverse justify-between items-center p-8 mt-10 space-y-8 md:space-y-0 md:space-x-8">
       
        <div className="flex-1 w-full md:w-1/2 ml-4">
          <h2 className="text-left text-gray-700 text-3xl font-semibold line-clamp-3 italic">Mapping with Eneport</h2>
          <p className='text-sm mt-4'>The Eneport platform integrates Map API for location screening and consolidates vital data, including grid operator details, substation locations, land ownership info, and more. Simplify project planning, connect with customers, and save valuable time with our comprehensive solution.</p>
        </div>
        <div className="w-full md:w-3/5">
          <img src="Eneportdemo.png" alt="iPad with Map" className="w-full h-auto" />
        </div>
      </div>

      {/* Third Section - Text on Left, Image on Right */}
      <div className="max-w-4xl flex flex-col md:flex-row justify-between items-center p-8 mt-10 space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex-1 w-full md:w-1/2 pl-6">
          <h2 className="text-left text-gray-700 text-3xl font-semibold line-clamp-3 italic">Data Gathering Made Efficient</h2>
          <p className='text-sm mt-4'>Today, Charging Point Operators manually gather data from many sources, and conduct time-consuming on-site visits to infrastructure projects. Eneport simplifies your planning by consolidating all relevant data points into one user-friendly platform.</p>
        </div>
        <div className="relative w-full md:w-1/2">
          <img src="ipadfront.png" alt="iPad Mockup" className="w-full h-auto" />
          <div className="pulsating-circle absolute top-2/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 rounded-full animate-pulse z-10"></div>
          <div className="pulsating-circle absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full animate-pulse z-10"></div>
          <div className="pulsating-circle absolute top-1/2 left-1/2 transform w-6 h-6 bg-blue-500 rounded-full animate-pulse z-10"></div>
        </div>
      </div>


         {/* First Section - Text on Left */}
         <div className="max-w-xl flex flex-col md:flex-row justify-between items-center p-8 mt-10 space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex-1">
          <h2 className="text-left text-gray-700 text-3xl font-semibold line-clamp-3 italic">Meet the Surge of EV Charging</h2>
          <p className='text-sm mt-4'>The current buildout of charging infrastructure falls short of meeting the surging demand for EV charging. Charging Point Operators lack an efficient tool to initiate projects faster and more cost-effective.</p>
        </div>

        <div className="relative w-full md:w-1/4">
        <Link to="/demo" className="mt-4 px-6 py-2 border rounded bg-green-500 text-white hover:bg-green-600 transition">
    Try Demo
</Link>
        </div>
      </div>

    

    </div>
  );
}

export default LandingPage;
