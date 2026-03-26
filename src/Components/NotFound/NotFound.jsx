import React from 'react';
import { Link } from 'react-router';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <AlertTriangle size={64} className="text-red-500 mb-6" />
            <h1 className="text-6xl font-black text-gray-900 mb-4">404</h1>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Oops! Page Not Found</h2>
           
            <Link 
                to="/" 
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
            >
                <Home size={20} /> Back to AppHub
            </Link>
        </div>
    );
};

export default NotFound;