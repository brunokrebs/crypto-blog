import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faFileAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileMenu() {
  return (
    <div
      className="fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 z-10 opacity-0 transition-all duration-500"
    >
      <div
        className="fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500"
      >
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
  );
}
