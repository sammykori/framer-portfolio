'use client'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { blogPosts } from '@/data/blog'
import { Icon } from '@iconify/react'
import Link from 'next/link'

function Home() {
    const params = useParams()
    const postId = params.id
    const post = blogPosts.find(
        (post) => post.id === parseInt(postId?.toString() || '')
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
                                objectFit: 'cover',
                                objectPosition: '10% -50%',
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
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    className="object-cover grayscale-100 hover:grayscale-60 transition-all"
                />
                <div className="absolute w-full h-full bg-linear-to-br from-black/80 via-black/50 to-transparent"></div>
            </section>
            <section className="flex flex-col gap-10 px-4 text-lg md:text-2xl py-20">
                <p>
                    There are moments in a creative journey that quietly mark a
                    turning point. You don’t always realise it at first—but
                    looking back, everything after feels slightly different.
                </p>
                <p>
                    There are moments in a creative journey that quietly mark a
                    turning point. You don’t always realise it at first—but
                    looking back, everything after feels slightly different.
                </p>
                <p>
                    For us, Re:Connect Conference 2025 was one of those moments.
                </p>
                <p>
                    This was new territory. And it mattered that we showed up
                    well.
                </p>

                <hr className="w-full h-0.5 bg-gray-300"></hr>

                <h1 className="font-bold ">
                    Before the Conference: Preparing to Go Live
                </h1>

                <p>Before the Conference: Preparing to Go Live</p>
                <p>
                    Once the confirmation came through, excitement quickly
                    turned into responsibility.
                </p>
                <p>
                    We didn’t just want to attend Re:Connect—we wanted to bring
                    the conference to people who couldn’t be there. That meant
                    one thing: going live.
                </p>
                <p>
                    Up until this point, our setup had been simple and familiar.
                    A controlled environment. A quiet room. Minimal variables.
                    But now we were talking about live streaming from a stadium,
                    with guests walking in and out, time constraints, noise,
                    pressure, and no second takes.
                </p>
                <p>To make it happen, we had to level up—fast.</p>
                <p>
                    We introduced new tools into our workflow, most notably OBS,
                    to handle live streaming directly to YouTube. There was a
                    learning curve, and more than a few “are we sure this will
                    work?” moments. Thankfully, with the help of Kevin and
                    Rachel, we were able to run test sessions, iron out issues,
                    and gain enough confidence to trust the setup.
                </p>
                <p>
                    We also decided to design and print custom t-shirts as
                    merchandise—something small, but symbolic. This wasn’t just
                    another episode. This was a milestone. And we wanted to mark
                    it properly.
                </p>
                <p>
                    It was our first opportunity of this scale, and we were
                    determined not to waste it.
                </p>

                <hr className="w-full h-0.5 bg-gray-300"></hr>

                <h1 className="font-bold ">
                    The Day Arrives: Setting Up at the Stadium
                </h1>
                <p>
                    We arrived early—earlier than necessary, but exactly when we
                    needed to.
                </p>
                <p>
                    Our podcast space was set inside one of the VIP boxes,
                    overlooking the pitch and the stands. The view alone was
                    enough to stop you in your tracks for a moment. But there
                    wasn’t much time to soak it in—we had work to do.
                </p>
                <p>
                    We began setting up immediately. Cameras, microphones,
                    lighting, streaming checks. There were challenges—as
                    expected—but nothing that stopped us. A few test recordings
                    later, everything was running smoothly. Then came the
                    waiting.
                </p>
                <p>
                    Rachel was tracking the keynote speaker, Kevlin Henney,
                    following his movement after his talk. Meanwhile, I was
                    doing what I always do before an interview—researching.
                    Reading about Kevlin’s journey, his philosophy, his work,
                    and the ideas he cares deeply about. We wanted the
                    conversation to feel thoughtful, not transactional.
                </p>
                <p>
                    When Kevlin finally walked into the room, his first reaction
                    said it all—surprise, curiosity, and genuine interest. A
                    full podcast setup at a conference wasn’t something he
                    expected.
                </p>
                <p>
                    We were already recording. All that was left to do was go
                    live.
                </p>
                <p>And we did.</p>

                <hr className="w-full h-0.5 bg-gray-300"></hr>

                <h1 className="font-bold ">Conversations That Matter</h1>
                <p>
                    The conversation with Kevlin was everything we hoped it
                    would be—calm, reflective, and deeply insightful. He spoke
                    openly about his journey, his evolution into a
                    multi-disciplined technologist, and the values that have
                    guided his career.
                </p>
                <p>
                    It didn’t feel rushed. It didn’t feel forced. It felt human.
                </p>
                <p>
                    The feedback that followed—from Kevlin himself and from the
                    organisers—was incredibly encouraging. It affirmed that we
                    weren’t just “doing a podcast at a conference,” but creating
                    a space where meaningful conversations could happen.
                </p>
                <p>
                    After that first recording, the momentum carried us forward.
                </p>
                <p>
                    We had the pleasure of sitting down with Marina Pellufo from
                    Prima, Jonathan from Equal IT, and several students from
                    Bournemouth University. The student conversations, in
                    particular, were refreshing—full of curiosity, honesty, and
                    ambition. It was a reminder of why spaces like Re:Connect
                    matter so much.
                </p>
                <p>
                    Each conversation felt different, yet connected by a shared
                    theme: people building, learning, and navigating technology
                    with purpose.
                </p>
                <hr className="w-full h-0.5 bg-gray-300"></hr>

                <h1 className="font-bold ">
                    Reflections: What Re:Connect Meant to Us
                </h1>
                <p>
                    By the end of the day, over 150 people had attended the
                    conference. Many stopped by our setup, asked questions,
                    shared encouragement, or simply observed. The feedback we
                    received—about the podcast, the conversations, and the
                    energy—meant more than we can properly put into words.
                </p>
                <p>
                    Re:Connect wasn’t just successful as an event. For us, it
                    was proof of growth.
                </p>
                <p>
                    It showed us that what started as an idea between two people
                    could evolve into something larger—something that belongs in
                    rooms like this. It pushed us outside our comfort zone and
                    reminded us that progress often begins the moment you say
                    yes to something that feels slightly terrifying.
                </p>
                <hr className="w-full h-0.5 bg-gray-300"></hr>

                <h1 className="font-bold ">Looking Ahead</h1>
                <p>
                    We left Re:Connect inspired, grateful, and hungry for more.
                </p>
                <p>
                    We hope to be back next year—stronger, more refined, and
                    ready to push boundaries even further. And who knows? Maybe
                    one day we won’t just attend conferences.
                </p>
                <p>Maybe we’ll host one.</p>
                <p>For now, we keep building. One conversation at a time.</p>
            </section>
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
                    <Link href="">
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
