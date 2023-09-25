import React, { useState,useEffect, useRef, } from 'react';
import { Link,useLocation,useNavigate  } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import EneportForm from './EneportForm';
import BlurredCircleWrapper from './BlurredCircleWrapper';


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
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (currentText === fullText) {
      const element = document.getElementById("what-we-do");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          navigate("#what-we-do"); // Update using navigate
        }, 1000);
      }
    }
  }, [currentText, navigate]);
  

  

  useEffect(() => {
    if (location.hash) {  // Changed this line to use location from react-router-dom
        const id = location.hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  }, [location.hash]);  // Dependency on the location's hash

  
  
  return (
    <div className="flex flex-col items-center lg:ml-72 mr-1 mt-10 text-slate-600 w-full border-0">
        {/* Header Section with 100vh */}
        <div className="relative flex flex-col items-center justify-center h-screen mb-4 mt-[calc(-10vh)] md:mt-[calc(0vh)]">

{/* Blurred Circle Background */}
<div className="hidden absolute w-80 h-80 md:w-144 md:h-144 blurred-circle negative-z"></div>

{/* Wrapper div to position content above the circle */}
<div className="relative z-10 flex flex-col items-center justify-center">
    <img src="logo.png" width="120" height="120" alt="Eneport Logo" />
    <h1 className="text-4xl font-bold mb-4">E N E P O R T</h1>
    <p className="text-xl mb-6 text-center typing-effect">
        {currentText}<span className="cursor"></span>
    </p>
    <button className="hidden mt-4 px-6 py-2 border rounded bg-green-500 text-white hover:bg-green-600 transition">
        Explore
    </button>
</div>
</div>




      {/* Second Section - Text on Right, Image on Left */}
      <div id="what-we-do" className="max-w-4xl flex flex-col-reverse md:flex-row-reverse justify-between items-center p-8 mt-10 space-y-8 md:space-y-0 md:space-x-8 ">
       
        <div className="flex-1 w-full md:w-1/2 ml-4 ">
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

{/* Abous us */}
<h2 id="about-us" className="text-left text-gray-700 text-3xl font-semibold line-clamp-3 italic">The Eneport Team</h2>
     <div  className="max-w-4xl p-8 mt-10 space-y-8 md:space-y-0 md:grid md:grid-cols-3 gap-4">

  {/* Card 1 */}
  <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
    <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div> {/* Image Placeholder */}
    <h3 className="text-gray-700 font-semibold">Anoya Yousef</h3>
    <h5 className="text-gray-700 font-semibold mb-2 text-xs">CEO</h5>
    <p className="text-sm text-gray-600 text-center">Short description for card 1.</p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
    <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div> {/* Image Placeholder */}
    <h3 className="text-gray-700 font-semibold">Christoffer Eriksson</h3>
    <h5 className="text-gray-700 font-semibold mb-2 text-xs">COO</h5>
    <p className="text-sm text-gray-600 text-center">Short description for card 2.</p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
    <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div> {/* Image Placeholder */}
    <h3 className="text-gray-700 font-semibold">Moa Bernard</h3>
    <h5 className="text-gray-700 font-semibold mb-2 text-xs">CMO</h5>
    <p className="text-sm text-gray-600 text-center">Short description for card 3.</p>
  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
    <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div> {/* Image Placeholder */}
    <h3 className="text-gray-700 font-semibold">Patrick Widuch</h3>
    <h5 className="text-gray-700 font-semibold mb-2 text-xs">CTO</h5>
    <p className="text-sm text-gray-600 text-center">Short description for card 4.</p>
  </div>

  {/* Card 5 */}
  <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
    <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div> {/* Image Placeholder */}
    <h3 className="text-gray-700 font-semibold">Jan Carius</h3>
    <h5 className="text-gray-700 font-semibold mb-2 text-xs">CSO</h5>
    <p className="text-sm text-gray-600 text-center">Short description for card 5.</p>
  </div>

  {/* Card 6 */}
  <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
    <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div> {/* Image Placeholder */}
    <h3 className="text-gray-700 font-semibold">Axel Tardell</h3>
    <h5 className="text-gray-700 font-semibold mb-2 text-xs">CPO</h5>
    <p className="text-sm text-gray-600 text-center">Short description for card 6.</p>
  </div>

</div>

   {/* Pricing */}
   <div id="pricing" className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Pricing</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Choose Your Plan
            </p>
        </div>

        <div className="mt-10 sm:mt-16 lg:mt-20">
            <div className="flex flex-wrap -mx-4 justify-center">
                {/* Card Wrapper for Sizing */}
                <div className="px-4 mb-8 w-full sm:w-1/2 md:w-1/3">
                    <div className="relative h-full">
                        <div className="absolute top-0 left-0 w-full h-full blurred-circle-free z-0 rounded-lg"></div>
                        <div className="relative z-10 shadow-lg rounded-lg p-6 bg-white h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Free</h3>
                                <ul className="mb-6">
                                    <li>Basic features</li>
                                    <li>1 user</li>
                                  
                                </ul>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-4">$0</p>
                                <button className="px-6 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">Choose</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pro Card */}
                <div className="px-4 mb-8 w-full sm:w-1/2 md:w-1/3">
                    <div className="relative h-full">
                        <div className="absolute top-0 left-0 w-full h-full blurred-circle-pro z-0 rounded-lg"></div>
                        <div className="relative z-10 shadow-lg rounded-lg p-6 bg-white h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Pro</h3>
                                <ul className="mb-6">
                                    <li>Advanced maps</li>
                                    <li>Cost calculations</li>
                                    <li>10 users</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-4">$99/mo</p>
                                <button className="px-6 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">Choose</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Custom Card */}
                <div className="px-4 mb-8 w-full sm:w-1/2 md:w-1/3">
                    <div className="relative h-full">
                        <div className="absolute top-0 left-0 w-full h-full blurred-circle-custom z-0 rounded-lg"></div>
                        <div className="relative z-10 shadow-lg rounded-lg p-6 bg-white h-full flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold mb-4">Custom</h3>
                                <ul className="mb-6">
                                    <li>Customized solutions</li>
                                    <li>Unlimited users</li>
                                    <li>Dedicated support</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-4">Contact Us</p>
                                <button className="px-6 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700">Get Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




     {/* Contact */}
    
     <div id="contact">
      <BlurredCircleWrapper />
    </div>


    </div>

    
  );
}

export default LandingPage;
