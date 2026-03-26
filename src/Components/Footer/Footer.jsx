import React from 'react';
import { Github, Twitter, Mail, AppWindow, Smartphone, Download, Trash2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-16 border-t border-gray-800">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-gray-800 pb-10">
                
                <div className="text-center md:text-left space-y-4">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <AppWindow className="text-blue-500" size={28} />
                        <h2 className="text-white text-3xl font-extrabold tracking-tight">AppHub</h2>
                    </div>
                    <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
                        The ultimate destination for your favorite applications. 
                        Manage, install, and uninstall with just one click. 
                        Simplified app management for a better experience.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end justify-center">
                    <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 w-full md:w-auto">
                        <h3 className="text-white font-semibold mb-5 text-center md:text-right uppercase text-xs tracking-widest">
                            Quick Connect
                        </h3>
                        <div className="flex justify-center md:justify-end gap-6">
                            <a href="#" className="hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1">
                                <Twitter size={22} />
                            </a>
                            <a href="#" className="hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                                <Github size={22} />
                            </a>
                            <a href="#" className="hover:text-red-400 transition-all duration-300 transform hover:-translate-y-1">
                                <Mail size={22} />
                            </a>
                            <a href="#" className="hover:text-green-400 transition-all duration-300 transform hover:-translate-y-1">
                                <Smartphone size={22} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between mt-8 text-xs text-gray-500 font-medium space-y-4 md:space-y-0 uppercase tracking-widest">
                <div className="flex gap-4">
                    <span className="flex items-center gap-1"><Download size={14} /> Easy Install</span>
                    <span className="flex items-center gap-1"><Trash2 size={14} /> Quick Uninstall</span>
                </div>
                <p>&copy; {new Date().getFullYear()} AppHub Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;