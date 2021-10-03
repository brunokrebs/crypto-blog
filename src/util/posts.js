import fs from "fs";
import matter from "gray-matter";
import { formatDate } from "./dates";

export function getLatestPosts() {
  const files = fs.readdirSync(`${process.cwd()}/src/posts/`);
  return files.map((filename) => {
    const slug = filename.replace(".md", "");

    const mdFile = fs.readFileSync(
      `${process.cwd()}/src/posts/${filename}`,
      "utf-8"
    );
    matter.clearCache();
    const { data: frontmatter } = matter(mdFile);

    frontmatter.date = formatDate(frontmatter.date);

    return {
      slug,
      frontmatter,
    };
  });
}
