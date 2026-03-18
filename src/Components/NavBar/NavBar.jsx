import { Github, TextAlignJustify } from 'lucide-react';
import React from 'react';
import logo from '../../assets/logo.jpg';

const navlinks = [
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "App",
    "path": "/app"
  },
  {
    "id": 3,
    "name": "Instalation",
    "path": "/instalation"
  }
]

const NavBar = () => {
    
    return (
        <div className="navbar bg-gray-50 text-gray-950 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                      <TextAlignJustify></TextAlignJustify>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-gray-50 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        
                        {
                            navlinks.map(route=> <li className='text-bold font-bold'   ><a href={route.path } > {route.name}</a></li> )
                        }
                       
                    </ul>
                </div>
                <a className=" text-xl" href='#'><img className='w-[150px]' src={logo} alt="This is Logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                            navlinks.map(route=> <li className='text-bold font-bold'  ><a href={route.path } > {route.name}</a></li> )
                        }
                </ul>
            </div>
            <div className="navbar-end">
                
                <a className="btn bg-blue-600 text-white outline-0 border-0" > <Github></Github> Contribute</a>
            </div>
        </div>
    );
};

export default NavBar;