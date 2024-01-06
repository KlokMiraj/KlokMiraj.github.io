import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "/content/_posts/blog");

export default function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);

    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const {content,data} = matter(fileContents);
        console.log(data);
        // Find the excerpt delimiter and extract content before it
        const excerptEnd = content?.indexOf('<!-- more -->');
        const excerpt = excerptEnd !== -1 ? content.slice(0, excerptEnd) : content;


        return {
            id,
            excerpt,
            ...data,
        };
    });

    return allPostsData;
}
