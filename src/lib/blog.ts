import fs from "node:fs"
import path from "node:path"
import dayjs from "dayjs"
import matter from "gray-matter"
import { postTypes, type BlogPost, type PostType } from "@/data/blog"

const POSTS_DIR = path.join(process.cwd(), "content/blog")
const WORDS_PER_MINUTE = 200

const readPost = (file: string): { post: BlogPost; content: string } => {
    const { data, content } = matter(
        fs.readFileSync(path.join(POSTS_DIR, file), "utf8")
    )

    if (!postTypes.includes(data.type)) {
        throw new Error(
            `content/blog/${file}: type must be one of ${postTypes.join(", ")}`
        )
    }

    const words = content.trim().split(/\s+/).length

    return {
        post: {
            slug: file.replace(/\.md$/, ""),
            title: data.title,
            subtitle: data.subtitle,
            // gray-matter parses YAML dates into Date objects
            date: dayjs(data.date).format("YYYY-MM-DD"),
            type: data.type as PostType,
            image: data.image,
            readTime: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
        },
        content,
    }
}

const getAllPosts = (): BlogPost[] =>
    fs
        .readdirSync(POSTS_DIR)
        .filter((file) => file.endsWith(".md") && file !== "README.md")
        .map((file) => readPost(file).post)
        .sort((a, b) => dayjs(b.date).diff(dayjs(a.date)))

const getPost = (slug: string) => {
    const file = `${slug}.md`
    if (!getAllPosts().some((post) => post.slug === slug)) return undefined
    const { post, content } = readPost(file)
    return { ...post, content }
}

export { getAllPosts, getPost }
