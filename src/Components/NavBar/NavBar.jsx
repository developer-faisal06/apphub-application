import { Github, TextAlignJustify } from 'lucide-react';
import React from 'react';
import logo from '../../assets/logo.jpg';
import { NavLink } from 'react-router';

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
                            navlinks.map(route => <li className='text-bold font-bold'   ><NavLink to={route.path}>{route.name}</NavLink></li>)
                        }

                    </ul>
                </div>


                <NavLink to="/" className="text-xl">
                    <img className="w-[150px]" src={logo} alt="This is Logo" />
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navlinks.map(route => <li className='text-bold font-bold'  > <NavLink to={route.path}>{route.name}</NavLink> </li>)
                    }
                </ul>
            </div>
            <div className="navbar-end">

                <a href='https://github.com/developer-faisal06/apphub-application' target='_blank' className="btn bg-blue-600 text-white outline-0 border-0" > <Github></Github> Contribute</a>
            </div>
        </div>
    );
};

export default NavBar;