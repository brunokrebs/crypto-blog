import { FC } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

export const SocialMedias: FC = () => {
  return (
    <div className="w-full bg-white shadow-sm rounded-sm p-4 ">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
        Nossas Redes Sociais
      </h3>
      <div className="flex gap-2">
        <Link href="#">
          <a className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
            <FontAwesomeIcon icon={faFacebookF} width={20} height={20} />
          </a>
        </Link>
        <Link href="#">
          <a className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
            <FontAwesomeIcon icon={faTwitter} width={20} height={20} />
          </a>
        </Link>
        <Link href="#">
          <a className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
            <FontAwesomeIcon icon={faInstagram} width={20} height={20} />
            <i className="fab fa-instagram"></i>
          </a>
        </Link>
        <Link href="#">
          <a className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
            <FontAwesomeIcon icon={faLinkedin} width={20} height={20} />
          </a>
        </Link>
      </div>
    </div>
  )
}
