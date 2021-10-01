import format from "date-fns/format";
import Link from "next/link";

function renderLastPosts(posts) {
  return posts.map((post, idx) => {
    if (idx > 4) return;

    return (
      <Link href={`/blog/${post.slug}`} key={idx}>
        <a className="flex group">
          <div className="flex-shrink-0">
            <img
              src={post.frontmatter.banner}
              className="h-14 w-20 lg:w-14 xl:w-20 rounded object-cover"
            />
          </div>
          <div className="flex-grow pl-3">
            <h5 className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
              {post.frontmatter.title}
            </h5>
            <div className="flex text-gray-400 text-sm items-center">
              <span className="mr-1 text-xs">
                <i className="far fa-clock"></i>
              </span>
              {format(new Date(post.frontmatter.date),'dd/MM/yyyy')}
            </div>
          </div>
        </a>
      </Link>
    );
  });
}

export default function LastPosts({ posts = [] }) {
  return (
    <div className="w-full mt-8 bg-white shadow-sm rounded-sm p-4 ">
      <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">
        Últimos Artigos
      </h3>
      <div className="space-y-4">{renderLastPosts(posts)}</div>
    </div>
  );
}
