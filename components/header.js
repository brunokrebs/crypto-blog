import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  return (
      <nav className="shadow-sm">
        <div className="container px-4 mx-auto flex items-center py-3">
            
            <div className="lg:w-44 w-40">
                <a href="index.html">
                    Crypto Blog
                </a>
            </div>
           
            <div className="ml-12 lg:flex space-x-5  hidden">
                <a href="index.html"
                    className="flex items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span className="mr-2">
                        <i className="fas fa-home"></i>
                    </span>
                    Home
                </a>
                <a href="#"
                    className="flex items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span className="mr-2">
                        <i className="far fa-file-alt"></i>
                    </span>
                    About
                </a>
                <a href="#"
                    className="flex items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span className="mr-2">
                        <i className="fas fa-phone"></i>
                    </span>
                    Contact
                </a>
            </div>
          
            
            <div className="text-xl text-gray-700 cursor-pointer ml-4 lg:hidden block hover:text-blue-500 transition"
                id="open_sidebar">
                <p>Menu</p>
                <i className="fas fa-bars"></i>
            </div>

        </div>
    </nav>
  );
}
