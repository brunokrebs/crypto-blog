export default function BigArticle({ post }) {
  return (
    <div className="rounded-sm overflow-hidden bg-white shadow-sm">
      <a href={`/blog/${post.slug}`} className="block rounded-md overflow-hidden">
        <img
          src={post.frontmatter.banner}
          className="w-full h-96 object-cover transform hover:scale-110 transition duration-500"
        />
      </a>
      <div className="p-4 pb-5">
        <a href={`/blog/${post.slug}`}>
          <h2 className="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
            {post.frontmatter.title}
          </h2>
        </a>

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
  );
}
