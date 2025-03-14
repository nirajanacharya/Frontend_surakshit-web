import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 via-gray-900 to-black flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
     
            <h1 className="text-9xl font-bold text-white mb-4 animate-pulse">
                404
            </h1>
            
            <h2 className="text-3xl font-semibold text-blue-400 mb-8">
                Page Not Found
            </h2>
            
            <p className="text-lg text-blue-200 mb-12">
                Oops! The page you're looking for seems to have disappeared into the digital void.
            </p>
            
         
            <Link 
                to="/"
                className="inline-flex items-center px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
                <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
                Back to Home
            </Link>
        </div>
        
        
        <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute -inset-[10px] opacity-50">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[100px] animate-pulse" />
            </div>
        </div>
    </div>
);
};

export default ErrorPage;