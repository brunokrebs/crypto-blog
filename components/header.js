import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faPhone,
  faBars,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Crypto Blog</title>
      </Head>
      {/* <nav className="shadow-sm ">
        <div className="container mx-auto flex items-center py-5">
          <div className="lg:w-44 w-40">
            <Link href="/">
              <a className="font-semibold text-lg  transition hover:text-blue-500">
                Crypto Blog
              </a>
            </Link>
          </div>

          <div className="ml-12 lg:flex space-x-5  hidden">
            <Link href="/">
              <a className="flex items-center font-semibold text-sm  transition hover:text-blue-500">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faHome} />
                </span>
                Home
              </a>
            </Link>
            <Link href="#">
              <a className="flex items-center font-semibold text-sm  transition hover:text-blue-500">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faFileAlt} />
                </span>
                About
              </a>
            </Link>
            <Link href="#">
              <a className="flex items-center font-semibold text-sm  transition hover:text-blue-500">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                Contact
              </a>
            </Link>
          </div>
          <div
            className="text-xl text-gray-700 cursor-pointer ml-4 lg:hidden block hover:text-blue-500 transition"
            onClick={() => setIsVisibleMenu(!isVisibleMenu)}
          >
            <FontAwesomeIcon icon={isVisibleMenu ? faTimesCircle : faBars} />
          </div>
          <div
            className={isVisibleMenu ? "block" : "hidden"}
            onClick={() => setIsVisibleMenu(!isVisibleMenu)}
          >
            <div className="fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500">
              <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-3 pt-3">
                Menu
              </h3>
              <div className="">
                <Link href="#">
                  <a className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span className="w-6">
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    Home
                  </a>
                </Link>
                <Link href="#">
                  <a className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span className="w-6">
                      <FontAwesomeIcon icon={faFileAlt} />
                    </span>
                    About
                  </a>
                </Link>
                <Link href="#">
                  <a className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                    <span className="w-6">
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav> */}
      <div class="header-2">
        <nav class="bg-white py-2 md:py-4">
          <div class="container px-4 mx-auto md:flex md:items-center">
            <div class="flex justify-between items-center">
              <Link href="/">
                <a class="transition hover:text-blue-500 font-bold text-xl">
                  Crypto Blog
                </a>
              </Link>
              <button
                class="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                onClick={() => setIsVisibleMenu(!isVisibleMenu)}
              >
                <FontAwesomeIcon icon={faBars} />
              </button>
            </div>

            <nav
              class={`${
                isVisibleMenu ? "flex" : "hidden"
              } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}
            >
              <Link href="/">
                <a
                  class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  {" "}
                  <span className="mr-2">
                    <FontAwesomeIcon icon={faHome} />
                  </span>
                  Home
                </a>
              </Link>
              <Link href="/blog/posts">
                <a
                  class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  {" "}
                  <span className="mr-2">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </span>{" "}
                  Artigos
                </a>
              </Link>
              <Link href="/">
                <a
                  class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  {" "}
                  <span className="mr-2">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </span>{" "}
                  Sobre-nós
                </a>
              </Link>
              <Link href="/">
                <a
                  href="#"
                  class="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  {" "}
                  <span className="mr-2">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  Contato
                </a>
              </Link>
            </nav>
          </div>
        </nav>
      </div>
    </>
  );
}
