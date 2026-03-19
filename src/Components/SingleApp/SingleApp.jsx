import { Download, Star, ThumbsUp } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';


const formatNumber = num => {
  if (num >= 1000000) {
    
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
   
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num; 
};



const SingleApp = () => {
    const [installed, setInstall]=useState([]);

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
     Swal.fire("Success!", "App Installed"); 
      
    }
  };

    const data = useLoaderData()
    // console.log(data)
    return (
        <div className='mx-auto px-4 py-8 h-screen'>
       
          
                <div className="flex  ">

                    <div className=" w-[40%] min-h-full">

                        <div className="   overflow-hidden  ">
                            <img
                                src={data.image}
                                alt="main image"
                                className="rounded-xl shadow-md border border-gray-100 h-[400px] w-full object-fill hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>


                    <div className=" w-[60%] flex flex-col gap-6  p-4">

                        <div className="p-2">
                           
                            <h1 className="text-2xl ">
                               {data.title}
                            </h1>
                            <div className="flex items-center gap-3 border-b-1 pb-4 mb-4">
                                <div className=" text-yellow-400 ">
                                   <p>Develop By : {data.companyName}</p>
                                </div>

                            </div>
                            <div className="flex gap-4">
                                <div className="download">
                                    <span>
                                        <Download />
                                    </span>
                                    <h2>Downloads</h2>
                                    <span>{formatNumber(data.downloads)}</span>
                                </div>
                                <div className="ratings">
                                    <span><Star/></span>
                                    <h1>Ratings</h1>
                                    <span>{data.ratingAvg}</span>
                                </div>
                                <div className="reviews">
                                    <span><ThumbsUp /></span>
                                    <h2>Reviews</h2>
                                    <span>{formatNumber(data.reviews)}</span>
                                </div>
                            </div>
                           <button
            onClick={() => handleInstallation(data.id)}
            disabled={installed.includes(data.id)}
            className={`btn ${installed.includes(data.id) ? "bg-gray-700" : "bg-blue-500"}`}
          >
            {installed.includes(data.id) ? `Installed (${data.size} MB)` : `Install ( ${data.size} MB)`}
          </button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <section className="mt-12 ">
                    <h2 className="text-4xl mb-4 font-bold" >Product Details</h2>
                    <div className="">
                        <p>{data.description}</p>
                       
                    </div>
                </section>

            
        </div >
    );
};

export default SingleApp;