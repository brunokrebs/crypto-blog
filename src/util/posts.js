import fs from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkSlug from "remark-slug";
import { formatDate } from "./dates";

const postsFiles = fs.readdirSync(`${process.cwd()}/src/posts/`);

const parsePostsJob = postsFiles
  .map(async (filename) => {
    const slug = filename.replace(".md", "");

    const mdFile = fs.readFileSync(
      `${process.cwd()}/src/posts/${filename}`,
      "utf-8"
    );
    matter.clearCache();
    const { data: frontmatter, content: markdownContent } = matter(mdFile);

    frontmatter.date = formatDate(frontmatter.date);

    const remarkContent = await remark()
      .use(remarkHtml)
      .use(remarkSlug)
      .process(markdownContent);
    const content = remarkContent.toString();

    return {
      slug,
      frontmatter,
      content,
    };
  })
  .reverse();

const posts = await Promise.all(parsePostsJob);

export function getPosts() {
  return posts;
}

export function getBySlug(slug) {
  return posts.find((post) => post.slug === slug);
}
