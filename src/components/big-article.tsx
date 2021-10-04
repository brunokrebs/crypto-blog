import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { Post } from '../util/posts'

export const BigArticle: FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="rounded-sm overflow-hidden bg-white shadow-sm">
      <Link href={post.slug}>
        <a href={post.slug} className="block rounded-md overflow-hidden">
          <Image
            src={post.frontmatter.banner}
            alt={post.frontmatter.title}
            width="100%"
            height="24rem"
          />
        </a>
      </Link>
      <div className="p-4 pb-5">
        <Link href={post.slug}>
          <a href={post.slug}>
            <h2 className="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
              {post.frontmatter.title}
            </h2>
          </a>
        </Link>
        <p className="text-gray-500 text-sm mt-2">
          {post.frontmatter.description}
        </p>
        <div className="mt-3 flex space-x-4">
          <div className="flex text-gray-400 text-sm items-center">
            <span className="mr-2 text-xs">
              <i className="far fa-user"></i>
            </span>
            {post.frontmatter.author.name}
          </div>
          <div className="flex text-gray-400 text-sm items-center">
            <span className="mr-2 text-xs">
              <i className="far fa-clock"></i>
            </span>
            {post.frontmatter.date}
          </div>
        </div>
      </div>
    </div>
  )
}
