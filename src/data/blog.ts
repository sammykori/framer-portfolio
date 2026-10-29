import dayjs from "dayjs"

const postTypes = [
    "software engineering",
    "AI Governance",
    "Immigration",
    "Life",
] as const

type PostType = (typeof postTypes)[number]

type BlogPost = {
    slug: string
    title: string
    subtitle: string
    date: string
    type: PostType
    image: string
    readTime: number
}

const formatPostDate = (date: string) => dayjs(date).format("MMMM D, YYYY")

export { postTypes, formatPostDate }
export type { PostType, BlogPost }
