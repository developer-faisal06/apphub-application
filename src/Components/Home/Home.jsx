
import { Star } from 'lucide-react';
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