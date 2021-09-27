import { useState } from "react";

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  return (
    <>
      <div className="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">
        <div className="flex items-center">
          <button onClick={() => setIsVisibleMenu(!isVisibleMenu)}>
           Menu
          </button>

          <div
              className={ isVisibleMenu ? 'hidden': '' +'fixed inset-0 w-full h-full bg-white z-50 text-yellow-900'}
            >
              <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
                <button
                  onClick={() => setIsVisibleMenu(!isVisibleMenu)}
                  className="absolute top-0 left-0 mt-8 ml-6"
                >
                X
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
            Contact
          </a>
        </div>
      </div>

      <div className="w-full h-24 bg-yellow-900 bg-opacity-95 absolute top-0 left-0"></div>
    </>
  );
}
