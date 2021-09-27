import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../components/header";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <div>
      <Head>
        <title>Crypto Blog</title>
      </Head>
      <Header></Header>
      <div className="font-sans text-gray-700 antialiased bg-white">
        <div className="text-center py-12 px-6 mt-12">
          <h1 className="font-display font-bold text-5xl mb-6">Crypto Blog</h1>
          <p className="max-w-lg mx-auto">Crypto Blog</p>
        </div>
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 pb-24">
          {posts.map((post, idx) => (
            <div key={idx}>
              <a href="#">
                <img
                  src={post.frontmatter.banner}
                  className="w-full h-52 md:h-64 lg:h-96 xl:h-64 object-cover"
                />
              </a>

              <div className="bg-gray-50 p-8">
                <div className="text-xs text-gray-600 uppercase font-semibold">
                  {post.frontmatter.date}
                </div>
                <h2 className="mt-3 text-3xl mb-6 font-display text-black leading-tight max-w-sm">
                  {post.frontmatter.title}
                </h2>

                <p className="mt-4 max-w-md">{post.frontmatter.description}</p>

                <a
                  href="#"
                  className="flex items-center mt-6 uppercase text-sm text-black font-semibold"
                >
                  Ler mais
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
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
      posts,
    },
  };
}
