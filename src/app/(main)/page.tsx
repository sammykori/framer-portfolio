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

    const text5p1Opacity = useTransform(scrollYProgress, [0.12, 0.17], [1, 0])
    const text5p1Rotate = useTransform(scrollYProgress, [0.12, 0.17], [0, 90])

    return (
        <div className="flex-1 grow items-center justify-center bg-white px-20 pb-20 font-nixie">
            <main className="h-full flex w-full bg-white ">
                <div className="w-full flex flex-col justify-between items-start">
                    <motion.ul
                        variants={staggerParent}
                        initial="hidden"
                        animate="visible"
                        className="text-9xl leading-40"
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
                        className="self-end "
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
                <div className="absolute h-full w-2/3 -right-[25%]">
                    <Image
                        src="/img/main_img.png"
                        alt="Hero Image"
                        fill
                        style={{
                            objectFit: "contain",
                            objectPosition: "center",
                        }}
                        className="object-contain"
                    />
                </div>
            </main>
        </div>
    )
}
