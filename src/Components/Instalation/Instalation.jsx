import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { Download, Star } from 'lucide-react';
import Swal from 'sweetalert2';

const formatDownloads = num => {
  if (num >= 1000000) {
    
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
   
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num; 
};

const Instalation = () => {
    const data = useLoaderData()
    // console.log(data)

    const [localData, setLocalData] = useState(data);

    const handleUnstall = (id) => {

        const saved = JSON.parse(localStorage.getItem("installed-apps")) || [];
        const remainingIds = saved.filter(savedId => savedId !== id);
        localStorage.setItem("installed-apps", JSON.stringify(remainingIds));
        const remainingData = localData.filter(app => app.id !== id);
        setLocalData(remainingData);
       Swal.fire("Success!", "App Uninstalled"); 
       
    };
    return (
        <div className='container mx-auto h-screen text-gray-950' >

            <div className="title m-4">
                <h2 className="text-center text-4xl font-bold">Your Installed Apps </h2>
                <p className="text-center pt-4">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex justify-between">
                <h2 className="text-center text-4xl font-bold">{localData.length} Apps Found</h2>

            </div>
            <div>
                {
                    localData.map(singleData => <div className='flex items-center justify-between mt-4 p-8 bg-gray-200'>
                        <div className="flex flex-col">
                            <p className='text-2xl ' >{singleData.title}</p>
                            <div className="p-2 flex gap-2">
                            <span className='flex items-center'><Download /> {formatDownloads(singleData.downloads)} </span> 
                            <span className='flex items-center'> <Star/> {singleData.ratingAvg}</span>
                            <span className='flex items-center'>  {singleData.size} MB</span>
                            </div>
                              
                        </div>
                        <button onClick={() => handleUnstall(singleData.id)} className="btn bg-blue-500">
                            Uninstall
                        </button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Instalation;