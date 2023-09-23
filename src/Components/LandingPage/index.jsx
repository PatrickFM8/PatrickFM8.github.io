import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center lg:ml-72 mt-10 text-slate-600">
<img src="logo.png" alt="Eneport Logo" className="rotate-logo" />      
<h1 className="text-4xl font-bold mb-4">E N E P O R T</h1>
      <p className="text-xl mb-6 text-center">
      Mapping the Future of Charging Infrastructure. All Data. One Intuitive Platform.
      </p>
      <Link to="/demo" className="text-green-500 underline mb-10">Try the Demo</Link>

      {/* Additional content sections */}
      <div className="max-w-3xl flex flex-col p-8 mt-10">
      <h2 class="text-left text-gray-700 text-3xl font-semibold">Meeting the Surge of EV Charging Demands</h2>

        <p className='text-sm mt-4'>The current buildout of charging infrastructure is not sufficient to meet the increasing demand of EV charging. Charging Point Operators lack a comprehensive tool to initiate charging infra projects faster and more cost-effective.</p>
      </div>
      
      <div className="max-w-3xl flex flex-col p-8 mt-10">
      <h2 class="text-left text-gray-700 text-3xl font-semibold">Filling the Data Void</h2>

        <p className='text-sm mt-4'>The current process involves the manual gathering of data from many sources, and time-consuming on-site visitations to infrastructure.</p>
      </div>
      
      <div className="max-w-3xl flex flex-col p-8 mt-10">
      <h2 class="text-left text-gray-700 text-3xl font-semibold">Data Mapping with Eneport</h2>

        <p className='text-sm mt-4'>Eneport allows CPOs to screen potential locations on an intuitive platform, utilizing Map API to build informative processes</p>
      </div>

      <div className="max-w-3xl flex flex-col p-8 mt-10">
      <h2 class="text-left text-gray-700 text-3xl font-semibold">Something maybe</h2>

        <p className='text-sm mt-4'>Eneport is the solution. By gathering all necessary data, including grid operator info, substation location, contact details, and much more.</p>
      </div>
      <div className="max-w-3xl flex flex-col p-8 mt-10">
      <h2 class="text-left text-gray-700 text-3xl font-semibold">Something maybe</h2>

        <p className='text-sm mt-4'>Eneport gathers all necessary data, including grid operator info, substation location, ownership info, and much more, in one maps platform. It allows Charging Point Operators to seamlessly plan their charging infra projects, contact customers, and save time
</p>
      </div>
      <div class="flex space-x-8 bg-white p-8 shadow-md">
    <div class="card flex flex-col items-center p-8 bg-white shadow-lg">
        <h3 class="card-title font-semibold text-gray-800 mb-4">Challenges in Meeting the Surge of EV Charging Demands</h3>
        <p class="card-description text-gray-600 mb-8">Eneport brings an innovative solution to the challenges faced in the EV charging industry. With a state-of-the-art mapping system, gather all necessary data in one intuitive platform.</p>
       
    </div>
    <div class="card flex flex-col items-center p-8 bg-white shadow-lg">
        <h3 class="card-title font-semibold text-gray-800 mb-4">Make it yours</h3>
        <p class="card-description text-gray-600 mb-8">With Eneport's customizability, tailor the platform to fit your organization's needs, ensuring seamless integration and usability.</p>
 
    </div>
</div>

    </div>
  );
}


export default LandingPage;
