import React from 'react';
import EneportForm from './EneportForm';  // Ensure the path is correct

function BlurredCircleWrapper() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      {/* Blurred Circle */}
      <div className="absolute w-80 h-80 md:w-144 md:h-144 blurred-circle"></div>

      {/* EneportForm Component */}
      <div className="z-10 max-w-xl p-8 space-y-8">
        <EneportForm />
      </div>
    </div>
  );
}

export default BlurredCircleWrapper;
