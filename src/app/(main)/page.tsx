"use client"
import {
    motion,
    transform,
    useMotionValue,
    useScroll,
    useTransform,
} from "motion/react"
import { staggerParent, staggerChildX, slideUp } from "@/motion"
import { useEffect, useRef } from "react"
import FlippingText from "@/components/home/FlippingText"
import Image from "next/image"
import Link from "next/dist/client/link"

export default function Home() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    })
    const text1p1Opacity = useTransform(scrollYProgress, [0, 0.04], [1, 0])
    const text1p2Opacity = useTransform(scrollYProgress, [0, 0.04], [0, 1])
    const text1p1Rotate = useTransform(scrollYProgress, [0, 0.04], [0, 90])
    const text1p2Rotate = useTransform(scrollYProgress, [0, 0.04], [90, 0])

    const text2p1Opacity = useTransform(scrollYProgress, [0.03, 0.08], [1, 0])
    const text2p2Opacity = useTransform(scrollYProgress, [0.03, 0.08], [0, 1])
    const text2p1Rotate = useTransform(scrollYProgress, [0.03, 0.08], [0, 90])
    const text2p2Rotate = useTransform(scrollYProgress, [0.03, 0.08], [90, 0])

    const text3p1Opacity = useTransform(scrollYProgress, [0.07, 0.12], [1, 0])
    const text3p2Opacity = useTransform(scrollYProgress, [0.07, 0.12], [0, 1])
    const text3p1Rotate = useTransform(scrollYProgress, [0.07, 0.12], [0, 90])
    const text3p2Rotate = useTransform(scrollYProgress, [0.07, 0.12], [90, 0])

    const text4p1Opacity = useTransform(scrollYProgress, [0.11, 0.16], [1, 0])
    const text4p2Opacity = useTransform(scrollYProgress, [0.11, 0.16], [0, 1])
    const text4p1Rotate = useTransform(scrollYProgress, [0.11, 0.16], [0, 90])
    const text4p2Rotate = useTransform(scrollYProgress, [0.11, 0.16], [90, 0])

    const text1d1Opacity = useTransform(scrollYProgress, [0.3, 0.34], [1, 0])
    const text1d2Opacity = useTransform(scrollYProgress, [0.3, 0.34], [0, 1])
    const text1d1Rotate = useTransform(scrollYProgress, [0.3, 0.34], [0, 90])
    const text1d2Rotate = useTransform(scrollYProgress, [0.3, 0.34], [90, 0])

    const text2d1Opacity = useTransform(scrollYProgress, [0.33, 0.38], [1, 0])
    const text2d2Opacity = useTransform(scrollYProgress, [0.33, 0.38], [0, 1])
    const text2d1Rotate = useTransform(scrollYProgress, [0.33, 0.38], [0, 90])
    const text2d2Rotate = useTransform(scrollYProgress, [0.33, 0.38], [90, 0])

    const text3d1Opacity = useTransform(scrollYProgress, [0.37, 0.42], [1, 0])
    const text3d2Opacity = useTransform(scrollYProgress, [0.37, 0.42], [0, 1])
    const text3d1Rotate = useTransform(scrollYProgress, [0.37, 0.42], [0, 90])
    const text3d2Rotate = useTransform(scrollYProgress, [0.37, 0.42], [90, 0])

    const text4d1Opacity = useTransform(scrollYProgress, [0.41, 0.46], [1, 0])
    const text4d2Opacity = useTransform(scrollYProgress, [0.41, 0.46], [0, 1])
    const text4d1Rotate = useTransform(scrollYProgress, [0.41, 0.46], [0, 90])
    const text4d2Rotate = useTransform(scrollYProgress, [0.41, 0.46], [90, 0])

    const text5p1Opacity = useTransform(scrollYProgress, [0.12, 0.17], [1, 0])
    const text5p1Rotate = useTransform(scrollYProgress, [0.12, 0.17], [0, 90])

    const text6p1Opacity = useTransform(scrollYProgress, [0.96, 1], [0, 1])
    const text6p1Rotate = useTransform(scrollYProgress, [0.96, 1], [0, 90])

    const imageOpacity = useTransform(scrollYProgress, [0.05, 0.16], [0, 1])
    const imageRotate = useTransform(scrollYProgress, [0.12, 0.17], [0, 90])

    // How far the strip must travel so its right edge meets the viewport's
    // right edge. Measured rather than hardcoded so it works at any width.
    const trackRef = useRef<HTMLElement>(null)
    const scrollDistance = useMotionValue(0)
    useEffect(() => {
        const track = trackRef.current
        if (!track) return
        const measure = () =>
            scrollDistance.set(
                Math.max(0, track.scrollWidth - window.innerWidth)
            )
        measure()
        const observer = new ResizeObserver(measure)
        observer.observe(track)
        window.addEventListener("resize", measure)
        return () => {
            observer.disconnect()
            window.removeEventListener("resize", measure)
        }
    }, [scrollDistance])

    const contentX = useTransform(
        [scrollYProgress, scrollDistance],
        ([progress, distance]: number[]) =>
            transform(
                progress,
                [0, 0.18, 0.3, 0.47],
                [0, 0, -distance, -distance]
            )
    )

    return (
        <div className="relative overflow-x-clip">
            <main
                ref={containerRef}
                className="relative h-[300vh] bg-orange-100 font-nixie"
            >
                <motion.section
                    ref={trackRef}
                    style={{ x: contentX }}
                    className="sticky top-28 h-[calc(100svh-112px)] w-max flex px-4 md:px-20"
                >
                    <div className="w-[80vw] md:w-[60vw] shrink-0 flex flex-col justify-between items-start relative">
                        <motion.ul
                            variants={staggerParent}
                            initial="hidden"
                            animate="visible"
                            className="text-4xl md:text-8xl 2xl:text-9xl leading-10 md:leading-30 2xl:leading-40"
                        >
                            <motion.li
                                variants={staggerChildX}
                                className="h-20 md:h-40 relative"
                            >
                                <FlippingText
                                    textOpacity={text1p1Opacity}
                                    textRotate={text1p1Rotate}
                                >
                                    SIMPLICITY
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text1p2Opacity}
                                    textRotate={text1p2Rotate}
                                >
                                    I&apos;m{" "}
                                    <span className="text-orange-600">
                                        Sammy Kori
                                    </span>
                                    ,
                                </FlippingText>
                            </motion.li>

                            <motion.li
                                variants={staggerChildX}
                                className="h-20 md:h-40 relative"
                            >
                                <FlippingText
                                    textOpacity={text2p1Opacity}
                                    textRotate={text2p1Rotate}
                                >
                                    IS THE
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text2p2Opacity}
                                    textRotate={text2p2Rotate}
                                >
                                    A full stack developer
                                </FlippingText>
                            </motion.li>
                            <motion.li
                                variants={staggerChildX}
                                className="h-20 md:h-40 relative"
                            >
                                <FlippingText
                                    textOpacity={text3p1Opacity}
                                    textRotate={text3p1Rotate}
                                >
                                    ULTIMATE
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text3p2Opacity}
                                    textRotate={text3p2Rotate}
                                >
                                    and responsible
                                </FlippingText>
                            </motion.li>
                            <motion.li
                                variants={staggerChildX}
                                className="h-20 md:h-40 relative"
                            >
                                <FlippingText
                                    textOpacity={text4p1Opacity}
                                    textRotate={text4p1Rotate}
                                >
                                    SOPHISTICATION
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text4p2Opacity}
                                    textRotate={text4p2Rotate}
                                >
                                    AI advocate.
                                </FlippingText>
                            </motion.li>
                        </motion.ul>
                        <motion.div
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                            className="self-end absolute bottom-10 right-10"
                        >
                            <motion.h1
                                style={{
                                    opacity: text5p1Opacity,
                                    rotateX: text5p1Rotate,
                                    transformOrigin: "top",
                                }}
                                className="text-2xl md:text-4xl whitespace-nowrap"
                            >
                                - LEONARDO DA VINCI
                            </motion.h1>
                        </motion.div>
                    </div>
                    <motion.div className="relative h-full w-screen md:w-[80vw] shrink-0">
                        <Image
                            src="/img/main_img.png"
                            alt="Hero Image"
                            fill
                            style={{
                                objectFit: "contain",
                                objectPosition: "bottom",
                            }}
                            className="object-contain"
                        />
                    </motion.div>
                    <div className="w-[80vw] md:w-[60vw] shrink-0 flex flex-col justify-start items-start">
                        <motion.ul
                            variants={staggerParent}
                            initial="hidden"
                            animate="visible"
                            className="w-full flex flex-col text-4xl md:text-8xl 2xl:text-9xl leading-10 md:leading-30 2xl:leading-40"
                        >
                            <motion.li
                                variants={staggerChildX}
                                className="h-20 md:h-40 relative flex justify-end"
                            >
                                <FlippingText
                                    textOpacity={text1d1Opacity}
                                    textRotate={text1d1Rotate}
                                >
                                    I help organisations
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text1d2Opacity}
                                    textRotate={text1d2Rotate}
                                >
                                    On the fun side,
                                </FlippingText>
                            </motion.li>

                            <motion.li
                                variants={staggerChildX}
                                className="h-20 md:h-40 relative flex justify-end"
                            >
                                <FlippingText
                                    textOpacity={text2d1Opacity}
                                    textRotate={text2d1Rotate}
                                >
                                    govern AI so
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text2d2Opacity}
                                    textRotate={text2d2Rotate}
                                >
                                    I play 5-A-SIDE
                                </FlippingText>
                            </motion.li>
                            <motion.li
                                variants={staggerChildX}
                                className="h-20 md:h-40 relative flex justify-end"
                            >
                                <FlippingText
                                    textOpacity={text3d1Opacity}
                                    textRotate={text3d1Rotate}
                                >
                                    it&apos;s fair, transparent
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text3d2Opacity}
                                    textRotate={text3d2Rotate}
                                >
                                    <a
                                        href="bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30%"
                                        target="_blank"
                                        className="underline underline-offset-6"
                                    >
                                        football
                                    </a>{" "}
                                    <span className="inline-block cursor-pointer hover:animate-bounce">
                                        ⚽️
                                    </span>{" "}
                                    and
                                </FlippingText>
                            </motion.li>
                            <motion.li
                                variants={staggerChildX}
                                className="h-20 md:h-40 relative flex justify-end"
                            >
                                <FlippingText
                                    textOpacity={text4d1Opacity}
                                    textRotate={text4d1Rotate}
                                >
                                    and accountable.
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text4d2Opacity}
                                    textRotate={text4d2Rotate}
                                >
                                    8 ball pool{" "}
                                    <span className="inline-block cursor-pointer hover:animate-spin">
                                        🎱
                                    </span>
                                    .
                                </FlippingText>
                            </motion.li>
                        </motion.ul>
                    </div>
                </motion.section>
                <motion.section className="absolute bottom-0 h-[100vh] w-[100vw] bg-linear-to-b from-transparent from-10% via-orange-100 to-orange-200">
                    <motion.ul
                        variants={staggerParent}
                        initial="hidden"
                        animate="visible"
                        className="w-full md:w-2/3 ml-auto flex flex-col text-xl md:text-2xl py-40 text-left px-20 gap-4"
                    >
                        <motion.li
                            variants={staggerChildX}
                            className="relative flex justify-end"
                        >
                            <motion.p
                                style={{
                                    opacity: text6p1Opacity,
                                }}
                            >
                                By day, I&apos;m at{" "}
                                <a
                                    href="https://earthstormmedia.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    Earthstorm Media
                                </a>
                                , building digital solutions that help UK
                                businesses grow.
                            </motion.p>
                        </motion.li>
                        <motion.li
                            variants={staggerChildX}
                            className="relative flex justify-end"
                        >
                            <motion.p
                                style={{
                                    opacity: text6p1Opacity,
                                }}
                            >
                                By night, I&apos;m building{" "}
                                <a
                                    href="https://borderless.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    Borderless
                                </a>
                                , an immigration guidance app that helps
                                newcomers find clear information and feel at
                                home faster.
                            </motion.p>
                        </motion.li>
                        <motion.li
                            variants={staggerChildX}
                            className="relative flex justify-end"
                        >
                            <motion.p
                                style={{
                                    opacity: text6p1Opacity,
                                }}
                            >
                                In between, I{" "}
                                <Link
                                    href="/blog"
                                    className="underline underline-offset-4"
                                >
                                    write
                                </Link>{" "}
                                about how AI governance and responsible AI are
                                changing around the world, plus the tools and
                                skills I pick up along the way.
                            </motion.p>
                        </motion.li>
                        <motion.li
                            variants={staggerChildX}
                            className="relative flex flex-col gap-2 justify-end"
                        >
                            <motion.h1
                                style={{
                                    opacity: text6p1Opacity,
                                }}
                            >
                                {" "}
                                Lets Connect
                            </motion.h1>

                            <motion.p
                                style={{
                                    opacity: text6p1Opacity,
                                }}
                            >
                                Let&apos;s build something thoughtful together.
                                Find me on{" "}
                                <a
                                    href="https://www.linkedin.com/in/samuelkori/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    LinkedIn
                                </a>
                                , see what I&apos;m shipping on{" "}
                                <a
                                    href="https://github.com/sammykori"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4"
                                >
                                    GitHub
                                </a>
                                , or just{" "}
                                <a
                                    href="mailto:your.email@example.com"
                                    className="underline underline-offset-4"
                                >
                                    say hello
                                </a>{" "}
                                by email.
                            </motion.p>
                        </motion.li>
                    </motion.ul>
                </motion.section>
            </main>
        </div>
    )
}
