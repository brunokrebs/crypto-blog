import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF,faTwitter, faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SocialMedias from "../../components/social-medias";
import LastPosts from "../../components/last-posts";
import marked from "marked";

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
          <div className="w-3/12 hidden xl:block"></div>

          <div className="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">
            <div className="rounded-sm overflow-hidden bg-white shadow-sm">
              <div className="">
                <img src={banner} className="w-full h-96 object-cover" />
              </div>
              <div className="p-4 pb-5">
                <h2 className="block text-2xl font-semibold text-gray-700 font-roboto">
                  {title}
                </h2>
                <div className="mt-2 flex space-x-4">
                  <div className="flex text-gray-400 text-sm items-center">
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

                <div className="prose">
                  <div
                    dangerouslySetInnerHTML={{ __html: marked(content) }}
                  ></div>
                </div>

                <p className="text-gray-500 text-sm mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis et sunt saepe accusamus eum ex sint est neque
                  provident tempore, minus laborum repudiandae vitae temporibus
                  nesciunt, sed enim quo harum a id, alias maiores! Incidunt
                  iusto minus explicabo itaque iure recusandae
                </p>

                <p className="bg-green-50 border border-green-500 p-3 text-sm  mt-5">
                  <span className="text-xl mr-1 text-gray-400">
                    <i className="fas fa-quote-left"></i>
                  </span>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus blanditiis earum nam, quisquam magnam aut odio
                  aliquam inventore quibusdam mollitia! Alias, mollitia eveniet
                  iure quidem natus quis assumenda consectetur beatae. Lorem,
                  ipsum dolor quibusdam.
                  <span className="text-xl ml-1 text-gray-400">
                    <i className="fas fa-quote-right"></i>
                  </span>
                </p>

                <p className="text-gray-500 text-sm mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis et sunt saepe accusamus eum ex sint est neque
                  provident tempore, minus laborum repudiandae vitae temporibus
                  nesciunt, sed enim quo harum a id, alias maiores! Incidunt
                  iusto minus explicabo itaque iure recusandae
                </p>

                <ul className="mt-6 pl-5  space-y-2">
                  <li className="text-sm">
                    <span className="mr-1">
                      <i className="fas fa-angle-right"></i>
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis.
                  </li>
                  <li className="text-sm">
                    <span className="mr-1">
                      <i className="fas fa-angle-right"></i>
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis.
                  </li>
                  <li className="text-sm">
                    <span className="mr-1">
                      <i className="fas fa-angle-right"></i>
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis.
                  </li>
                  <li className="text-sm">
                    <span className="mr-1">
                      <i className="fas fa-angle-right"></i>
                    </span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perspiciatis.
                  </li>
                </ul>

                <p className="text-gray-500 text-sm mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis et sunt saepe accusamus eum ex sint est neque
                  provident tempore, minus laborum repudiandae vitae temporibus
                  nesciunt, sed enim quo harum a id, alias maiores! Incidunt
                  iusto minus explicabo itaque iure recusandae
                </p>

                <p className="text-gray-500 text-sm mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis et sunt saepe accusamus eum ex sint est neque
                  provident tempore, minus laborum repudiandae vitae temporibus
                  nesciunt, sed enim quo harum a id, alias maiores! Incidunt
                  iusto minus explicabo itaque iure recusandae
                </p>

                <div className="mt-5 pt-5 border-t border-gray-200 flex gap-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
                  >
                      <FontAwesomeIcon icon={faFacebookF} width={20} height={20}/>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
                  >
                    <FontAwesomeIcon icon={faTwitter} width={20} height={20}/>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
                  >
                    <FontAwesomeIcon icon={faInstagram} width={20} height={20}/>
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800"
                  >
                    <FontAwesomeIcon icon={faLinkedin} width={20} height={20}/>
                  </a>
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

            {/* for future when adding comments 
             <div className="p-4 bg-white rounded-sm shadow-sm mt-8">
              <h4 className="text-base uppercase  font-semibold mb-4 font-roboto">
                Post a comment
              </h4>
              <p className="text-sm text-gray-500 mb-4">12 comments</p>

              <div className="space-y-5">
                <div className="flex items-start border-b  pb-5 border-gray-200">
                  <div className="w-12 h-12 flex-shrink-0">
                    <img src="images/avatar.png" className="w-full" />
                  </div>
                  <div className="flex-grow pl-4">
                    <h4 className="text-base  font-roboto">Rasel Ahmed</h4>
                    <p className="text-xs text-gray-400">
                      9 Aprile 2021 at 12:34 AM
                    </p>
                    <p className="text-sm font-600 mt-2">
                      Great article. Thanks
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">
                        Reply
                      </button>
                      <button className="text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>                
              </div>

              <form action="#" className="mt-8">
                <h5 className="text-base  mb-1">Comment:</h5>
                <textarea
                  type="text"
                  className="w-full border border-gray-200 py-3 px-5 text-sm  rounded-sm h-20 focus:outline-none focus:border-gray-400"
                  placeholder="type your comment"
                ></textarea>
                <div className="mt-2">
                  <butotn
                    type="submit"
                    className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition"
                  >
                    Submit
                  </butotn>
                </div>
              </form>
            </div> */}
          </div>

          <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
            <SocialMedias />

            <LastPosts posts={posts.reverse()}/>
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

  const { data: frontmatter, content } = matter(markdownWithMeta);
  let date = new Date(frontmatter.date);
  date =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  frontmatter.date = date;

  return {
    props: {
      frontmatter,
      slug,
      content,
      posts,
    },
  };
}
