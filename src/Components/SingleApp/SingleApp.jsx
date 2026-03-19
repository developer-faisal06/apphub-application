import { Download, Star, ThumbsUp } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router';


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
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div>
       
            <main className=" mx-auto px-4 py-8 ">
                <div className="flex  ">

                    <div className=" w-[40%] min-h-full">

                        <div className="   overflow-hidden  ">
                            <img
                                src={datas.image}
                                alt="main image"
                                className="rounded-xl shadow-md border border-gray-100 h-[400px] w-full object-fill hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>


                    <div className=" w-[60%] flex flex-col gap-6  p-4">

                        <div className="p-2">
                           
                            <h1 className="text-2xl ">
                               {datas.title}
                            </h1>
                            <div className="flex items-center gap-3 border-b-1 pb-4 mb-4">
                                <div className=" text-yellow-400 ">
                                   <p>Develop By : {datas.companyName}</p>
                                </div>

                            </div>
                            <div className="flex gap-4">
                                <div className="download">
                                    <span>
                                        <Download />
                                    </span>
                                    <h2>Downloads</h2>
                                    <span>{formatNumber(datas.downloads)}</span>
                                </div>
                                <div className="ratings">
                                    <span><Star/></span>
                                    <h1>Ratings</h1>
                                    <span>{datas.ratingAvg}</span>
                                </div>
                                <div className="reviews">
                                    <span><ThumbsUp /></span>
                                    <h2>Reviews</h2>
                                    <span>{formatNumber(datas.reviews)}</span>
                                </div>
                            </div>
                            <button className=" mt-4 btn bg-blue-600 text-white border-0 hover:bg-primarydark ">
                        install
                    </button>
                        </div>
                    </div>



                    


                    <div>


                    </div>
                </div>



                <section className="mt-12 ">
                    <h2 className="text-4xl mb-4 font-bold" >Product Details</h2>
                    <div className="">
                        <p>{datas.description}</p>
                       
                    </div>
                </section>

            </main >
        </div >
    );
};

export default SingleApp;