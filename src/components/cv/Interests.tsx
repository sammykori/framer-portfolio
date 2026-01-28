function Interests() {
    return (
        <section className="w-full flex flex-col mt-20">
            <h2 className="text-right text-2xl md:text-4xl float-right font-bold">
                Interests & Hobbies
            </h2>
            <div className="flex flex-col gap-10">
                <div className="flex-col flex gap-4">
                    <div className="text-xl md:text-2xl">
                        <h1 className="mt-4">
                            Aside solving complex problems through code, I have
                            a passion for creating{" "}
                            <span className="font-bold">video content</span>,{" "}
                            <span className="font-bold">photography</span>
                            and exploring the{" "}
                            <span className="font-bold">great outdoors</span>.
                            My athletic pursuits include playing{" "}
                            <span className="font-bold">5-a-side football</span>{" "}
                            and <span className="font-bold">8 ball pool</span>.
                            These interests not only provide a creative outlet
                            but also inspire my work as a developer.
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Interests
