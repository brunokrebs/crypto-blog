import { GetStaticProps } from 'next'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { BigArticle } from '../components/big-article'
import { PostsSummaries } from '../components/posts-summaries'
import { SocialMedias } from '../components/social-medias'
import { LatestPosts } from '../components/latest-posts'
import { getPosts, Post } from '../util/posts'
import { FC } from 'react'

const Home: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <div>
      <Header />

      <main className="pt-12 bg-gray-100 pb-12">
        <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
          <div className="w-1/12 hidden xl:block"></div>

          <div className="xl:w-6/12 lg:w-8/12 w-full xl:ml-6 lg:mr-6">
            <BigArticle post={posts[0]} />

            <PostsSummaries posts={posts} />
          </div>

          <div className="xl:w-4/12 lg:w-4/12 w-full mt-8 lg:mt-0">
            <SocialMedias />

            <LatestPosts posts={posts} />
          </div>

          <div className="w-1/12 hidden xl:block"></div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = () => {
  const posts = getPosts()
  return {
    props: {
      posts: posts,
    },
  }
}
