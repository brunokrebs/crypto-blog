import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faFileAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(true);
  return (
    <>
      <Head>
        <title>Crypto Blog</title>
      </Head>
      <nav className="shadow-sm">
        <div className="container px-4 mx-auto flex items-center py-3">
          <div className="lg:w-44 w-40">
            <a href="/">Crypto Blog</a>
          </div>

          <div className="ml-12 lg:flex space-x-5  hidden">
            <a
              href="/"
              className="flex items-center font-semibold text-sm  transition hover:text-blue-500"
            >
              <span className="mr-2">
                <FontAwesomeIcon icon={faHome} />
              </span>
              Home
            </a>
            <a
              href="#"
              className="flex items-center font-semibold text-sm  transition hover:text-blue-500"
            >
              <span className="mr-2">
                <FontAwesomeIcon icon={faFileAlt} />
              </span>
              About
            </a>
            <a
              href="#"
              className="flex items-center font-semibold text-sm  transition hover:text-blue-500"
            >
              <span className="mr-2">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              Contact
            </a>
          </div>

          <div
            className="text-xl text-gray-700 cursor-pointer ml-4 lg:hidden block hover:text-blue-500 transition"
            id="open_sidebar"
          >
            <p>Menu</p>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}
