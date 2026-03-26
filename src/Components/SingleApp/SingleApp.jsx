import { Download, Star, ThumbsUp, ShieldCheck, Cpu } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const formatNumber = num => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    return num;
};

const SingleApp = () => {
    const [installed, setInstall] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("installed-apps")) || [];
        setInstall(saved);
    }, []);

    const handleInstallation = (id) => {
        const saved = JSON.parse(localStorage.getItem("installed-apps")) || [];
        if (!saved.includes(id)) {
            const newSaved = [...saved, id];
            localStorage.setItem("installed-apps", JSON.stringify(newSaved));
            setInstall(newSaved);
            Swal.fire({
                title: "Success!",
                text: `${data.title} Installed Successfully`,
                icon: "success",
                confirmButtonColor: "#3b82f6"
            });
        }
    };

    const isInstalled = installed.includes(data.id);

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 min-h-screen'>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
                
                <div className="w-full lg:w-[45%] lg:sticky lg:top-24">
                    <div className="relative group overflow-hidden rounded-3xl shadow-2xl border border-gray-200">
                        <img
                            src={data.image}
                            alt={data.title}
                            className="w-full h-[300px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-blue-600 flex items-center gap-1 shadow-sm">
                            <ShieldCheck size={14} /> Verified
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-[55%] space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                            {data.title}
                        </h1>
                        <p className="text-blue-600 font-semibold mt-2 flex items-center gap-2">
                            <Cpu size={18} /> Developed By: {data.companyName}
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-4 md:gap-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="text-center space-y-1 border-r border-gray-200">
                            <div className="flex justify-center text-blue-500 mb-1"><Download size={24} /></div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Downloads</p>
                            <span className="text-xl font-bold text-gray-800">{formatNumber(data.downloads)}</span>
                        </div>
                        <div className="text-center space-y-1 border-r border-gray-200">
                            <div className="flex justify-center text-yellow-500 mb-1"><Star size={24} fill="currentColor" /></div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Ratings</p>
                            <span className="text-xl font-bold text-gray-800">{data.ratingAvg}</span>
                        </div>
                        <div className="text-center space-y-1">
                            <div className="flex justify-center text-green-500 mb-1"><ThumbsUp size={24} /></div>
                            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Reviews</p>
                            <span className="text-xl font-bold text-gray-800">{formatNumber(data.reviews)}</span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={() => handleInstallation(data.id)}
                            disabled={isInstalled}
                            className={`w-full md:w-auto px-12 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-3 ${
                                isInstalled 
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200" 
                                : "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1"
                            }`}
                        >
                            <Download size={22} />
                            {isInstalled ? `Installed (${data.size} MB)` : `Install Application (${data.size} MB)`}
                        </button>
                    </div>

                    <div className="pt-8 border-t border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            Product Description
                        </h2>
                        <div className="prose prose-blue text-gray-600 leading-relaxed text-lg">
                            <p>{data.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleApp;