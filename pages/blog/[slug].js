import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkToc from "remark-toc";
import remarkHtml from "remark-html";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SocialMedias from "../../components/social-medias";
import LastPosts from "../../components/last-posts";
import TableOfContent from "../../components/table-of-contents";
import { MDXProvider } from "@mdx-js/react";

const Heading2 = ({ children = "" }) => {
  console.log("vim aqui");
  const idText = children.replace(/ /g, "-").toLowerCase();

  return <h2 id={idText}>{children}</h2>;
};

const MDXComponents = {
  h2: Heading2,
};

export default function PostPage({
  frontmatter: { title, date, banner, author },
  posts,
  slug,
  content,
}) {
  return (
    <>
      <Header />
      <main className="pt-12 bg-gray-100 pb-12">
        <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
          <div className="w-2/12 hidden xl:block"></div>

          <div className="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
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

                {/* <div className="pt-4 flex justify-center prose prose-blue" >
                  <MDXProvider components={MDXComponents}>
                    <div dangerouslySetInnerHTML={{__html:newContent}}></div>
                  </MDXProvider>
                </div> */}

                <div className="pt-4 flex justify-center">
                  <div
                    className="prose prose-blue"
                    dangerouslySetInnerHTML={{ __html: addTitleLinks(content) }}
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

            <div className="flex bg-white px-3 py-2 justify-between items-center rounded-sm mt-8">
              <h5 className="text-base uppercase font-semibold font-roboto">
                Outros Artigos
              </h5>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
              {posts
                .filter((post) => post.slug !== slug)
                .map((post, idx) => {
                  if (idx > 2) return;
                  return (
                    <div
                      className="rounded-sm bg-white p-3 pb-5 shadow-sm"
                      key={idx}
                    >
                      <a
                        href={`/blog/${post.slug}`}
                        className="block rounded-md overflow-hidden"
                      >
                        <img
                          src={post.frontmatter.banner}
                          className="w-full h-40 object-cover transform hover:scale-110 transition duration-500"
                        />
                      </a>
                      <div className="mt-3">
                        <a href={`/blog/${post.slug}`}>
                          <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                            {post.frontmatter.title}
                          </h2>
                        </a>
                        <div className="mt-2 flex space-x-3">
                          <div className="flex text-gray-400 text-xs items-center">
                            <span className="mr-1 text-xs">
                              <i className="far fa-user"></i>
                            </span>
                            {post.frontmatter.author.name}
                          </div>
                          <div className="flex text-gray-400 text-xs items-center">
                            <span className="mr-1 text-xs">
                              <i className="far fa-clock"></i>
                            </span>
                            {post.frontmatter.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
            <SocialMedias />
            <TableOfContent content={content} />
            <LastPosts posts={posts.reverse()} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  //Complete atual article information

  const { data: frontmatter, content } = matter(markdownWithMeta);
  const date = new Date(frontmatter.date);

  const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const year = date.getFullYear();

  frontmatter.date = `${day}/${month}/${year}`;

  const parseMdToHTML = await remark()
    .use(remarkToc)
    .use(remarkHtml, { sanitize: false, allowDangerousHTML: true })
    .process(content);

  const postHTML = parseMdToHTML.toString();
  //Complete atual article end

  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    const date = new Date(frontmatter.date);
    const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    const year = date.getFullYear();

    frontmatter.date = `${day}/${month}/${year}`;
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      frontmatter,
      slug,
      content: postHTML,
      posts,
    },
  };
}

function addTitleLinks(content) {
  const regex = /<(.*?)>(.*?)<\/.*?>/g;

  const formatedContent = content.match(regex).map((stringHtml) => {
    const regex = /<h2>(.*?)<\/h2>/g;
    if (stringHtml.match(regex)) {
      const text = stringHtml.replace("<h2>", "").replace("</h2>", "");

      const link = text
        .replace(/ /g, "-")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      return `<h2 id=${link}>${text}</h2>`;
    }
    return stringHtml;
  });
  return formatedContent.join("");
}
