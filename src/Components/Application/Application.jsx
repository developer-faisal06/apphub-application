import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';

const Application = () => {
    const data = useLoaderData(); 
    const [searchTerm, setSearchTerm] = useState("");
    const filteredApps = data.filter((app) =>
        app.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-[#f8fafc] min-h-screen p-6 md:p-12 font-sans">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-[#0f172a] mb-2">Our All Applications</h1>
                <p className="text-gray-500">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    <h2 className="text-xl font-bold text-slate-800">
                        ({filteredApps.length}) Apps Found
                    </h2>
                    
                    <div className="relative w-full md:w-96">
                        <input 
                            type="text" 
                            placeholder="search Apps..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full border border-gray-200 rounded-xl py-3 px-12 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 shadow-sm transition-all"
                        />
                        <span className="absolute left-4 top-3.5 text-gray-400">
                           <Search></Search>
                        </span>
                    </div>
                </div>

              
                {filteredApps.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredApps.map((app) => (
                            <div 
                                key={app.id} 
                                className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                               
                                <div className="bg-gray-100 aspect-square rounded-xl mb-5 overflow-hidden">
                                    <img 
                                        src={app.image} 
                                        alt={app.title} 
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                
                                
                                <h3 className="font-bold text-[#1e293b] text-lg mb-1 truncate">
                                    {app.title}
                                </h3>
                                <p className="text-gray-400 text-xs mb-4">{app.companyName}</p>
                                
                                <div className="flex justify-between items-center mt-auto">
                                  
                                    <div className="bg-emerald-50 text-emerald-600 text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5">
                                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                        </svg>
                                        {(app.downloads / 1000).toFixed(0)}K
                                    </div>
                                    
                                  
                                    <div className="bg-orange-50 text-orange-500 text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1">
                                        <span className="text-sm">★</span> {app.ratingAvg}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                 
                    <div className="text-center py-20 text-gray-400 text-lg">
                        Oops! No applications found matching your search.
                    </div>
                )}
            </div>
        </div>
    );
};

export default Application;