import Image from "next/image"
function PostTwoContent() {
    return (
        <section className="flex flex-col gap-10 px-4 text-lg md:text-2xl py-20">
            <h1 className="font-bold">INTRODUCTION</h1>
            <p>
                When I first started building React applications, I thought
                performance was mostly about things like useMemo, avoiding
                re-renders, and optimising components.
            </p>
            <p>Over time, I realised something uncomfortable:</p>
            <p>
                I was trying to optimise runtime performance without fully
                understanding when my code actually runs.
            </p>
            <p>
                In modern frontend applications (TypeScript, React, Next.js),
                your code doesn’t just “run”. It goes through multiple phases
                before a user ever sees anything.
            </p>

            <p>
                Understanding these phases completely changed how I think about
                performance.
            </p>

            <p>
                This article breaks them down simply, especially for developers
                early in their careers.
            </p>

            <hr className="w-full h-0.5 bg-gray-300"></hr>

            <h1 className="font-bold ">THE BIG PICTURE</h1>
            <div className="relative w-full aspect-video">
                <Image
                    src="/img/blog/post4.png"
                    alt="Compile Build Run Diagram"
                    fill
                    style={{
                        objectFit: "contain",
                        objectPosition: "center",
                    }}
                />
            </div>

            <p>A modern frontend app goes through four main phases:</p>
            <p>Transpile → Compile → Build → Run</p>
            <p>Each phase:</p>
            <ul className="list-disc ml-5 flex flex-col gap-2">
                <li>Happens at a different time</li>
                <li>Affects different people</li>
                <li>Has a different impact on performance</li>
            </ul>
            <p>Think of it like this:</p>
            <ul className="list-disc ml-5 flex flex-col gap-2">
                <li>
                    Transpile time → translating the code (Usually from
                    TypeScript to JavaScript with tools like Babel or SWC)
                </li>
                <li>
                    Compile time → checking the code (Typescript or ESLint
                    Checks)
                </li>
                <li>
                    Build time → bundling and optimising the code (Webpack,
                    Vite, etc.)
                </li>
                <li>Run time → executing the code in the browser</li>
            </ul>
            <p>
                Only one of these directly affects users, but the others decide
                how good that experience can be.
            </p>
            <hr className="w-full h-0.5 bg-gray-300"></hr>
            <h1 className="font-bold ">TAKEAWAY</h1>
            <p>
                The best frontend performance comes from moving work earlier in
                the pipeline.
            </p>
            <p>
                In other words: If something can be done at build time, don’t do
                it at runtime. If something can be caught at compile time, don’t
                let it reach users.
            </p>
            <p>This is why: Next.js, Static generation and CDNs exist</p>
            <p>
                Modern frameworks focus heavily on compile-time optimisations
                Once I understood these phases, I stopped blindly optimising
                React components and started asking a better question:
            </p>

            <p>When should this work actually happen?</p>
            <p>
                That question alone has made me a better frontend engineer. Hope
                this article was helpful to you 💙
            </p>
        </section>
    )
}

export default PostTwoContent
