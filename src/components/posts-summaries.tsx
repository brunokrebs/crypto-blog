import Link from 'next/link'
import Image from 'next/image'
import { ReactNode } from 'react'
import { Post } from '../util/posts'

const PostSummary: (posts: Post[]) => ReactNode = (posts) =>
  posts.map((post, idx) => (
    <div className="rounded-sm bg-white p-4 pb-5 shadow-sm" key={idx}>
      <Link href={post.slug}>
        <a className="block rounded-md overflow-hidden">
          <Image
            src={post.frontmatter.banner}
            alt="Landscape picture"
            width="100%"
            height="15rem"
          />
        </a>
      </Link>
      <div className="mt-3">
        <Link href={post.slug}>
          <a href={post.slug}>
            <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
              {post.frontmatter.title}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              {post.frontmatter.description}
            </p>
          </a>
        </Link>
        <div className="mt-2 flex space-x-3">
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
  ))

export const PostsSummaries: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {PostSummary(posts)}
    </div>
  )
}
