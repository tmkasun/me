import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { BlogPost } from "../types/blog";

const postsDirectory = join(process.cwd(), "/resources/blog/posts");

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
}
export function getPostBySlug(slug: string) {
    const postPath = slug.replace(/\-/g, " ");
    const fullPath = join(postsDirectory, postPath, "index.md");
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    const timeToRead = readingTime(content);
    if (!data.title || !data.date) {
        throw new Error(`Blog post "${slug}" does not have a title or date`);
    }
    const post: BlogPost = {
        content,
        date: data.date,
        title: data.title,
        timeToRead: timeToRead.text,
        slug: slug,
        excerpt: data.excerpt || "",
    };
    return post;
}

export function getAllPosts() {
    const paths = getPostSlugs();
    const posts = paths
        .map((postPath) => {
            const slug = postPath.replace(/ /g, "-");
            return getPostBySlug(slug);
        })
        // sort posts by date in descending order
        .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return posts;
}
