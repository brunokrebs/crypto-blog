import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  return (
    <>
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
      {/* <div className="w-full h-24 bg-yellow-900 bg-opacity-95 absolute top-0 left-0">
        <div className="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">
          <div className="flex items-center">
            <button onClick={() => setIsVisibleMenu(!isVisibleMenu)}>
              Menu
            </button>

            <div
              className={
                isVisibleMenu
                  ? "hidden"
                  : "" +
                    "fixed inset-0 w-full h-full bg-white z-50 text-yellow-900"
              }
            >
              <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
                <button
                  onClick={() => setIsVisibleMenu(!isVisibleMenu)}
                  className="absolute top-0 left-0 mt-8 ml-6"
                >
                  X
                </button>

                <Link href="#">
                  <a className="inline-block border-b-4 border-transparent hover:border-yellow-900">
                    Link
                  </a>
                </Link>
              </div>
              <div className="absolute inset-0 w-full h-full bg-yellow-900 bg-opacity-20"></div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link href="/">
              <a className="text-white uppercase font-bold text-2xl tracking-widest">
                <h2 className="font-display font-bold text-5xl mb-6">
                  Crypto Blog
                </h2>
              </a>
            </Link>
          </div>

          <div className="flex items-center justify-end">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </div>
      </div> */}
    </>
  );
}
