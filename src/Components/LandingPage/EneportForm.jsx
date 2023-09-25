import { useForm, ValidationError } from '@formspree/react';
import React from 'react';

function EneportForm() {
    const [state, handleSubmit] = useForm("myyqnval");  // Replace "myyqnval" with your Formspree form ID
  
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  
    return (
        <div className="flex flex-col items-center space-y-4">
        <h2 className="text-gray-700 text-3xl font-semibold line-clamp-3 italic">I'm interested!</h2>
        <p className='text-sm'>The Eneport platform is still in development. Sign up to receive the latest updates and opportunity to become an early tester</p>
        
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex items-center space-x-4">
                <input 
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Enter your email" 
                    className="flex-1 p-2 border rounded-full bg-white" 
                  
                    required
                />
                <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="px-4 py-1 border rounded bg-indigo-600 text-white hover:bg-indigo-500 transition text-md"
                >
                    Send
                </button>
            </div>
            <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
                className="mt-2"
            />
        </form>
    </div>
    );
}

export default EneportForm;
