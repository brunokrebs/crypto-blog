import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'
import { Post } from '../util/posts'

const LatestPost: FC<{ posts: Post[] }> = ({ posts }) => (
  <>
    {posts &&
      posts.map((post) => (
        <Link href={post.slug} key={post.slug}>
          <a className="flex group">
            <div className="flex-shrink-0">
              <div className="w-20 h-14 relative">
                <Image
                  layout="fill"
                  src={post.frontmatter.banner}
                  alt={post.frontmatter.title}
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex-grow pl-3">
              <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                {post.frontmatter.title}
              </h5>
              <div className="flex text-gray-400 text-sm items-center">
                <span className="mr-1 text-xs">
                  <i className="far fa-clock"></i>
                </span>
                {post.frontmatter.date}
              </div>
            </div>
          </a>
        </Link>
      ))}
  </>
)

export const LatestPosts: FC<{ posts: Post[] }> = ({ posts = [] }) => {
  return (
    <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
        Últimos Artigos
      </h3>
      <div className="space-y-4">
        <LatestPost posts={posts} />
      </div>
    </div>
  )
}
