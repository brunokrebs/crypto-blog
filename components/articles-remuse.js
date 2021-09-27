function genderArticlesResume(posts) {
  return posts.map((post, idx) => {
    if (idx === 0 || idx > 4) return;
    return (
      <div className="rounded-sm bg-white p-4 pb-5 shadow-sm" key={idx}>
        <a href="#" className="block rounded-md overflow-hidden">
          <img
            src={post.frontmatter.banner}
            className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
          />
        </a>
        <div className="mt-3">
          <a href="#">
            <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
              {post.frontmatter.title}
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              {post.frontmatter.description}
            </p>
          </a>
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
    );
  });
}
export default function ArticlesResume({ posts }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
      {genderArticlesResume(posts)}
    </div>
  );
}