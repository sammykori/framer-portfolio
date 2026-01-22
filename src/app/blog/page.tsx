'use client'
import BlogPostCard from '@/components/blog/BlogPostCard'
import { postTypes, blogPosts } from '@/data/blog'
import { useState } from 'react'

export default function Home() {
    const [active, setActive] = useState<string>('all')
    return (
        <div className="flex-1 grow items-center justify-center bg-white font-nixie pb-20">
            <main className="h-full  w-full bg-white px-4 md:px-20">
                <header className="w-full flex flex-col my-20 gap-2 justify-center items-center">
                    <h1 className="w-full lg:w-1/2 text-2xl lg:text-6xl font-bold text-center">
                        5-Minute Thoughts on Hard-Won Lessons, Life’s Journey,
                        and Creative Inspiration
                    </h1>
                    <p className="w-full lg:w-1/2 text-lg md:text-2xl text-center mt-2 md:mt-10">
                        {' '}
                        A personal blog/diary for my reflection and growth
                    </p>
                </header>
                <ul className="w-full flex flex-row justify-around items-center font-bold text-xl my-10 text-gray-400 overflow-x-auto">
                    <li
                        onClick={() => setActive('all')}
                        className="w-full min-w-20 flex items-center justify-center "
                    >
                        <h1
                            className={`${active === 'all' ? 'font-bold text-black  border-b-2 border-black' : ''}`}
                        >
                            ALL
                        </h1>
                    </li>
                    {postTypes.map((type) => (
                        <li
                            key={type}
                            onClick={() => setActive(type)}
                            className="w-full min-w-32 flex items-center justify-center"
                        >
                            <h1
                                className={`${active === type ? 'font-bold text-black border-b-2 border-black' : ''}`}
                            >
                                {type.toUpperCase()}
                            </h1>
                        </li>
                    ))}
                </ul>
                <section className="w-full grid grid-col-1 lg:grid-cols-3 gap-10">
                    {blogPosts.map((post, index) => (
                        <BlogPostCard key={index} post={post} />
                    ))}
                </section>
            </main>
        </div>
    )
}
