"use client"
import Image from "next/image"
import { useParams } from "next/navigation"
import { blogPosts } from "@/data/blog"
import { Icon } from "@iconify/react"
import Link from "next/link"
import Content from "@/components/blog/Content"

function Home() {
    const params = useParams()
    const postId = params.id
    const post = blogPosts.find(
        (post) => post.id === parseInt(postId?.toString() || "")
    )
    if (!post) {
        return <div>Post not found</div>
    }
    return (
        <div className="w-full max-w-3xl mx-auto font-nixie pb-20">
            <header className="flex flex-col px-4 md:py-10 gap-10">
                <div className="">
                    <h1 className="text-3xl md:text-4xl py-4">{post.title}</h1>
                    <h2 className="text-lg md:text-xl text-gray-600 pb-6">
                        {post.subtitle}
                    </h2>
                </div>
                <div className="w-full flex flex-row items-center gap-4 pb-10">
                    <div className="size-20 border rounded-full relative ">
                        <Image
                            src="/img/main_img.png"
                            alt="Sammy Kori"
                            fill
                            style={{
                                objectFit: "cover",
                                objectPosition: "10% -50%",
                            }}
                            className="rounded-full"
                        />
                    </div>
                    <div>
                        <h1 className="font-bold">Sammy Kori</h1>
                        <div className="text-gray-600">
                            {post.date} · {post.readTime} read
                        </div>
                    </div>
                </div>
            </header>
            <section className="w-full h-96 bg-gray-200 relative">
                <Image
                    src={post.imageUrl}
                    alt={post.title}
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    className="object-cover grayscale-100 hover:grayscale-60 transition-all"
                />
                <div className="absolute w-full h-full bg-linear-to-br from-black/80 via-black/50 to-transparent"></div>
            </section>
            <Content postId={post.id} />

            <section className="w-full bg-gray-100 flex flex-col items-center justify-center gap-4 px-4 py-10">
                <h1 className="font-bold text-2xl">
                    Enjoyed the Read? Share Your Thoughts!
                </h1>
                <p className="text-gray-600">
                    If you found value in this post, consider sharing it with
                    others or leaving a comment in my inbox. Your feedback fuels
                    our passion for creating meaningful content.
                </p>
                <div className="flex flex-row items-center gap-6 pt-4">
                    <Link href="mailto:sammykori72@gmail.com">
                        <Icon
                            icon="material-icon-theme:email"
                            className="text-2xl"
                        />
                    </Link>
                    <Link href="https://www.linkedin.com/in/samuelkori/">
                        <Icon
                            icon="skill-icons:linkedin"
                            className="text-2xl"
                        />
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default Home
