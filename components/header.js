import { useState } from "react";

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  return (
    <>
      <div className="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">
        <div className="flex items-center">
          <button onClick={() => setIsVisibleMenu(!isVisibleMenu)}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          <div
              className={ isVisibleMenu ? 'hidden': '' +'fixed inset-0 w-full h-full bg-white z-50 text-yellow-900'}
            >
              <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
                <button
                  onClick={() => setIsVisibleMenu(!isVisibleMenu)}
                  className="absolute top-0 left-0 mt-8 ml-6"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </button>

                <a
                  href="#"
                  className="inline-block border-b-4 border-transparent hover:border-yellow-900"
                >
                  Link
                </a>
              </div>
              <div className="absolute inset-0 w-full h-full bg-yellow-900 bg-opacity-20"></div>
            </div>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="/"
            className="text-white uppercase font-bold text-2xl tracking-widest"
          >
            <h2 classNameName="font-display font-bold text-5xl mb-6">Crypto Blog</h2>
          </a>
        </div>

        <div className="flex items-center justify-end">
          <a href="/contact">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="w-full h-24 bg-yellow-900 bg-opacity-95 absolute top-0 left-0"></div>
    </>
  );
}
