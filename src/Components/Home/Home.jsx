
import { Star, Github, Play, Apple } from 'lucide-react';
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


const Home = () => {
    const datas = useLoaderData()
    console.log(datas)
    return (
        <div className='container m-auto ' >
          <section className="bg-white pt-16 pb-10 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#1a2b3b] leading-tight">
                    We Build <br />
                    <span className="text-[#8b5cf6]">Productive</span> Apps
                </h1>
                
                <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                   AppHub is your ultimate destination for high-performance productivity tools designed to simplify your digital life. Seamlessly browse, install, and manage our curated collection of verified applications with just a single click.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg border border-gray-300 transition-all font-medium">
                        <Play size={20} fill="currentColor" />
                        <span>Google Play</span>
                    </button>
                    <button className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg border border-gray-300 transition-all font-medium">
                        <Apple size={20} fill="currentColor" />
                        <span>App Store</span>
                    </button>
                </div>

                <div className="relative mt-16 max-w-xs mx-auto">
                    <div className="bg-[#0a0a0a] rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-800">
                        <div className="bg-[#1e1b4b] rounded-[2rem] overflow-hidden aspect-[9/19] relative">
                            <div className="p-4 text-left">
                                <div className="flex justify-between items-center text-white text-[10px] mb-4">
                                    <span>All Courses</span>
                                    <div className="bg-orange-500 px-2 py-0.5 rounded-full">PRO</div>
                                </div>
                                <div className="bg-[#312e81] p-4 rounded-xl border border-white/10">
                                    <h3 className="text-white text-xs font-semibold">Complete Web development</h3>
                                    <p className="text-[8px] text-gray-300 mt-1">203 Lessons</p>
                                    <div className="w-full bg-gray-700 h-1 mt-3 rounded-full overflow-hidden">
                                        <div className="bg-purple-500 h-full w-[32%]"></div>
                                    </div>
                                    <span className="text-[8px] text-gray-400 mt-1 block">32%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                   
                </div>
            </div>

            <div className="mt-[-80px] bg-[#8b5cf6] h-60 w-full -z-10 rounded-t-[100px]"></div>
        </section>


           <div className="title m-4">
             <h2 className="text-center text-4xl font-bold">Trending Apps</h2>
             <p className="text-center ">Explore All Trending Apps on the Market developed by us</p>
           </div>
            <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4'> 
                {datas.map(data => <div>
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
            <Link to={'/app'} className=" mt-4 btn bg-blue-600 text-white border-0 hover:bg-primarydark ">Show More</Link>
        </div>
    );
};

export default Home;