import Head from "next/head";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faPhone,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  return (
    <>
      <Head>
        <title>Crypto Blog</title>
      </Head>
      <nav className="shadow-sm">
        <div className="container px-4 mx-auto flex items-center py-3">
          <div className="lg:w-44 w-40">
            <Link href="/">
              <a>Crypto Blog</a>
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
            onClick={()=> setIsVisibleMenu(!isVisibleMenu)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className={isVisibleMenu? 'hidden' : 'block'} onClick={()=> setIsVisibleMenu(!isVisibleMenu)}>
            <MobileMenu/>
          </div>
        </div>
      </nav>
    </>
  );
}
