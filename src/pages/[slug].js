import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import { toc } from "mdast-util-toc";
import remarkHtml from "remark-html";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../components/header";
import Footer from "../components/footer";
import SocialMedias from "../components/social-medias";
import LatestPosts from "../components/lastest-posts";
import remarkSlug from "remark-slug";
import { getLatestPosts } from "../util/posts";
import TableOfContents from "../components/table-of-contents";

export default function PostPage({
  frontmatter: { title, banner, author },
  date,
  posts,
  slug,
  content,
}) {
  return (
    <>
      <Header />
      <main className="pt-12 bg-gray-100 pb-12">
        <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
          <div className="w-1/12 hidden xl:block"></div>

          <div className="xl:w-6/12 lg:w-9/12 w-full xl:ml-6 lg:mr-6">
            <div className="rounded-sm overflow-hidden bg-white shadow-sm">
              <div className="">
                <img src={banner} className="w-full h-96 object-cover" />
              </div>
              <div className="p-4 pb-5">
                <h1 className=" text-center block text-2xl font-semibold text-gray-700 font-roboto">
                  {title}
                </h1>
                <div className="mt-2 flex space-x-4 justify-center">
                  <div className="flex text-gray-400 text-sm items-center text-center">
                    <span className="mr-2 text-xs">
                      <i className="far fa-user"></i>
                    </span>
                    {author.name}
                  </div>
                  <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-2 text-xs">
                      <i className="far fa-clock"></i>
                    </span>
                    {date}
                  </div>
                </div>

                <div id="blog-content" className="pt-4 flex justify-center">
                  <div
                    className="prose prose-blue"
                    dangerouslySetInnerHTML={{ __html: content }}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  ></div>
                </div>

                <div className="mt-5 pt-5 border-t border-gray-200 flex gap-2">
                  <Link href="#">
                    <a className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                  <Link href="#">
                    <a className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        width={20}
                        height={20}
                      />
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white px-3 py-2 justify-between items-center rounded-sm mt-8 shadow-sm">
                <h2 className="text-base font-semibold font-roboto display-block my-2 text-gray-700">
                  Continue Lendo
                </h2>
                <hr />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                  {posts
                    .filter((post) => post.slug !== slug)
                    .slice(0, 3)
                    .map((post, idx) => (
                      <div className="rounded-sm bg-white p-3 pb-5" key={idx}>
                        <a
                          href={post.slug}
                          className="block rounded-md overflow-hidden"
                        >
                          <img
                            src={post.frontmatter.banner}
                            className="w-full h-40 object-cover transform hover:scale-110 transition duration-500"
                          />
                        </a>
                        <div className="mt-3">
                          <a href={post.slug}>
                            <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                              {post.frontmatter.title}
                            </h2>
                          </a>
                          <div className="mt-2 flex space-x-3">
                            <div className="flex text-gray-400 text-xs items-center">
                              <span className="mr-1 text-xs">
                                <i className="far fa-clock"></i>
                              </span>
                              {post.frontmatter.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-4/12 w-full mt-8 lg:mt-0">
            <SocialMedias />
            <TableOfContents content={content} />
            <LatestPosts posts={posts.reverse()} />
          </div>

          <div className="w-1/12 hidden xl:block"></div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(`${process.cwd()}/src/posts/`);

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const mdFile = fs.readFileSync(
    `${process.cwd()}/src/posts/${slug}.md`,
    "utf-8"
  );

  matter.clearCache();

  const { data: frontmatter, content: markdownContent } = matter(mdFile);
  const option = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = frontmatter.date.toLocaleDateString("pt-br", option);

  const remarkContent = await remark()
    .use(remarkHtml)
    .use(remarkSlug)
    .process(markdownContent);
  const content = remarkContent.toString();
  const posts = getLatestPosts();

  const parsedContent = await remark().parse(markdownContent);
  const table = toc(parsedContent);

  console.log(table);

  return {
    props: {
      frontmatter,
      date,
      slug,
      content,
      posts,
    },
  };
}
