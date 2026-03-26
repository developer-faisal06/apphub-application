import { Search, Star } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';

const formatDownloads = num => {
  if (num >= 1000000) {
    
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
   
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num; 
};


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
                           {filteredApps.map(data => <div>
                    <Link to={`/appdetails/${data.id}`}>
                     <div  className="card bg-gray-300 w-full shadow-sm">
                        <figure>
                            <img className='w-full h-[250px] object-cover'
                                src={data.image}
                                alt="App Thambnails" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title ">{data.title}</h2>                            
                            <div className="card-actions justify-between">
                                <span className='bg-amber-200 px-1 text-black rounded' >{formatDownloads(data.downloads)}</span>
                               <div className='flex bg-amber-300 px-1 text-black rounded items-center'>
                                 <span >{data.ratingAvg} </span>
                                 <span  >< Star className='w-[15px] ml-1'> </Star> </span>
                               </div>
                            </div>
                        </div>
                    </div>
                    </Link>

                </div>)}
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