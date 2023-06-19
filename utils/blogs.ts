import path from "path";
import fs from 'fs';
import matter from "gray-matter";
import { Blog } from "@/models";

const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export async function getPostList(): Promise<Blog[]> {
    //read all markdown files

    const blogList: Blog[] = [];

    const fileNameList = fs.readdirSync(BLOG_FOLDER);

    for (const fileName of fileNameList) {
        const filePath = path.join(BLOG_FOLDER, fileName);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data, excerpt, content } = matter(fileContents, { excerpt_separator: "<!-- truncate-->" })
        blogList.push({
            id: fileName,
            slug: data.slug,
            title: data.title,
            author: {
                name: data.author,
                title: data.author_title,
                profileUrl: data.author_url,
                avatarUrl: data.author_image_url
            },
            tagList: data.tags,
            publishedDate: new Date(data.date).getTime(),
            description: excerpt || '',
            mdContent: content,
        })
    }

    return blogList;
}