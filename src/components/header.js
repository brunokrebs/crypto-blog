import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Crypto Blog</title>
      </Head>
      <div className="header-2">
        <nav className="bg-white py-2 md:py-4">
          <div className="container px-4 mx-auto md:flex md:items-center">
            <div className="flex justify-between items-center">
              <Link href="/">
                <a className="transition hover:text-blue-500 font-bold text-xl">
                  Crypto Blog
                </a>
              </Link>
              <button
                className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                onClick={() => setIsVisibleMenu(!isVisibleMenu)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            <nav
              className={`${
                isVisibleMenu ? "flex" : "hidden"
              } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}
            >
              <Link href="/">
                <a className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">
                  {" "}
                  <span className="mr-2">
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                  Início
                </a>
              </Link>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
}
