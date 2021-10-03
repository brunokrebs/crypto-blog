import fs from "fs";
import path from "path";
import matter from "gray-matter";

export function getLatestPosts() {
  const files = fs.readdirSync(path.join("posts"));
  return files.map((filename) => {
    const slug = filename.replace(".md", "");

    const mdFile = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(mdFile);

    frontmatter.date = new Date(frontmatter.date).toString();

    return {
      slug,
      frontmatter,
    };
  });
}
