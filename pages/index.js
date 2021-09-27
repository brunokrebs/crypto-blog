import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../components/header";
import Footer from "../components/footer";
import BigArticle from "../components/big-aricle";
import ArticlesResume from "../components/articles-remuse";
import SocialMedias from "../components/social-medias";
import LastPosts from "../components/last-posts";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Crypto Blog</title>
      </Head>
      <Header></Header>
      <main className="pt-12 bg-gray-100 pb-12">
        <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
          <div className="w-2/12 hidden xl:block"></div>

          <div className="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
            <BigArticle post={posts[0]}/>

            <ArticlesResume posts={posts}/>
          </div>

          <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
            <SocialMedias/>

            <LastPosts posts={posts}/>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export async function getStaticProps() {
  //Get file from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  //Get slug and formmater from posts
  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    let date = new Date(frontmatter.date);
    date =
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    frontmatter.date = date;
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts:posts.reverse(),
    },
  };
}
