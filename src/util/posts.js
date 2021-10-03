import fs from "fs";
import matter from "gray-matter";

export function getLatestPosts() {
  const files = fs.readdirSync(`${process.cwd()}/src/posts/`);
  return files.map((filename) => {
    const slug = filename.replace(".md", "");

    const mdFile = fs.readFileSync(
      `${process.cwd()}/src/posts/${filename}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(mdFile);

    frontmatter.date = new Date(frontmatter.date).toString();

    return {
      slug,
      frontmatter,
    };
  });
}
