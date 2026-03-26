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
                <h2 className="text-center p-2  text-4xl font-bold">{localData.length} Apps Found</h2>

            </div>
            <div className="grid grid-cols-1 gap-6 px-2 py-4">
                {localData.map((singleData) => (
                    <div
                        key={singleData.id}
                        className="flex flex-col md:flex-row items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 gap-4"
                    >
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                                {singleData.title}
                            </h3>

                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2 text-sm font-medium text-gray-500">
                                <span className="flex items-center gap-1.5 bg-blue-50 px-3 py-1 rounded-full text-blue-600">
                                    <Download size={16} />
                                    {formatDownloads(singleData.downloads)}
                                </span>
                                <span className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1 rounded-full text-yellow-600">
                                    <Star size={16} fill="currentColor" />
                                    {singleData.ratingAvg}
                                </span>
                                <span className="flex items-center gap-1.5 bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                                    {singleData.size} MB
                                </span>
                            </div>
                        </div>

                        <button
                            onClick={() => handleUnstall(singleData.id)}
                            className="w-full md:w-auto px-8 py-3 bg-red-50 text-red-600 font-semibold rounded-xl border border-red-100 hover:bg-red-600 hover:text-white transition-all duration-300 active:scale-95 shadow-sm"
                        >
                            Uninstall
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instalation;