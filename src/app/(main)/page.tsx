"use client"
import { motion, useScroll, useTransform } from "motion/react"
import { staggerParent, staggerChildX, slideUp } from "@/motion"
import FlippingText from "@/components/home/FlippingText"
import Image from "next/image"

export default function Home() {
    const { scrollYProgress } = useScroll()
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

    const imageOpacity = useTransform(scrollYProgress, [0.05, 0.16], [0, 1])
    const imageRotate = useTransform(scrollYProgress, [0.12, 0.17], [0, 90])

    const contentX = useTransform(
        scrollYProgress,
        [0, 0.18, 0.3, 1],
        ["0%", "0%", "-50%", "-50%"]
    )

    return (
        <div className="flex-1 grow items-center justify-center bg-white font-nixie">
            <main className="h-full flex w-full bg-white ">
                <motion.section
                    style={{ x: contentX }}
                    className="h-full w-[200vw] flex px-20"
                >
                    <div className="w-[60vw] flex flex-col justify-between items-start">
                        <motion.ul
                            variants={staggerParent}
                            initial="hidden"
                            animate="visible"
                            className="text-8xl 2xl:text-9xl leading-30 2xl:leading-40"
                        >
                            <motion.li
                                variants={staggerChildX}
                                className="h-40 relative"
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
                                    ALLOW ME TO
                                </FlippingText>
                            </motion.li>

                            <motion.li
                                variants={staggerChildX}
                                className="h-40 relative"
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
                                    INTRODUCE
                                </FlippingText>
                            </motion.li>
                            <motion.li
                                variants={staggerChildX}
                                className="h-40 relative"
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
                                    MYSELF
                                </FlippingText>
                            </motion.li>
                            <motion.li
                                variants={staggerChildX}
                                className="h-40 relative"
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
                                    I&apos;M SAMMY KORI
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
                                className="text-4xl"
                            >
                                - LEONARDO DA VINCI
                            </motion.h1>
                        </motion.div>
                    </div>
                    <motion.div
                        style={{ opacity: imageOpacity }}
                        className="relative h-full w-[80vw]"
                    >
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
                    <div className="w-[60vw] flex flex-col justify-start items-start">
                        <motion.ul
                            variants={staggerParent}
                            initial="hidden"
                            animate="visible"
                            className="w-full flex flex-col text-8xl 2xl:text-9xl leading-30 2xl:leading-40"
                        >
                            <motion.li
                                variants={staggerChildX}
                                className="h-40 relative flex justify-end"
                            >
                                <FlippingText
                                    textOpacity={text1d1Opacity}
                                    textRotate={text1d1Rotate}
                                >
                                    I AM A
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text1d2Opacity}
                                    textRotate={text1d2Rotate}
                                >
                                    I LIKE TO
                                </FlippingText>
                            </motion.li>

                            <motion.li
                                variants={staggerChildX}
                                className="h-40 relative flex justify-end"
                            >
                                <FlippingText
                                    textOpacity={text2d1Opacity}
                                    textRotate={text2d1Rotate}
                                >
                                    FRONTEND-FIRST
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text2d2Opacity}
                                    textRotate={text2d2Rotate}
                                >
                                    PLAY 5-A-SIDE
                                </FlippingText>
                            </motion.li>
                            <motion.li
                                variants={staggerChildX}
                                className="h-40 relative flex justify-end"
                            >
                                <FlippingText
                                    textOpacity={text3d1Opacity}
                                    textRotate={text3d1Rotate}
                                >
                                    PRODUCT
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text3d2Opacity}
                                    textRotate={text3d2Rotate}
                                >
                                    ⚽️ FOOTBALL &
                                </FlippingText>
                            </motion.li>
                            <motion.li
                                variants={staggerChildX}
                                className="h-40 relative flex justify-end"
                            >
                                <FlippingText
                                    textOpacity={text4d1Opacity}
                                    textRotate={text4d1Rotate}
                                >
                                    ENGINEER.
                                </FlippingText>
                                <FlippingText
                                    textOpacity={text4d2Opacity}
                                    textRotate={text4d2Rotate}
                                >
                                    🎱 POOL.
                                </FlippingText>
                            </motion.li>
                        </motion.ul>
                    </div>
                </motion.section>
            </main>
        </div>
    )
}
